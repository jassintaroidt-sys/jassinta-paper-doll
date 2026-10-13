# 02 · Prompt untuk Antigravity IDE (P00 sampai P19)

Cara pakai: salin **satu prompt per sesi agent** ke panel agent (Cmd/Ctrl+L) atau Agent Manager. Urutan wajib ada di `docs/00-rencana-pembangunan.md` (P00, P01, P02, P03, P04, P05, P09, P06, P07, P08, P10 sampai P19). Tiap prompt diakhiri **Gerbang selesai**; jangan lanjut sebelum gerbangnya lulus. Semua prompt mewarisi `AGENTS.md` dan `.agents/rules/*` (dibaca otomatis). Kata "bible" = `docs/portfolio-bible.md` beserta potongannya.

**Kalimat pembuka standar** (tempel di awal setiap prompt agar agent tidak merangkum):
> Kamu membangun *Jassinta's Paper Doll Journey*. Baca `AGENTS.md` dan semua `.agents/rules/*` dulu. Seluruh isi bible yang disebut di bawah **wajib terlaksana tanpa ada yang ditinggal**: jangan merangkum, jangan mengurangi, jangan mengarang data. Aset dibuat dengan kode, bukan menyalin gambar. Bila ada kontradiksi atau data `[cek]/[isi]`, catat dan tanyakan, jangan menebak. Selesai hanya bila ada bukti. Ringkasan di prompt hanyalah penunjuk arah: **bila berbeda dengan bagian bible yang disebut, bible yang menang.**

---

## P00 · Analisis bible (hanya baca)
**Baca**: `AGENTS.md`, semua rule, `docs/journey-storyboard.md`, `docs/design-bible-visual.md`, `docs/chapters/*`, `docs/part5-*`, `docs/part6-*`, `docs/prompts-aset.md`, `asset-manifest.csv`, `docs/03-coverage-matrix.csv`.
**Kerjakan** (jangan menulis kode aplikasi):
1. Buat `docs/analysis/bible-digest.md`: tabel chapter → frame → aset (ID manifest) → konten/teks → interaksi → transisi keluar; semua aturan mutlak; semua angka/tanggal/link penting (beserta nomor baris bible).
2. Buat `docs/06-temuan-bible.md`: kontradiksi, ambiguitas, aset di manifest tanpa spesifikasi DV, tabel yang tidak lengkap, sisa istilah lama (garis buku tulis, sticky note) yang harus dibaca lewat aturan REV-K.
3. Cocokkan `asset-manifest.csv` (355 baris) dengan tabel DV dan PA; laporkan selisih.
4. Daftar semua `[cek]/[isi]` ke `docs/05-data-review.md`.
5. Tulis pertanyaan untuk pemilik, tiap pertanyaan dengan pilihan A/B/C dan rekomendasimu.
**Gerbang**: pemilik menjawab pertanyaan, atau memilih "pakai rekomendasi". Tidak ada kode yang berubah.

## P01 · Scaffold, token, data, fondasi
**Baca**: DF 9 (design system), 28.2 sampai 28.6, PB 5.2 sampai 5.4, 10.4 sampai 10.7, 12 (responsif, media helper), 24.4 (model data), `docs/part6-produksi-qa.md`.
**Kerjakan**:
1. Scaffold di folder yang sudah ada tanpa menghapus `docs/`, `scripts/`, `asset-manifest.csv`, `AGENTS.md`, `.agents/`: Vite + React 18 + TypeScript strict + Tailwind 3 + Lenis + Vitest + Playwright + axe. Skrip npm: `dev, build, check, assets, e2e`. `check` = `tsc --noEmit && eslint && vitest run && node scripts/check-coverage.mjs`.
2. `src/tokens/`: `colors.css` (SEMUA token DF 9.1 + hex baru [BARU] DV 10.1 + token paper-speck/paper-fiber-light + gradient bernama), `brand.css` (10 brand DF 28.3 dengan `--brand-wall, -wall-deep, -line, -mid, -tint, -wash, -accent`), `fonts.css` (Gloock, Fraunces Light Italic dan Italic 400 sebagai **dua instance statis** via fonttools, Shantell Sans, DM Mono, Poppins, Anton, Pinyon Script, Bodoni Moda, Bebas Neue self-host di `public/fonts`, subset Latin, `display=swap`; Pinyon/Bodoni/Bebas hanya dimuat di Magazine Art), `motion.css` (semua token gerak 10.7), `paper.css` (tebal 3 px, tiga bayangan, `--hd`), `breakpoints.ts` (XS sampai 2XL + HP landscape).
3. `tailwind.config`: warna dari token (bukan hex baru), font family, breakpoint.
4. `src/lib/media.ts` (`mediaUrl`, `VITE_MEDIA_BASE_URL`, `src/vite-env.d.ts`), `SafeImage`, `SafeVideo` (placeholder kertas, kondisi gagal 23.5, width/height dari data, IntersectionObserver play/pause, `crossOrigin="anonymous"`).
5. `src/hooks/`: `useScrollProgress`, `useBreakpoint`, `useReducedMotion`, `useCalmMode`, `useLiteMode` (aturan Lite otomatis 12.4), `useHashRoute` (semua rute 10.2), `useInView`.
6. `src/data/`: tipe dan isi **lengkap** dari bible: `companies.ts` (10), `works.ts` (34 karya + metrics + credit + permission + `needsReview`), `chapters.ts` (peta chapter, beat, kostum, babak, papan nama, seed robekan), `strings.ts` (seluruh copy Inggris, gelembung doll 7.5, kondisi gagal), `journey.ts` (benda penghubung, walk strip). Tidak ada teks di dalam komponen.
7. `vercel.json` (rewrite `/plain`), `.env.example` (`VITE_MEDIA_BASE_URL`, `VITE_SITE_URL`, `VITE_LAUNCH_MONTH` untuk *Numbers as of*), `index.html` (viewport tanpa `user-scalable=no`, `lang=en`, title dan meta description dari 24.2).
8. Uji unit: setiap token ada, `mediaUrl`, `useHashRoute` untuk semua rute.
**Gerbang**: `npm run check` hijau; `npm run dev` menampilkan halaman uji token; 34 karya dan 10 perusahaan terisi dan cocok dengan bible (tes membandingkan jumlah).

## P02 · Paper Kit, TornEdge, dan Style Test (Tahap 0)
**Baca**: REV (Arah Visual Terbaru A sampai L), REV (Produksi Paper Cut-Out dengan Kode), DV 2 dan 3, DF 9.3, 11 (TornEdge), DF 6.1.
**Kerjakan**:
1. `src/paperkit/` (prng, noise, jitter, deckle, texture, torn, shadow) dan skrip build ubin `kit_paper-tile-neutral_512.webp` (<60 KB), ubin gelap, grain terang/gelap 220 px, deckle mask, Pita Tepi, washi, lipatan lantai (manifest `owner_prompt=P02`, 12 berkas).
2. Komponen: `PaperTexture, PaperShape, DeckleEdge, PaperLayer, PaperLabel, PaperTag, PaperBubble, EdgeTab, CutLetters, Pushpin, StickerButton, HoverLabel (juga saat fokus), PhotoFrame (tidak pernah memotong foto), PaperNote, Overlay (focus trap, Esc, fokus kembali), Carousel`. Preset bahan: handmade, cotton-white, newsprint, aged, dark, tissue, marbled, flocked, kraft.
3. `TornSection` + `generateSeededNoise/generateTornPath/generateTornMaskSvg/createTornEdgeStyle` (11.1 sampai 11.11): mask SVG programatik, tiga lapis noise seeded, serat sisa, highlight tidak menerus, wrapper `drop-shadow`, tinggi `clamp(36px, 6vw, 90px)`, overscan lebar, memoize, `pointer-events:none`, tanpa animasi kontur; reduced motion/Calm → crossfade 250 ms. Seed 101, 202, 303, 404, 505, 606 saja. Tes: seed sama = path sama, tidak ada `Math.random`.
4. **Style Test** di `#/dev/style-test`: (a) adegan 3A (dinding hijau #066838 + serat tone-on-tone + chair rail krem + lantai kayu cocoa + 3 props), (b) satu bay Newsroom Independen merah #E80838, (c) doll placeholder terbaca di tiga warna dinding, (d) satu PaperLabel, satu PaperTag, satu CutLetters, satu headline dua gaya, (e) satu TornEdge di bawah (a), (f) uji 3 detik, siluet, satu warna, kontras.
**Gerbang**: screenshot Style Test di 360/768/1440 px; **pemilik menyetujui tampilan** ("kamu merasa ini dia"); serat dan bintik terlihat di 100%; tidak ada garis buku tulis; Lighthouse irisan ini ≥70.

## P03 · Doll rig (karakter, wajah, brad, 15 kostum, pose)
**Baca**: DF 7, DV 4, 5, 6, 7 (katalog kostum K1 sampai K17), PB 5.10, `docs/prompts-aset.md` bagian 1 dan 2. Gambar master hanya referensi bentuk.
**Kerjakan** (manifest `owner_prompt=P03`, 56 berkas):
1. Definisi deklaratif doll: proporsi H=560 px (dagu 18%, bahu 24%, siku 39%, tangan 52%, pinggul 54%, lutut 73%, pergelangan 92%, telapak 100%), warna tubuh (kulit #E8B795, blush #E9A39B 60%, alis #3A2A24, hidung #D49A7B, mulut #B5645F, sepatu #2E2E2E, brad #BDBDBD cincin #8A8A8A), wajah kisi 4.3, empat gaya hijab, lima bentuk tangan, sepuluh brad (siku dan lutut cincin lebih besar).
2. Turnaround F, W, B (`doll_00_master_*`), 6 ekspresi × F dan W (`face_*`), 5 brad SVG, wajah dari potongan kertas kecil (titik mata, sabit kelopak, lingkaran blush, sabit senyum; tanpa kontur tinta).
3. 15 kostum persis tabel PB 5.10/DV 7 (hex, hem %, volume, hijab, aksesori) + K16 (filter sepia) + K17 (ikon kepala 32/180/512). Hijab tidak sewarna dinding chapter; hijab lobi wisteria #A98BDA; kardigan arsip mustard #D9A441.
4. Matriks 31 kombinasi + 3 tampak belakang (walk = 6 bingkai 8 fps), pose idle/point/hold/hold-1/reach/jump/wave/peek/lift/nod dengan sudut sendi 6.2, siklus jalan 6.3.
5. Komponen `Doll` (props: kostum, pose, tampak, ekspresi): paper-turn 240 ms, ganti kostum 450 ms (tab bahu), bayangan elips (mengecil 70% saat lompat), `SpeechBubble` (aturan 7.5, 18 gelembung + extra), semua reaksi 7.4, mode Calm hanya ganti pose.
6. Halaman `#/dev/doll`: matriks semua kostum × pose × tampak, slider sudut sendi, uji kontras kostum vs dunia (DV 7.1).
**Gerbang**: 56 berkas manifest `done` (bukan placeholder); halaman uji menampilkan 31 + 3 kombinasi tanpa celah/overlap pola di zona brand 16 px; sepatu hitam di semua; hijab di semua; pemilik membandingkan dengan master dan menyetujui.

## P04 · Pabrik aset (generator dan kontak sheet)
**Baca**: `.agents/rules/30-assets-by-code.md`, DV 2 sampai 3 dan 10, `docs/prompts-aset.md` bagian 0 dan 5, `asset-manifest.csv`.
**Kerjakan**:
1. `scripts/generate-assets.mjs` (tsx): render SVG per definisi + `sharp` → WebP 1× dan 2×, `--owner`, `--id`, `--only-missing`, `--folder`; nama persis manifest; seed `hash(ID)`; tolak jika file `reuse_of`; tulis log `docs/evidence/assets-log.json`.
2. Komponen `PaperObject` (merender definisi di runtime), registri `src/assets-def/index.ts` yang memetakan semua 355 ID, dan tes: setiap baris manifest (kecuali `reuse_of` dan `css-only`) punya definisi.
3. Halaman `#/dev/assets`: contact sheet semua aset per `owner_prompt` dengan status (done/placeholder/missing), uji siluet (blok hitam), uji satu warna dinding, overlay hex tabel DV.
4. Jalankan `node scripts/make-placeholders.mjs` agar build tidak patah; **placeholder tidak dihitung selesai**.
5. Pasang `npm run assets` dan tambahkan ke `check` (`--strict` hanya di P19).
**Gerbang**: generator menghasilkan seluruh baris `owner_prompt=P02` dan `P03` dari kode; contact sheet berjalan; sisa aset tetap placeholder sampai prompt pemiliknya.

## P05 · Mesin dunia (kamera, lapisan, World Set, HUD, walk strip)
**Baca**: DF 6 (6.1 sampai 6.8), DF 10 (aturan global), DF 8.1, PB 6 dan 7, DV 3 dan 9 (papan nama, walk strip, peta, HUD), storyboard (panjang scroll dan mode), `docs/part5-*` bagian 23.4 dan 9.
**Kerjakan** (manifest `owner_prompt=P05`, 50 berkas: `S_label`, `H_*`, `W_strip`, `M_*`):
1. `Scene` dan `WorldLayer`: mode D, P, S; paralaks (0,2/0,5/1/1,3/0,9); lantai CSS 3D `rotateX 58–64° perspective 1200px`, teras 24 px/tingkat; dinding dengan sambungan lembar tiap ±satu lebar layar + Pita Tepi 6–10 px (kecuali Ch1); tiga tingkat kedalaman (Penuh, Ringan, Calm).
2. World Set 12 adegan (tabel 6.3) sebagai komponen tema berbasis variabel `--wall-tint/--fiber-tint/--brand-*`; wipe antar-dunia 700 ms mengganti variabel `--brand-*` bersamaan dengan kostum.
3. Orkestrasi chapter: urutan section, `chapter_reached`, pin Awareness/Engagement/Conversion, chip babak (flip 300 ms), kartu babak di 3.0.1 dan 5.1 (fade 400 ms, 1,5 dtk), rel progres, `Edge Tab` pada 20% terakhir (kecuali Ch8), papan nama 12 label (warna dan rotasi tetap), garis jahitan putus-putus, jejak sepatu (0.7 dan strip 7→8, 90 px/jejak, bertahan sampai Ch8).
4. Tujuh walk strip (tabel DV 9.2) dan transisi benda penghubung (PB tabel 10 transisi): kalung ID, lembar→koran, disc memantul, cangkir→botol, stempel→paspor, koper, label harga + rewind, headphone, kotak arsip, kartu kosong.
5. HUD lengkap (zona, tombol INDEX/INFO/CREDIT, stiker Quick Look, chip, rel), Lenis provider, scroll-lock Opening, preloader (zipper, ≤2 dtk, >4 dtk teks tambahan), footer layar penuh, `html/body overflow-x: clip`, `data-lenis-prevent`.
6. `#/dev/world`: pratinjau tiap chapter (kosong tapi benar), walk strip, uji mode D/P/S.
**Gerbang**: perjalanan kosong Opening → Contact mulus di HP kelas menengah (Lite mode) dan desktop; semua rute hash terbuka; Tab tidak terjebak; reduced motion/Calm berfungsi; 50 aset `owner_prompt=P05` done.

---

## P09 · Lobi 3.0 dan Café 3A (prototipe Tahap 1; kerjakan sebelum P06)
**Baca**: `docs/chapters/ch3-creator-trilogy.md` (bagian 3.0 dan 3A), DF 28.2/28.4 (lobi dan 3A), DV 8.4 dan 8.5, storyboard 3.0 dan 3A, `docs/prompts-aset.md` bagian 3.4 dan 3.5.
**Kerjakan** (manifest `owner_prompt=P09`, 31 berkas, prefiks `3-0_` dan `3A_`):
1. **3.0 Lobby**: dinding handmade lilac #D4C1F5 (serat #BBA7E6), lantai lilac-mint, tiga pintu dengan panel brand penuh (hijau #066838 café, emas #B08418 klinik, hijau #066838 + krem gerbang), mode D 250 svh, pintu geser (700 ms), gelembung notifikasi melayang termasuk *1 ♥*, kartu babak II (3.0.1 *ACT II · SHARED* + subjudul), pernyataan kejujuran *Every number here is real, including the small ones. The small ones taught me the most.*, hover pintu *Real numbers. Yes, even the small ones.*, tombol INFO (empat blok *What I did / Result / What I learned / Next time*, kosong = tidak tampil) dan CREDIT, gelembung 3.0.4 *Pick a door. Any door.*, video lobi (Elspresso, Elsthetic, Karamina Tour; tanpa audio 720×1280 loop 8–12 dtk + poster), Edge Tab apricot *3A*.
2. **3A Café (Elspresso)**: dinding hijau #066838 serat #0A4F2C, chair rail dan wainscot subway krem #F8F8C8, lantai kayu cocoa + ubin #C8DACA, konter walnut berlapis krem, mode P 220 svh, runway tiga cangkir (800 ms, panah stiker 44 px, titik 1/3 sampai 3/3, ← →, swipe, klik cangkir samping), struk dan stempel *Day-one numbers*, kartu hasil dengan label *Numbers as of [LAUNCH_MONTH]*, doll *curious* untuk angka kecil, jendela dengan sepeda Go-Food (VS) melintas tiap 20 dtk, E4 klik tas Go-Food → *1 like. Still counts.*, gelembung 3A.1 *Day one. Small numbers, big lessons.*, papan 3A (apricot), transisi cangkir pink → botol serum (wipe tirai 700 ms, variabel `--brand-*` berganti).
3. Kostum 4 dan 5 (P03) terpasang; doll berganti kostum 450 ms di pintu masuk 3A. Semua teks, angka, link, credit dari `src/data` (jangan menulis ulang).
**Gerbang**: Lighthouse mobile ≥70 pada irisan ini; lancar di HP kelas menengah (pemilik mengujinya); semua frame 3.0.x dan 3A.x di bible punya padanan; 31 aset done; dinding tidak sewarna barang; hijab/kostum terbaca.

## P06 · Chapter 0: The Locker Hallway (Opening)
**Baca**: `docs/chapters/ch0-locker-hallway.md` (13.1 sampai 13.8, DV 8.1, K1), `docs/prompts-aset.md` bagian 3.1, DF 11 (seed 101), 10.3, 10.5.
**Kerjakan** (manifest `owner_prompt=P06`, 39 berkas `0_*`):
1. Dua keadaan: loker tertutup (scroll terkunci total: wheel, touchmove, Space, PageDown, Arrow, scroll anchor, `lenis.stop()`) → klik/Enter/Space pada ▶ OPEN → wipe 900 ms (kilat pink lembut maksimal sekali; reduced motion crossfade) → loker terbuka (warna berbeda: interior berry #7A2E5C, rak lavender). OPEN diingat per sesi; *Back to the locker* tidak mengunci ulang.
2. **Loker 3D sungguhan dengan CSS 3D** (dilarang menempel gambar): lima pintu rasio ≥1:3 (≈325×975 px desktop, kabinet ≈1.781×1.044, `--px`≈0,301, footer 20 px), langit-langit, rak, tiga dinding, tiang divider 4 + tiang luar 2, ventilasi berongga timbul, handle chrome, lubang kunci, plat nomor chrome 01 sampai 05 (Bebas Neue), tebal 10 px. Pintu 1 dan 5 steel-lilac #B9B8CC, 2 dan 4 lavender #BFA8E5, 3 lilac #D4C1F5. Tampil utuh (tanpa terpotong, termasuk footer *2026 / Jassinta Roid Triniti / Creative Portfolio*) di HP, tablet, desktop, landscape; HP: tiga loker tengah dulu, geser horizontal, titik 1 sampai 5; hover loker bergetar 2°.
3. Tipografi pintu 3: *Content that* (Gloock, blok pink+butter), *is Felt,* (Fraunces Light Italic, mint+lilac), *Shared,* (Gloock, baby-blue), *Remembered* (Fraunces Italic 400, peach), ukuran dan padding 13.4.
4. Loker terbuka: kartu SERVICES, HELLO (video intro.mp4: satu-satunya bersuara, play/pause/mute/CC, WebVTT, kembali ke poster, kutipan *Hi, I’m Jassinta. Let’s make something worth remembering.*), STACK; pill muncul bergantian; tombol *Download CV (PDF)* (`Jassinta-Roid-Triniti-CV.pdf`).
5. Barang 3D loker 2 dan 4 (11 barang tabel 13.6 + DV 8.1 0-20 sampai 0-30): hit-test alpha pada kontur, menempel di rak (stagger jatuh 60 ms), hover label price-tag (juga fokus keyboard, collision viewport), HP tap pertama label tap kedua buka; rute `#/participation … #/notes`; VOGUE dan NOTES tidak terpotong; buku tanpa tulisan; sepatu pink dekoratif.
6. Frame 0.1 sampai 0.7 persis (preloader *Putting the finishing touches on the lockers...*, doll mengintip, *Scroll to follow Jassinta →*, kertas sobek seed 101 ditarik doll mengikuti scroll, langkah pertama di garis jahitan, papan *START HERE / Paper School*, chip *ACT I · FELT*, gelembung *Okay, here we go.*, jejak sepatu). TocInline dua kolom di kanan bawah footer. Benda penghubung: kalung ID.
**Gerbang**: loker dan footer utuh di 360/768/1440 + landscape; tidak ada barang melayang/tertimpa; keyboard-only bisa membuka semua barang; 39 aset done; Lighthouse Opening ≥80 (target internal).

## P07 · Chapter 1: The Editor's Desk (Personal Brand)
**Baca**: `docs/chapters/ch1-editors-desk.md` (14.1 sampai 14.4, DV 8.2, K2, About, masa kerja, CV PB 10), `docs/prompts-aset.md` bagian 3.2.
**Kerjakan** (manifest `owner_prompt=P07`, 12 berkas `1_*`):
1. Kanvas **putih murni #FFFFFF**: tanpa lantai, skyline, grain kanvas; label putih datar tanpa grain; teks paling lambat di paralaks.
2. Headline raksasa Anton cherry-red *WHICH COMPANIES HAVE I WORKED FOR?* (kiri) + foto cut-out Jassinta asli (kanan; file besar baru tinggi ≥1.300 px dari pemilik, gunakan `needsReview` bila belum ada) lewat PhotoFrame; alt *Portrait of Jassinta Roid Triniti, seated.*
3. Sepuluh dokumen kertas putih (cotton-white) berstaples merah, nomor 01/10 sampai 10/10, rotasi deret tetap, logo brand di lembar (logo_1 sampai 10), toggle *by category / by year*, hover naik 8 px, klik membesar 1:1 dengan *See the work →* ke chapter terkait, peran dan masa kerja tiap dokumen (14.2, 14.3) persis dari bible; dua kolom rapi di HP tanpa horizontal scroll.
4. Kartu pers About (1-08) lewat kalung ID, fakta CV (Work Experience, Internship, Education, Organization, Skill) dan tombol Download CV; bio `[cek]` ditandai `needsReview`.
5. Gelembung 1.1 *That’s me. The non-paper version.* dan 1.2 *Ten places. Hover to see my role.*; transisi: lembar Independen Media membesar menjadi halaman koran.
**Gerbang**: tidak ada satu pun warna/tekstur dunia di kanvas; 10 dokumen cocok dengan data (tes jumlah dan urutan); keyboard dapat membuka tiap dokumen.

## P08 · Chapter 2: The Newsroom (Writing Portfolio)
**Baca**: `docs/chapters/ch2-newsroom.md` (15.1, 15.2, 28.7.x, DV 8.3, K3), DF 28.4 (Newsroom), `docs/prompts-aset.md` bagian 3.3.
**Kerjakan** (manifest `owner_prompt=P08`, 25 berkas `2_*`):
1. Intro newsprint krem (150 svh) dengan tiga bendera brand menggantung; headline dan narasi; gelembung 2.1 *Headlines first. Stories second.*
2. Rak disc 3D (mode P, 440 svh, 11 × 40): bay 1 Independen (disc 1 sampai 4), bay 2 inNalar (5 sampai 8), bay 3 Ikapunija (9 sampai 11); scroll melangkah disc, ← →, swipe, klik disc samping; HP: disc tengah besar, samping kecil, info 4 baris di atas.
3. **Wall Shift**: dinding belakang berganti penuh warna logo (merah #E80838; gradient #18E8C8→#0898F8; teal #088898) lewat `--brand-*`; runner tint ikut berganti; pita arsitektur tiap bay (rail putih+list hitam ganda+pilaster; rail+panel lengkung putih; rail krem+titik merah #E8402A); `--brand-accent` mengikuti disc aktif; teks kecil di Tag Kertas krem, bukan langsung di dinding aqua/teal; Wall Gallery (cetak kecil berbingkai tiap artikel), papan nama media berlogo, papan info berpin, lampu meja, koran berpita.
4. 11 disc dengan data persis (judul Indonesia + *Article in Indonesian* + `lang=id`, alt contoh bible), pin **Awareness** menyala di 2.4, gelembung 2.5 *Spin a disc. Read the story.*
5. Ambient (roller berputar, jam berdetik, serpihan newsprint); transisi disc terakhir memantulkan *Why does one post go viral while another fades?* → TornEdge seed 202 → walk strip kios mini.
**Gerbang**: tiga dinding terlihat serasi; teks lulus kontras; semua artikel punya link/credit; gambar artikel IMN_*/innalar_* dikreditkan (26.4).

## P10 · Chapter 3B Glow Clinic, 3C Terminal, recap, What I learned
**Baca**: `docs/chapters/ch3-creator-trilogy.md` (16.4 sampai 16.7), DV 8.6 dan 8.7, K6 K7, DF 28.4, `docs/prompts-aset.md` bagian 3.6 dan 3.7.
**Kerjakan** (manifest `owner_prompt=P10`, 32 berkas `3B_*`, `3C_*`):
1. **3B** (380 svh, mode P): dinding **putih marble** #FFFDF9 (urat abu #E5E0E3, urat emas samar), lantai marmer champagne #F3E1C8, rail/list/pilaster emas #B08418 + amber #F0A810, bingkai pintu kaca emas, cermin vanity berlampu, botol serum bertutup emas, rak kaca, papan promo, resep dokter bertinta emas, kursi treatment, tanaman, glitter halus; video latar (kecantikan_1, 2, 3; tanpa audio, pause), carousel 6 flyer (ukuran persis daftar aset, tidak dipotong), stempel *Tested.* dan *IMPORTANT* → cap paspor; gelembung 3B.2 *I tested a lot here. Not everything worked.*; Esc menutup overlay; papan nama dua logo (Elsthetic, Aishi Beauty).
2. **3C** (280 svh, mode P): dinding hijau #066838 (dibedakan dari 3A: pilaster emas, panel lengkung krem #F8F8C8, list emas ganda), lantai krem-sage + strip landasan putih, papan jadwal flip #04502A, boarding pass krem, koper, cap paspor, pesawat kertas besar bertali, **siluet Ka’bah/Masjidil Haram hitam-emas yang tenang dan hormat** (tanpa karikatur; tandai `needsReview` untuk ditinjau orang Karamina Tour), jendela dengan laut pastel berlapis dan kapal layar kertas bergeser 8 px/6 dtk, pin **Engagement** di 3C.3 + stempel *Take-off*, doll *proud* + confetti pada 914 views, E5 klik pesawat → *Next stop: your campaign.*, gelembung 3C.2 *Same me. New lesson.*
3. Recap trilogi (sekali di akhir 3C) dan draf *What I learned* (13 karya, semua `needsReview`).
4. Transisi 3C → 4: koper terbuka (hanger kosong), TornEdge seed 303, doll menarik koper melewati pantai pastel.
**Gerbang**: 3A dan 3C terlihat berbeda (hangat vs berwibawa) dan 3B menengahi; semua angka cocok sumber; semua link terbuka.

## P11 · Chapter 4: The Boutique (Lassiewear) dan halaman jenis konten
**Baca**: `docs/chapters/ch4-boutique.md` (17.1, 17.2, DV 8.8, K8 sampai K12), `docs/prompts-aset.md` bagian 3.8.
**Kerjakan** (manifest `owner_prompt=P11`, 21 berkas `4_*`):
1. Fasad, dinding **burgundy #881838** (serat #6B1230), chair rail champagne ganda, panel rose #983858, karpet flocked blush, hanger champagne, pouf beludru, tas belanja, label harga berkibar, manekin netral, empat ruang ganti (kusen gading-champagne, tirai berumbai burgundy).
2. Headline *From Scrolling to Strategy* (Scrolling dan Strategy italic), narasi, stiker fakta *I produced up to 4 videos a day.* dan *Apr - Aug 2026*, label *Numbers as of [LAUNCH_MONTH]*.
3. Empat video 1080×1920 serentak (Hard Selling, Entertainment, Education, Fun: Fun hanya 4 file) di empat ruang ganti, mode P 450 svh, doll berganti kostum K9 sampai K12 sesuai video yang disorot (450 ms) + gelembung 4.7 masing-masing, pin **Conversion** di 4.5, maksimal 6 video aktif.
4. Halaman jenis konten `#/strategy/{hard-selling,entertainment,education,fun}` dengan strip info (`4_info-*`), kartu hasil dan CREDIT, referensi Inspirasi Konten.
5. Transisi: TornEdge seed 404 + rewind 800 ms (doll berjalan ke kiri, K16 sepia, label harga terselip di kantong jaket).
**Gerbang**: empat video berjalan tanpa audio dan hanya saat terlihat; outfit sinkron; semua frame 4.x terlaksana.

## P12 · Chapter 5: The Campus Library (kilas balik)
**Baca**: `docs/chapters/ch5-campus-library.md` (18.1, DV 8.9, K13), `docs/prompts-aset.md` bagian 3.9, DF 11.
**Kerjakan** (manifest `owner_prompt=P12`, 14 berkas `5_*`):
1. Rewind sepia + kartu babak III (5.1 *ACT III · REMEMBERED*, gelembung *Rewind. Where did it begin?*), dinding aged-paper, lantai walnut, rak buku, tangga, kucing kertas tidur, jendela bukit, lampu baca, debu dalam cahaya.
2. Flipbook 3D **RUSH 07 (89 halaman: rush_07_1 lebar 1000×704; 2–62 dan 66–89 1000×1419; 63–65 1000×1393)** dan **Pandora (8 halaman 1100×1747)**: dua halaman desktop, satu halaman HP, ← →, drag, swipe, muat halaman aktif ±3, thumbnail ≤120 KB, `React.lazy`; alt *RUSH 07 magazine, page 12 of 89.*
3. Panel tugas Project Campus; warna kembali penuh (fade 600 ms, K16→K13) saat buku pertama dibuka (5.7); E6 klik kucing → *Shh, library.*; catatan periode Comic Club ditandai `needsReview`.
4. Transisi: TornEdge seed 505, doll memasang headphone sambil berjalan.
**Gerbang**: flipbook 89 halaman lancar di HP; 14 aset done.

## P13 · Chapter 6: The Radio Booth (Podcast)
**Baca**: `docs/chapters/ch6-radio-booth.md`, DV 8.10, K14, `docs/prompts-aset.md` bagian 3.10.
**Kerjakan** (manifest `owner_prompt=P13`, 14 berkas `6_*`):
1. Kertas gelap plum-night/aubergine (serat putih 40%), lantai berry, panel busa kertas, mikrofon besar V3, VU meter, rak, lampu **ON AIR hanya menyala saat diputar** (merah redup 35% saat mati).
2. Headline *Behind the Microphone*, dua kartu episode Spotify bergaya mikrofon, **tanpa autoplay**, embed Spotify dengan cadangan *Open in Spotify*, ringkasan/transkrip pendek per episode, *Show original* membuka deskripsi Indonesia (`lang=id`), piala *Best Kartini Radio Producer*, gelembung 6.1 *Shh. We’re on air.*, doll mengangguk saat diputar, gelombang suara melingkar.
3. Tidak ada robekan di Ch6: rekaman masuk kotak arsip lalu tirai menutup 700 ms.
**Gerbang**: tidak ada suara tanpa klik; ON AIR sinkron dengan player.

## P14 · Chapter 7: The Archive Room dan mesin Archive Work Preview
**Baca**: `docs/chapters/ch7-archive-room.md` (20.1 sampai 20.3), DV 8.11, K15, `docs/prompts-aset.md` bagian 3.11.
**Kerjakan** (manifest `owner_prompt=P14`, 12 berkas `7_*`):
1. Warm-grey/aged-paper, lantai honey, laci katalog, lemari berkas, kotak arsip, lampu gantung; tab indeks berwarna brand; `--brand-accent` mengikuti karya terpilih.
2. **34 karya** (24 tambahan + daftar 20.2; bumper AISHI, ELS, flyer_pelatihan tidak masuk) dalam daftar bergulir (`data-lenis-prevent`) + mesin Archive Work Preview (20.3): thumbnail dulu, preview penuh hanya karya terpilih, tanpa crop, 2 kolom desktop / preview sticky di atas HP, ↑ ↓, recalculation `ResizeObserver` debounce 100 ms; `React.lazy`.
3. Kartu kosong *Your project goes here.* (E8: kartu terbang ke Contact), gelembung 7.1 *Nothing hidden, remember?*, ambient (laci bergeser, kartu jatuh).
4. Transisi: TornEdge seed 606, jalan melengkung pulang.
**Gerbang**: 34 karya tampil tanpa crop dan link-nya benar; mesin preview responsif.

## P15 · Chapter 8: The Mailbox (Contact)
**Baca**: `docs/chapters/ch8-mailbox.md` (21.1, DV 8.12, Kontak PB), `docs/prompts-aset.md` bagian 3.12.
**Kerjakan** (manifest `owner_prompt=P15`, 11 berkas `8_*`):
1. Jalan melengkung pulang ke Paper School, jejak sepatu 0-55 dari 0.7 masih ada, tiga lembar tisu/washi pink-lilac-baby-blue bertepi deckle (tanpa gradient digital), lantai matcha + jalur bata, bintang kertas berkelip, doll melambai tiap 6 dtk, tanpa Edge Tab dan chip.
2. Doll (kostum K1) memasukkan amplop ke loker *Reserved for: your story*; tiga kolom Email, Social Media, WA/Phone (nilai dari bible, **disusun lewat JavaScript**, tidak ada di HTML statis atau JSON-LD), salin dengan toast *Copied!* (gagal: *Couldn't copy. Select and copy manually.*), tombol Download CV, penutup *I would love to hear your story. Let's create something worth remembering.*, tombol *Back to the locker* (loker tidak terkunci lagi), gelembung 8.1.
3. `session_complete` terkirim saat sampai Ch8.
**Gerbang**: kontak berfungsi di semua perangkat; footer layar penuh benar.

## P16 · Overlay suvenir, INDEX, Quick Look, Plain page, halaman global
**Baca**: `docs/part5-dunia-bersama-overlay.md` (22.1 sampai 22.7, 23.1 sampai 23.5, Kartu Quick Look, DV 8.13), DF 10.2, 12.5, `docs/prompts-aset.md` bagian 3.13.
**Kerjakan** (manifest `owner_prompt=P16`, 20 berkas `O_*`):
1. Tujuh overlay: Participation, Achievement (data sertifikat/penghargaan 22.1 dan 22.2, nomor/QR/tanda tangan disamarkan), Magazine Art (kolase buku mockup + baki laci 10 elemen elegan `O-02b-*`, handle skala/rotasi, *Save as image* dengan fallback CORS, font Pinyon/Bodoni/Bebas dimuat hanya di sini), Photography (17 foto Vintage Cindy), My Message (surat), My Strategy, Notes (Awareness, Engagement, Conversion). Overlay: sticker pop, focus trap, Esc, Back, fokus kembali, doll mundur 40 px skala 90%, scroll body terkunci.
2. INDEX peta Paper Town (9 tempat, klik → doll auto-walk 1.200–1.800 ms, cap kunjungan, lencana *You’ve visited 4 of 9 places*, *Secrets found: 2 of 5*), daftar teks sebagai alternatif dan default pembaca layar, toggle **Calm mode**.
3. Quick Look (nama, peran, tiga sorotan, logo 10 perusahaan, kontak, tautan chapter); **Plain page** `#/plain` dan `/plain` (satu h1, satu h2/chapter, linear, noscript, tampilan cetak, tautan dari skip link/INDEX/Quick Look/footer); frame global 23.4; kondisi gagal dan kosong 23.5 (copy persis); overlay 404 dengan doll membawa peta.
**Gerbang**: semua rute 10.2 berfungsi dari URL langsung; Esc dan Back benar; Plain page lulus axe tanpa pelanggaran.

## P17 · Ambient, easter egg, reaksi doll
**Baca**: DF 8.1 sampai 8.3, 7.4, DV 9.5, `docs/prompts-aset.md` bagian 4.5.
**Kerjakan** (manifest `owner_prompt=P17`, 6 berkas `A_*`): ambient loop di **12 adegan** persis tabel 8.1 (hanya transform/opacity, maks 3 aktif, berhenti off-screen dan saat tab tersembunyi, mati di Calm), lima easter egg **E1, E4, E5, E6, E8** (tombol dengan `aria-label`, tanpa suara, tidak menutupi konten) + counter INDEX, confetti, bintang dizzy, kupu-kupu loker 4 (opsional), debu, serpihan newsprint.
**Gerbang**: tidak ada egg lain; FPS tetap ≥40 di Lite mode; Calm mematikan semua.

## P18 · Responsif, performa, aksesibilitas, SEO, analitik
**Baca**: DF 12, PB 7, DF 24, QA 26.3, `.agents/rules/20-*`.
**Kerjakan**: Playwright e2e di iPhone Safari, Android Chrome, iPad (portrait dan landscape), desktop 1440 dan 1920, HP landscape; axe tiap chapter; Lighthouse mobile (Performance ≥70, Accessibility ≥90, CLS≈0); slow 4G + Save-Data; Lite mode otomatis; chunking dan prefetch 60%; font subset; preloader; SEO (title, meta, OG 1200×630 dari peta, favicon K17 32/180/512, JSON-LD Person tanpa email/telepon, canonical dari `VITE_SITE_URL`); Plausible dengan 12 event; keyboard-only dan zoom 200%.
**Gerbang**: semua cek Daftar QA 26.3 lulus dengan bukti di `docs/evidence/P18/`.

## P19 · Audit akhir dan peluncuran
**Kerjakan**: `node scripts/check-coverage.mjs --strict` harus hijau (355 aset done, 381 bagian matriks `done` dengan bukti); jalankan `/audit-coverage`; cocokkan tiap angka dengan tangkapan layar sumber (label *as of*); cek 30+ link eksternal; uji Ka’bah dan izin (26.4); Vercel (domain sementara, rewrite `/plain`, header CORS CDN bila media di CDN); uji kartu share di WhatsApp; 404; analitik; tulis `docs/evidence/launch-report.md`.
**Gerbang**: pemilik menandatangani daftar `docs/05-data-review.md` (semua `[cek]` terjawab) dan menyetujui peluncuran.
