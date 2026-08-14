<script setup lang="ts">
import * as THREE from "three";
import { gsap } from "gsap";
import { virtualDancehallTimeline as frames } from "~/data/virtual-dancehall";

const canvasEl = ref<HTMLCanvasElement | null>(null);
const rootEl = ref<HTMLElement | null>(null);

const activeIndex = ref(0);
const isOpen = ref(false);
const activeFrame = computed(() => frames[activeIndex.value]);

const SPACING = 9;
const totalDepth = (frames.length - 1) * SPACING;

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let raycaster: THREE.Raycaster | null = null;
let meshes: THREE.Mesh[] = [];
let rafId = 0;
let disposed = false;

const pointer = { x: 0, y: 0 };
const camDrift = { z: 0, targetZ: 0 };
let autoDrift = true;
let lastInteraction = 0;

function buildScene() {
  if (!canvasEl.value || !rootEl.value) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0b0d);
  scene.fog = new THREE.Fog(0x0b0b0d, 4, SPACING * 4.5);

  const width = rootEl.value.clientWidth || window.innerWidth;
  const height = rootEl.value.clientHeight || window.innerHeight;

  camera = new THREE.PerspectiveCamera(58, width / height, 0.1, 100);
  camera.position.set(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ canvas: canvasEl.value, antialias: true, alpha: false });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  raycaster = new THREE.Raycaster();

  const loader = new THREE.TextureLoader();
  const planeW = 4.6;
  const planeH = 3.1;

  frames.forEach((frame, i) => {
    const geometry = new THREE.PlaneGeometry(planeW, planeH);
    const material = new THREE.MeshBasicMaterial({ color: 0x1a1a1c });
    const mesh = new THREE.Mesh(geometry, material);

    const side = i % 2 === 0 ? -1 : 1;
    mesh.position.set(side * 2.1, Math.sin(i * 1.3) * 0.4, -i * SPACING);
    mesh.rotation.y = side * -0.22;
    mesh.userData.index = i;
    mesh.userData.baseX = mesh.position.x;
    mesh.userData.baseY = mesh.position.y;

    scene!.add(mesh);
    meshes.push(mesh);

    loader.load(frame.image, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      material.map = tex;
      material.color.set(0xffffff);
      material.needsUpdate = true;
    });
  });
}

function onResize() {
  if (!renderer || !camera || !rootEl.value) return;
  const width = rootEl.value.clientWidth;
  const height = rootEl.value.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function onPointerMove(e: PointerEvent) {
  if (!rootEl.value) return;
  const rect = rootEl.value.getBoundingClientRect();
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
}

function onWheel(e: WheelEvent) {
  if (isOpen.value) return;
  e.preventDefault();
  autoDrift = false;
  lastInteraction = performance.now();
  camDrift.targetZ = clampZ(camDrift.targetZ - e.deltaY * 0.02);
}

function clampZ(z: number) {
  return Math.min(0, Math.max(-totalDepth - 3, z));
}

function onClick(e: MouseEvent) {
  if (!camera || !raycaster || !rootEl.value) return;
  if (isOpen.value) {
    closeFrame();
    return;
  }
  const rect = rootEl.value.getBoundingClientRect();
  const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(new THREE.Vector2(nx, ny), camera);
  const hits = raycaster.intersectObjects(meshes);
  if (hits.length > 0) {
    const mesh = hits[0].object as THREE.Mesh;
    openFrame(mesh.userData.index as number);
  }
}

function openFrame(i: number) {
  if (!camera) return;
  activeIndex.value = i;
  isOpen.value = true;
  autoDrift = false;
  const mesh = meshes[i];
  const targetZ = mesh.position.z + 2.6;
  camDrift.targetZ = targetZ;
  gsap.to(camera.position, {
    x: mesh.position.x * 0.35,
    y: mesh.position.y * 0.35,
    z: targetZ,
    duration: 1.1,
    ease: "power3.out",
  });
  camDrift.z = camera.position.z;
}

function closeFrame() {
  isOpen.value = false;
  lastInteraction = performance.now();
  camDrift.targetZ = camDrift.z;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && isOpen.value) closeFrame();
}

function animate() {
  if (disposed || !renderer || !scene || !camera) return;
  rafId = requestAnimationFrame(animate);

  const now = performance.now();
  if (!isOpen.value) {
    if (autoDrift || now - lastInteraction > 2200) {
      autoDrift = true;
      camDrift.targetZ = clampZ(camDrift.targetZ - 0.012);
    }
    camDrift.z += (camDrift.targetZ - camDrift.z) * 0.06;
    camera.position.z = camDrift.z;
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.35 - camera.position.y) * 0.04;
    camera.lookAt(camera.position.x * 0.5, camera.position.y * 0.5, camera.position.z - 10);

    const nearest = Math.min(frames.length - 1, Math.max(0, Math.round(-camDrift.z / SPACING)));
    if (nearest !== activeIndex.value) activeIndex.value = nearest;
  } else {
    const mesh = meshes[activeIndex.value];
    camera.lookAt(mesh.position.x, mesh.position.y, mesh.position.z);
  }

  meshes.forEach((m) => {
    const d = Math.abs(m.position.z - camera!.position.z);
    const s = THREE.MathUtils.clamp(1 - d / (SPACING * 5), 0.55, 1);
    (m.material as THREE.MeshBasicMaterial).opacity = s;
    (m.material as THREE.MeshBasicMaterial).transparent = true;
  });

  renderer.render(scene, camera);
}

let resizeObserver: ResizeObserver | null = null;

onMounted(async () => {
  await nextTick();
  buildScene();
  animate();
  onResize();
  window.addEventListener("resize", onResize);
  window.addEventListener("keydown", onKeydown);
  rootEl.value?.addEventListener("pointermove", onPointerMove);
  rootEl.value?.addEventListener("wheel", onWheel, { passive: false });
  rootEl.value?.addEventListener("click", onClick);

  if (rootEl.value && "ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(() => onResize());
    resizeObserver.observe(rootEl.value);
  }
});

onUnmounted(() => {
  disposed = true;
  cancelAnimationFrame(rafId);
  window.removeEventListener("resize", onResize);
  window.removeEventListener("keydown", onKeydown);
  rootEl.value?.removeEventListener("pointermove", onPointerMove);
  rootEl.value?.removeEventListener("wheel", onWheel);
  rootEl.value?.removeEventListener("click", onClick);
  resizeObserver?.disconnect();

  meshes.forEach((m) => {
    m.geometry.dispose();
    const mat = m.material as THREE.MeshBasicMaterial;
    mat.map?.dispose();
    mat.dispose();
  });
  meshes = [];
  renderer?.dispose();
});
</script>

<template>
  <div ref="rootEl" class="relative h-screen w-full overflow-hidden bg-noir">
    <canvas ref="canvasEl" class="absolute inset-0 h-full w-full cursor-pointer" />

    <div class="vd-vignette pointer-events-none absolute inset-0" />

    <div class="pointer-events-none absolute left-6 top-24 text-paper/70 sm:left-10 sm:top-28">
      <p class="label">VD&mdash;2026 / VIRTUAL_DANCEHALL</p>
    </div>

    <div class="pointer-events-none absolute right-6 top-24 text-right text-paper/50 sm:right-10 sm:top-28">
      <p class="label">DANCEHALL MUSEUM ARCHIVE</p>
      <p class="label mt-1 text-paper/35">TIMELINE CORRIDOR</p>
      <p class="label mt-1 text-paper/35">VOL. 01 &middot; ROOTS TO NOW</p>
    </div>

    <div class="pointer-events-none absolute bottom-24 left-6 text-paper/70 sm:bottom-28 sm:left-10">
      <p class="label">
        FRAME <span class="text-paper">{{ String(activeIndex + 1).padStart(2, "0") }}</span>
        / {{ String(frames.length).padStart(2, "0") }}
      </p>
      <p class="label mt-2 text-paper/40">CLICK TO OPEN &middot; SCROLL TO MOVE &middot; ESC TO RETURN</p>
    </div>

    <Transition name="vd-card">
      <div v-if="!isOpen" class="pointer-events-none absolute inset-x-0 bottom-40 flex justify-center px-6 sm:bottom-44">
        <div class="rounded-full border border-paper/15 bg-noir/70 px-6 py-2.5 text-center backdrop-blur-sm">
          <p class="label text-brass-bright">{{ activeFrame.era }}</p>
          <p class="mt-0.5 font-display text-lg leading-tight text-paper sm:text-xl">{{ activeFrame.title }}</p>
        </div>
      </div>
    </Transition>

    <Transition name="vd-card">
      <div v-if="isOpen" class="absolute inset-x-0 bottom-0 flex justify-center px-6 pb-24 sm:pb-16">
        <div class="pointer-events-none max-w-md text-center text-paper">
          <p class="label text-brass-bright">{{ activeFrame.era }}</p>
          <h3 class="mt-3 font-display text-3xl leading-tight sm:text-4xl">{{ activeFrame.title }}</h3>
          <p class="mt-4 text-sm leading-relaxed text-paper/75">{{ activeFrame.caption }}</p>
          <p class="label mt-6 text-paper/40">ESC OR CLICK TO RETURN TO THE CORRIDOR</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.vd-vignette {
  background: radial-gradient(ellipse at center, transparent 35%, rgba(0, 0, 0, 0.75) 100%);
}
.vd-card-enter-active,
.vd-card-leave-active {
  transition: opacity 0.4s ease;
}
.vd-card-enter-from,
.vd-card-leave-to {
  opacity: 0;
}
</style>
