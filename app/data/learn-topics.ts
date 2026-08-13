export type LearnTopic = {
  slug: string;
  title: string;
  dek: string;
  body: string[];
  keywords: string[];
};

export const learnTopics: LearnTopic[] = [
  {
    slug: "sound-system-culture",
    title: "Sound System Culture",
    dek: "The mobile speaker stacks, selectors, and dubplates that built dancehall from the ground up.",
    body: [
      "Before dancehall was a genre, it was a piece of equipment — the sound system. Starting in the 1950s, Jamaican entrepreneurs assembled mobile rigs of speaker boxes and amplifiers to play records for public audiences in yards, streets, and dance halls. A sound system was never just speakers: it was a full institution built from selectors (who choose the records), operators, deejays, dubplates (one-off exclusive recordings cut specifically for a sound), and a loyal audience who followed a system the way fans follow a team.",
      "Pioneering systems like Sir Coxsone's Downbeat, Duke Reid's Trojan, and later King Tubby's Home Town Hi-Fi turned playing records into a competitive art form. Sound clashes — head-to-head battles where rival systems try to out-tune, out-volume, and out-select one another — became (and remain) one of the culture's central rituals, rewarding not just musical taste but showmanship, crowd reading, and access to exclusive dubs.",
      "Sound system culture is where dub, remix practice, and the entire idea of the producer-as-artist were born, decades before those ideas reached hip-hop and electronic music elsewhere in the world. It's also where dancehall gets its name: the actual halls, lawns, and street corners where sound systems played became known simply as \"the dancehall,\" and the culture that grew up around them eventually took that name for itself.",
    ],
    keywords: ["sound system", "selector", "dubplate", "clash", "sound clash"],
  },
  {
    slug: "deejay-performance",
    title: "Deejay Performance",
    dek: "The art of toasting — talking, chanting, and performing live over a riddim.",
    body: [
      "In Jamaican sound system culture, a \"deejay\" is not the person playing records (that's the selector) — it's the performer who talks, chants, or sings over the music in real time, a practice known as toasting. Toasting grew out of sound system MCs hyping the crowd between records in the 1950s and '60s, and pioneers like Count Machuki, King Stitt, and U-Roy transformed those ad-libbed shout-outs into a structured vocal art form with its own rhythm, wordplay, and delivery style.",
      "By the 1970s, deejays like Big Youth and I-Roy were toasting entire songs rather than just introducing them, laying the groundwork for what would become dancehall's central performance mode: an artist chatting lyrics — often improvised, always rhythmically locked to the riddim — rather than singing a fixed melody. This is the direct ancestor of rapping, and Jamaican sound system culture is widely credited as one of hip-hop's foundational influences.",
      "As dancehall emerged in the late 1970s and 1980s, deejaying became the genre's dominant vocal style, with artists like Yellowman, Josey Wales, and later Shabba Ranks and Ninjaman building entire careers on lyrical dexterity, crowd command, and the ability to freestyle over a riddim. Deejay performance remains dancehall's core discipline — a tradition of live, rhythmic, spontaneous vocal artistry that rewards wit as much as delivery.",
    ],
    keywords: ["deejay", "toasting", "chat", "mc", "lyricist"],
  },
  {
    slug: "dance-and-movement",
    title: "Dance and Movement",
    dek: "The moves, dancers, and dance floor that gave the genre its name.",
    body: [
      "Dancehall is, literally, a dance culture first. The genre takes its name from the physical space — the dancehall — where dancers gathered to move to sound systems, and from the earliest days the dance floor was as much a stage as the sound system booth. Dancers develop and popularize specific named moves that spread from a single dance floor to become nationwide, and eventually global, phenomena.",
      "Individual dancers have historically held the same star status as recording artists. Gerald \"Bogle\" Levy, the dancer for whom Buju Banton's 1992 hit \"Bogle\" is named, is one of the most influential figures in dancehall dance history, credited with originating and popularizing multiple signature moves before his death in 2005. Dancers like him didn't just interpret the music — they shaped its rhythm, since producers and artists often built songs around moves that were already catching fire on the dance floor.",
      "Dance in dancehall is improvisational, competitive, and constantly evolving — new moves emerge from clubs and street dances almost every year, spread today via video and social media the way they once spread by word of mouth and VHS tape. It is one of the clearest throughlines connecting 1980s dancehall to the genre's present, since the dance floor remains the place where the culture renews itself.",
    ],
    keywords: ["dance", "dancer", "bogle", "movement", "choreograph"],
  },
  {
    slug: "fashion-and-personal-style",
    title: "Fashion and Personal Style",
    dek: "Bold color, gold, and fitted silhouettes — how dancehall turned self-presentation into art.",
    body: [
      "Dancehall style is deliberately, unapologetically loud — bright colors, tight and revealing silhouettes, gold jewelry, and elaborate hairstyling, all designed to be seen from across a crowded dance floor. Where roots reggae's visual identity leaned toward Rastafarian modesty, dancehall fashion embraced spectacle: dressing up for a dance was, and is, a competitive act of self-expression in its own right.",
      "Dancehall queens — women who became famous specifically for their fashion and dancing at parties and competitions, most notably Carlene Smith in the 1990s — turned personal style into a career path independent of recording an actual song. Male artists built signature looks just as deliberately, from Super Cat's tailored suits to the gold-teeth-and-chain aesthetic that became genre shorthand internationally.",
      "Because dancehall fashion is worn on the body and photographed at every dance, it functions as a living visual archive of the culture's eras — you can date a flyer or a photograph almost precisely by the cut of the clothes and the shape of the jewelry. It has also traveled the furthest of any part of the culture, visibly influencing global streetwear, hip-hop fashion, and high fashion runway collections for decades.",
    ],
    keywords: ["fashion", "style", "dancehall queen", "swagger", "jewelry"],
  },
  {
    slug: "language-and-slang",
    title: "Language and Slang",
    dek: "Patois, wordplay, and the constantly evolving vocabulary of dancehall.",
    body: [
      "Jamaican Patois — an English-lexicon Creole language with deep West African grammatical roots — is dancehall's native tongue, and the genre has always been one of Patois's most visible global carriers. Deejaying rewards linguistic dexterity: internal rhyme, double meaning, and rapid-fire wordplay are core skills, not decoration, and a great deejay is often judged as much on lyrical cleverness as on rhythm or subject matter.",
      "Dancehall is also a slang engine. New terms and phrases regularly originate on the dance floor or in a single song and spread outward — sometimes staying within Jamaica, sometimes traveling into wider Caribbean and diaspora English, and occasionally into global youth slang more broadly. That constant churn of vocabulary is part of the culture's identity: speaking (and understanding) the latest terms is itself a marker of being current.",
      "Because Patois was historically stigmatized in formal Jamaican institutions, dancehall's full-throated use of it has also carried a cultural-politics dimension — an assertion that the everyday language of working-class Jamaican communities is a legitimate, powerful medium for art, wit, and social commentary, not a lesser dialect to be corrected.",
    ],
    keywords: ["patois", "language", "slang", "wordplay"],
  },
  {
    slug: "street-culture",
    title: "Street Culture",
    dek: "Dancehall as community-level culture, rooted in Kingston's neighborhoods and informal economy.",
    body: [
      "Dancehall did not emerge from studios and record labels first — it emerged from streets, yards, and neighborhood dances in Kingston's working-class communities, particularly areas like Trench Town and the garrison communities that shaped so much of Jamaican popular culture. The music, dance, and fashion all developed close to the ground, in spaces controlled by the community itself rather than by formal cultural institutions.",
      "This street-level origin shaped an entire informal economy around dancehall: promoters organizing dances, vendors selling food and goods outside venues, flyer printers and distributors, and sound system crews who built and maintained their own equipment. For many communities, dancehall dances have functioned as both entertainment and a form of local economic activity and social gathering, especially in periods when formal opportunities were scarce.",
      "Because of this grounding, dancehall has always carried the perspective, slang, and concerns of the communities that built it — including candid depictions of daily struggle, aspiration, and survival that some critics label \"slackness\" and others read as unfiltered social realism. Understanding dancehall as street culture, rather than purely as a music genre, is essential to understanding why it resonates the way it does.",
    ],
    keywords: ["street", "community", "kingston", "garrison", "trench town"],
  },
  {
    slug: "visual-media",
    title: "Visual Media",
    dek: "From hand-drawn flyers to VHS and social video — how dancehall has documented itself.",
    body: [
      "Dancehall has always been intensely self-documenting. Long before smartphones, promoters commissioned hand-drawn and later desktop-published flyers to advertise dances — vivid, text-dense posters that are now studied as a folk-art tradition in their own right, capturing the visual slang and aesthetics of each era.",
      "The rise of affordable video cameras in the 1980s and '90s produced a huge informal archive of dancehall on VHS: recordings of dances, sound clashes, and stage shows that circulated hand-to-hand and were often the only surviving record of a given night. Much of what is known today about specific dance moves, fashion trends, and even specific sound clashes comes from this grassroots video archive.",
      "That documentary instinct has carried directly into the internet era — YouTube, Instagram, and TikTok now serve the same function flyers and VHS tapes once did, spreading new dances, fashion, and deejay clips within hours rather than weeks. Dancehall's relationship to visual media is part of why the culture has always felt current: it has never waited for outside media to tell its story.",
    ],
    keywords: ["video", "media", "flyer", "vhs", "footage"],
  },
  {
    slug: "identity-and-self-expression",
    title: "Identity and Self-Expression",
    dek: "Dancehall as a vehicle for Black Jamaican identity, individuality, and self-fashioning.",
    body: [
      "At its core, dancehall is a culture of self-fashioning — a space where individuals, often from communities with limited access to formal platforms, construct and perform an identity entirely on their own terms. Through a chosen name, a signature dance move, a distinct fashion sense, or a lyrical style, dancehall rewards the deliberate, public construction of a persona.",
      "This has made dancehall an important vehicle for Black Jamaican identity and pride specifically — asserting the value and creativity of working-class Afro-Jamaican culture against colonial-era hierarchies that once dismissed Patois, street style, and popular dance as lesser. Dancehall queens, in particular, have used the culture as a platform for female self-expression and public visibility on their own terms, in a way that was not always available elsewhere.",
      "That same individualist ethos is why dancehall has produced so many distinct, larger-than-life figures rather than a single uniform \"look\" or sound — the culture's core value isn't conformity but the ability to stand out. Identity and self-expression aren't a side effect of dancehall culture; they're arguably its central organizing idea.",
    ],
    keywords: ["identity", "self-expression", "individuality", "black culture", "persona"],
  },
  {
    slug: "the-difference-between-dancehall-and-reggae",
    title: "The Difference Between Dancehall and Reggae",
    dek: "Two distinct genres, one shared lineage — how dancehall grew out of reggae and became its own sound, culture, and attitude.",
    body: [
      "Outside Jamaica, \"reggae\" is often used as a catch-all label for almost any Jamaican music, dancehall included. In Jamaica itself, the distinction is clear and important: reggae and dancehall are related but separate genres, each with its own sound, era, and set of values, connected by a direct line of musical evolution rather than being interchangeable names for the same thing.",
      "Reggae emerged in the late 1960s out of ska and rocksteady, defined by its unhurried, syncopated \"one drop\" drum pattern (the emphasis falling on the third beat rather than the first), warm live-band instrumentation — bass, drums, guitar skank, horns, organ — and unhurried, melodic singing. Reggae's golden era through the 1970s, epitomized internationally by Bob Marley, Toots and the Maytals, Burning Spear, and Peter Tosh, is closely tied to the Rastafari movement, and much of its most celebrated material deals in spirituality, repatriation, pan-African consciousness, and social and political justice.",
      "Dancehall emerged from within that same sound-system culture in the late 1970s and matured through the 1980s as a harder, faster, more stripped-down evolution: less live instrumentation, more emphasis on the deejay chatting or toasting lyrics over a riddim rather than singing a fixed melody, and a shift in subject matter toward the immediate realities of dance-floor life, sex, money, violence, humor, and social commentary delivered with direct, often confrontational wit rather than reggae's more meditative register. The turning point most historians point to is 1985, when producer King Jammy released Wayne Smith's \"Under Mi Sleng Teng,\" built on a fully digital, drum-machine-generated riddim — the moment dancehall decisively broke from reggae's live-band sound and became a distinct, electronically produced genre in its own right.",
      "The two genres are best understood not as rivals but as points on a continuum: reggae is dancehall's direct parent, and dancehall is reggae's louder, faster, more confrontational descendant, born in the same sound systems and still sharing the same deejay-and-riddim performance tradition reggae itself helped originate. Many artists have worked in both idioms, riddims are frequently voiced by singers in a reggae style and deejays in a dancehall style side by side, and contemporary Jamaican music continues to move fluidly between the two. The clearest way to hear the difference is simply this: reggae tends to sing you a feeling, while dancehall tends to talk straight at you — two different temperaments built from the same foundation.",
    ],
    keywords: ["reggae", "difference", "genre", "one drop", "sleng teng", "roots"],
  },
];
