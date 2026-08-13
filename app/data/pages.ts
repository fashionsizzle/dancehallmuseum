import type { ContentBlock } from './journal'

export type PageContent = { title: string; blocks: ContentBlock[]; oldUrl: string; images: string[] }

export const pageContent: Record<string, PageContent> = {
  "about": {
    "title": "About",
    "blocks": [
      {
        "type": "h2",
        "text": "A Digital Museum of Jamaican Dancehall Culture"
      },
      {
        "type": "p",
        "text": "Dancehall Museum is a digital institution dedicated to preserving, interpreting, and celebrating the sound, style, movement, history, and global cultural impact of dancehall. Through exhibitions, collections, archives, scholarship, and education, the museum documents dancehall as one of Jamaica’s most influential and far-reaching cultural contributions to the world."
      },
      {
        "type": "p",
        "text": "Curated by YardRock TV and researched by The Reggae Institute, Dancehall Museum exists to honor the people, places, aesthetics, technologies, and cultural forces that shaped dancehall from Kingston to the global stage."
      },
      {
        "type": "h1",
        "text": "What Is Dancehall Museum?"
      },
      {
        "type": "p",
        "text": "Dancehall Museum is a digital-first museum and cultural archive dedicated to the preservation and presentation of dancehall as a living cultural movement."
      },
      {
        "type": "p",
        "text": "The museum explores dancehall not only as music, but as a powerful expression of:"
      },
      {
        "type": "li",
        "text": "sound system culture"
      },
      {
        "type": "li",
        "text": "performance"
      },
      {
        "type": "li",
        "text": "fashion and personal style"
      },
      {
        "type": "li",
        "text": "dance and movement"
      },
      {
        "type": "li",
        "text": "language and identity"
      },
      {
        "type": "li",
        "text": "street culture"
      },
      {
        "type": "li",
        "text": "visual media"
      },
      {
        "type": "li",
        "text": "Black expression and innovation"
      },
      {
        "type": "li",
        "text": "Jamaican creativity and global influence"
      },
      {
        "type": "p",
        "text": "Through curated exhibitions, archival materials, oral histories, educational resources, and cultural interpretation, Dancehall Museum provides a platform for deeper public understanding of one of the most influential cultural forms of the modern era."
      },
      {
        "type": "h1",
        "text": "Mission"
      },
      {
        "type": "p",
        "text": "The mission of Dancehall Museum is to preserve, interpret, and elevate the history, culture, style, sound, performance, and global influence of Jamaican dancehall through digital exhibitions, archives, research, education, and public engagement."
      },
      {
        "type": "h1",
        "text": "Vision"
      },
      {
        "type": "p",
        "text": "Dancehall Museum envisions a future in which dancehall is recognized, studied, preserved, and celebrated as one of the great cultural movements of the modern world."
      },
      {
        "type": "p",
        "text": "As a digital museum, the institution seeks to become a leading global platform for the preservation of dancehall heritage — connecting audiences across generations and geographies through scholarship, storytelling, archives, and immersive cultural interpretation."
      },
      {
        "type": "h1",
        "text": "Why Dancehall Matters"
      },
      {
        "type": "p",
        "text": "Dancehall is one of the most influential cultural movements to emerge from Jamaica and the wider Black Atlantic."
      },
      {
        "type": "p",
        "text": "Born from the sound systems, dance spaces, neighborhoods, fashion codes, language, and performance cultures of Kingston, dancehall transformed not only music, but also visual culture, style, movement, and identity across the world."
      },
      {
        "type": "p",
        "text": "Dancehall has shaped:"
      },
      {
        "type": "li",
        "text": "global music production"
      },
      {
        "type": "li",
        "text": "DJ and deejay culture"
      },
      {
        "type": "li",
        "text": "sound system engineering"
      },
      {
        "type": "li",
        "text": "dance and choreography"
      },
      {
        "type": "li",
        "text": "fashion and streetwear"
      },
      {
        "type": "li",
        "text": "beauty aesthetics and self-presentation"
      },
      {
        "type": "li",
        "text": "nightlife and performance culture"
      },
      {
        "type": "li",
        "text": "language and diasporic identity"
      },
      {
        "type": "li",
        "text": "visual media and youth expression"
      },
      {
        "type": "p",
        "text": "Its influence can be felt across reggae, hip-hop, reggaeton, Afrobeats, UK bass culture, Caribbean pop culture, and global street style."
      },
      {
        "type": "p",
        "text": "Dancehall is not simply entertainment.\nIt is a site of creativity, authorship, resistance, self-fashioning, innovation, and cultural memory."
      },
      {
        "type": "p",
        "text": "Dancehall Museum exists because this history deserves preservation, interpretation, and institutional recognition."
      },
      {
        "type": "h1",
        "text": "Curatorial Statement"
      },
      {
        "type": "p",
        "text": "Dancehall Museum approaches dancehall as a living archive of sound, movement, image, style, technology, and social expression."
      },
      {
        "type": "p",
        "text": "The museum’s curatorial approach recognizes dancehall as a dynamic cultural ecosystem shaped by artists, dancers, selectors, producers, designers, photographers, promoters, videographers, communities, and audiences."
      },
      {
        "type": "p",
        "text": "Our exhibitions and collections are designed to explore dancehall in its full complexity — not only as music, but as a visual, performative, and social force that has transformed the cultural imagination of Jamaica and the wider world."
      },
      {
        "type": "p",
        "text": "By placing dancehall within a museum context, Dancehall Museum affirms its significance as a major contribution to global cultural history."
      },
      {
        "type": "h1",
        "text": "Institutional Purpose"
      },
      {
        "type": "p",
        "text": "Dancehall Museum was established to build a serious cultural home for the preservation and interpretation of dancehall heritage."
      },
      {
        "type": "p",
        "text": "As a digital institution, the museum serves multiple roles:"
      },
      {
        "type": "h2",
        "text": "As a Museum"
      },
      {
        "type": "p",
        "text": "It presents curated exhibitions, historical interpretation, and thematic storytelling."
      },
      {
        "type": "h2",
        "text": "As an Archive"
      },
      {
        "type": "p",
        "text": "It preserves materials related to dancehall’s sound, style, media, movement, and cultural memory."
      },
      {
        "type": "h2",
        "text": "As an Educational Platform"
      },
      {
        "type": "p",
        "text": "It creates accessible resources for students, researchers, educators, and the public."
      },
      {
        "type": "h2",
        "text": "As a Research Institution"
      },
      {
        "type": "p",
        "text": "It supports deeper scholarship and cultural study through interpretive and historical work developed with The Reggae Institute."
      },
      {
        "type": "h2",
        "text": "As a Living Cultural Platform"
      },
      {
        "type": "p",
        "text": "It documents both the history and the continuing evolution of dancehall culture today."
      },
      {
        "type": "p",
        "text": "This multi-layered role is what gives the museum long-term value and relevance."
      },
      {
        "type": "h1",
        "text": "Research by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "The research and interpretive framework for Dancehall Museum is developed in collaboration with The Reggae Institute."
      },
      {
        "type": "p",
        "text": "The Reggae Institute serves as the museum’s scholarly and educational research partner, supporting the institution’s work in:"
      },
      {
        "type": "li",
        "text": "dancehall studies"
      },
      {
        "type": "li",
        "text": "sound system culture"
      },
      {
        "type": "li",
        "text": "Jamaican music history"
      },
      {
        "type": "li",
        "text": "fashion and style studies"
      },
      {
        "type": "li",
        "text": "oral history and memory preservation"
      },
      {
        "type": "li",
        "text": "performance and movement culture"
      },
      {
        "type": "li",
        "text": "Black Atlantic cultural history"
      },
      {
        "type": "li",
        "text": "diaspora and global influence"
      },
      {
        "type": "li",
        "text": "educational interpretation and public learning"
      },
      {
        "type": "p",
        "text": "Through this partnership, Dancehall Museum is grounded not only in cultural celebration, but also in historical inquiry, documentation, and preservation."
      },
      {
        "type": "p",
        "text": "Research for Dancehall Museum is led by The Reggae Institute."
      },
      {
        "type": "h1",
        "text": "Leadership & Partners"
      },
      {
        "type": "p",
        "text": "Dancehall Museum is developed through a growing network of cultural researchers, curators, artists, archivists, and creative partners committed to preserving and advancing Jamaican cultural heritage."
      },
      {
        "type": "h3",
        "text": "Current Institutional Credits"
      },
      {
        "type": "li",
        "text": "Research by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "As the institution grows, Dancehall Museum will continue to expand its partnerships, research collaborations, curatorial contributions, and public programming in service of preserving dancehall culture for future generations."
      },
      {
        "type": "h1",
        "text": "Preserving the Sound. The Style. The Movement."
      }
    ],
    "oldUrl": "https://dancehallmuseum.org/about-2/",
    "images": []
  },
  "exhibitions": {
    "title": "Exhibitions",
    "blocks": [
      {
        "type": "h2",
        "text": "Dancehall Museum Exhibitions"
      },
      {
        "type": "h3",
        "text": "Exploring the Sound, Style, Movement, and Global Impact of Dancehall"
      },
      {
        "type": "h3",
        "text": "Curated by YardRock TV | Researched by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "Dancehall Museum presents a series of digital exhibitions that explore the history, aesthetics, cultural impact, and global influence of dancehall. Through sound, image, fashion, movement, media, and storytelling, these exhibitions document dancehall as a living cultural force shaped by Jamaica and experienced worldwide."
      },
      {
        "type": "p",
        "text": "Each exhibition is developed through curatorial research, archival materials, oral histories, and visual culture — offering visitors an immersive understanding of dancehall beyond the surface."
      },
      {
        "type": "h1",
        "text": "Featured Exhibitions"
      },
      {
        "type": "h2",
        "text": "Dancehall & The Digital Revolution (1982–1995)"
      },
      {
        "type": "p",
        "text": "This exhibition explores one of the most transformative periods in Jamaican music history — the shift from analog instrumentation to digital production."
      },
      {
        "type": "p",
        "text": "With the emergence of drum machines, synthesizers, and computerized rhythms, dancehall entered a new sonic era that reshaped not only Jamaican music, but global music production."
      },
      {
        "type": "p",
        "text": "This exhibition highlights:"
      },
      {
        "type": "li",
        "text": "the rise of digital riddims"
      },
      {
        "type": "li",
        "text": "the role of producers and engineers"
      },
      {
        "type": "li",
        "text": "the evolution of the deejay"
      },
      {
        "type": "li",
        "text": "the transformation of sound system culture"
      },
      {
        "type": "li",
        "text": "the global spread of the digital dancehall sound"
      },
      {
        "type": "h2",
        "text": "Sound System Culture: The Architecture of Power"
      },
      {
        "type": "p",
        "text": "At the heart of dancehall lies the sound system — a powerful cultural, technological, and social force."
      },
      {
        "type": "p",
        "text": "This exhibition examines sound systems as more than speakers — as spaces of community, competition, innovation, and identity."
      },
      {
        "type": "p",
        "text": "Explore:"
      },
      {
        "type": "li",
        "text": "selectors and operators"
      },
      {
        "type": "li",
        "text": "dubplate culture"
      },
      {
        "type": "li",
        "text": "sound clashes"
      },
      {
        "type": "li",
        "text": "speaker box engineering"
      },
      {
        "type": "li",
        "text": "dancehall sessions and street dances"
      },
      {
        "type": "li",
        "text": "the migration of sound system culture globally"
      },
      {
        "type": "h2",
        "text": "Style & Swagger: Fashion in Dancehall"
      },
      {
        "type": "p",
        "text": "Dancehall is one of the most visually expressive cultures in the world — where style is identity, performance, and power."
      },
      {
        "type": "p",
        "text": "This exhibition explores the evolution of dancehall fashion from Kingston streets to global influence."
      },
      {
        "type": "p",
        "text": "Featuring:"
      },
      {
        "type": "li",
        "text": "Clarks, mesh marina, denim, and tailoring"
      },
      {
        "type": "li",
        "text": "dancehall queens and body aesthetics"
      },
      {
        "type": "li",
        "text": "hairstyles, jewelry, and beauty culture"
      },
      {
        "type": "li",
        "text": "designer influence and street fashion"
      },
      {
        "type": "li",
        "text": "the role of style in status, identity, and performance"
      },
      {
        "type": "h2",
        "text": "Dancehall Queens: Performance, Beauty, and Cultural Influence"
      },
      {
        "type": "p",
        "text": "Dancehall queens represent one of the most powerful visual and performative expressions within the culture."
      },
      {
        "type": "p",
        "text": "This exhibition explores:"
      },
      {
        "type": "li",
        "text": "femininity and power"
      },
      {
        "type": "li",
        "text": "dance and movement"
      },
      {
        "type": "li",
        "text": "fashion and body presentation"
      },
      {
        "type": "li",
        "text": "performance and spectacle"
      },
      {
        "type": "li",
        "text": "cultural influence and representation"
      },
      {
        "type": "p",
        "text": "Through photography, video, and cultural analysis, the exhibition highlights the role of women in shaping dancehall’s visual identity."
      },
      {
        "type": "h2",
        "text": "Flyers, VHS & Street Promotion"
      },
      {
        "type": "p",
        "text": "Before social media, dancehall was built through physical promotion, video culture, and street visibility."
      },
      {
        "type": "p",
        "text": "This exhibition explores the graphic and media language of dancehall:"
      },
      {
        "type": "li",
        "text": "handbills and flyers"
      },
      {
        "type": "li",
        "text": "poster culture"
      },
      {
        "type": "li",
        "text": "VHS tapes and early video"
      },
      {
        "type": "li",
        "text": "cable television and dancehall broadcasts"
      },
      {
        "type": "li",
        "text": "street promotion and visual identity"
      },
      {
        "type": "p",
        "text": "These materials form a vital archive of dancehall’s visual history."
      },
      {
        "type": "h2",
        "text": "From Kingston to the World"
      },
      {
        "type": "p",
        "text": "Dancehall is a global language."
      },
      {
        "type": "p",
        "text": "This exhibition traces how dancehall culture traveled from Jamaica to influence:"
      },
      {
        "type": "li",
        "text": "hip-hop"
      },
      {
        "type": "li",
        "text": "reggaeton"
      },
      {
        "type": "li",
        "text": "Afrobeats"
      },
      {
        "type": "li",
        "text": "UK bass culture"
      },
      {
        "type": "li",
        "text": "Caribbean diaspora communities"
      },
      {
        "type": "li",
        "text": "global streetwear and fashion"
      },
      {
        "type": "p",
        "text": "It highlights dancehall’s role as one of the most influential cultural exports of the modern era."
      },
      {
        "type": "h1",
        "text": "Exhibition Approach"
      },
      {
        "type": "h2",
        "text": "A Living Cultural Archive"
      },
      {
        "type": "p",
        "text": "Dancehall Museum approaches exhibitions as dynamic, evolving cultural experiences."
      },
      {
        "type": "p",
        "text": "Each exhibition integrates:"
      },
      {
        "type": "li",
        "text": "archival materials"
      },
      {
        "type": "li",
        "text": "photography and visual culture"
      },
      {
        "type": "li",
        "text": "music and sound references"
      },
      {
        "type": "li",
        "text": "oral histories"
      },
      {
        "type": "li",
        "text": "fashion and performance documentation"
      },
      {
        "type": "li",
        "text": "scholarly research and interpretation"
      },
      {
        "type": "p",
        "text": "This approach ensures that dancehall is presented not as static history, but as a living and evolving cultural movement."
      },
      {
        "type": "h1",
        "text": "Digital Experience"
      },
      {
        "type": "h2",
        "text": "A Museum Without Walls"
      },
      {
        "type": "p",
        "text": "As a digital museum, Dancehall Museum offers exhibitions that are accessible globally."
      },
      {
        "type": "p",
        "text": "Visitors can:"
      },
      {
        "type": "li",
        "text": "explore curated themes"
      },
      {
        "type": "li",
        "text": "engage with multimedia content"
      },
      {
        "type": "li",
        "text": "experience dancehall across time and place"
      },
      {
        "type": "li",
        "text": "connect historical context with contemporary culture"
      },
      {
        "type": "p",
        "text": "This format allows the museum to reach audiences beyond physical limitations while preserving cultural depth and authenticity."
      },
      {
        "type": "h1",
        "text": "Research & Curatorial Framework"
      },
      {
        "type": "p",
        "text": "All exhibitions are developed through:"
      },
      {
        "type": "h3",
        "text": "Research by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "The museum’s exhibitions are grounded in cultural research, historical context, and interpretive scholarship — ensuring that dancehall is presented with accuracy, depth, and respect."
      },
      {
        "type": "h1",
        "text": "Upcoming Exhibitions"
      },
      {
        "type": "p",
        "text": "Dancehall Museum continues to expand its exhibition program with future projects exploring:"
      },
      {
        "type": "li",
        "text": "The Dancehall Body & Movement"
      },
      {
        "type": "li",
        "text": "Icons of Dancehall Style"
      },
      {
        "type": "li",
        "text": "Women in Dancehall"
      },
      {
        "type": "li",
        "text": "Kingston Dance Spaces"
      },
      {
        "type": "li",
        "text": "Dancehall Media & Television"
      },
      {
        "type": "li",
        "text": "The Global Dancehall Diaspora"
      },
      {
        "type": "h1",
        "text": "Explore the Culture. Experience the Movement."
      }
    ],
    "oldUrl": "https://dancehallmuseum.org/exhibitions/",
    "images": []
  },
  "collections": {
    "title": "Collections",
    "blocks": [
      {
        "type": "h2",
        "text": "The Collections of Dancehall Museum"
      },
      {
        "type": "h3",
        "text": "Preserving the Objects, Images, Media, Style, and Cultural Memory of Dancehall"
      },
      {
        "type": "h3",
        "text": "Curated by YardRock TV | Researched by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "The collections of Dancehall Museum preserve the material, visual, sonic, and cultural record of dancehall. Through photography, fashion, media, print culture, oral histories, promotional ephemera, and performance documentation, the museum gathers and interprets the many forms through which dancehall has been expressed, remembered, and experienced."
      },
      {
        "type": "p",
        "text": "Dancehall is not only heard — it is seen, worn, performed, circulated, archived, and lived.\nThe collections of Dancehall Museum reflect that full cultural world."
      },
      {
        "type": "h1",
        "text": "About the Collections"
      },
      {
        "type": "p",
        "text": "Dancehall Museum collects, preserves, and presents materials that document dancehall as a living cultural movement."
      },
      {
        "type": "p",
        "text": "These collections help tell the story of dancehall through:"
      },
      {
        "type": "li",
        "text": "sound and media"
      },
      {
        "type": "li",
        "text": "fashion and self-presentation"
      },
      {
        "type": "li",
        "text": "performance and movement"
      },
      {
        "type": "li",
        "text": "street culture and nightlife"
      },
      {
        "type": "li",
        "text": "graphic design and promotion"
      },
      {
        "type": "li",
        "text": "oral memory and lived experience"
      },
      {
        "type": "li",
        "text": "image-making and visual identity"
      },
      {
        "type": "p",
        "text": "Together, these materials form a growing digital collection dedicated to preserving one of Jamaica’s most influential cultural contributions."
      },
      {
        "type": "h1",
        "text": "Collection Areas"
      },
      {
        "type": "h2",
        "text": "Fashion & Style"
      },
      {
        "type": "p",
        "text": "Dancehall has long been one of the most visually distinctive style cultures in the world."
      },
      {
        "type": "p",
        "text": "This collection area explores the role of fashion, grooming, and personal presentation in dancehall culture, including:"
      },
      {
        "type": "li",
        "text": "stage wear and performance looks"
      },
      {
        "type": "li",
        "text": "street style and dancehall dress codes"
      },
      {
        "type": "li",
        "text": "Clarks, denim, mesh marina, tailoring, and custom looks"
      },
      {
        "type": "li",
        "text": "dancehall queens and body aesthetics"
      },
      {
        "type": "li",
        "text": "hairstyles, beauty, jewelry, and accessories"
      },
      {
        "type": "li",
        "text": "fashion photography and style documentation"
      },
      {
        "type": "p",
        "text": "This collection examines how dancehall transformed fashion into a language of identity, confidence, performance, and visibility."
      },
      {
        "type": "h2",
        "text": "Flyers, Posters & Graphic Culture"
      },
      {
        "type": "p",
        "text": "Dancehall has always had a powerful visual language — one shaped through promotion, print, design, and street visibility."
      },
      {
        "type": "p",
        "text": "This collection area preserves:"
      },
      {
        "type": "li",
        "text": "event flyers"
      },
      {
        "type": "li",
        "text": "clash posters"
      },
      {
        "type": "li",
        "text": "party handbills"
      },
      {
        "type": "li",
        "text": "dance promotions"
      },
      {
        "type": "li",
        "text": "concert advertising"
      },
      {
        "type": "li",
        "text": "graphic design materials"
      },
      {
        "type": "li",
        "text": "printed ephemera from dancehall spaces and events"
      },
      {
        "type": "p",
        "text": "These materials document the graphic identity of dancehall and the ways culture moved through neighborhoods, dance spaces, and communities before the digital era."
      },
      {
        "type": "h2",
        "text": "Performance Photography"
      },
      {
        "type": "p",
        "text": "Photography has played a vital role in shaping how dancehall is seen, remembered, and circulated."
      },
      {
        "type": "p",
        "text": "This collection includes:"
      },
      {
        "type": "li",
        "text": "live performance photography"
      },
      {
        "type": "li",
        "text": "backstage imagery"
      },
      {
        "type": "li",
        "text": "dancehall street photography"
      },
      {
        "type": "li",
        "text": "portraits of artists, dancers, selectors, and style icons"
      },
      {
        "type": "li",
        "text": "event documentation"
      },
      {
        "type": "li",
        "text": "visual records of dance spaces and audiences"
      },
      {
        "type": "p",
        "text": "These images preserve the energy, image-making, and visual history of dancehall across generations."
      },
      {
        "type": "h2",
        "text": "Sound System Material Culture"
      },
      {
        "type": "p",
        "text": "The sound system is one of the foundational institutions of dancehall culture."
      },
      {
        "type": "p",
        "text": "This collection area documents the technologies, objects, and environments that shaped dancehall’s sonic power, including:"
      },
      {
        "type": "li",
        "text": "speaker stacks and sound system builds"
      },
      {
        "type": "li",
        "text": "dubplates and sound clash materials"
      },
      {
        "type": "li",
        "text": "selector culture and turntable practices"
      },
      {
        "type": "li",
        "text": "sound crew identity and branding"
      },
      {
        "type": "li",
        "text": "sound system promotional objects"
      },
      {
        "type": "li",
        "text": "audio media and technical culture"
      },
      {
        "type": "p",
        "text": "This collection reflects the engineering, creativity, ritual, and competitive spirit at the center of dancehall."
      },
      {
        "type": "h2",
        "text": "Recorded Sound & Media"
      },
      {
        "type": "p",
        "text": "Dancehall lives through recordings, broadcasts, mixes, and media circulation."
      },
      {
        "type": "p",
        "text": "This collection includes:"
      },
      {
        "type": "li",
        "text": "vinyl records"
      },
      {
        "type": "li",
        "text": "cassette tapes"
      },
      {
        "type": "li",
        "text": "CD-era releases"
      },
      {
        "type": "li",
        "text": "riddim culture documentation"
      },
      {
        "type": "li",
        "text": "radio and broadcast materials"
      },
      {
        "type": "li",
        "text": "dub and mix culture"
      },
      {
        "type": "li",
        "text": "dancehall media artifacts"
      },
      {
        "type": "p",
        "text": "These materials help document how dancehall moved through speakers, radio, homes, cars, dance spaces, and global audiences."
      },
      {
        "type": "h2",
        "text": "Video, VHS & Broadcast Culture"
      },
      {
        "type": "p",
        "text": "Dancehall’s image culture expanded powerfully through video and broadcast media."
      },
      {
        "type": "p",
        "text": "This collection area includes:"
      },
      {
        "type": "li",
        "text": "VHS dancehall recordings"
      },
      {
        "type": "li",
        "text": "television appearances"
      },
      {
        "type": "li",
        "text": "cable and media broadcasts"
      },
      {
        "type": "li",
        "text": "performance footage"
      },
      {
        "type": "li",
        "text": "dance footage"
      },
      {
        "type": "li",
        "text": "early video culture and visual circulation"
      },
      {
        "type": "p",
        "text": "These materials capture how dancehall became not only a sound, but a visible and performative force."
      },
      {
        "type": "h2",
        "text": "Dance & Movement Culture"
      },
      {
        "type": "p",
        "text": "Dancehall is inseparable from movement."
      },
      {
        "type": "p",
        "text": "This collection documents the embodied language of dancehall through:"
      },
      {
        "type": "li",
        "text": "dance styles and movement traditions"
      },
      {
        "type": "li",
        "text": "dance crews and performers"
      },
      {
        "type": "li",
        "text": "performance gestures and body language"
      },
      {
        "type": "li",
        "text": "dancehall queen performance culture"
      },
      {
        "type": "li",
        "text": "social dance documentation"
      },
      {
        "type": "li",
        "text": "visual records of movement in dance spaces"
      },
      {
        "type": "p",
        "text": "This collection recognizes dance as one of dancehall’s most powerful forms of cultural authorship."
      },
      {
        "type": "h2",
        "text": "Beauty, Hair & Self-Presentation"
      },
      {
        "type": "p",
        "text": "Beauty culture is central to dancehall’s visual world."
      },
      {
        "type": "p",
        "text": "This collection area preserves materials related to:"
      },
      {
        "type": "li",
        "text": "hairstyling and hair trends"
      },
      {
        "type": "li",
        "text": "makeup and beauty aesthetics"
      },
      {
        "type": "li",
        "text": "nail art and adornment"
      },
      {
        "type": "li",
        "text": "styling culture"
      },
      {
        "type": "li",
        "text": "self-fashioning and body presentation"
      },
      {
        "type": "li",
        "text": "beauty as visibility, performance, and identity"
      },
      {
        "type": "p",
        "text": "This collection reflects the role of beauty in dancehall as a creative and cultural practice."
      },
      {
        "type": "h2",
        "text": "Print Media & Editorial Culture"
      },
      {
        "type": "p",
        "text": "Dancehall has also been documented, interpreted, and circulated through magazines, newspapers, interviews, and editorial media."
      },
      {
        "type": "p",
        "text": "This collection includes:"
      },
      {
        "type": "li",
        "text": "magazine features"
      },
      {
        "type": "li",
        "text": "newspaper clippings"
      },
      {
        "type": "li",
        "text": "artist interviews"
      },
      {
        "type": "li",
        "text": "editorial photography"
      },
      {
        "type": "li",
        "text": "print advertisements"
      },
      {
        "type": "li",
        "text": "media coverage and commentary"
      },
      {
        "type": "p",
        "text": "These materials help trace how dancehall has been represented publicly over time."
      },
      {
        "type": "h2",
        "text": "Oral Histories"
      },
      {
        "type": "p",
        "text": "Dancehall Museum values memory, voice, and lived experience as essential forms of cultural preservation."
      },
      {
        "type": "p",
        "text": "This collection includes oral histories and testimonies from:"
      },
      {
        "type": "li",
        "text": "artists"
      },
      {
        "type": "li",
        "text": "selectors"
      },
      {
        "type": "li",
        "text": "dancers"
      },
      {
        "type": "li",
        "text": "stylists"
      },
      {
        "type": "li",
        "text": "designers"
      },
      {
        "type": "li",
        "text": "promoters"
      },
      {
        "type": "li",
        "text": "photographers"
      },
      {
        "type": "li",
        "text": "cultural participants and community members"
      },
      {
        "type": "p",
        "text": "These stories provide critical insight into the lived history of dancehall and preserve perspectives that are often left out of formal archives."
      },
      {
        "type": "h1",
        "text": "Collection Philosophy"
      },
      {
        "type": "h2",
        "text": "Preserving a Living Culture"
      },
      {
        "type": "p",
        "text": "Dancehall Museum approaches collecting as a form of cultural preservation, interpretation, and respect."
      },
      {
        "type": "p",
        "text": "The museum recognizes that dancehall history lives not only in official institutions, but in:"
      },
      {
        "type": "li",
        "text": "community memory"
      },
      {
        "type": "li",
        "text": "personal archives"
      },
      {
        "type": "li",
        "text": "family collections"
      },
      {
        "type": "li",
        "text": "fashion and style practices"
      },
      {
        "type": "li",
        "text": "recorded media"
      },
      {
        "type": "li",
        "text": "flyers, photographs, and lived experiences"
      },
      {
        "type": "p",
        "text": "By bringing these materials into a museum context, Dancehall Museum works to preserve dancehall as a major cultural force worthy of institutional recognition and long-term care."
      },
      {
        "type": "h1",
        "text": "Digital Collections Access"
      },
      {
        "type": "h2",
        "text": "A Growing Digital Collection"
      },
      {
        "type": "p",
        "text": "As a digital museum, Dancehall Museum is building a growing online collection that will continue to expand over time."
      },
      {
        "type": "p",
        "text": "Future collection access may include:"
      },
      {
        "type": "li",
        "text": "digital object records"
      },
      {
        "type": "li",
        "text": "searchable archives"
      },
      {
        "type": "li",
        "text": "themed collection groupings"
      },
      {
        "type": "li",
        "text": "image galleries"
      },
      {
        "type": "li",
        "text": "oral history listening access"
      },
      {
        "type": "li",
        "text": "collection spotlights and research notes"
      },
      {
        "type": "p",
        "text": "This evolving structure will allow visitors, students, researchers, and the public to engage more deeply with dancehall’s cultural record."
      },
      {
        "type": "h1",
        "text": "Research & Interpretation"
      },
      {
        "type": "p",
        "text": "The collections of Dancehall Museum are interpreted through:"
      },
      {
        "type": "h3",
        "text": "Research by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "This curatorial and research framework ensures that the museum’s collections are presented with historical context, cultural integrity, and scholarly care."
      },
      {
        "type": "h1",
        "text": "Contribute to the Collection"
      },
      {
        "type": "h2",
        "text": "Help Preserve Dancehall History"
      },
      {
        "type": "p",
        "text": "Dancehall Museum welcomes future opportunities to preserve and document dancehall through community memory, archival materials, visual culture, and oral history."
      },
      {
        "type": "p",
        "text": "Future contributions may include:"
      },
      {
        "type": "li",
        "text": "flyers and posters"
      },
      {
        "type": "li",
        "text": "photographs"
      },
      {
        "type": "li",
        "text": "video footage"
      },
      {
        "type": "li",
        "text": "media clippings"
      },
      {
        "type": "li",
        "text": "fashion items"
      },
      {
        "type": "li",
        "text": "memorabilia"
      },
      {
        "type": "li",
        "text": "oral histories"
      },
      {
        "type": "li",
        "text": "personal archives and cultural materials"
      },
      {
        "type": "p",
        "text": "As the museum grows, Dancehall Museum aims to become a trusted home for preserving dancehall heritage for future generations."
      },
      {
        "type": "h1",
        "text": "The Collection Is the Memory of the Culture."
      },
      {
        "type": "h1",
        "text": "WHAT TO DO NEXT ON YOUR SITE"
      },
      {
        "type": "p",
        "text": "After you paste this page into WordPress, you should visually break the page up with image blocks or cards."
      },
      {
        "type": "h2",
        "text": "BEST VISUAL LAYOUT:"
      },
      {
        "type": "p",
        "text": "After “Collection Areas,” you can make each category look like a museum card:"
      },
      {
        "type": "li",
        "text": "Fashion & Style"
      },
      {
        "type": "li",
        "text": "Flyers, Posters & Graphic Culture"
      },
      {
        "type": "li",
        "text": "Performance Photography"
      },
      {
        "type": "li",
        "text": "Sound System Material Culture"
      },
      {
        "type": "li",
        "text": "Recorded Sound & Media"
      },
      {
        "type": "li",
        "text": "Video, VHS & Broadcast Culture"
      },
      {
        "type": "li",
        "text": "Dance & Movement Culture"
      },
      {
        "type": "li",
        "text": "Beauty, Hair & Self-Presentation"
      },
      {
        "type": "li",
        "text": "Print Media & Editorial Culture"
      },
      {
        "type": "li",
        "text": "Oral Histories"
      }
    ],
    "oldUrl": "https://dancehallmuseum.org/collections/",
    "images": []
  },
  "learn": {
    "title": "Learn",
    "blocks": [
      {
        "type": "h2",
        "text": "Learn Dancehall"
      },
      {
        "type": "h3",
        "text": "Understanding the Sound, Style, Movement, and Cultural Impact of Dancehall"
      },
      {
        "type": "h3",
        "text": "Curated by YardRock TV | Researched by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "The Learn section of Dancehall Museum provides educational resources designed to deepen understanding of dancehall as a cultural movement, historical force, and global influence."
      },
      {
        "type": "p",
        "text": "Through accessible guides, cultural interpretation, research-based content, and structured learning materials, this section supports students, educators, researchers, and the public in exploring dancehall beyond surface-level understanding."
      },
      {
        "type": "h1",
        "text": "What Is Dancehall?"
      },
      {
        "type": "p",
        "text": "Dancehall is a Jamaican cultural movement that emerged in the late 1970s, evolving from reggae into a distinct sound, style, and performance culture rooted in sound systems, dance spaces, and community expression."
      },
      {
        "type": "p",
        "text": "Dancehall is not only a genre of music — it is a complete cultural ecosystem that includes:"
      },
      {
        "type": "li",
        "text": "sound system culture"
      },
      {
        "type": "li",
        "text": "deejay performance"
      },
      {
        "type": "li",
        "text": "dance and movement"
      },
      {
        "type": "li",
        "text": "fashion and personal style"
      },
      {
        "type": "li",
        "text": "language and slang"
      },
      {
        "type": "li",
        "text": "street culture"
      },
      {
        "type": "li",
        "text": "visual media"
      },
      {
        "type": "li",
        "text": "identity and self-expression"
      },
      {
        "type": "p",
        "text": "From Kingston to the global stage, dancehall has influenced how people move, dress, speak, perform, and create."
      },
      {
        "type": "h1",
        "text": "Dancehall 101"
      },
      {
        "type": "h2",
        "text": "An Introduction to Dancehall Culture"
      },
      {
        "type": "p",
        "text": "Dancehall 101 serves as an entry point into the key elements that define dancehall."
      },
      {
        "type": "h3",
        "text": "Core components include:"
      },
      {
        "type": "li",
        "text": "The Sound System – the foundation of dancehall culture"
      },
      {
        "type": "li",
        "text": "The Deejay – voice, rhythm, and lyrical performance"
      },
      {
        "type": "li",
        "text": "The Dance – movement as cultural expression"
      },
      {
        "type": "li",
        "text": "The Fashion – identity through style"
      },
      {
        "type": "li",
        "text": "The Dance Space – where culture comes alive"
      },
      {
        "type": "li",
        "text": "The Audience – participants, not just spectators"
      },
      {
        "type": "p",
        "text": "This section introduces the structure, language, and cultural meaning behind dancehall’s core elements."
      },
      {
        "type": "h1",
        "text": "Sound System Basics"
      },
      {
        "type": "p",
        "text": "Sound systems are the backbone of dancehall culture."
      },
      {
        "type": "p",
        "text": "Originating in Jamaica, sound systems are mobile audio setups operated by crews who play music for audiences at dances, street sessions, and events."
      },
      {
        "type": "p",
        "text": "This section explores:"
      },
      {
        "type": "li",
        "text": "selectors and operators"
      },
      {
        "type": "li",
        "text": "sound system construction and engineering"
      },
      {
        "type": "li",
        "text": "dubplates and exclusive recordings"
      },
      {
        "type": "li",
        "text": "sound clashes and competition culture"
      },
      {
        "type": "li",
        "text": "the role of the sound system in shaping dancehall music"
      },
      {
        "type": "p",
        "text": "Sound systems are not just technical setups — they are cultural institutions."
      },
      {
        "type": "h1",
        "text": "Dancehall Glossary"
      },
      {
        "type": "p",
        "text": "Dancehall has its own language — shaped by Jamaican patois, street culture, and performance."
      },
      {
        "type": "p",
        "text": "This section provides definitions and explanations of key terms used in dancehall, including:"
      },
      {
        "type": "li",
        "text": "sound system terminology"
      },
      {
        "type": "li",
        "text": "dance and movement language"
      },
      {
        "type": "li",
        "text": "fashion and style references"
      },
      {
        "type": "li",
        "text": "performance expressions"
      },
      {
        "type": "li",
        "text": "cultural phrases and slang"
      },
      {
        "type": "p",
        "text": "The glossary helps make dancehall accessible while preserving its linguistic identity."
      },
      {
        "type": "h1",
        "text": "Dancehall Fashion & Style"
      },
      {
        "type": "p",
        "text": "Dancehall is one of the most influential style cultures in the world."
      },
      {
        "type": "p",
        "text": "This section explores:"
      },
      {
        "type": "li",
        "text": "the evolution of dancehall fashion"
      },
      {
        "type": "li",
        "text": "street style and performance looks"
      },
      {
        "type": "li",
        "text": "the role of clothing in identity and visibility"
      },
      {
        "type": "li",
        "text": "beauty culture, hair, and styling"
      },
      {
        "type": "li",
        "text": "the influence of dancehall on global fashion"
      },
      {
        "type": "p",
        "text": "Dancehall fashion is not only about appearance — it is a form of expression, status, creativity, and cultural storytelling."
      },
      {
        "type": "h1",
        "text": "Dancehall & Global Influence"
      },
      {
        "type": "p",
        "text": "Dancehall’s impact extends far beyond Jamaica."
      },
      {
        "type": "p",
        "text": "This section examines how dancehall has shaped:"
      },
      {
        "type": "li",
        "text": "hip-hop"
      },
      {
        "type": "li",
        "text": "reggaeton"
      },
      {
        "type": "li",
        "text": "Afrobeats"
      },
      {
        "type": "li",
        "text": "UK bass and sound system culture"
      },
      {
        "type": "li",
        "text": "Caribbean diaspora communities"
      },
      {
        "type": "li",
        "text": "global dance trends"
      },
      {
        "type": "li",
        "text": "streetwear and fashion"
      },
      {
        "type": "p",
        "text": "Dancehall is a key force in global cultural exchange and creative innovation."
      },
      {
        "type": "h1",
        "text": "For Students & Educators"
      },
      {
        "type": "p",
        "text": "Dancehall Museum provides resources for learning in educational settings."
      },
      {
        "type": "p",
        "text": "This section is designed to support:"
      },
      {
        "type": "li",
        "text": "students studying music, culture, or history"
      },
      {
        "type": "li",
        "text": "educators developing curriculum"
      },
      {
        "type": "li",
        "text": "researchers exploring Jamaican and diaspora culture"
      },
      {
        "type": "li",
        "text": "cultural institutions and learning programs"
      },
      {
        "type": "p",
        "text": "Future resources may include:"
      },
      {
        "type": "li",
        "text": "study guides"
      },
      {
        "type": "li",
        "text": "lesson plans"
      },
      {
        "type": "li",
        "text": "classroom materials"
      },
      {
        "type": "li",
        "text": "educational essays"
      },
      {
        "type": "li",
        "text": "discussion topics"
      },
      {
        "type": "li",
        "text": "multimedia learning tools"
      },
      {
        "type": "h1",
        "text": "Research & Methodology"
      },
      {
        "type": "p",
        "text": "The educational content of Dancehall Museum is grounded in research and cultural scholarship."
      },
      {
        "type": "p",
        "text": "All learning materials are developed through:"
      },
      {
        "type": "h3",
        "text": "Research by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "This includes work in:"
      },
      {
        "type": "li",
        "text": "dancehall studies"
      },
      {
        "type": "li",
        "text": "sound system culture"
      },
      {
        "type": "li",
        "text": "Jamaican cultural history"
      },
      {
        "type": "li",
        "text": "fashion and identity"
      },
      {
        "type": "li",
        "text": "performance and movement"
      },
      {
        "type": "li",
        "text": "oral history and memory"
      },
      {
        "type": "li",
        "text": "Black Atlantic studies"
      },
      {
        "type": "li",
        "text": "diaspora and global influence"
      },
      {
        "type": "p",
        "text": "This framework ensures that all educational content is accurate, contextualized, and culturally respectful."
      },
      {
        "type": "h1",
        "text": "Oral Histories & Cultural Memory"
      },
      {
        "type": "p",
        "text": "Dancehall is preserved not only through objects and media, but through lived experience."
      },
      {
        "type": "p",
        "text": "This section highlights the importance of:"
      },
      {
        "type": "li",
        "text": "personal narratives"
      },
      {
        "type": "li",
        "text": "artist stories"
      },
      {
        "type": "li",
        "text": "community voices"
      },
      {
        "type": "li",
        "text": "cultural memory"
      },
      {
        "type": "li",
        "text": "lived experience"
      },
      {
        "type": "p",
        "text": "Oral histories provide essential insight into the development and meaning of dancehall culture."
      },
      {
        "type": "h1",
        "text": "A Living Cultural Education"
      },
      {
        "type": "p",
        "text": "Dancehall continues to evolve."
      },
      {
        "type": "p",
        "text": "The Learn section reflects both:"
      },
      {
        "type": "li",
        "text": "historical knowledge"
      },
      {
        "type": "li",
        "text": "contemporary culture"
      },
      {
        "type": "p",
        "text": "This allows visitors to understand dancehall not only as history, but as an ongoing cultural movement that continues to shape music, fashion, dance, and identity worldwide."
      },
      {
        "type": "h1",
        "text": "Learn the Culture. Understand the Movement."
      },
      {
        "type": "h1",
        "text": "WHAT TO DO NEXT (IMPORTANT)"
      },
      {
        "type": "p",
        "text": "After you paste this into WordPress:"
      },
      {
        "type": "h2",
        "text": "Add structure:"
      },
      {
        "type": "p",
        "text": "Turn these into sections or clickable blocks:"
      },
      {
        "type": "li",
        "text": "Dancehall 101"
      },
      {
        "type": "li",
        "text": "Sound System Basics"
      },
      {
        "type": "li",
        "text": "Glossary"
      },
      {
        "type": "li",
        "text": "Fashion & Style"
      },
      {
        "type": "li",
        "text": "Global Influence"
      },
      {
        "type": "li",
        "text": "Students & Educators"
      },
      {
        "type": "p",
        "text": "This makes it easier to navigate."
      }
    ],
    "oldUrl": "https://dancehallmuseum.org/learn/",
    "images": []
  },
  "support": {
    "title": "Support",
    "blocks": [
      {
        "type": "h2",
        "text": "Support Dancehall Museum"
      },
      {
        "type": "h3",
        "text": "Help Preserve the Sound, Style, Movement, and Cultural Legacy of Dancehall"
      },
      {
        "type": "h3",
        "text": "Curated by YardRock TV | Researched by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "Dancehall Museum exists to preserve, interpret, and elevate one of Jamaica’s most influential cultural movements."
      },
      {
        "type": "p",
        "text": "As a digital museum, the institution is dedicated to documenting dancehall through exhibitions, collections, archives, education, and cultural research — ensuring that this history is preserved, respected, and made accessible for future generations."
      },
      {
        "type": "p",
        "text": "Support for Dancehall Museum helps sustain this mission and strengthens the preservation of dancehall as a living cultural heritage."
      },
      {
        "type": "h1",
        "text": "Why Support Matters"
      },
      {
        "type": "p",
        "text": "Dancehall is one of the most influential cultural movements of the modern era — yet much of its history remains under-documented, vulnerable to loss, or absent from formal institutions."
      },
      {
        "type": "p",
        "text": "Dancehall Museum was created to help address that gap."
      },
      {
        "type": "p",
        "text": "Support helps the museum:"
      },
      {
        "type": "li",
        "text": "preserve archival materials"
      },
      {
        "type": "li",
        "text": "build digital exhibitions"
      },
      {
        "type": "li",
        "text": "document oral histories"
      },
      {
        "type": "li",
        "text": "expand educational resources"
      },
      {
        "type": "li",
        "text": "support research and interpretation"
      },
      {
        "type": "li",
        "text": "create a permanent cultural record of dancehall heritage"
      },
      {
        "type": "p",
        "text": "By supporting Dancehall Museum, you are helping preserve a cultural movement that has shaped music, fashion, dance, identity, and global creativity."
      },
      {
        "type": "h1",
        "text": "Ways to Support"
      },
      {
        "type": "h2",
        "text": "Become a Supporter"
      },
      {
        "type": "p",
        "text": "Support the growth of Dancehall Museum as a leading digital institution for dancehall heritage, education, and cultural preservation."
      },
      {
        "type": "p",
        "text": "Support may help sustain:"
      },
      {
        "type": "li",
        "text": "digital exhibitions"
      },
      {
        "type": "li",
        "text": "collections development"
      },
      {
        "type": "li",
        "text": "educational resources"
      },
      {
        "type": "li",
        "text": "research initiatives"
      },
      {
        "type": "li",
        "text": "oral history preservation"
      },
      {
        "type": "li",
        "text": "archive expansion"
      },
      {
        "type": "h2",
        "text": "Partner With the Museum"
      },
      {
        "type": "p",
        "text": "Dancehall Museum welcomes opportunities to collaborate with organizations, institutions, brands, cultural platforms, and community partners aligned with the preservation and celebration of Jamaican culture."
      },
      {
        "type": "p",
        "text": "Partnership opportunities may include:"
      },
      {
        "type": "li",
        "text": "exhibition partnerships"
      },
      {
        "type": "li",
        "text": "educational collaborations"
      },
      {
        "type": "li",
        "text": "archival preservation initiatives"
      },
      {
        "type": "li",
        "text": "media and cultural programming"
      },
      {
        "type": "li",
        "text": "community engagement projects"
      },
      {
        "type": "li",
        "text": "institutional collaborations"
      },
      {
        "type": "h2",
        "text": "Sponsor an Exhibition or Program"
      },
      {
        "type": "p",
        "text": "Supporters and partners may help bring museum initiatives to life through sponsorship of:"
      },
      {
        "type": "li",
        "text": "digital exhibitions"
      },
      {
        "type": "li",
        "text": "oral history projects"
      },
      {
        "type": "li",
        "text": "educational programs"
      },
      {
        "type": "li",
        "text": "special cultural features"
      },
      {
        "type": "li",
        "text": "archive and preservation initiatives"
      },
      {
        "type": "p",
        "text": "Sponsorship helps expand the museum’s reach while supporting meaningful cultural work."
      },
      {
        "type": "h2",
        "text": "Contribute to the Archive"
      },
      {
        "type": "p",
        "text": "Dancehall history lives in personal collections, community memory, media materials, and lived experience."
      },
      {
        "type": "p",
        "text": "Future archive contributions may include:"
      },
      {
        "type": "li",
        "text": "flyers and posters"
      },
      {
        "type": "li",
        "text": "photographs"
      },
      {
        "type": "li",
        "text": "media clippings"
      },
      {
        "type": "li",
        "text": "VHS and video recordings"
      },
      {
        "type": "li",
        "text": "oral histories"
      },
      {
        "type": "li",
        "text": "memorabilia"
      },
      {
        "type": "li",
        "text": "fashion-related materials"
      },
      {
        "type": "li",
        "text": "sound system and cultural ephemera"
      },
      {
        "type": "p",
        "text": "Dancehall Museum aims to become a trusted digital home for preserving these materials with care and cultural respect."
      },
      {
        "type": "h2",
        "text": "Share Knowledge & Cultural Memory"
      },
      {
        "type": "p",
        "text": "Support also means helping preserve stories."
      },
      {
        "type": "p",
        "text": "Dancehall Museum values the voices of:"
      },
      {
        "type": "li",
        "text": "artists"
      },
      {
        "type": "li",
        "text": "dancers"
      },
      {
        "type": "li",
        "text": "selectors"
      },
      {
        "type": "li",
        "text": "stylists"
      },
      {
        "type": "li",
        "text": "designers"
      },
      {
        "type": "li",
        "text": "promoters"
      },
      {
        "type": "li",
        "text": "photographers"
      },
      {
        "type": "li",
        "text": "cultural participants and communities"
      },
      {
        "type": "p",
        "text": "As the museum grows, opportunities for oral histories, interviews, and community memory contributions will continue to expand."
      },
      {
        "type": "h1",
        "text": "Who You Support When You Support Dancehall Museum"
      },
      {
        "type": "p",
        "text": "When you support Dancehall Museum, you support:"
      },
      {
        "type": "li",
        "text": "Jamaican cultural preservation"
      },
      {
        "type": "li",
        "text": "Black cultural memory"
      },
      {
        "type": "li",
        "text": "intergenerational storytelling"
      },
      {
        "type": "li",
        "text": "music and performance history"
      },
      {
        "type": "li",
        "text": "dancehall fashion and style heritage"
      },
      {
        "type": "li",
        "text": "sound system culture"
      },
      {
        "type": "li",
        "text": "educational access"
      },
      {
        "type": "li",
        "text": "research and interpretation"
      },
      {
        "type": "li",
        "text": "the preservation of a living cultural movement"
      },
      {
        "type": "h1",
        "text": "A Museum for Culture, Community, and Future Generations"
      },
      {
        "type": "p",
        "text": "Dancehall Museum is being built as a lasting cultural institution — one that honors the people, creativity, energy, and innovation that made dancehall a global force."
      },
      {
        "type": "p",
        "text": "Support helps ensure that this history is not lost, overlooked, or erased."
      },
      {
        "type": "p",
        "text": "It helps create a future in which dancehall is preserved with the care, seriousness, and visibility it deserves."
      },
      {
        "type": "h1",
        "text": "Institutional Framework"
      },
      {
        "type": "p",
        "text": "Dancehall Museum is developed through a cultural and research-driven framework led by:"
      },
      {
        "type": "h3",
        "text": "Research by The Reggae Institute"
      },
      {
        "type": "p",
        "text": "This structure supports the museum’s commitment to cultural integrity, scholarship, and public education."
      },
      {
        "type": "h1",
        "text": "Join the Preservation of Dancehall Culture"
      },
      {
        "type": "p",
        "text": "Support the museum. Preserve the culture. Honor the legacy."
      },
      {
        "type": "li",
        "text": "Partner With Us"
      },
      {
        "type": "li",
        "text": "Contribute to the Archive"
      },
      {
        "type": "li",
        "text": "Support the Museum"
      }
    ],
    "oldUrl": "https://dancehallmuseum.org/support/",
    "images": []
  },
  "home": {
    "title": "DANCEHALL MUSEUM",
    "blocks": [
      {
        "type": "h2",
        "text": "Super Cat: Cool Authority, Style, and the Architecture of Dancehall Swagger"
      },
      {
        "type": "p",
        "text": "Photo: Martei Korley Super Cat: Cool Authority, Style, and the Architecture of Dancehall Swagger A Dancehall Museum Journal Feature Researched by The Reggae Institute Curated by YardRock TV In the visual history of dancehall, few figures embody the power of understated style as completely as Super Cat. Where some artists commanded attention through spectacle, excess,…"
      },
      {
        "type": "p",
        "text": "Read More Super Cat: Cool Authority, Style, and the Architecture of Dancehall SwaggerContinue"
      },
      {
        "type": "h2",
        "text": "Shabba Ranks and the Global Dancehall Image"
      },
      {
        "type": "p",
        "text": "Shabba Ranks and the Global Dancehall Image A Dancehall Museum Journal Feature Researched by The Reggae Institute Curated by YardRock TV Few artists have shaped the global image of dancehall as powerfully as Shabba Ranks. Before dancehall became a familiar visual and sonic language in international music culture, Shabba Ranks helped carry its image onto…"
      },
      {
        "type": "p",
        "text": "Read More Shabba Ranks and the Global Dancehall ImageContinue"
      },
      {
        "type": "h2",
        "text": "Yellowman: The Legendary Voice Who Helped Define Dancehall"
      },
      {
        "type": "p",
        "text": "Yellowman: The Legendary Voice Who Helped Define Dancehall A Dancehall Museum Journal Feature Researched by The Reggae Institute Curated by YardRock TV Few figures in the history of dancehall are as important, recognizable, or culturally foundational as Yellowman. To speak of Yellowman is to speak of one of the defining architects of early dancehall…"
      },
      {
        "type": "p",
        "text": "Read More Yellowman: The Legendary Voice Who Helped Define DancehallContinue"
      },
      {
        "type": "h2",
        "text": "The Language of Dancehall: Patois, Style, and Identity"
      },
      {
        "type": "p",
        "text": "The Language of Dancehall: Patois, Style, and Identity A Dancehall Museum Journal Feature Researched by The Reggae Institute Curated by YardRock TV Dancehall is not only a sound or a style. It is a language. From the earliest days of Jamaican sound system culture to the global spread of dancehall, language has been central to…"
      },
      {
        "type": "p",
        "text": "Read More The Language of Dancehall: Patois, Style, and IdentityContinue"
      },
      {
        "type": "h2",
        "text": "The History of Dancehall Queens & the Legacy of Carlene Smith"
      },
      {
        "type": "p",
        "text": "The History of Dancehall Queens & the Legacy of Carlene Smith Reggae Museum | Reggae Fashion Museum Permanent Cultural Archive Introduction: Dancehall as Cultural Runway Dancehall is not merely a music genre. It is a living cultural institution — a performance space, a fashion runway, and a site of social expression rooted in Jamaica’s post-independence…"
      },
      {
        "type": "p",
        "text": "Read More The History of Dancehall Queens & the Legacy of Carlene SmithContinue"
      },
      {
        "type": "h2",
        "text": "How Jamaican Culture Shaped New York, the Entertainment Industry, and the World"
      },
      {
        "type": "p",
        "text": "How Jamaican Culture Shaped New York, the Entertainment Industry, and the World By Dancehall Museum Roots That Cross Oceans: Jamaica’s Cultural Powerhouse From the streets of Kingston to the boroughs of New York City, Jamaican culture has left an unforgettable mark on global music, fashion, language, and lifestyle. What began with ska, rocksteady, reggae,…"
      },
      {
        "type": "p",
        "text": "Read More How Jamaican Culture Shaped New York, the Entertainment Industry, and the WorldContinue"
      },
      {
        "type": "h2",
        "text": "Dancehall Origins: From Kingston Jamaica to the World"
      },
      {
        "type": "p",
        "text": "Dancehall Origins: From Kingston to the World A Dancehall Museum Journal Feature Researched by The Reggae Institute Curated by YardRock TV Dancehall is one of the most influential cultural movements to emerge from Jamaica in the modern era. What began in the dance spaces, sound systems, neighborhoods, and social life of Kingston would evolve into…"
      },
      {
        "type": "p",
        "text": "Read More Dancehall Origins: From Kingston Jamaica to the WorldContinue"
      },
      {
        "type": "h2",
        "text": "Dancehall Dancers & Fashion Icons – Bogle, Latonya Style, and the Legacy of Style in Motion"
      },
      {
        "type": "p",
        "text": "Dancehall, born in the inner-city streets of Kingston, Jamaica, is more than a musical genre — it’s a culture. From music to language, to fashion and especially dance, it’s a living, breathing form of expression that has shaped global popular culture. At the heart of this movement are the dancers — trendsetters, stylists, and…"
      },
      {
        "type": "p",
        "text": "Read More Dancehall Dancers & Fashion Icons – Bogle, Latonya Style, and the Legacy of Style in MotionContinue"
      },
      {
        "type": "h2",
        "text": "The Evolution of Dancehall Fashion: A Journey Through Six Eras"
      },
      {
        "type": "p",
        "text": "The Evolution of Dancehall Fashion: A Journey Through Six Eras Dancehall has always been more than just music — it’s a movement, a lifestyle, and a bold expression of Caribbean identity. Nowhere is this more evident than in its fashion. From the early sound system parties to today’s global stage, dancehall fashion has evolved through…"
      },
      {
        "type": "p",
        "text": "Read More The Evolution of Dancehall Fashion: A Journey Through Six ErasContinue"
      },
      {
        "type": "h2",
        "text": "Icons of Dancehall Style: Artists Who Defined the Image of the Culture"
      },
      {
        "type": "p",
        "text": "Icons of Dancehall Style: Artists Who Defined the Image of the Culture A Dancehall Museum Journal Feature Researched by The Reggae Institute Curated by YardRock TV Dancehall is not only heard. It is seen. From its earliest days in Kingston’s dance spaces and sound systems, dancehall has been a culture built as much on…"
      },
      {
        "type": "p",
        "text": "Read More Icons of Dancehall Style: Artists Who Defined the Image of the CultureContinue"
      }
    ],
    "oldUrl": "https://dancehallmuseum.org/",
    "images": [
      "/images/story-dnc-MK_Supercat-_V8A3835-Edit-2-768x1152.webp",
      "/images/482247040_970211665296490_4686709794465772903_n.jpg",
      "/images/maxresdefault-3-768x432.jpg",
      "/images/307af777db51e08b041d79c3555f3f12-1.jpg",
      "/images/Dancehall-Queen-Carlene-961x1200-1-768x959.webp",
      "/images/sWiTrjKQ-scaled-e1605022466911_2023-03-27-132921_juvl-1-768x647.jpeg"
    ]
  }
}
