# BAGIAN 7 · PROMPT AI UNTUK SEMUA ASET

*Satu prompt per elemen, nama file mengikuti Design Bible Visual (bagian 4.10 dan 10.2) · Untuk Jassinta Roid Triniti · 11 Oktober 2026 · Versi 1*

**Catatan revisi (13 Oktober 2026).** Awalan prompt, prompt dinding, label, dan benda di bagian ini sudah disesuaikan ke Paper Cut-Out Art bertekstur dari kertas handmade, tanpa kontur tinta. Prompt dipakai sebagai referensi visual untuk membaca bentuk, warna, dan suasana. Aset akhir dibuat ulang dengan kode (lihat Bagian 6: Produksi Paper Cut-Out dengan Kode). Doll dan 55 aset yang sudah ada hanya referensi desain dan bentuk.

## 0. Cara Memakai (PA)

- Prompt ditulis dalam **bahasa Inggris** karena paling stabil di generator gambar (Midjourney, Firefly, Imagen, Flux, Ideogram, dll). Penjelasan dalam bahasa Indonesia.

- Setiap baris = **satu aset = satu prompt**. Rumus prompt akhir: **PREFIX (pilih satu dari 0.1) + isi kolom Prompt + NEGATIVE (0.2)**. Prefix ditulis sekali di sini agar setiap prompt tetap pendek dan gaya semua aset identik.

- **Doll:** selalu lampirkan gambar masterku (Paper_doll_Jassinta_Full_Body.png) sebagai *image reference / character reference* agar tubuh, wajah, brad, dan garis konsisten. Kostum di dalam prompt diganti sesuai baris.

- **Latar transparan:** generator jarang memberi alfa asli. Minta latar putih polos, lalu hapus latar (remove.bg, Photoshop, atau Firefly) dan ekspor WebP transparan 1× dan 2×. Tepi kertas 2 sampai 3 px sudah ada dalam gambar.

- **Warna:** generator sering menggeser hex. Setelah jadi, ambil warna dengan eyedropper dan koreksi ke hex di tabel (Hue/Saturation atau Replace Color).

- **Nama file** persis seperti kolom Nama file. Format kostum: doll_{kostum#}_{nama}_{tampak}_{pose}.webp. Format benda: {chapter}_{ID}_{nama}_{sudut}.webp. Sudut: V0 depan, V3 tiga perempat, VS samping, VB belakang, VT atas, VX penampang, VH gantung, VL sandar.

- Aset yang bible tetapkan sebagai **efek atau CSS** (filter sepia, glow, wipe) diberi catatan *tidak digenerate*, bukan prompt.

- Tanda **[repeat]** = pakai ulang file yang sudah ada dengan pewarnaan variabel, tidak digenerate lagi.

### 0.1 Prefix (pilih satu) (PA)

| **Kode** | **Dipakai untuk** | **Prefix (tempel di awal prompt)** |
| --- | --- | --- |
| **P-DOLL** | Semua gambar doll dan wajah | handmade paper cut-out doll, layered cut pieces of textured handmade paper with visible fibers and tiny speckles, slightly deckle hand-cut edges, soft layered drop shadow, no ink outline, flat pastel paper colors with one slightly darker paper layer for shading and no gradients, simple round face made of tiny cut-paper shapes (black dot eyes, thin crescent eyelids, soft pink blush circles, tiny smile), skin color #E8B795, ten grey metal brad fasteners #BDBDBD visible at both shoulders, elbows, hands, knees and ankles, black flat shoes #2E2E2E, hijab always covering hair and neck with soft folds, about 4 heads tall, exactly the same character, face, proportions and shapes as the attached reference image, isolated on plain white background |
| **P-PROP** | Semua benda berdiri, interior, props | handmade paper cut-out illustration, shapes cut from textured handmade paper with visible fibers and tiny speckles, deckle hand-cut edges, flat pastel paper colors with at most three tones made by stacked paper layers, 2 to 3 px paper thickness at the edges, soft layered drop shadow directly below, slightly chunky rounded shapes, no ink outline, no gradients, no photorealism, no text unless stated, isolated on plain white background |
| **P-SURFACE** | Dinding, lantai, karpet, bidang lebar | seamless handmade paper texture, cotton rag paper with visible fibers and tiny speckles, flat pastel color, no gradients, no lines, no objects, no people, tileable, orthographic |
| **P-SCENE** | Siluet jauh, skyline, landmark | handmade paper cut-out silhouette of a distant landmark, textured muted pastel paper, slightly deckle edge, soft shadow, minimal detail with one window one door one sign, isolated on plain white background |
| **P-UI** | Stiker, tag, label, tombol, kartu | cut-paper label or tag made of textured handmade paper, deckle cut edge, flat color with one darker underlayer offset as shadow paper, soft layered shadow, slight tilt, isolated on plain white background |

### 0.2 Negative prompt (untuk semua) (PA)

photorealistic, 3D render, glossy plastic, glassmorphism, neon, gradient shading, vector corporate icon, stock icon, ink outline, notebook lines, ruled lines, margin lines, graph paper, smooth vector fills, perspective distortion, complex background, scene, hands with extra fingers, deformed face, real brand logos, copyrighted characters, watermark, signature, blurry

## 1. Master Doll, Wajah, dan Brad (PA)

### 1.1 Turnaround master (3 tampak) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_00_master_F_idle.webp | front view full body standing idle, arms slightly away from body 4 degrees, grey single-button blazer #7A7A7A with notched lapel, two flap pockets and white cuffs, white inner shirt, straight grey trousers #7A7A7A hem at ankle, black hijab #1F1F1F draped in a thick roll at the neck with 3 to 4 diagonal folds ending at 25 percent of body height, neutral smiling face, replicate the attached reference exactly |
| doll_00_master_W_idle.webp | strict side profile facing right, body narrowed to 24 percent of height, hijab in profile with the neck roll on the side, one dot eye, one blush circle, tiny nose bump, short mouth, near arm overlapping the torso, far arm only 60 percent visible, same grey blazer outfit and black hijab, brads visible on near shoulder, elbow, hand, knee and ankle |
| doll_00_master_B_idle.webp | back view full body, no face, hijab seen from behind with a vertical center fold, grey blazer back with short center vent, straight grey trousers, black flat shoes, brads at shoulders, elbows, hands, knees and ankles visible |

### 1.2 Wajah (6 ekspresi × tampak F dan W) (PA)

Semua wajah: *face layer only, cropped to the head with hijab opening, same skin #E8B795, blush #E9A39B at 60 percent, eyes and mouth placed on a face grid (eyes at 50 percent of face height, blush at 68 percent, mouth at 84 percent).* Ekspresi menimpa lapisan wajah.

| **Nama file** | **Prompt (tempel setelah P-DOLL, hanya kepala)** |
| --- | --- |
| face_neutral_F.webp | front face, black dot eyes with thin eyelid line, flat eyebrows 0 degrees color #3A2A24, tiny nose dot #D49A7B, straight short mouth #B5645F with 1 px upturn, blush 60 percent, head level |
| face_neutral_W.webp | side profile face facing right, one dot eye, flat eyebrow, small nose bump, short straight mouth, one blush circle |
| face_smile_F.webp | front face, dot eyes, natural curved eyebrows, closed smile arc 18 percent of face width raised 2 px, blush 60 percent, head level (master expression) |
| face_smile_W.webp | side profile facing right, dot eye, gentle smile arc, one blush circle |
| face_curious_F.webp | front face, dot eyes shifted 1 px up and sideways, left eyebrow raised 10 degrees and right flat, small asymmetric mouth tilted 3 degrees, head tilted 6 degrees to the right |
| face_curious_W.webp | side profile facing right, eye shifted up, one eyebrow raised, small tilted mouth, head tilted 6 degrees |
| face_surprised_F.webp | front face, dot eyes 20 percent larger with a tiny white highlight, eyebrows raised 12 degrees, small oval mouth 6 percent wide, blush 70 percent, head pulled back 2 px, optional three tiny shock lines above |
| face_surprised_W.webp | side profile facing right, enlarged dot eye with highlight, raised eyebrow, small oval mouth |
| face_proud_F.webp | front face, eyes as closed upward arcs (happy ^ ^) 14 percent of face width, eyebrows raised 4 degrees, wide open D-shaped smile 22 percent wide filled #B5645F at 40 percent, blush 90 percent, chin lifted 2 degrees |
| face_proud_W.webp | side profile facing right, closed happy arc eye, open D-shaped smile, strong blush |
| face_focused_F.webp | front face, dot eyes 10 percent smaller, eyebrows lowered inward 6 degrees, straight short mouth 10 percent wide, blush 50 percent, head level |
| face_focused_W.webp | side profile facing right, small dot eye, lowered eyebrow, short straight mouth |

### 1.3 Brad (5 jenis, SVG) (PA)

| **Nama file** | **Prompt (tempel setelah P-PROP, tanpa outline tebal)** |
| --- | --- |
| brad_shoulder.svg | single round paper-fastener brad seen from above, diameter small, fill #BDBDBD, thin ring #8A8A8A, one white highlight dot, flat vector, centered |
| brad_elbow.svg | same brad with an extra darker soft ring around it (diameter 4.5 percent of body height) representing a fabric dimple, fill #BDBDBD, ring #8A8A8A, white highlight dot |
| brad_hand.svg | same single brad, fill #BDBDBD, ring #8A8A8A, white highlight dot |
| brad_knee.svg | same brad with a larger darker oval ring, fill #BDBDBD, ring #8A8A8A, white highlight dot |
| brad_ankle.svg | same single brad, fill #BDBDBD, ring #8A8A8A, white highlight dot |

## 2. Kostum (17) dan Pose (PA)

Joint: sudut dari garis vertikal turun. Walk = **sprite sheet 6 bingkai** satu prompt, dipotong menjadi walk-1 sampai walk-6. Bayangan doll di lantai dibuat terpisah (4.11), bukan di prompt.

### K1. Seragam santai (Chapter 0 dan 8) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_01_seragam_F_peek.webp | cropped to the top 35 percent of the body only: head with cream pashmina hijab #F3E3B8 rolled at the neck, head tilted 6 degrees, smiling, one mitten hand pressing on a torn paper edge, pink ID lanyard #FF8DC7 visible at the upper chest, no legs or shoes |
| doll_01_seragam_W_walk-sheet.webp | side view facing right, 6-frame walk cycle sprite sheet in one row, white long-sleeve shirt #FFFDF9 with round Peter Pan collar, mint V-neck knit vest #A8E6CF with four vertical cable lines, pleated A-line skirt #BFE3F5 with 9 pleats ending at 80 percent of height, white socks #FFFDF9, cream hijab #F3E3B8, ID card on pink lanyard, hips plus or minus 18 degrees, knees 0 to 18, shoulders plus or minus 22 swinging opposite to hips, body bob 2 px |
| doll_01_seragam_F_wave.webp | front view, same outfit and cream hijab, right arm raised 150 degrees with elbow bent, open mitten waving, other arm relaxed, head tilted 4 degrees, smiling |
| doll_01_seragam_W_hold-letter.webp | side view facing right, same outfit, both hands holding a cream envelope #FFFDF9 with a small red heart seal #E5173F at chest height, arms bent about 60 degrees |
| doll_01_seragam_B_idle.webp | back view, same outfit, cream hijab with center fold, ID lanyard strap visible at the neck, pleated skirt from behind |

### K2. Blazer pink (Chapter 1) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_02_blazer_W_walk-sheet.webp | side view facing right, 6-frame walk sprite sheet, pastel pink one-button blazer #F7CAD0 with gold button #D4A64A and flap pockets, white inner top #FFFFFF, straight trousers #F8F0DC ending at ankle, pashmina hijab #F8F0DC, pink ID lanyard #FF8DC7 |
| doll_02_blazer_F_idle.webp | front view standing, same pink blazer exactly cut like the master blazer, white cuffs, straight cream trousers, cream pashmina hijab, ID lanyard with white card |
| doll_02_blazer_W_reach.webp | side view facing right, leaning forward 6 degrees, near arm reaching forward 95 degrees to grab a sheet of paper, far arm back 15 degrees, same pink blazer outfit |

### K3. Rompi reporter (Chapter 2) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_03_reporter_W_walk-sheet.webp | side view facing right, 6-frame walk sprite sheet, beige reporter vest #F3E3B8 down to 56 percent of height with two chest flap pockets, one waist pocket and three square buttons #7A4A32, white long-sleeve shirt #FFFDF9, straight tan trousers #A57C5B, pashmina hijab light blue #BFE3F5, tiny PRESS card clipped on the chest pocket |
| doll_03_reporter_F_idle.webp | front view, same reporter outfit, small yellow notepad #FFF1A8 with grey spiral at the top and a black pen held in one hand, focused expression |

### K4. Kardigan lobi (3.0) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_04_lobi_W_walk-sheet.webp | side view facing right, 6-frame walk sprite sheet, long open cardigan #FFD6E8 to 62 percent of height with ribbed cuffs and hem and two patch pockets, white V-neck inner #FFFDF9, wide-leg trousers #FFF8EE flared 26 percent of height, wisteria purple hijab #A98BDA |
| doll_04_lobi_F_hold-phone.webp | front view, same cardigan outfit and wisteria hijab, right hand holding a pink phone #FF8DC7 with white screen and a small pink heart #FF2E93, elbow bent 80 degrees |
| doll_04_lobi_F_point-door.webp | front view, same outfit, right arm pointing 70 degrees up and out with a single index finger, torso leaning 3 degrees toward the pointing side, head turned slightly |

### K5. Barista (3A) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_05_cafe_F_idle.webp | front view, cream bib apron #F8F8C8 from chest to 70 percent of height with green trim #066838 2 px, apron neck strap, front pocket with a yellow notepad #FFF1A8, tiny round badge with a coffee cup on the chest, over a cream cardigan #FFF8EE, brown straight trousers #5A3A2E, cream pashmina hijab #F3E3B8 |
| doll_05_cafe_F_hold-cup.webp | front view, same barista outfit, right hand holding a white ceramic cup #FFFDF9 with highlight and three steam lines, elbow bent 80 degrees |
| doll_05_cafe_B_idle.webp | back view, same barista outfit, apron strap crossing the back and a bow at the waist, cream hijab from behind |

### K6. Jas klinik (3B) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_06_klinik_F_hold-bottle.webp | front view, long pink clinic coat #FFB3D9 to 70 percent of height with wide white notch collar, three pearl-white buttons, two big pockets, side slits, white cuffs, white inner and cream trousers #FFFDF9, neat triangle hijab #FFD6E8 with a clean point under the chin (no neck roll), white name tag with gold border #D4A64A and a small pink bow #FF8DC7 on the lapel, right hand holding a small white serum bottle with gold dropper cap |
| doll_06_klinik_F_point-flyer.webp | front view, same clinic outfit, right arm pointing up and out 70 degrees with an index finger, head turned toward the pointing side |

### K7. Traveling (3C) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_07_traveling_W_walk-sheet.webp | side view facing right, 6-frame walk sprite sheet, long layered outer coat #F8F0DC to 80 percent of height with tall standing collar over a white blouse #FFFDF9, wide-leg trousers #D9D3D6, sky-blue pashmina hijab #A7D8F5 with a pastel lavender scarf #B8C4F2 draped diagonally from shoulder to hip with four tassels |
| doll_07_traveling_F_hold-passport.webp | front view, same travel outfit and scarf, holding a dark green passport #04502A with a small gold circle emblem #D4A64A at chest height |

### K8. Butik dasar (Chapter 4) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_08_butik_F_hold-suitcase.webp | front view, loose cream blouse #FFF8EE with band collar and five tiny champagne buttons, long A-line skirt #EBD08C with six thin pleats ending at 88 percent of height, white socks, dusty-rose pashmina hijab #E8A5B8, right hand holding the handle of an ivory suitcase #F8F0DC with champagne trim #EBD08C standing beside her |
| doll_08_butik_W_reach-hanger.webp | side view facing right, same boutique outfit, near arm reaching up 95 degrees toward a clothes hanger, torso leaning forward 6 degrees |

### K9 sampai K12. Outfit Chapter 4.7 (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_09_hardselling_F_idle.webp | front view, vintage long-sleeve shirt dress #E8A5B8 with waist at 48 percent of height, thin champagne belt #EBD08C, flared skirt ending at 85 percent, scalloped round collar #FFF8EE, five fabric-covered buttons, puff cuffs, white socks, champagne pashmina hijab #EBD08C with a small cream pillbox hat #FFF8EE tilted 12 degrees with a burgundy ribbon #881838, small gold box handbag #D4A64A in the right hand |
| doll_10_entertainment_F_idle.webp | front view, outfit split vertically down the center: left half a grey-lilac office blazer #B9B8CC with lapel and white shirt, right half a peach bomber campus jacket #FFB38A with white stripes, one pair of brown trousers #5A3A2E, white zigzag stitch #FFFFFF along the split line from chin to hem, light grey pashmina hijab #F4EFF1 |
| doll_11_education_F_idle.webp | front view, simple white blouse #FFFDF9 with Peter Pan collar, A-line skirt #8FB8E8 to 82 percent, white socks, light grey hijab #F4EFF1, right hand holding a pink phone #FF8DC7 whose screen shows two chat bubbles (pink and baby-blue), a small white speech bubble with DM floating above the phone |
| doll_12_fun_F_idle.webp | front view, hot pink tunic #FF8DC7 with side slits and three small yellow star patches #FFF1A8 (not on the brads), wide straight trousers #A8E6CF, butter-yellow pashmina hijab #FFF1A8 knotted at the side, rounded-square sunglasses with black frame and pink lenses #FF2E93, black chunky sneakers with white sole stripe |
| doll_12_fun_F_jump.webp | front view mid-jump, same fun outfit, both arms raised 35 degrees, knees tucked 12 degrees, feet off the ground, slight upward motion |

### K13. Jaket kampus (Chapter 5) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_13_kampus_W_walk-sheet.webp | side view facing right, 6-frame walk sprite sheet, grey-lilac bomber jacket #B9B8CC with center zipper, two diagonal pockets, ribbed collar cuffs and hem with two white stripes, round peach patch #FFB38A with a white book icon, white shirt collar #FFFDF9, straight jeans #8FB8E8 rolled at the hem showing #BFE3F5, light grey pashmina hijab #D9D3D6, peach backpack #FFB38A 22 percent of body height with front pocket and brown straps #5A3A2E, black sneakers with white sole |
| doll_13_kampus_W_reach-headphone.webp | side view facing right, same campus outfit with backpack, near arm reaching forward and up 95 degrees toward a headphone, leaning forward 6 degrees |
| doll_13_kampus_B_idle.webp | back view, same campus outfit, backpack with both straps and top handle clearly visible, hijab from behind |

### K14. Siaran (Chapter 6) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_14_siaran_F_nod.webp | front view, loose satin blouse #DA9AF2 with two diagonal highlight streaks #F4DDFB, pussy-bow collar at the neck, long sleeves with gathered cuffs, wide-leg trousers #F3E3B8, orchid-plum pashmina hijab #C58AC9, black headphones over the hijab with pink ear pads #FF2E93, head dipped 2 px as a nod |
| doll_14_siaran_W_reach-headphones-off.webp | side view facing right, same broadcast outfit, both hands lifting the headphones off the head, elbows bent 55 degrees |

### K15. Arsip (Chapter 7) (PA)

| **Nama file** | **Prompt (tempel setelah P-DOLL)** |
| --- | --- |
| doll_15_arsip_W_lift-box.webp | side view facing right, mustard shawl-collar long cardigan #D9A441 to 64 percent of height with two patch pockets, white inner #FFFDF9, brown trousers #5A3A2E, cream pashmina hijab #F3E3B8, both arms lifting a grey archive box #D9D3D6 with a yellow label #FFF1A8 at chest height, torso leaning back 3 degrees |
| doll_15_arsip_F_idle.webp | front view, same archive outfit, hands relaxed, calm smile |

### K16 dan K17 (varian utilitas) (PA)

| **Nama file** | **Keterangan dan prompt** |
| --- | --- |
| doll_16_kampus-sepia_W_walk-sheet.webp | **Tidak digenerate.** Ambil doll_13_kampus_W_walk-sheet.webp, balik horizontal (menghadap kiri), beri filter sepia(0.9) saturate(0.7) brightness(0.97) contrast(0.95) |
| doll_17_ikon-kepala_F_icon.webp | square icon, head and black hijab #1F1F1F only, smiling face, simple round shape, clean thin outline, white die-cut border 1 px, 8 percent padding, at 32 px version remove eyebrows and nose and keep two dot eyes, two blush dots and one smile line |

## 3. Barang per Chapter (PA)

Urutan dan ID sama dengan Design Bible Visual bagian 8 dan 9. Ukuran rasio ditulis di prompt agar bentuk sesuai bible. Pola nama file: {chapter}_{ID}_{nama}_{sudut}.webp.

### 3.1 Chapter 0: Loker dan Paper School (PA)

Loker akhirnya **dibangun ulang dengan CSS 3D**. Gambar loker di sini hanya **aset referensi** bentuk, warna, dan detail untuk pengembang, bukan untuk ditempel di web.

**Loker tertutup**

| **Nama file** | **Prompt** |
| --- | --- |
| 0_0-01_badan-loker-tertutup_V3.webp | (P-PROP) reference art of a row of five tall paper-cutout school lockers seen in three-quarter view, door ratio 1:3, steel-lilac #B9B8CC doors for lockers 1 and 5, lavender #BFA8E5 for 2 and 4, lilac #D4C1F5 for the center locker 3, chrome posts #C9CCD5 between and outside, visible ceiling, thick door edges, aspect ratio 5:3 |
| 0_0-02_plat-nomor_V0.webp | (P-PROP) front view chrome number plate #C9CCD5 with four dome bolts, wide rectangle 4:1, blank number area for numerals 01 to 05, white highlight stroke on the top edge |
| 0_0-03_ventilasi_V0.webp | (P-PROP) front view of five horizontal embossed vent slits stacked, each slit 25:1, hollow dark inside (ink at 35 percent), lighter top edge, on a steel-lilac #B9B8CC panel |
| 0_0-04_handle-dudukan_V3.webp | (P-PROP) three-quarter view chrome latch bar handle #C9CCD5 in a rectangular mounting plate, vertical, ratio 1:2.5, white highlight stroke, 12 px visible thickness on the side |
| 0_0-05_lubang-kunci_V0.webp | (P-PROP) front view small round chrome key hole ring #C9CCD5 with a dark ink slot, tiny, centered |
| 0_0-06_blok-tipografi_V0.webp | (P-UI) four separate hand-cut highlight blocks in a vertical stack tilted 1 degree, no text: pink #FF8DC7 with butter #FFF1A8, mint #A8E6CF with lilac #D4C1F5, baby-blue #BFE3F5, peach #FFB38A, white sticker edges |
| 0_0-07_tombol-open_V0.webp | (P-UI) wide pill sticker button, hot-pink glitter #FF2E93 with subtle glitter speckles, white play triangle on the left, empty space for the word OPEN, tilted 2 degrees, hard soft shadow |

**Loker terbuka dan kartu**

| **Nama file** | **Prompt** |
| --- | --- |
| 0_0-10_interior-loker-terbuka_V3.webp | (P-PROP) reference art of an open tall paper-cutout locker without a door seen in three-quarter view, berry #7A2E5C interior walls, lavender #BFA8E5 shelves with front edges #A98BDA, two shelves plus floor, ceiling visible, thick shelf edges 14 px, empty inside, aspect ratio 1:3 |
| 0_0-11_kartu-services_V0.webp | (P-UI) tall paper card fully covering a locker door, cream #FFFDF9 with paper grain, hot-pink pushpin #FF8DC7 at top center, hot-pink tag label bar, row of rounded pill bullets with pink check circles #FF2E93 on blush #FFD6E8, empty text areas, aspect ratio 1:3 |
| 0_0-12_kartu-hello_V0.webp | (P-UI) tall paper card with a white-framed 9:16 video placeholder, red pushpin #E5173F at top, peach #FFB38A tag bar, large pink round play button #FF2E93, empty caption area below, aspect ratio 1:3 |
| 0_0-13_kartu-stack_V0.webp | (P-UI) tall paper card like a services card, lavender pushpin #A98BDA, lavender #BFA8E5 tag bar, pill bullets #D4C1F5 with checks, empty text areas, aspect ratio 1:3 |

**Barang suvenir (menempel di rak, V0 kecuali ditulis)**

| **Nama file** | **Prompt** |
| --- | --- |
| 0_0-20_sertifikat_V0.webp | (P-PROP) front view hanging certificate, cream paper #FFFDF9, double gold border #D4A64A, round red ribbon seal #E5173F with two tails, grey placeholder text lines, gold hanging string with a tiny nail, aspect ratio 960:700 |
| 0_0-21_piala_V3.webp | (P-PROP) three-quarter view trophy, gold #D4A64A cup with two handles and a small star, champagne #EBD08C highlight, tapered stem, stepped walnut base #7A4A32 with a cream plaque #FFFDF9, aspect ratio 520:750 |
| 0_0-22_majalah_V0.webp | (P-PROP) front view of five fashion magazines standing in a row showing covers, cover colors #FFD6E8, #D4C1F5, #FFF1A8, #BFE3F5, #FFB38A, flat stylized silhouette portrait on each cover, masthead area at the top with the word VOGUE in black Bodoni-style serif #1B1017, aspect ratio 740:960 |
| 0_0-23_kamera-pastelca_V3.webp | (P-PROP) three-quarter view retro film camera, baby-blue #BFE3F5 body, cream leather-grain lower half #FFFDF9, chrome top plate #C9CCD5, round lens with cream ring and black center, pink strap #FF8DC7, stitched seams, aspect ratio 560:365 |
| 0_0-24_sepatu-retro-runners_VS.webp | (P-PROP) side view of a pair of retro running sneakers side by side, pink #FF8DC7 body, cream #FFFDF9 side stripe and sole with a #FF2E93 sole line, white laces, aspect ratio 980:440 |
| 0_0-25_polaroid_V0.webp | (P-PROP) three hanging polaroid photos on a natural rope #D9B98C with two small yellow clothespins #F6D76B each, thick white frames with a thicker bottom, pastel sketch photos #FFD6E8 #BFE3F5 #A8E6CF, each tilted plus or minus 3 degrees, aspect ratio 840:330 |
| 0_0-26_amplop-surat_V0.webp | (P-PROP) front view cream envelope #FFFDF9 with triangle flap, airmail border stripes pink #FF8DC7 and blue #8FB8E8 on the edges, small red heart seal #E5173F, aspect ratio 840:530 |
| 0_0-27_buku_V0.webp | (P-PROP) seven books standing tightly together showing spines with no text, spine colors #FF8DC7, #A8E6CF, #FFF1A8, #BFE3F5, #D4C1F5, #FFB38A, #E8A5B8, varied heights between 80 and 100 percent, aspect ratio 1050:780 |
| 0_0-28_notes_V0.webp | (P-UI) standing yellow cut-paper label #FFF1A8 with a lifted corner and a red pin #E5173F, the word NOTES lettered in a rounded marker font, aspect ratio 520:760 |
| 0_0-29_tas-hobo_V3.webp | (P-PROP) three-quarter view hobo bag, half-moon shape, peach leather #FFB38A with leather grain and dashed stitching, walnut strap #7A4A32, small gold buckle #D4A64A, aspect ratio 800:700 |
| 0_0-30_payung-polkadot_VL.webp | (P-PROP) closed umbrella leaning 7.5 degrees to the right, cream fabric #FFFDF9 with pink polka dots #FF8DC7, walnut J-shaped handle #7A4A32, aspect ratio 210:880 |

**Latar koridor dan Paper School**

| **Nama file** | **Prompt** |
| --- | --- |
| 0_0-40_lantai-koridor_VT.webp | (P-SURFACE) top-down checker tile floor in cream #FFFDF9 and #F4EFF1, tileable, 4:3 |
| 0_0-41_lampu-koridor_VH.webp | (P-PROP) front view hanging rectangular ceiling light panel, chrome shell #C9CCD5, warm glass #FFF6C9, two hanging chains, aspect ratio 10:1 |
| 0_0-42_dinding-luar-handmade_V0.webp | (P-SURFACE) handmade deckle-edge paper wall, cream #FFFDF9, blue fibers #8FB8E8, vertical paper ribbon strip in red #E5173F at 55 percent opacity near the right edge, wide 16:9 |
| 0_0-43_lantai-hijau-berlipat_VT.webp | (P-SURFACE) folded green paper floor #B7D9A8 with vertical creases every 64 px at 8 percent darker, top-down, tileable, 4:1 |
| 0_0-44_jalur-bata_VT.webp | (P-SURFACE) top-down brick path two rows, blush #FFD6E8 bricks with #F7CAD0 shading and #E8A5B8 mortar lines, tileable, 8:1 |
| 0_0-45_garis-jahitan_VT.svg | **Tidak digenerate** (SVG atau CSS). Garis putus-putus ink 70 persen, tebal 2 px, garis 10 px jeda 8 px |
| 0_0-46_awan-berwajah_V0.webp | (P-PROP) two smiling paper clouds, cream #FFFDF9 with faint paper fibers inside, wavy edge, two black dot eyes and a small smile, soft shadow, aspect ratio 9:5 each |
| 0_0-47_pesawat-kertas_VH.webp | (P-PROP) origami dart paper plane tilted minus 12 degrees, baby-blue #BFE3F5 with white creases #FFFDF9, thin hanging string up to a pivot, aspect ratio 7:3 |
| 0_0-48_pohon-sakura_V0.webp | (P-PROP) cherry blossom tree cutout 1.4 times doll height, cocoa trunk #5A3A2E with three fiber lines, six clusters of five-petal blossoms #FFD6E8 with butter centers #FFF1A8, aspect ratio 4:5 |
| 0_0-49_bangku_V0.webp | (P-PROP) front view park bench with two slats and a backrest, walnut #7A4A32 with cocoa seat #5A3A2E, wooden board legs, aspect ratio 5:2 |
| 0_0-50_rumput-bunga_V0.webp | (P-PROP) set of a grass tuft with five blades in matcha #B7D9A8 and sage #A9C4A0, and a small flower on a stem with five pink petals #FFD6E8 and a butter center, arranged side by side, aspect ratio 2:1 |
| 0_0-51_gedung-paper-school_V0.webp | (P-SCENE) front view school building facade with one roof #E8A5B8, one door, one window and a round clock, walls #FFF8EE, aspect ratio 3:2 |
| 0_0-52_jam-sekolah_V0.webp | (P-PROP) round school wall clock, thick cream frame #FFFDF9, 12 dots, ink hands, red second hand #E5173F, aspect ratio 1:1 |
| 0_0-53_kertas-sobek-101.svg | **Tidak digenerate.** TornEdge seed 101, dibuat dengan kode (Portfolio Bible bagian 11) |
| 0_0-54_stiker-scroll-follow_V0.webp | (P-UI) pill sticker #FF2E93 tilted 3 degrees, empty space for the text Scroll to follow Jassinta with an arrow, white edge, aspect ratio 7:2 |
| 0_0-55_jejak-sepatu_VT.webp | (P-PROP) top-down pair of black flat shoe footprints #2E2E2E at 85 percent opacity, alternating left and right, slightly rotated 4 degrees, 6:3 ratio each |
| 0_0-56_preloader_V0.webp | (P-UI) square rounded sticker #FFB3D9 with a white zipper progress strip with silver teeth #C9CCD5 and a gold slider #D4A64A, empty space for text, aspect ratio 1:1 |

### 3.2 Chapter 1: The Editor's Desk (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| 1_1-01_kanvas_V0.svg | **Tidak digenerate.** Bidang putih murni #FFFFFF tanpa garis, lantai, grain |
| 1_1-02_tipografi-raksasa_V0.svg | **Tidak digenerate.** Teks Anton #E5173F lima baris: WHICH / COMPANIES / HAVE I / WORKED / FOR? |
| 1_1-03_foto-cutout-jassinta_V0.webp | **Foto aslimu** (tinggi minimal 1.300 px), potong dan beri tepi putih die-cut 3 persen. Bukan prompt AI |
| 1_1-04_lembar-dokumen_V0.webp | (P-PROP) blank square sheet of white paper #FFFFFF with a 1 px black border, layered soft paper shadow, subtle paper texture, a red staple #D7263D at the top-left corner at 45 degrees, empty areas for a number at the top-left, a category tag at the top-right, an archive label at the bottom, 1:1 |
| 1_1-05_staples-merah_V0.webp | (P-PROP) tiny red staple #D7263D, U-shape, 14 by 4 px, at 45 degrees |
| 1_1-06_klip-kertas_VH.webp | (P-PROP) double-spiral paper clip, chrome #C9CCD5 with white highlight, 0.18 times doll height, aspect ratio 1:2.5 |
| 1_1-07_stiker-toggle-sort_V0.webp | (P-UI) two-sided pill toggle sticker, butter #FFF1A8 with the active side in #FF2E93, empty areas for text, tilted 2 degrees, 3:1 |
| 1_1-08_kartu-pers-about_V0.webp | (P-UI) horizontal ID press card with a lanyard string, cream #FFFDF9 card, pink band #FF8DC7 at the top, baby-blue photo square #BFE3F5, grey text lines, aspect ratio 3:2 |
| 1_1-09_stiker-about-me_V0.webp | (P-UI) round sticker, butter #FFF1A8, white edge, tilted minus 3 degrees, empty center for the words About me, 1:1 |
| 1_1-10_papan-nama-datar_V0.webp | (P-UI) flat white #FFFFFF cut-paper label with no paper grain, tilted minus 3 degrees, thin cut-paper sun-ray strips around it, 1:1 |
| 1_1-11_lembar-koran_V0.webp | (P-PROP) full-page vintage newspaper sheet #F3E3B8, grey text column lines, boxed photo areas, bold headline bars, 3:4 |
| 1_1-12_edge-tab_V0.webp | (P-UI) small cut-paper label newsprint cream #F3E3B8 with cut-paper sun-ray strips, 1:1 |

### 3.3 Chapter 2: The Newsroom (PA)

Logo brand **tidak digenerate** oleh AI (risiko salah bentuk). Beri ruang kosong, lalu tempel logo asli dari file logo_*.png atau versi vektornya.

| **Nama file** | **Prompt** |
| --- | --- |
| 2_2-01_dinding-intro_V0.webp | (P-SURFACE) newsprint-cream handmade paper wall #FFF8EE with blue fibers #8FB8E8 and a red paper ribbon strip #E5173F, 16:9 |
| 2_2-02_lantai-kayu_VT.webp | (P-SURFACE) top-down light wooden plank floor #C9A27E with 8 percent darker plank joints and a few grain lines, tileable, 4:1 |
| 2_2-03_bendera-brand_VH.webp | (P-PROP) three hanging pennant flags on strings with two clips each, flag 1 solid red #E80838, flag 2 vertical gradient aqua #18E8C8 to blue #0898F8, flag 3 teal #088898, each with an empty white square for a logo, 3:2 each |
| 2_2-04_meja-redaksi_V0.webp | (P-PROP) front view editor desk 0.5 times doll height and 1.8 times wide, walnut #7A4A32 with two drawers, a cocoa #5A3A2E top edge, 3.6:1 |
| 2_2-05_lampu-meja_V0.webp | (P-PROP) desk lamp with two-segment chrome arm #C9CCD5, cone shade in gold #D4A64A, warm light #FFF6C9 below, white highlight, 1:1 |
| 2_2-06_jam-dinding_V0.webp | (P-PROP) round wall clock, cocoa frame #5A3A2E, cream face #FFFDF9, ink hands, red second hand #E5173F, 1:1 |
| 2_2-07_roller-mesin-cetak_V3.webp | (P-PROP) three-quarter view printing press with two horizontal chrome cylinders #C9CCD5, walnut frame #7A4A32 and a roll of newsprint #F3E3B8 passing through, 11:6 |
| 2_2-08_tumpukan-koran_V0.webp | (P-PROP) stack of five folded newspapers #F3E3B8 with bold headline bars and ribbon bands in red #E80838, aqua #18E8C8 and teal #088898, 1:1 |
| 2_2-09_mesin-tik_V3.webp | (P-PROP) three-quarter view vintage typewriter, mint body #A8E6CF, round chrome keys, a cream sheet #FFFDF9 sticking out, 1:1 |
| 2_2-10_lembar-koran-gantung_VH.webp | (P-PROP) three hanging newspaper pages on strings, newsprint #F3E3B8 with column lines and photo boxes, ink, 5:7 each |
| 2_2-11_rak-disc_V3.webp | (P-PROP) wide wooden shelf in three-quarter view with slots for standing discs, walnut #7A4A32, thick edges, 2.4 times doll height wide, 16:1 |
| 2_2-12_disc_V3.webp | (P-PROP) glossy-less paper CD disc in three-quarter view, chrome ring #C9CCD5 at the center hole, thick rim made of eight stacked layers, blank circular surface left empty for artwork, 1:1 |
| 2_2-13_tab-pembatas_V0.webp | (P-PROP) small folder divider tab, 2:5 ratio, blank white tab ready to recolor to brand colors |
| 2_2-14_papan-info-berpin_V0.webp | (P-UI) pinned cream card #FFF8EE with a red pin #E5173F, four label lines with empty right sides, 8:5 |
| 2_2-15_wall-gallery-bingkai_V0.webp | (P-PROP) white picture frame #FFFFFF with a 3 px border and paper shadow, empty center, tilted 2 degrees, 1:1 |
| 2_2-16_papan-nama-bay_V0.webp | (P-UI) butter #FFF1A8 cut-paper label with lifted corner and cut-paper sun-ray strips, empty space for a logo and two text lines, tilted 3 degrees, 1:1 |
| 2_2-17_tag-kertas-krem_VH.webp | (P-UI) cream #FFF8EE hanging paper tag with a hole and string, empty for text, 8:5 |
| 2_2-18_stiker-bikinpaham_V0.webp | (P-UI) white pill sticker with blue #0898F8 hand-lettered text area left blank for the hashtag BikinPaham, 3:1 |
| 2_2-19_wall-notes-fakta_V0.webp | (P-UI) two hand-drawn speech-bubble outlines with ink lines, fill #FFF8EE at 70 percent, empty inside, each tilted 1 degree, 2:1 |
| 2_2-20_media-reveal-bingkai_V0.webp | (P-PROP) six white square picture frames in a row alternating tilt, empty center, 1:1 each |
| 2_2-21_pin-awareness_V0.webp | (P-PROP) 3D push pin, cherry-red head #E5173F, chrome shaft, tiny shadow, 1:1 |
| 2_2-22_karpet-runner_VT.webp | (P-SURFACE) top-down runner carpet 1.6 times doll height wide, light tint, double ink border, blank interior for recoloring to #FAC5CA, #C9E4F4 or #C9E1DF, 6:1 |
| 2_2-23_arsitektur-bay1_V0.webp | (P-PROP) wall architecture kit: white chair rail #FFFFFF, double black trim lines #080808, black pilaster 0.06 by 1.6 times doll height, front view, 16:9 |
| 2_2-24_arsitektur-bay2_V0.webp | (P-PROP) wall architecture kit in white #FFFFFF: chair rail, trim, and a large arched panel 1 by 1.2 times doll height, 16:9 |
| 2_2-25_arsitektur-bay3_V0.webp | (P-PROP) wall architecture kit: cream #F8F8C8 chair rail and trim, with a row of small red dots #E8402A as ornaments, 16:9 |

### 3.4 Chapter 3.0: Creator Lobby (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| 3-0_L-01_dinding-lobi_V0.webp | (P-SURFACE) lilac #D4C1F5 handmade paper wall with tone-on-tone fibers #BBA7E6 and a red paper ribbon strip #E5173F at 55 percent, 16:9 |
| 3-0_L-02_lantai-lobi_VT.webp | (P-SURFACE) top-down diamond tile floor alternating mint #D4F2E4 and lilac #D4C1F5, tileable, 4:1 |
| 3-0_L-03_panel-brand_V0.webp | (P-PROP) three wall panels 1.3 by 2.2 times doll height with ink borders: green #066838 with cream trim #F8F8C8, gold #B08418 with amber trim #F0A810, green #066838 with gold and cream trim, front view, 3:2 |
| 3-0_L-04_pintu-cafe_V0.webp | (P-PROP) front view wooden cafe door 1 by 2 times doll height, cocoa #5A3A2E, small striped awning #F8F8C8 and #066838, a sandwich chalkboard menu sign leaning 4 degrees with white chalk doodle of a cup, 1:2 |
| 3-0_L-05_pintu-klinik_V0.webp | (P-PROP) front view glass clinic door 1 by 2 times doll height, gold frame #D4A64A, tinted blue glass #BFE3F5 at 35 percent with two white diagonal highlight strokes, bar handle, small pink and white cross sign (pink #FF8DC7, never red), 1:2 |
| 3-0_L-06_gerbang-keberangkatan_V0.webp | (P-PROP) front view departure gate arch 1.3 by 2.2 times doll height, two cream pillars #F8F8C8 with gold trim #D4A64A, a small flip board above the arch, 3:5 |
| 3-0_L-07_gelembung-notifikasi_V0.webp | (P-UI) five floating notification bubbles with small tails in #FFFFFF, #FFD6E8 and #BFE3F5 with ink outline, one containing a hot-pink heart #FF2E93 and the number 1, each 2:1 |
| 3-0_L-08_video-reveal-bingkai_V0.webp | (P-PROP) six small white frames in 9:16 portrait ratio, tilted plus or minus 3 degrees, empty centers |
| 3-0_L-09_titik-progres_V0.webp | (P-UI) three small round dots A B C, cream fill #FFFDF9 with ink border, one active in #FF2E93, 1:1 |
| 3-0_L-10_kartu-babak_V0.webp | (P-UI) wide paper card baby-blue #BFE3F5 with white edge, empty areas for a chip and a subtitle, 2:1 |
| 3-0_L-11_wall-note-kejujuran_V0.webp | (P-UI) hand-drawn speech-bubble outline, fill #FFF8EE at 70 percent, empty inside, tilted 1 degree, 4:1 |

### 3.5 Chapter 3A: The Cafe (Elspresso) (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| 3A_A-01_dinding_V0.webp | (P-SURFACE) deep green handmade paper wall #066838 with tone-on-tone fibers #0A4F2C and a cream paper ribbon strip #F8F8C8 at 55 percent, 16:9 |
| 3A_A-02_wainscot-subway_V0.webp | (P-SURFACE) cream subway tile wall #F8F8C8, tile 2:1, grout #C8DACA, 40 percent ink lines and a tiny highlight per tile, tileable |
| 3A_A-03_rail-list-pilaster_V0.webp | (P-PROP) wall trim kit: cream chair rail #F8F8C8 0.03 times doll height, crown trim, and a slim white pilaster #FFFDF9, front view, 16:9 |
| 3A_A-04_lantai_VT.webp | (P-SURFACE) top-down cocoa wood plank floor #5A3A2E with a runner of cream-green carpet tiles #C8DACA, tileable, 4:1 |
| 3A_A-05_konter_V0.webp | (P-PROP) front view cafe counter 0.5 times doll height and 3 wide, walnut #7A4A32 with four inset panels, cream top #F8F8C8, cream-trimmed mini canopy above, 6:1 |
| 3A_A-06_mesin-kopi_V3.webp | (P-PROP) three-quarter view espresso machine, chrome #C9CCD5 with white highlight strokes, two group heads, round pressure gauge, drip tray, small coral buttons #FF6F6F, three steam lines, 21:25 |
| 3A_A-07_cangkir-runway_V0.webp | (P-PROP) one white ceramic cup #FFFDF9 on a cream saucer #F8F8C8 with a phone leaning against it, phone screen left blank 9:16, cup 0.22 times doll height, 1:2 |
| 3A_A-08_papan-menu-kapur_VL.webp | (P-PROP) chalkboard menu in a walnut frame #7A4A32, charcoal board #3B3B3B with white chalk doodles of a cup and croissant, leaning 4 degrees, 4:3 |
| 3A_A-09_tas-pengantar_VH.webp | (P-PROP) generic food-delivery paper bag with rope handle swinging, cream #F8F8C8 with a green stripe #066838, no brand logo, 4:5 |
| 3A_A-10_lonceng-pintu_VH.webp | (P-PROP) small gold bell #D4A64A on a bracket, white highlight, 1:1 |
| 3A_A-11_lampu-gantung_VH.webp | (P-PROP) three hanging pendant lamps with cone shades #F8F8C8 and ink cables, 1:1 each |
| 3A_A-12_jendela-sepeda_VS.webp | (P-PROP) window 1.2 by 0.9 times doll height with walnut frame and blue glass #BFE3F5, plus a separate side-view delivery bicycle in cream #F8F8C8 with a box on the back, 4:3 and 7:4 |
| 3A_A-13_rak-cangkir_V0.webp | (P-PROP) two-tier walnut shelf #7A4A32 holding six white cups #FFFDF9, 3:2 |
| 3A_A-14_mesin-struk_V0.webp | (P-PROP) small receipt printer #C9CCD5 and a long cream receipt #FFFDF9 with zigzag bottom edge and three blank text lines, receipt 1:4, printer 1:1 |
| 3A_A-15_stempel-day-one_V0.webp | (P-UI) round ink stamp with double border in red #E5173F, empty center for the words Day-one numbers, tilted minus 8 degrees, 1:1 |
| 3A_A-16_lencana-dinding_V0.webp | (P-UI) small round white badge #FFFDF9 with a tiny sun and coffee bean icon, sticker edge, 1:1 |
| 3A_A-17_uap_V0.webp | (P-PROP) three curved steam lines in ink at 60 percent opacity, 1:2 |
| 3A_A-18_panah-stiker_V0.webp | (P-UI) two round sticker arrow buttons, hot-pink #FF2E93 with white arrows, 1:1 each, plus three small dots with one active |
| 3A_A-19_kartu-info-credit_V0.webp | (P-UI) paper card #FFF8EE with a tiny torn edge, four blank labeled blocks, 9:7 |
| 3A_A-20_cangkir-take-away_V0.webp | (P-PROP) pink take-away cup #FFB3D9 with a white lid #FFFFFF and a sleeve, 0.22 times doll height, 1:2 |

### 3.6 Chapter 3B: The Glow Clinic (Elsthetic dan Aishi Beauty) (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| 3B_B-01_dinding-marble_V0.webp | (P-SURFACE) white marble wall #FFFDF9 with thin grey veins #E5E0E3 and faint gold veins at 15 to 20 percent, a gold paper ribbon strip #B08418 at 55 percent, 16:9 |
| 3B_B-02_lantai-marmer_VT.webp | (P-SURFACE) top-down champagne marble floor #F3E1C8 with fine veins and vertical creases every 64 px, tileable, 4:1 |
| 3B_B-03_rail-list-pilaster-kolom_V0.webp | (P-PROP) wall trim kit in gold #B08418: chair rail, crown trim, pilaster, plus a white marble column 0.1 by 1.9 times doll height with a simple capital, front view, 16:9 |
| 3B_B-04_pintu-kaca_V0.webp | (P-PROP) glass door 1 by 2 times doll height, gold frame #D4A64A, tinted glass #BFE3F5 with white diagonal highlight strokes, bar handle, 1:2 |
| 3B_B-05_kursi-treatment_V3.webp | (P-PROP) three-quarter view reclining treatment chair, blush leather #FFD6E8 with stitching, chrome frame #C9CCD5, 5:4 |
| 3B_B-06_cermin-vanity_V0.webp | (P-PROP) oval vanity mirror 0.9 by 1.2 times doll height with a gold frame #D4A64A ringed by ten round warm bulbs #FFF6C9, mirror interior left empty light grey, 3:4 |
| 3B_B-07_botol-serum_V0.webp | (P-PROP) slim serum dropper bottle, cream #FFFDF9 glass look with a highlight stroke, gold cap #D4A64A, 2:5 |
| 3B_B-08_rak-kaca_V0.webp | (P-PROP) three-tier glass shelf with amber trim #F0A810, tinted glass, small bottles #FFD6E8 and #A8E6CF, 3:2 |
| 3B_B-09_tanaman_V0.webp | (P-PROP) potted plant, cream pot #FFF8EE, pointed leaves #B7D9A8, 1:2 |
| 3B_B-10_papan-promo_V0.webp | (P-PROP) wide promo board 2.6 by 1.2 times doll height, gold frame #D4A64A, cream surface #FFFDF9, empty, 13:6 |
| 3B_B-11_washi-tape_V0.webp | (P-PROP) three washi tape strips with jagged ends at 70 percent opacity in #FFB3D9, #A8E6CF and #FFF1A8, tilted 8 degrees, 4:1 each |
| 3B_B-12_catatan-dokter_V0.webp | (P-UI) small prescription note #FFFDF9 with an Rx symbol and blank handwritten lines in old gold ink #B08418, tilted 2 degrees, 5:3 |
| 3B_B-13_resep-dokter_V0.webp | (P-UI) large prescription sheet #FFFDF9 with an Rx header and blank handwriting lines in gold ink #B08418, 4:3 |
| 3B_B-14_label-kemasan-results_V0.webp | (P-UI) skincare package label, white with a blush #FFD6E8 top band reading RESULTS, three blank lines for Views Like Shared, 5:7 |
| 3B_B-15_stempel-tested_V0.webp | (P-UI) two round stamps with double borders: gold #B08418 empty one for Tested and red #E5173F empty one for IMPORTANT, tilted minus 6 degrees, 1:1 each |
| 3B_B-16_label-cv_V0.webp | (P-UI) two small butter #FFF1A8 cut-paper labels with lifted corners, blank, 1:1 |
| 3B_B-17_plakat-nama-dua-logo_V0.webp | (P-UI) plaque #FFFDF9 with a gold frame #D4A64A and two empty square slots side by side for logos, 18:7 |
| 3B_B-18_glitter_V0.webp | (P-PROP) twelve small four-point sparkle stars in white #FFFFFF and champagne #EBD08C, different sizes up to 0.02 times doll height |

### 3.7 Chapter 3C: The Terminal (Karamina Tour) (PA)

Siluet Ka'bah dan Masjidil Haram **dibuat tenang dan hormat**: hanya hitam dan emas, tanpa wajah, tanpa efek lucu. Minta satu orang Karamina Tour meninjau hasilnya.

| **Nama file** | **Prompt** |
| --- | --- |
| 3C_C-01_dinding_V0.webp | (P-SURFACE) deep green handmade paper wall #066838 with tone-on-tone fibers #0A4F2C and a champagne paper ribbon strip #EBD08C at 55 percent, 16:9 |
| 3C_C-02_pilaster-panel_V0.webp | (P-PROP) wall trim kit: gold pilaster #D4A64A 0.08 by 1.9 times doll height, cream arched panel #F8F8C8, double gold trim, front view, 16:9 |
| 3C_C-03_lantai-landasan_VT.webp | (P-SURFACE) top-down cream-sage floor #E6EBE0 with white runway stripes #FFFFFF and tiny warm lights #FFF6C9, tileable, 4:1 |
| 3C_C-04_gerbang_V0.webp | (P-PROP) large departure gate arch 1.3 by 2.2 times doll height, cream pillars #F8F8C8 with gold trim #D4A64A, 3:5 |
| 3C_C-05_papan-jadwal-flip_V0.webp | (P-PROP) wide split-flap departure board, dark green panel #04502A, five rows of flap blocks with a center ink line, cream #F8F8C8 blank letter areas, 2:1 |
| 3C_C-06_boarding-pass_V0.webp | (P-PROP) portrait boarding pass 0.5 by 0.95 times doll height, cream #F8F8C8 with a green border #066838, an empty 9:16 video window, perforated bottom stub with half-circle holes, black barcode, 8:15 |
| 3C_C-07_pesawat-kertas-besar_VH.webp | (P-PROP) large origami paper plane 2.4 times doll height, white #FFFDF9 with sky-blue creases #A7D8F5, hanging string, 5:2 |
| 3C_C-08_kabah-masjidil-haram_V0.webp | (P-SCENE) calm respectful flat silhouette of the Kaaba as a black cube #1B1017 with a gold band #D4A64A and gold door, with a simple low arcade silhouette of the Grand Mosque behind, only black and gold, no faces, no humor, 6:5 |
| 3C_C-09_koper_V3.webp | (P-PROP) three-quarter view rolling suitcase, ivory #F8F0DC with champagne trim #EBD08C, top handle, two small wheels, gold corners, 3:4 |
| 3C_C-10_cap-paspor_V0.webp | (P-UI) round passport stamp in green ink #04502A with double border and a small plane silhouette, empty center, 1:1 |
| 3C_C-11_laut-dan-kapal_VS.webp | (P-PROP) wide strip of pastel sea #A7D8F5 with folded layers, ink-contoured wave crests and white wave strokes, plus a side-view paper sailboat 0.9 times doll height with a white sail #FFFDF9, cardboard hull #D9A87A, walnut mast #7A4A32, sea 5:1, boat 1:1 |
| 3C_C-12_jendela-sky_V0.webp | (P-PROP) large window 1.4 by 0.9 times doll height with a cream frame #F8F8C8, sky #A7D8F5, one small cloud and distant sea, 3:2 |
| 3C_C-13_recap-kartu_V0.webp | (P-UI) three small cards 0.5 by 0.7 times doll height with top ribbons #066838, #B08418 and #066838, blank inside, 5:7 each |
| 3C_C-14_confetti-kertas_V0.webp | (P-PROP) scatter of tiny paper confetti squares and stars in #FF8DC7, #FFF1A8, #A8E6CF and #BFE3F5, up to 0.02 times doll height each |

### 3.8 Chapter 4: The Boutique (Lassiewear) (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| 4_4-01_dinding_V0.webp | (P-SURFACE) burgundy handmade paper wall #881838 with tone-on-tone fibers #6B1230 and a champagne paper ribbon strip #EBD08C at 55 percent, 16:9 |
| 4_4-02_rail-list-pilaster-panel_V0.webp | (P-PROP) wall trim kit: double champagne chair rail #EBD08C, crown trim, champagne pilasters 0.08 by 1.9 times doll height, rose panel #983858 between, front view, 16:9 |
| 4_4-03_karpet-bertingkat_VT.webp | (P-SURFACE) top-down three-step blush carpet #E5C8CA with champagne border #EBD08C, each step 0.08 times doll height, 4:1 |
| 4_4-04_fasad-butik_V0.webp | (P-PROP) boutique facade 2.2 times doll height with a scalloped champagne canopy edged in dark burgundy #6B1230, an ivory door #F8F0DC, one sign area, 3:4 |
| 4_4-05_koper-terbuka_V3.webp | (P-PROP) open clamshell suitcase in three-quarter view, ivory #F8F0DC with champagne trim #EBD08C, inside only empty hangers, 4:3 |
| 4_4-06_rak-hanger_V0.webp | (P-PROP) clothes rack with a gold rail #D4A64A 3 times doll height wide and champagne hangers #EBD08C, six garment silhouettes in #E8A5B8 and #FFF8EE, 6:1 |
| 4_4-07_manekin_V0.webp | (P-PROP) headless torso mannequin 0.9 times doll height, neutral #F4EFF1 with a chrome pole #C9CCD5 and round base, 1:2 |
| 4_4-08_ruang-ganti_V0.webp | (P-PROP) fitting room 0.9 by 2 times doll height, ivory and champagne frame #FFF8EE, ivory curtain with burgundy tassels #881838, curtain half open showing an empty 9:16 area, 9:20 |
| 4_4-09_pouf-beludru_V0.webp | (P-PROP) round velvet pouf 0.22 times doll height, blush #E5C8CA, a button on top, soft wide highlight, 3:2 |
| 4_4-10_tas-belanja_V0.webp | (P-PROP) ivory paper shopping bag #F8F0DC with burgundy rope handles #881838, 0.3 times doll height, 1:1 |
| 4_4-11_label-harga_VH.webp | (P-UI) small ivory price tag #FFF8EE with a burgundy string, fluttering, blank, 5:3 |
| 4_4-12_lampu-gantung-champagne_VH.webp | (P-PROP) chandelier 0.6 times doll height, champagne #EBD08C, five arms, warm bulbs #FFF6C9, 1:1 |
| 4_4-13_stiker-fakta_V0.webp | (P-UI) two hand-drawn speech-bubble outlines with fill #FFF8EE at 70 percent, empty, 2:1 each |
| 4_4-14_pin-conversion_V0.webp | (P-PROP) 3D push pin, wisteria head #A98BDA, chrome shaft, 1:1 |
| 4_4-15_papan-nama_V0.webp | (P-UI) dusty-rose #E8A5B8 cut-paper label with a lifted corner and cut-paper sun-ray strips, empty, tilted minus 4 degrees, 1:1 |

**Halaman Informasi Jenis Konten (empat jenis)**

| **Nama file** | **Prompt** |
| --- | --- |
| 4_info-latar_V0.webp | (P-SURFACE) aged-paper handmade paper background #F3E3B8 with blue fibers #8FB8E8 and four small corner push pins, 16:9 |
| 4_info-strip-hardselling.webp | (P-UI) wide top strip and title sticker in dusty-rose #E8A5B8, empty for text, 8:1 |
| 4_info-strip-entertainment.webp | (P-UI) wide top strip and title sticker in peach #FFB38A, empty for text, 8:1 |
| 4_info-strip-education.webp | (P-UI) wide top strip and title sticker in blue #8FB8E8, empty for text, 8:1 |
| 4_info-strip-fun.webp | (P-UI) wide top strip and title sticker in hot-pink #FF8DC7, empty for text, 8:1 |
| 4_info-kartu-hasil-credit.webp | (P-UI) two paper cards #FFFDF9 and #FFF8EE with white edges, a pink button #FF2E93 area, empty, 4:3 each |

### 3.9 Chapter 5: The Campus Library (PA)

Sepia adalah **filter** (sepia 0,9, saturate 0,7) yang dipasang lewat CSS, jadi semua aset digenerate **berwarna**.

| **Nama file** | **Prompt** |
| --- | --- |
| 5_5-01_dinding_V0.webp | (P-SURFACE) aged-paper handmade paper wall #F3E3B8 with blue fibers #8FB8E8 and a red paper ribbon strip #E5173F, 16:9 |
| 5_5-02_lantai_VT.webp | (P-SURFACE) top-down walnut plank floor #7A4A32 with creases and grain, tileable, 4:1 |
| 5_5-03_rak-buku-besar_V0.webp | (P-PROP) large bookshelf 2.4 by 1.8 times doll height with four tiers, walnut #7A4A32, books with spines #E8A5B8, #BFE3F5, #A8E6CF, #FFF1A8, #D4C1F5 at varied heights, no text, 4:3 |
| 5_5-04_tangga-rolling_VL.webp | (P-PROP) rolling library ladder 1.6 times doll height with five steps and a top rail, walnut and chrome #C9CCD5, leaning 8 degrees, 1:3 |
| 5_5-05_lampu-baca_V0.webp | (P-PROP) banker reading lamp 0.45 times doll height, gold shade #D4A64A, walnut base, warm light #FFF6C9, 1:1 |
| 5_5-06_stiker-pita-kaset_V0.webp | (P-UI) cassette tape sticker, cream label #FFFDF9, brown body #5A3A2E, two reels with black tape #1B1017, tilted minus 3 degrees, 3:2 |
| 5_5-07_kucing-kertas-tidur_VS.webp | (P-PROP) side view sleeping paper cat curled up, cream #F3E3B8 with tan spots #D9A87A, closed arc eyes, friendly face, 4:3 |
| 5_5-08_jendela-bukit_V0.webp | (P-PROP) window 1 by 1.3 times doll height, walnut frame, glass #BFE3F5 showing a small green hill #B7D9A8 and one tree, 3:4 |
| 5_5-09_rak-buku-navigasi_V0.webp | (P-PROP) small walnut shelf 0.9 by 1.6 times doll height holding two upright books, 9:16 |
| 5_5-10_buku-rush07-pandora_V0.webp | (P-PROP) two book spines standing, pink #FF8DC7 with vertical cream lettering area and sky-blue #8FB8E8 with vertical dark lettering area, 0.12 by 1 times doll height each, 1:8 |
| 5_5-11_flipbook_V3.webp | (P-PROP) open book in light three-quarter view, page ratio 1000:1419, white pages #FFFFFF, thick page stack 0.04 times doll height, soft center crease shading, colored cover edge, blank pages, 7:5 |
| 5_5-12_panel-stiker-tugas_V0.webp | (P-UI) title card #FFFDF9 plus four die-cut sticker labels in #FFF1A8, #FFB38A and #A8E6CF, blank, each tilted 3 degrees |
| 5_5-13_headphone-di-rak_VH.webp | (P-PROP) black over-ear headphones #1B1017 with pink ear pads #FF2E93 hanging from a hook, 0.3 times doll height, 1:1 |
| 5_5-14_debu-cahaya_V0.webp | (P-PROP) scatter of tiny dust specks in cream #FFFDF9 at 40 percent opacity, about 0.01 times doll height each |

### 3.10 Chapter 6: The Radio Booth (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| 6_6-01_dinding_V0.webp | (P-SURFACE) dark plum-night #2A0F2E to aubergine #4B1D4F handmade paper wall with faint fibers #7A2E5C at 40 percent and a dim red paper ribbon strip #E5173F at 35 percent, 16:9 |
| 6_6-02_lantai_VT.webp | (P-SURFACE) top-down berry #7A2E5C folded floor with vertical creases, tileable, 4:1 |
| 6_6-03_panel-busa_V0.webp | (P-PROP) eight acoustic foam panels 0.5 times doll height square with cone egg-crate pattern, #4B1D4F with #7A2E5C highlights, 1:1 each |
| 6_6-04_mikrofon-besar_V3.webp | (P-PROP) three-quarter view large vintage broadcast microphone 1.2 times doll height, round grilled capsule, shock mount, stand, chrome #C9CCD5, black #1B1017, gold accent #D4A64A, 1:2 |
| 6_6-05_lampu-on-air_V0.webp | (P-PROP) rectangular ON AIR lamp 0.6 by 0.22 times doll height, off state dark red #5C1A1F, white block letters ON AIR, 27:10 |
| 6_6-06_vu-meter_V0.webp | (P-PROP) VU meter panel with a needle, face #F3E3B8, black frame #1B1017, red needle #E5173F, 5:3 |
| 6_6-07_rak-studio_V0.webp | (P-PROP) studio shelf 1.4 by 0.9 times doll height, walnut #7A4A32, with a few cassettes and script papers, 14:9 |
| 6_6-08_piala-kecil_V3.webp | (P-PROP) small gold trophy #D4A64A 0.35 times doll height, three-quarter view, 3:4 |
| 6_6-09_kartu-episode-mikrofon_V0.webp | (P-UI) paper card 1.1 by 1.3 times doll height whose top is a black microphone capsule head with grill lines, cream body #FFFDF9, aubergine border #4B1D4F, an empty rounded rectangle for a player, 11:13 |
| 6_6-10_tirai-studio_V0.webp | (P-PROP) velvet stage curtain 1.2 by 2.4 times doll height, berry #7A2E5C with gold tassels #D4A64A, 1:2 |
| 6_6-11_kotak-arsip_V3.webp | (P-PROP) three-quarter view archive box #D9D3D6 with a yellow label #FFF1A8, 0.28 by 0.18 times doll height, a cassette tape and script paper peeking out, 14:9 |
| 6_6-12_kartu-credit-naskah_V0.webp | (P-UI) script-style credit card #FFFDF9 with a torn left edge and blank typewriter lines, 8:5 |
| 6_6-13_gelombang-suara_V0.webp | (P-PROP) three concentric circles in pink #FF8DC7 at 60 percent opacity, 1.5 px line, 1:1 |
| 6_6-14_sorot-lampu_V0.webp | (P-PROP) flat cone light shape in #FFF1A8 at 20 percent opacity with no gradient, 1:2 |

### 3.11 Chapter 7: The Archive Room (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| 7_7-01_dinding_V0.webp | (P-SURFACE) warm-grey #D9D3D6 and aged-paper #F3E3B8 mixed handmade paper wall with a red paper ribbon strip #E5173F, 16:9 |
| 7_7-02_lantai_VT.webp | (P-SURFACE) top-down honey wood floor #F6D76B with plank joints, tileable, 4:1 |
| 7_7-03_laci-katalog_V0.webp | (P-PROP) card catalog cabinet 2 by 1.2 times doll height with 5 by 6 small drawers, walnut #7A4A32, gold ring pulls #D4A64A, yellow labels #FFF1A8, one drawer open with cards inside, 5:3 |
| 7_7-04_lemari-berkas_V0.webp | (P-PROP) filing cabinet 1.4 by 1.6 times doll height with four wide drawers, grey #D9D3D6, yellow labels #FFF1A8, 7:8 |
| 7_7-05_kartu-indeks_V0.webp | (P-PROP) scattered index cards 0.3 by 0.18 times doll height with a top tab and blue fibers #8FB8E8, tilted plus or minus 4 degrees, 5:3 |
| 7_7-06_tab-warna-brand_V0.webp | (P-UI) small index tab 2:1, blank white ready to recolor to brand colors |
| 7_7-07_lampu-gantung_VH.webp | (P-PROP) hanging cone lamp 0.4 times doll height, honey #F6D76B, ink cable, 1:1 |
| 7_7-08_baris-daftar_V0.webp | (P-UI) one list row 0.08 times doll height tall, cream #FFFDF9 with a faint divider, plus an active state with pink highlight #FF8DC7, 20:1 each |
| 7_7-09_area-preview_V0.webp | (P-UI) preview panel frame, white edge, cream #FFFDF9 interior, empty, 4:3 |
| 7_7-10_stiker-shuffle_V0.webp | (P-UI) pill sticker #FF2E93 tilted 3 degrees, empty for the word Shuffle, 3:1 |
| 7_7-11_kartu-kosong_V0.webp | (P-UI) blank archive card #FFFDF9 0.3 by 0.18 times doll height, dashed outline, yellow tab #FFF1A8, 5:3 |
| 7_7-12_staples_V0.webp | [repeat] 1_1-05_staples-merah_V0.webp |

### 3.12 Chapter 8: The Mailbox (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| 8_8-01_dinding_V0.webp | (P-SURFACE) cotton-candy gradient handmade paper wall from #FFD6E8 to #E3D4FA to #CDEBF8 with a red paper ribbon strip #E5173F, 16:9 |
| 8_8-02_lantai-jalur_VT.webp | [repeat] 0_0-43_lantai-hijau-berlipat_VT.webp dan 0_0-44_jalur-bata_VT.webp |
| 8_8-03_loker-kotak-surat_V3.webp | (P-PROP) single tall mailbox locker 0.9 by 2.2 times doll height in three-quarter view, lavender door #BFA8E5, a horizontal mail slot with a chrome flap #C9CCD5, a pink washi label #FFB3D9 at 70 percent left blank, 9:22 |
| 8_8-04_amplop_V0.webp | [repeat] 0_0-26_amplop-surat_V0.webp |
| 8_8-05_bintang-kertas_V0.webp | (P-PROP) five-point paper star #FFF1A8 with a friendly face, 0.08 times doll height, 1:1 |
| 8_8-06_matahari-kecil_V0.webp | (P-PROP) small paper sun 0.4 times doll height, butter circle #FFF1A8 with eight triangle rays #FFB38A, friendly face, 1:1 |
| 8_8-07_skyline-paper-school_V0.webp | [repeat] 0_0-51_gedung-paper-school_V0.webp |
| 8_8-08_kartu-kontak_V0.webp | (P-UI) three cream cards #FFFDF9 0.6 by 0.5 times doll height with white edges, empty, 6:5 each |
| 8_8-09_amplop-melayang_V0.webp | (P-PROP) three tiny floating cream envelopes 0.1 times doll height, tilted differently, 3:2 each |
| 8_8-10_tombol-back-to-locker_V0.webp | (P-UI) pill sticker #FF2E93, empty for the words Back to the locker, 4:1 |
| 8_8-11_toast-copied_V0.webp | (P-UI) small dark pill toast #1B1017 with space for cream text, 4:1 |

### 3.13 Overlay suvenir (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| O_O-01_papan-participation_V0.webp | (P-PROP) wide board 1.8 by 1.2 times doll height of aged paper #F3E3B8 with four 3D push pins at the corners (#E5173F, #FF8DC7, #A98BDA), empty, 3:2 |
| O_O-02_buku-magazine_V3.webp | (P-PROP) open mock magazine book in three-quarter view with four blank pages #FFFDF9, pink cover #FFD6E8, thickness 0.06 times doll height, 4:3 |
| O_O-02a_baki-elemen_VT.webp | (P-PROP) top-down wooden tray 1.2 by 0.4 times doll height, cardboard-brown #D9A87A, empty, 3:1 |
| O_O-02b-1_bintang-emas_V0.webp | (P-PROP) gold five-point star #D4A64A with champagne highlight, white edge, 1:1 |
| O_O-02b-2_untaian-mutiara_V0.webp | (P-PROP) strand of fourteen pearls #FFFDF9 on a pale thread #F4EFF1, gentle curve, 3:1 |
| O_O-02b-3_lipstik_V0.webp | (P-PROP) lipstick tube in gold #D4A64A with a red bullet #E5173F, 1:3 |
| O_O-02b-4_botol-parfum_V0.webp | (P-PROP) faceted perfume bottle #FFD6E8 with a gold cap #D4A64A, highlight stroke, 2:3 |
| O_O-02b-5_sepatu-hak_VS.webp | (P-PROP) side-view stiletto high heel shoe in pink #FF8DC7, 3:2 |
| O_O-02b-6_kupu-kupu_V0.webp | (P-PROP) butterfly with wings in lilac #D4C1F5 and orchid #DA9AF2, 3:2 |
| O_O-02b-7_washi-tape_V0.webp | (P-PROP) single washi tape strip pink #FFB3D9 at 70 percent with jagged ends, tilted 8 degrees, 4:1 |
| O_O-02b-8_tulip_V0.webp | (P-PROP) tulip with a pink head #FF8DC7 and matcha leaves #B7D9A8, 1:2 |
| O_O-02b-9_kacamata-cat-eye_V0.webp | (P-PROP) cat-eye glasses, black frame #1B1017, blush lenses #FFD6E8, 2:1 |
| O_O-02b-10_stiker-hati_V0.webp | (P-UI) hot-pink heart sticker #FF2E93 with a white die-cut edge, 1:1 |
| O_O-02c-1_pita_V0.webp | (P-PROP) pink ribbon #FF8DC7 0.5 by 0.08 times doll height with tied ends, 6:1 |
| O_O-02c-2_kamera-mini_V3.webp | [repeat] 0_0-23_kamera-pastelca_V3.webp dikecilkan ke 0,25 Hd |
| O_O-03_papan-photography_V0.webp | [repeat] O_O-01_papan-participation_V0.webp |
| O_O-04_kertas-my-message_V0.webp | (P-SURFACE) handmade white deckle-edge paper #FFFDF9 with blue fibers #8FB8E8 and a pink paper ribbon strip #FF8DC7, 1.6 by 2 times doll height, 4:5 |
| O_O-04b_highlighter_V0.webp | (P-UI) single butter highlighter swipe #FFF1A8 tilted minus 2 degrees, 8:1 |
| O_O-05_kartu-my-strategy_V0.webp | (P-UI) seven tabbed step cards 0.5 by 0.4 times doll height in #FFD6E8, #D4C1F5, #BFE3F5, #A8E6CF, #FFF1A8, #FFB38A, #E8A5B8, plus dashed connector arrows, empty, 5:4 each |
| O_O-06_notes-label_V0.webp | (P-UI) large butter cut-paper label #FFF1A8 0.9 times doll height with a lifted corner, empty, tilted minus 3 degrees, 1:1 |

## 4. Dunia Bersama (PA)

### 4.1 Dua belas papan nama label kertas (PA)

Semua: ukuran 1:1, sudut kanan bawah terangkat, 6 sampai 8 garis sinar ink di sekeliling, kosong untuk teks (teks ditambahkan di kode). Rotasi mengikuti deret tetap bible 3.4.

| **Nama file** | **Prompt (tempel setelah P-UI)** |
| --- | --- |
| S_label-0-7_start-here_V0.webp | mint #A8E6CF cut-paper label tilted minus 3 degrees |
| S_label-1-1_chapter01_V0.webp | flat white #FFFFFF cut-paper label with no paper grain, tilted 4 degrees |
| S_label-2-1_chapter02_V0.webp | butter #FFF1A8 cut-paper label tilted minus 2 degrees |
| S_label-3-0_chapter03_V0.webp | baby-blue #BFE3F5 cut-paper label tilted 5 degrees |
| S_label-3A-1_cafe_V0.webp | apricot #FFD3B0 cut-paper label tilted minus 4 degrees |
| S_label-3B-1_clinic_V0.webp | blush #FFD6E8 cut-paper label tilted 3 degrees |
| S_label-3C-1_terminal_V0.webp | sky-pastel #A7D8F5 cut-paper label tilted minus 5 degrees |
| S_label-4-1_chapter04_V0.webp | dusty-rose #E8A5B8 cut-paper label tilted 2 degrees |
| S_label-5-1_chapter05_V0.webp | aged-paper #F3E3B8 cut-paper label tilted minus 3 degrees |
| S_label-6-1_chapter06_V0.webp | orchid #DA9AF2 cut-paper label tilted 4 degrees |
| S_label-7-1_chapter07_V0.webp | honey #F6D76B cut-paper label tilted minus 2 degrees |
| S_label-8-1_chapter08_V0.webp | blush #FFD6E8 cut-paper label tilted 3 degrees |

Edge Tab = file yang sama, diperkecil ke 0,3 Hd (CSS), tanpa teks.

### 4.2 Walk strip (PA)

Dua lapisan per strip: **far** (T5, 45 persen opacity) dan **path** (T3). Lantai hijau, jalur bata, jahitan, jejak, awan, dan pesawat memakai file Chapter 0 [repeat].

| **Nama file** | **Prompt** |
| --- | --- |
| W_strip-0-1_far_V0.webp | (P-SCENE) distant Office Block as a plain white #FFFFFF cube building 1.8 times doll height with no texture, and a distant Press Tower with a printing roller and a clock, wide 4:1 |
| W_strip-2-3_path_V0.webp | (P-PROP) three mini kiosks side by side: a striped cafe awning #F8F8C8 and #066838 0.9 times doll height, a clinic sign with a pink and white cross (never red), a small paper plane on a string, wide 3:1 |
| W_strip-3C-4_far_V0.webp | (P-SCENE) distant boutique canopy in dusty-rose #E8A5B8 and a tall radio tower #7A2E5C with a red light #E5173F, wide 4:1 |
| W_strip-3C-4_path_VT.webp | (P-SURFACE) top-down pastel beach strip with sand #F3E3B8 meeting sea #A7D8F5 with ink-contoured wave crests, wide 4:1 |
| W_strip-4-5_far_V0.webp | (P-SCENE) distant Memory Hill with a small library building on top and an Archive Hall facade with drawer grid, drawn in normal colors (sepia filter is added later), wide 4:1 |
| W_strip-4-5_path_V0.webp | (P-PROP) floating cassette ribbons curling in the air, brown #5A3A2E, 5:1 |
| W_strip-5-6_far_V0.webp | (P-SCENE) distant radio tower 2.2 times doll height, plum #7A2E5C with a red blinking lamp #E5173F, 1:3 |
| W_strip-7-8_far_V0.webp | [repeat] 0_0-51_gedung-paper-school_V0.webp |

### 4.3 Paper Town: peta dan landmark (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| M_map_paper-town_VT.webp | (P-PROP) illustrated map on a handmade paper page of a paper town, handmade paper, nine small cutout landmarks connected by one dashed stitch route that loops back to the start, region tints at 20 percent, a blank spot for a title, 3:2 |
| M_lm-0_paper-school_V0.webp | (P-SCENE) school building with a clock, region tint #B7D9A8, 1:1 |
| M_lm-1_office-block_V0.webp | (P-SCENE) plain white cube building #FFFFFF, 1:1 |
| M_lm-2_press-tower_V0.webp | (P-SCENE) tower with a printing roller and clock, tint #F3E3B8, 1:1 |
| M_lm-3_creator-plaza_V0.webp | (P-SCENE) three small buildings side by side: cafe awning, pink and white clinic cross, departure gate, tint #D4C1F5, 3:2 |
| M_lm-4_fashion-row_V0.webp | (P-SCENE) dusty-rose canopy shop with a mannequin, tint #E8A5B8, 1:1 |
| M_lm-5_memory-hill_V0.webp | (P-SCENE) green hill with a library on top, sepia-leaning tint #F3E3B8, 1:1 |
| M_lm-6_radio-tower_V0.webp | (P-SCENE) tower with a red lamp #E5173F, tint #DA9AF2, 1:2 |
| M_lm-7_archive-hall_V0.webp | (P-SCENE) facade made of a drawer grid, tint #D9D3D6, 1:1 |
| M_lm-8_mailbox_V0.webp | (P-SCENE) tall locker with a washi label, tint #FFD6E8, 1:2 |
| M_cap-kunjungan_V0.webp | (P-UI) round red stamp mark #E5173F at 70 percent opacity with a check, 1:1 |
| M_og-image_V0.webp | (P-PROP) 1200 by 630 share image: the Paper Town map as the background with the paper doll in the seagreen-free seragam outfit standing front and center, reserved space for the name, 1200:630 |

### 4.4 HUD dan komponen UI (PA)

| **Nama file** | **Prompt (tempel setelah P-UI)** |
| --- | --- |
| H_chip-babak-1_V0.webp | small pill chip in mint #A8E6CF, empty for text, 4:1 |
| H_chip-babak-2_V0.webp | small pill chip in baby-blue #BFE3F5, empty for text, 4:1 |
| H_chip-babak-3_V0.webp | small pill chip in peach #FFB38A, empty for text, 4:1 |
| H_rel-progres_V0.webp | thin vertical stitch line with a tiny doll head icon (black hijab) on it, 1:20 |
| H_tombol-index_V0.webp | white #FFFFFF pill sticker with ink border, empty for the word INDEX, 3:1 |
| H_stiker-quick-look_V0.webp | butter #FFF1A8 pill sticker 0.7 by 0.12 times doll height tilted minus 3 degrees, empty for text, 6:1 |
| H_tombol-info_V0.webp | small butter #FFF1A8 pill, empty for INFO, 3:1 |
| H_tombol-credit_V0.webp | small cream #FFFDF9 pill, empty for CREDIT, 3:1 |
| H_hover-label-price-tag_V0.webp | paper price tag #FFFDF9 with a cut corner, a hole, a small tan string #D9B98C and dashed stitching, empty, tilted 3 degrees, 5:2 |
| H_sticker-button_V0.webp | hot-pink glitter pill #FF2E93, empty center, hard soft shadow, 3:1 |
| H_pushpin-red_V0.webp | 3D push pin in cherry-red #E5173F with chrome shaft, 1:1 |
| H_pushpin-pink_V0.webp | 3D push pin in hot-pink #FF2E93, 1:1 |
| H_pushpin-wisteria_V0.webp | 3D push pin in wisteria #A98BDA, 1:1 |
| H_papernote_V0.webp | aged-paper #F3E3B8 note with a lifted corner, 1:1 |
| H_photoframe_V0.webp | thick white photo frame 0.03 times doll height with soft shadow, empty, 3:4 |
| H_speech-bubble_V0.webp | white speech bubble with ink outline, small tail, and a tiny pink washi tab #FFB3D9 at the top-left corner, empty, 5:3 |
| H_wall-note_V0.webp | hand-drawn speech-bubble outline filled #FFF8EE at 70 percent, empty, 2:1 |
| H_doll-404-peta_V0.webp | (P-DOLL) front view of the seragam outfit doll holding a folded map 0.5 by 0.35 times doll height with two small question marks above the hijab, curious face |

### 4.5 Ambient dan partikel (PA)

| **Nama file** | **Prompt** |
| --- | --- |
| A_debu-kertas_V0.webp | [repeat] 5_5-14_debu-cahaya_V0.webp |
| A_serpihan-newsprint_V0.webp | (P-PROP) tiny newsprint flakes #F3E3B8, small squares 0.015 times doll height, scattered |
| A_confetti_V0.webp | [repeat] 3C_C-14_confetti-kertas_V0.webp |
| A_bintang-dizzy_V0.webp | (P-PROP) three tiny star shapes #FFF1A8 swirling, 5 percent of doll height each |
| A_kupu-kupu-kertas_V0.webp | (P-PROP) tiny paper butterfly, wing span 0.06 times doll height, lilac #D4C1F5 and orchid #DA9AF2, 3:2 |
| A_bayangan-doll_VT.svg | **Tidak digenerate.** Elips tipis #1B1017 opasitas 18 persen, lebar 40 persen lebar sepatu ganda, tinggi 6 px |

## 5. Alur Kerja yang Disarankan (PA)

- **Kunci karakter dulu:** generate doll_00_master_*, enam wajah, dan K1, K2, K5. Bandingkan dengan gambar masterku. Ulangi sampai garis, wajah, dan brad identik.

- **Paper kit:** 0_0-42, 0_0-43, 0_0-44, pin, washi, label kertas, bingkai. Semua dipakai ulang di banyak chapter.

- **Style Test:** adegan 3A (hijau Elspresso) dan satu bay Newsroom dengan doll K5 dan K3.

- **Sisanya per chapter** mengikuti roadmap tahap 1 sampai 7 di Portfolio Bible.

- **Cek tiap gambar** dengan daftar periksa bible 10.3: garis tipis dan tertutup, maksimal tiga nada, tepi putih, hex benar, sudut benar, uji siluet.

- **Teks, logo, dan foto asli** (nama brand, logo logo_1 sampai logo_10, foto Jassinta, karya) **jangan digenerate AI**; tempel manual.

- **Karya perusahaan nyata** (logo, Ka'bah) yang hasilnya meragukan: ganti dengan gambar tangan sendiri.

