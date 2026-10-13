# Bible Digest — Jassinta's Paper Doll Journey

Dokumen intisari teknis dan visual terlengkap untuk proyek **Jassinta's Paper Doll Journey**. Dibuat pada fase **P00 (Analisis Bible)** sebagai pedoman implementasi langsung untuk seluruh fase pembangunan (P01 sampai P19) tanpa mengurangi, mengubah, atau mengarang data dari `docs/portfolio-bible.md`.

---

## DAFTAR ISI
1. [Struktur Arsitektur Cerita & Perjalanan](#1-struktur-arsitektur-cerita--perjalanan)
2. [Tabel Komprehensif: Chapter → Frame → Aset → Konten → Interaksi → Transisi Keluar](#2-tabel-komprehensif-chapter--frame--aset--konten--interaksi--transisi-keluar)
   - [Chapter 0: Opening · The Locker Hallway](#chapter-0-opening--the-locker-hallway)
   - [Overlay Suvenir Barang Loker (Chapter 0)](#overlay-suvenir-barang-loker-chapter-0)
   - [Chapter 1: Personal Brand · The Editor's Desk](#chapter-1-personal-brand--the-editors-desk)
   - [Chapter 2: Writing Portfolio · The Newsroom](#chapter-2-writing-portfolio--the-newsroom)
   - [Chapter 3.0: The Creator Lobby](#chapter-30-the-creator-lobby)
   - [Chapter 3A: The Café (Elspresso)](#chapter-3a-the-café-elspresso)
   - [Chapter 3B: The Glow Clinic (Elsthetic & Aishi Beauty)](#chapter-3b-the-glow-clinic-elsthetic--aishi-beauty)
   - [Chapter 3C: The Terminal (Karamina Tour)](#chapter-3c-the-terminal-karamina-tour)
   - [Chapter 4: Example Strategy · The Boutique (Lassiewear)](#chapter-4-example-strategy--the-boutique-lassiewear)
   - [Chapter 5: Project Campus · The Campus Library (Kilas Balik)](#chapter-5-project-campus--the-campus-library-kilas-balik)
   - [Chapter 6: Podcast · The Radio Booth](#chapter-6-podcast--the-radio-booth)
   - [Chapter 7: Archive · The Archive Room](#chapter-7-archive--the-archive-room)
   - [Chapter 8: Contact · The Mailbox](#chapter-8-contact--the-mailbox)
   - [Dunia Bersama, Papan Nama, Walk Strip, Peta, HUD, dan Ambient](#dunia-bersama-papan-nama-walk-strip-peta-hud-dan-ambient)
   - [Rig Karakter Doll, Wajah, Brad, dan 17 Kostum](#rig-karakter-doll-wajah-brad-dan-17-kostum)
3. [Daftar Seluruh Aturan Mutlak](#3-daftar-seluruh-aturan-mutlak)
4. [Daftar Lengkap Entitas, Angka, Tanggal, Link, dan Baris Bible](#4-daftar-lengkap-entitas-angka-tanggal-link-dan-baris-bible)
   - [Daftar 10 Perusahaan Resmi](#daftar-10-perusahaan-resmi)
   - [Daftar 34 Karya Terverifikasi](#daftar-34-karya-terverifikasi)
   - [Peta Deep Link & 17 Rute Hash](#peta-deep-link--17-rute-hash)
   - [Metrik Angka, Tanggal, dan Spesifikasi Teknis](#metrik-angka-tanggal-dan-spesifikasi-teknis)

---

## 1. Struktur Arsitektur Cerita & Perjalanan

### A. Tiga Babak (Acts)
- **Babak I · FELT** (Chapter 0, 1, 2): Pengalaman sensorik, pembuktian keaslian, kepenulisan fisik. Chip babak: *Mint pastel* (`#A8E6CF`).
- **Babak II · SHARED** (Chapter 3.0, 3A, 3B, 3C, 4): Pemasaran konten, dinamika audiens, pembuktian strategi viral. Chip babak: *Baby-blue* (`#BFE3F5`). Pin naratif: Awareness (2.4) → Engagement (3C.3) → Conversion (4.5).
- **Babak III · REMEMBERED** (Chapter 5, 6, 7, 8): Refleksi kampus, kekuatan audio, keterbukaan arsip, kontak masa depan. Chip babak: *Peach pastel* (`#FFB38A`).

### B. Spesifikasi Panjang Scroll & Kamera (Total: ~3.950 vh)
*(Sumber: Portfolio Bible Baris 131–148, Storyboard)*

| Chapter | Panjang Scroll | Mode Kamera | Mekanisme Input Utama | Kontrol Aksesibilitas / Mobile |
|---|---|---|---|---|
| **Ch 0 Opening** | 100 vh (terkunci) + 120 vh | **S** (Stack Flow) | Klik tombol `▶ OPEN` | Enter / Space, tap 2× di HP |
| **Ch 1 Editor's Desk** | 250 vh | **S** (Stack Flow) | Scroll vertikal | Tab ke lembar dokumen |
| **Ch 2 Newsroom** | 150 vh (intro) + 440 vh (rak disc) | **S** lalu **P** (Pinned Carousel) | Scroll melangkah 11 disc | Panah `←` `→`, swipe layar, klik disc samping |
| **Ch 3.0 Lobby** | 250 vh | **D** (Diorama Pan) | Scroll / klik pintu | Klik 3 pintu brand |
| **Ch 3A Café** | 220 vh | **P** (Pinned Carousel) | Scroll melangkah 3 cangkir | Panah `←` `→`, swipe, tombol titik |
| **Ch 3B Clinic** | 380 vh | **P** (Pinned Carousel) | Scroll video latar + swipe flyer | Panah `←` `→`, tombol Pause, Esc |
| **Ch 3C Terminal** | 280 vh | **P** (Pinned Carousel) | Scroll melangkah 3 pass | Panah `←` `→`, swipe |
| **Ch 4 Boutique** | 450 vh | **S** lalu **P** | Scroll mengganti 4 ruang ganti | Klik kartu video, panah `←` `→` |
| **Ch 5 Campus Library** | 300 vh | **S** (Stack Flow) | Scroll + klik majalah 3D | Flipbook: drag sudut, panah `←` `→`, swipe |
| **Ch 6 Radio Booth** | 250 vh | **S** (Stack Flow) | Scroll + klik episode audio | Tombol play Spotify (tanpa autoplay), Tab |
| **Ch 7 Archive Room** | 250 vh | **S** (Stack Flow) | Scroll + klik baris karya | Panah `↑` `↓`, tombol tab brand |
| **Ch 8 Mailbox** | 150 vh | **S** (Stack Flow) | Scroll vertikal | Tab ke tombol kontak / Download CV |
| **Walk Strip (7 strip)** | ~50 vh tiap strip | **D** (Diorama Pan) | Scroll perjalanan doll | Tombol *Skip to chapter* |

---

## 2. Tabel Komprehensif: Chapter → Frame → Aset → Konten → Interaksi → Transisi Keluar

### Chapter 0: Opening · The Locker Hallway
- **Wilayah**: Paper School · **Babak**: I · FELT · **Mode**: S · **TornEdge**: Seed 101 · **Kostum**: K1 Seragam Santai
- **Beat**: *"Every story starts with something you keep close."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **0.1 Preloader** | `0-56` (`kit_preloader`), stiker zipper kertas pink #FFB3D9, slider emas #D4A64A | *"Putting the finishing touches on the lockers..."* | Animasi zipper membuka, maksimal 2 detik. Jika >4 dtk: *"Taking longer than usual... Skip to quick look"* | Memudar lembut ke 0.2 |
| **0.2 Koridor Tertutup** | `0-01` Badan loker (5), `0-02` Plat nomor 01–05, `0-03` Ventilasi timbul, `0-04` Handle latch chrome, `0-05` Lubang kunci, `0-06` Blok tipografi pintu 3, `0-07` Tombol OPEN | Headline: **Content that** (Gloock, pink-butter) ***is Felt,*** (Fraunces, mint-lilac) **Shared,** (Gloock, baby-blue) *Remembered* (Fraunces, peach). Tombol: `▶ OPEN`. Footer: *2026 / Jassinta Roid Triniti / Creative Portfolio* | Scroll dikunci penuh (`lenis.stop()`). Hover loker: getar 2°. Di HP: tampil 3 loker tengah, bisa digeser horizontal. Klik OPEN memicu transisi. | Tombol pop (320 ms), kilat pink lembut sekali dari celah |
| **0.3 Klik OPEN** | Pergantian badan loker: warna beralih dari steel-lilac/lavender ke berry/lavender terbuka | Tanpa teks | Wipe tirai 900 ms (reduced motion: crossfade 250 ms). Scroll halaman terbuka. | Loker terbuka siap di-scroll |
| **0.4 Koridor Terbuka** | `0-10` Interior loker berry #7A2E5C, `0-11` Kartu Services, `0-12` Kartu Hello, `0-13` Kartu Stack, Barang 3D di Loker 2 & 4 (`0-20`–`0-30`) | Label hover: *Participation*, *Achievement*, *Magazine Art*, *Photography*, *My Message*, *My Strategy*, *Notes* | Barang jatuh ke rak (stagger 60 ms). Hover barang: label harga kertas muncul dekat kursor. HP: tap 1 label, tap 2 buka overlay. | Menggulir ke 0.5 saat scroll dimulai |
| **0.4a Kartu Loker 1** | `0-11` Kartu SERVICES di pintu 1, pin hot-pink #FF8DC7 diameter 80 var | Tag: *SERVICES*, Sub-tag: *✧ CAPABILITIES*, Judul: *I Can Help You With:*, 12 Pill: *Social Media Management, Social Media Strategy, Content Planning, SEO Writing, Copywriting, Video Content, Graphic Design, Video Bumper Animation, TikTok Live Hosting, E-commerce Store Management, Performance Analysis, and more*. Tombol: *Download CV (PDF)* | Hover mengangkat kartu; tombol membuka berkas `Jassinta-Roid-Triniti-CV.pdf` | Tetap di pintu |
| **0.4b Kartu Loker 3** | `0-12` Kartu HELLO di pintu 3, pin merah #E5173F, video portrait 9:16 `intro.mp4` | Tag: *HELLO*. Kutipan bawah video (serif italic): *"Hi, I'm Jassinta. Let's make something worth remembering."* | Video bisu saat muat. Klik play besar (146 var) memulai audio + CC WebVTT. Tombol pause dan mute. Selesai kembali ke poster. | Tetap di pintu |
| **0.4c Kartu Loker 5** | `0-13` Kartu STACK di pintu 5, pin lavender #A98BDA | Tag: *STACK*, Sub-tag: *✧ EXPERTISE*, Judul: *Platform I Am Proficient in:*, 13 Pill: *Instagram, TikTok, Facebook, Canva, CapCut, Adobe Photoshop, Illustrator, Premiere Pro, InDesign, Tokopedia, Shopee, TikTok Shop, CMS* | Hover pill efek pop | Tetap di pintu |
| **0.5 Idle 3 Detik** | Doll `doll_00_master_F_idle` mengintip dari robekan kertas (hanya kepala, dada, kalung ID, tangan melambai) | Stiker pill berdenyut: *"Scroll to follow Jassinta →"* | Tangan doll melambai perlahan tiap 4 detik jika pengunjung diam >3 detik | Menggulir ke bawah |
| **0.6 Scroll Pertama** | `0-53` Kertas sobek seed 101 ditarik ke bawah oleh doll | Tanpa teks | Kertas robek turun mengikuti scroll, lapisan koridor terbuka memperlihatkan Paper School di baliknya | Tirai kertas terbuka penuh |
| **0.7 Langkah Pertama** | Doll melangkah dengan sepatu hitam. `0-40`–`0-55`: `0-43` Lantai hijau berlipat matcha #B7D9A8, `0-44` Jalur bata blush #FFD6E8, `0-45` Garis jahitan, `0-55` Jejak sepatu hitam (90 px/jejak), `0-46` Awan berwajah, `0-47` Pesawat kertas origami, `0-48` Pohon sakura, `0-49` Bangku, `0-50` Rumput bergoyang, `0-51` Gedung Paper School, `0-52` Jam sekolah, `S_label_0` Papan nama | Papan nama: *START HERE* dan *Paper School*. Chip HUD kiri atas: *ACT I · FELT*. Gelembung doll: *"Okay, here we go."* | Jejak sepatu distempel tiap 400 ms. Papan sticker pop. Chip babak muncul. Gelembung doll fade naik 8 px. | Benda penghubung: **Kalung ID (lanyard)** berpindah bersama doll ke Chapter 1 |

---

### Overlay Suvenir Barang Loker (Chapter 0)
*(Akses via klik barang di Loker 2 dan 4, atau via rute deep link)*

| Barang Loker & Aset | Rute Hash & Tipe | Visual & Isi Konten | Interaksi & Aksesibilitas |
|---|---|---|---|
| **0-20 Sertifikat** (rak 1 atas loker 2) | `#/participation` (Dialog) | Suvenir piagam berbingkai emas #D4A64A. Partisipasi lomba & organisasi: KSM Comic Club (2021–2023), Kemenag PR Intern (2023–2024), Beasiswa Gojek Batch 2. Aset pendukung: `O_O-01_sertifikat-partisipasi_V0`. | Focus trap, Esc menutup, tombol *Back to lockers*. |
| **0-21 Piala** (rak 1 kanan loker 2) | `#/achievement` (Dialog) | Piala emas #D4A64A duduk di rak. Prestasi: Best Kartini Radio Producer (2024), GPA 3.70 / 4.00 Politeknik Negeri Jakarta. Aset pendukung: `O_O-02_piala-penghargaan_V3`. | Focus trap, Esc menutup. |
| **0-22 Kumpulan Majalah** (rak 2 loker 2) | `#/magazine-art` (Dialog) | 5 cover majalah seni/mode (VOGUE masthead, Bodoni 800) berlatar pastel. Kolase visual editorial Cindy & karya layout. Aset: `O_O-03_majalah-seni_V0`, stiker `O-02b-1` s/d `10`. | Carousel cover, zoom detail. |
| **0-23 Kamera Pastelca** (rak 2 kanan loker 2) | `#/photography` (Dialog) | Kamera film retro baby-blue #BFE3F5. Galeri foto editorial dan dokumentasi lapangan. Aset: `O_O-04_kamera-foto_V3`, `O-02c-1` pita, `O-02c-2` kamera mini. | Galeri foto, Esc menutup. |
| **0-24 Sepatu Retro Runners** (lantai loker 2) | *(Dekoratif)* | Sepasang sneakers pink #FF8DC7, detail sol #FF2E93. Mengisi 91% lantai dasar loker 2. | Tidak ada link, reaksi klik doll menoleh ke sepatu. |
| **0-25 Foto Polaroid (3)** (rak 1 atas loker 4) | *(Dekoratif)* | 3 foto digantung pada tali rami #D9B98C dengan jepit kayu #F6D76B. Miring ±3°, sketsa pastel. | Tooltip caption Shantell Sans. |
| **0-26 Surat / Amplop** (rak 1 bawah loker 4) | `#/my-message` (Dialog) | Amplop #FFFDF9 dengan tepi garis pos pink & baby-blue, segel hati merah #E5173F. Pesan personal Jassinta mengenai filosofi bercerita. Aset: `O_O-05_surat-amplop_V0`. | Lembar surat terbuka dari amplop. |
| **0-27 Kumpulan Buku** (rak 2 loker 4) | `#/my-strategy` (Dialog) | 7 punggung buku aneka warna pastel tanpa tulisan, rata 100% ke dinding kiri rak. Peta pola pikir strategi konten 4 pilar. Aset: `O_O-06_kumpulan-buku_V0`. | Kartu strategi terbuka. |
| **0-28 Notes** (rak 2 kanan loker 4) | `#/notes` (Dialog) | Buku catatan butter #FFF1A8 bertuliskan *NOTES* (Shantell Sans 600) dengan pin merah. Kumpulan catatan ringkas tentang metrik dan audiens. Aset: `O_O-07_notes-kuning_V0`, `O-04b` highlighter. | Buka halaman catatan. |
| **0-29 Tas Hobo & 0-30 Payung** (lantai loker 4) | *(Dekoratif)* | Tas peach #FFB38A duduk di sudut kiri. Payung polkadot miring 7,5° menyandar ke kanan dinding. | Dekoratif, melengkapi volume 3D loker. |

---

### Chapter 1: Personal Brand · The Editor's Desk
- **Wilayah**: Office Block · **Babak**: I · FELT · **Mode**: S · **TornEdge**: Tanpa TornEdge di kanvas (putih murni) · **Kostum**: K2 Blazer Pink
- **Beat**: *"First, the receipts. Where have I actually worked?"*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **1.1 Masuk Kanvas Putih** | Kanvas putih murni `#FFFFFF` tanpa garis, tanpa skyline, tanpa grain kanvas. `1-04` Tipografi raksasa kiri, `1-03` Foto cut-out Jassinta asli di kanan (min 1.300 px), `S_label_1` Papan nama | Papan nama: *CHAPTER 01 · THE EDITOR'S DESK* dan *Personal Brand*. Headline raksasa: *WHICH COMPANIES HAVE I WORKED FOR?*. Gelembung doll: *"That's me. The non-paper version."* | Doll berjalan masuk 1,2 dtk dari kiri bawah, berhenti di samping foto, menoleh ke foto asli. Tipografi bergerak paralaks paling lambat (0,9×). | Menggulir ke sebaran 10 dokumen |
| **1.2 Sebaran Dokumen** | `1-01` Kertas dokumen putih fisik (10 lembar), `1-02` Staples merah #D7263D di sudut kiri atas, nomor cetak 01/10 s/d 10/10, `1-05` Toggle filter *By Category* / *By Year*, 10 Logo brand (`logo_1`–`logo_10`), `1-07` Bayangan lembar | 10 Dokumen: Elsthetic, Elspresso, Aishi Academy, Karamina Tour, ELS Corp, Aishi Beauty, Lassiewear, inNalar.com, Independen Media, Ikapunija Media | Paralaks mouse (desktop): lapisan depan lebih dinamis. Hover dokumen: terangkat 8 px (`translateY(-8px)`), bayangan makin dalam, rotasi bergeser. HP: tertata rapi dua kolom tanpa scroll horizontal. | Klik pada salah satu dokumen |
| **1.3 Dokumen Terbuka (1:1)** | Modal dokumen membesar di tengah layar (rasio 1:1 tanpa crop), logo jelas, nama perusahaan, peran, masa kerja, deskripsi | Rincian masa kerja sesuai tabel DF 14.3. Tombol aksi `1-06`: *See the work →* (membawa ke chapter terkait) | Tombol tutup (Esc / klik luar). Klik *See the work* langsung scroll halus ke chapter karya. | Menutup atau navigasi |
| **1.4 Kartu Pers About** | `1-08` Kartu pers jurnalis menggantung dari `1-09` Lanyard kalung ID pink #FF8DC7 | Tag: *ABOUT*, Nama: *Jassinta Roid Triniti*, Peran: *Digital Content Executive · Social Media Specialist · Content Planner · Videographer · Graphic Designer*, Bio: *"Journalism-trained at Jakarta State Polytechnic, I now plan, write, shoot, edit, and design content for beauty, F&B, travel, and fashion brands. Then I read the numbers to see what actually moved people."*, Pendidikan: *Diploma III Publishing (Journalism), Jakarta State Polytechnic, 2021--2024. GPA 3.70 / 4.00*, Domisili: *Based in Depok, West Java, Indonesia*. Tombol: *Download CV (PDF)* dan *Say hello →* (menuju Ch8) | Hover atau klik kalung ID di doll memunculkan kartu pers ini. Tombol CV memicu unduhan. | Menutup modal |
| **1.5 Dokumen Independen Media Dipilih** | Doll mengambil lembar Independen Media (`1-01` nomor 09/10) dengan pose reach | Tanpa teks | Lembar dokumen membesar memenuhi layar dan bertransformasi menjadi halaman koran (*newsprint*) | Lembar membesar menjadi halaman koran, masuk ke Chapter 2 |

---

### Chapter 2: Writing Portfolio · The Newsroom
- **Wilayah**: Press Tower · **Babak**: I · FELT · **Mode**: S lalu P · **TornEdge**: Seed 202 · **Kostum**: K3 Rompi Reporter
- **Beat**: *"We used to flip newspapers. Now we scroll."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **2.1 Masuk Newsroom** | `2-01` Dinding newsprint krem, 3 bendera media di atas, `2-05` Meja redaksi kayu cocoa, `2-06` Mesin tik retro, `2-07` Lampu meja bankir hijau, `S_label_2` Papan nama | Papan nama: *CHAPTER 02 · THE NEWSROOM* dan *Writing Portfolio*. Headline: *We used to flip newspapers. Now we scroll.* | Doll mengenakan rompi reporter krem dan hijab biru muda, memegang notes kecil. Lampu bankir menyala lembut. | Scroll ke rak disc |
| **2.2 Tiga Bay Media (Wall Shift)** | Tiga bay redaksi dengan panel dinding warna brand logo: Bay 1 Independen Media (merah #E80838), Bay 2 inNalar.com (biru aqua #0F62FE), Bay 3 Ikapunija Media (krem-hijau #FFFDF9) | Papan bay: *Independen Media (4 articles)*, *inNalar.com (4 articles)*, *Ikapunija Media (3 articles)* | Wall Shift: saat scroll melintasi bay, variabel `--brand-wall` dan warna latar panel berganti mulus. | Memasuki rak 11 disc |
| **2.3 Rak 11 Disc** | `2-02` Rak disc kayu, `2-03` 11 piringan vinyl/kertas berputar lambat, `2-04` Sleeve disc berlabel judul artikel, `2-08` Klip koran tergantung, `2-09` Koran bertumpuk | 11 Judul karya jurnalistik asli (Disc 1–4 Independen Media, 5–8 inNalar, 9–11 Ikapunija). Label kecil: *Article in Indonesian* (`lang="id"`) | Mode P (Pinned Carousel): scroll vertikal menggeser disc secara horizontal. Alternatif: panah `←` `→`, swipe layar, klik disc samping. | Memilih salah satu disc |
| **2.4 Disc Diangkat (Pin Awareness)** | Disc aktif terangkat dari rak, cover koran membesar di tengah. `H_pin_awareness` di HUD tengah atas menyala pertama kali | Cuplikan artikel & metadata tanggal rilis. Pin HUD: *Awareness Pin Activated* | Pin Awareness berkedip pink lembut lalu menetap aktif di HUD. Doll tersenyum bangga (*proud*). | Klik baca artikel |
| **2.5 Baca Artikel Koran** | `2-10` Koran terbuka lebar, `2-11` Gunting kertas, `2-12` Stempel *APPROVED* merah | Teks artikel asli lengkap berbahasa Indonesia dengan atribusi media. Link ke portal berita asli (jika tersedia). | Modal bacaan koran, Esc menutup. Stempel APPROVED menancap saat artikel selesai dibaca. | Lanjut scroll ke ujung bay |
| **2.6 Disc Terakhir Memantul** | Disc ke-11 (Ikapunija) berputar dan memantulkan teks pertanyaan di permukaannya. `2-13` Kertas sobek seed 202 | Pertanyaan kunci naratif: *"Why does one post go viral while another fades?"* | Disc memantulkan teks, doll berhenti dan berpikir (*curious*). Robekan kertas 202 terbuka. | Masuk Walk Strip 2→3 (kios koran mini), lalu ke Chapter 3.0 |

---

### Chapter 3.0: The Creator Lobby
- **Wilayah**: Creator Plaza · **Babak**: II · SHARED · **Mode**: D · **TornEdge**: Tanpa robekan di lobi · **Kostum**: K4 Kardigan Lobi
- **Beat**: *"Three companies, three worlds, one question: why does one post move people while another fades?"*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **3.0.1 Tiba di Lobi** | `3.0-01` Dinding lobi lilac netral #D4C1F5, `3.0-07` Sofa lobi pastel, `3.0-08` Karpet lingkaran, `3.0-06` Tanaman pot Monstera, `S_label_3` Papan nama, Kartu Babak II | Papan nama: *CREATOR PLAZA* dan *Content Marketing Specialist*. Kartu babak tengah: *ACT II · SHARED* (tampil 1,5 detik lalu fade). Chip HUD berganti ke baby-blue. | Chip babak flip 300 ms. Doll berganti kostum K4 kardigan pastel dan hijab lilac. | Berjalan mendekati 3 pintu |
| **3.0.2 Tiga Pintu Brand** | `3.0-02` Pintu Café Elspresso (kaca berbingkai hijau), `3.0-03` Pintu Glow Clinic (putih marmer bertrim emas), `3.0-04` Pintu Terminal Karamina (gerbang keberangkatan navy), `3.0-05` Plang penunjuk arah | Plang pintu: *1. The Café (Elspresso)*, *2. The Glow Clinic (Elsthetic & Aishi)*, *3. The Terminal (Karamina Tour)* | Tiga pintu berdiri megah berdampingan dengan identitas visual masing-masing brand. | Hover pintu |
| **3.0.3 Microcopy Kejujuran** | `3.0-09` Gelembung notifikasi melayang di atas pintu | Microcopy di bawah pintu: *"Every number here is real, including the small ones. The small ones taught me the most."* Hover: *"Real numbers. Yes, even the small ones."* | Doll menunjuk (*point*) ke arah microcopy kejujuran. | Klik salah satu pintu |
| **3.0.4 Masuk Pintu Café (3A)** | `W_strip_3` Strip transisi lobi, `H_tab_3A` Label kertas 3A mengintip di tepi kanan | Papan pintu 3A terbuka | Klik pintu atau scroll membawa doll melangkah masuk ke 3A The Café. | Wipe tirai 700 ms berganti variabel `--brand-*` ke hijau Elspresso |

---

### Chapter 3A: The Café (Elspresso)
- **Wilayah**: Creator Plaza · **Babak**: II · SHARED · **Mode**: P · **TornEdge**: Tanpa robekan (wipe tirai) · **Kostum**: K5 Apron Barista
- **Beat**: *"A brand this new has small numbers, but the lessons are not small."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **3A.1 Masuk Café** | `3A-01` Dinding hijau botol #066838 dengan chair rail krem, `3A-02` Konter walnut, `3A-03` Mesin espresso tembaga mengepul uap kertas, `3A-05` Papan menu kapur miring 4°, `3A-06` Lampu gantung, `S_label_3A` Papan nama | Papan nama: *3A · THE CAFÉ* dan *Elspresso*. Headline: *A brand this new has small numbers, but the lessons are not small.* Kartu CREDIT: *Elspresso (@elspresso_coffepastry)* | Doll mengenakan apron barista krem berlist hijau. Uap kertas bergetar pelan. Sepeda Go-Food `3A-08` melintas di jendela `3A-07`. | Scroll ke runway cangkir |
| **3A.2 Runway Tiga Cangkir** | `3A-04` Runway 3 cangkir kopi take-away (cangkir pink, mint, krem) di atas konter walnut, `3A-09` Kue croissant di etalase, `3A-11` Stempel *NEW BRAND* | 3 Video: 1. *Elspresso Kini Hadir di Go-Food* (Video Education), 2. *Mood Menu* (Soft Selling), 3. *Meeting Package FullDay* (Promotion). Angka jujur: 38–43 views, 0 like | Mode P (Pinned Carousel): scroll vertikal melangkah antar cangkir (titik 1/3, 2/3, 3/3). Tombol panah stiker 44 px. | Cangkir aktif terangkat |
| **3A.3 Kartu Hasil & Pelajaran** | `3A-10` Kartu hasil *Day-one numbers*, stiker fakta peluncuran akun | Refleksi: *"Small numbers at the start are normal; the win is setting up the channel properly."* Doll berekspresi *curious* (bukan sedih!) pada angka kecil | Doll bereaksi *curious*, memegang cangkir. Tombol putar video menampilkan versi 720×1280. | Scroll ke ujung konter |
| **3A.4 Cangkir Pink Berubah Serum** | Cangkir take-away pink #FF8DC7 terangkat, selongsongnya bergeser dan bertransformasi menjadi botol serum kecantikan | Tanpa teks | Animasi morfologi kertas: cangkir kopi mengecil menjadi botol serum. Wipe tirai dimulai. | Wipe tirai 700 ms, variabel `--brand-*` berganti ke marmer Glow Clinic (3B) |

---

### Chapter 3B: The Glow Clinic (Elsthetic & Aishi Beauty)
- **Wilayah**: Creator Plaza · **Babak**: II · SHARED · **Mode**: P · **TornEdge**: Tanpa robekan (wipe tirai) · **Kostum**: K6 Jas Klinik Pink
- **Beat**: *"This is where I tested what people actually respond to."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **3B.1 Masuk Glow Clinic** | `3B-01` Dinding putih marble #FFFDF9 dengan urat abu halus & trim emas #B08418, `3B-02` Lantai terrazzo pink, `3B-03` Meja konsultasi kaca berlist emas, `3B-07` Cermin bulat berlampu, `3B-09` Lampu medis, `S_label_3B` Papan nama | Papan nama: *3B · THE GLOW CLINIC* dan *Elsthetic & Aishi Beauty*. Headline: *Hard sell, soft sell, weekly flyers: this is where I tested what people actually respond to.* | Doll mengenakan jas klinik pink muda. Cermin vanity memantulkan kilau glitter lembut. | Scroll ke video & flyer |
| **3B.2 Video Latar 3 Kosmetik** | `3B-04` Tiga botol serum bertutup emas, 3 video layar portrait 9:16 loop bisu tanpa audio: `kecantikan_1.mp4` (Facial Messo, 183 views), `kecantikan_2.mp4` (Ceramide, 155 views), `kecantikan_3.mp4` (Pico Glow Laser, 230 views) | Judul video, jenis (Animation / Education / Promotion), metrik views & shares | Scroll menggeser video aktif. Tombol pause menghentikan video. Klik membuka modal putar penuh 1080×1920. | Melangkah ke carousel flyer |
| **3B.3 Carousel Flyer Edukasi** | `3B-05` Carousel 6 flyer promo klinik (Glow Max, Mega Sale 9.9, Vit C Therapy, Luxury Facial, Promo 17 Agustus, Luxury Glow Free Liposome) | Salinan penawaran, tanggal promo, dan fokus desain tiap flyer | Geser horizontal flyer dengan panah `←` `→` atau swipe. Klik flyer membuka tampilan resolusi penuh. | Membuka resep dokter |
| **3B.4 Resep Dokter Emas** | `3B-06` Resep dokter bertinta emas tua, `3B-08` Stempel *TESTED.* menancap | Pelajaran: *"People care about meaning, not products. Ingredient education builds trust before asking for the booking."* | Stempel TESTED distempelkan (pop 320 ms) saat kartu dibaca. Doll tersenyum. | Menggulir ke transisi 3C |
| **3B.5 Stempel Menjadi Cap Paspor** | Stempel merah *IMPORTANT* pada lembar resep berubah bentuk menjadi stempel imigrasi cap paspor internasional | Tanpa teks | Morfologi stempel resep → cap paspor. Tirai menutup dan membuka ke terminal bandara. | Wipe tirai 700 ms, variabel `--brand-*` berganti ke navy Karamina (3C) |

---

### Chapter 3C: The Terminal (Karamina Tour)
- **Wilayah**: Creator Plaza · **Babak**: II · SHARED · **Mode**: P · **TornEdge**: Seed 303 · **Kostum**: K7 Busana Traveling
- **Beat**: *"When I applied the lesson, the numbers moved."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **3C.1 Masuk Terminal** | `3C-01` Dinding terminal biru navy #066838 / #0E254A dengan pilaster vertikal emas, `3C-02` Lantai aula bandara krem-sage, `3C-05` Jendela apron bandara, `3C-08` Kapal kertas di laut pastel, `S_label_3C` Papan nama | Papan nama: *3C · THE TERMINAL* dan *Karamina Tour*. Headline: *When I applied the lesson, the numbers moved.* Kartu CREDIT: *Karamina Tour* | Doll mengenakan busana traveling gading dengan selendang pastel, menarik koper kecil `3C-06`. Kapal kertas bergoyang pelan di laut pastel. | Scroll ke boarding pass |
| **3C.2 Pass Boarding 3 Layanan** | `3C-03` Tiga pass boarding krem berbingkai hijau tua (Umroh Edukasi, Umroh Keluarga, Rindu Ka'bah) | 3 Video: 1. *Umroh Itu Mahal Ya?*, 2. *Umroh Bareng Orang Tua*, 3. *Rindu Melihat Ka'bah?* (914 views, 98 likes — rekor tertinggi Creator Trilogy!) | Mode P: scroll melangkah boarding pass. Video `travel_2.mp4` diputar saat pass ke-3 aktif. | Pin Engagement menyala |
| **3C.3 Papan Jadwal Flip (Pin Engagement)** | `3C-04` Papan jadwal keberangkatan mekanik split-flap, `H_pin_engagement` di HUD menyala kedua | Huruf flip berputar membentuk: *DESTINATION: ENGAGEMENT — STATUS: ON TIME — 914 VIEWS*. Pin Engagement menyala di HUD. | Efek suara klik mekanik kertas (visual split-flap flip). Doll berekspresi *proud* + konfeti kertas kecil `A_confetti`. | Scroll ke siluet suci |
| **3C.4 Siluet Ka'bah & Masjidil Haram** | `3C-07` Siluet Ka'bah dan Masjidil Haram hitam-emas yang tenang, khidmat, dan terhormat (bukan karikatur) | Narasi: *"Starting from a feeling, not a package, reached the most people. Faith-based travel is about reassurance and clarity."* | Siluet berdiri anggun dengan sorot cahaya lembut dari kiri atas. Stempel `3C-09` *TAKE-OFF* menancap. | Membuka recap trilogi |
| **3C.5 Recap Trilogi (Sekali di Akhir 3C)** | `3C-10` Kartu recap trilogi merangkum 3 dunia: Café (Day-one, 43 views) → Clinic (Testing, 230 views) → Terminal (Applied, 914 views) | Tabel ringkasan: *Starting from zero is normal → People care about meaning → A lesson applied becomes results* | Tombol *Compare all 3 worlds*. Rangkuman transisi sebelum memasuki dunia butik. | Koper terbuka di depan butik |
| **3C.6 Koper Terbuka di Depan Butik** | `3C-06` Koper doll terbuka di tepi jalan Fashion Row, memperlihatkan 4 hanger kosong. `3C-11` Kertas sobek seed 303 | Tanpa teks | Kertas robek 303 terbuka. Doll menarik koper melintasi walk strip menuju Butik Lassiewear. | Melangkah ke Chapter 4 |

---

### Chapter 4: Example Strategy · The Boutique (Lassiewear)
- **Wilayah**: Fashion Row · **Babak**: II · SHARED · **Mode**: S lalu P · **TornEdge**: Seed 404 · **Kostum**: K8 Butik Dasar, K9, K10, K11, K12
- **Beat**: *"A brand that sells lifestyle and confidence."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **4.1 Tiba di Depan Butik** | `4-01` Fasad butik burgundy penuh #881838 dengan chair rail champagne ganda #EBD08C, karpet blush #E5C8CA, kanopi champagne, `4-06` Manekin bustier netral, `S_label_4` Papan nama | Papan nama: *CHAPTER 04 · THE BOUTIQUE* dan *Example Strategy · Lassiewear*. Headline: *A brand that sells lifestyle and confidence.* | Doll mengenakan K8 (blouse krem, rok panjang burgundy, hijab dusty-rose). | Scroll ke stiker fakta |
| **4.2 Headline & Stiker Fakta** | `4-08` Stiker fakta die-cut: *I produced up to 4 videos a day.* dan *Apr - Aug 2026*, narasi strategi | Microcopy: *"From Scrolling to Strategy: how 4 content pillars turned a modest fashion boutique into a viral conversation."* | Stiker bergetar pop saat viewport melintas. | Scroll ke 4 ruang ganti |
| **4.3 Empat Ruang Ganti** | `4-02` Kusen 4 ruang ganti (fitting room) bernomor 01–04 dengan tirai gading berumbai burgundy, `4-03` Rel gantungan baju emas, `4-04` Hanger kayu | Label ruang: *01 Hard Selling*, *02 Entertainment*, *03 Education*, *04 Fun* | Tirai ruang ganti terbuka memperlihatkan layar video di dalamnya. | Scroll mengganti outfit |
| **4.4 Empat Video Serentak & Ganti Kostum** | `4-09` Empat bingkai layar video 1080×1920 serentak. Doll berganti kostum otomatis mengikuti video yang disorot: K9 (Gaun Vintage) untuk Hard Selling, K10 (Kantor-Kampus) untuk Entertainment, K11 (Cardigan Cerdas) untuk Education, K12 (Casual Trendy) untuk Fun | 4 Pilar Konten: 1. Hard Selling (Storytelling vintage mood), 2. Entertainment (Tren kantor vs kampus), 3. Education (Tutorial cara order), 4. Fun (Relatable humor & outfit check) | Scroll memindahkan sorotan (focus) antar video. Pergantian kostum doll via tab bahu (450 ms). | Sorotan tiba di video Fun |
| **4.5 Pin Conversion Menyala (30K+ Views)** | Video Fun membesar: angka rekor views **30K+ views** tampil dengan badge viral. `H_pin_conversion` di HUD menyala ketiga | Metrik: *30,000+ Organic Views*. Pin HUD: *Conversion Pin Activated*. Ketiga pin (Awareness, Engagement, Conversion) kini menyala lengkap! | Konfeti emas berhamburan. Doll melompat gembira 320 ms (*proud*). | Klik video membuka info |
| **4.6 Overlay Info Jenis Konten** | 6 Aset info jenis konten (`4_info-latar_V0`, `4_info-strip-hardselling`, `entertainment`, `education`, `fun`, `4_info-kartu-hasil-credit`) | Analisis strategi tiap pilar, skrip copywriting, breakdown retensi video, dan kredit tim produksi | Focus trap modal dialog, tab navigasi 4 pilar. Esc menutup. | Menutup modal |
| **4.7 Label Harga Terselip & Rewind** | `4-05` Label harga Lassiewear gading bertali burgundy terselip di saku doll. Doll menoleh ke belakang. `4-10` Kertas sobek seed 404 | Label harga butik bertuliskan tanggal rilis. Suara/efek visual pita kaset berputar mundur (*Rewind*). | Efek rewind: warna mulai memudar menjadi sepia. Robekan 404 terbuka. | Transisi rewind sepia ke Chapter 5 |

---

### Chapter 5: Project Campus · The Campus Library (Kilas Balik)
- **Wilayah**: Memory Hill · **Babak**: III · REMEMBERED · **Mode**: S · **TornEdge**: Seed 505 · **Kostum**: K13 Jaket Kampus (awal sepia K16)
- **Beat**: *"Before my name was known, there was a campus."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **5.1 Rewind Sepia & Kartu Babak III** | Seluruh pemandangan bernuansa sepia hangat (`sepia(0.9) saturate(0.7)`). Kartu Babak III tampil: *ACT III · REMEMBERED*. Chip HUD berganti ke peach pastel #FFB38A | Kartu babak: *ACT III · REMEMBERED*. Papan nama: *CHAPTER 05 · THE CAMPUS LIBRARY* dan *Project Campus (Flashback)*. Headline: *Before my name was known, there was a campus.* | Doll mengenakan K16 (K13 dengan filter sepia) dan ransel kampus. Chip babak flip 300 ms. | Berjalan ke rak buku |
| **5.2 Rak Perpustakaan Kampus** | `5-01` Dinding perpustakaan kayu hangat aged-paper, `5-02` Rak buku tinggi, `5-03` Meja baca kayu walnut, `5-04` Lampu baca hijau perpustakaan, `5-08` Tangga geser rak buku miring 8° | Plang rak: *Publishing Department · Politeknik Negeri Jakarta · 2021–2024* | Tangga rak buku bergeser saat didekati. Meja baca memuat lembaran tugas kuliah. | Klik majalah di meja |
| **5.3 Flipbook 3D Majalah Kampus** | `5-05` Majalah RUSH 07 (89 halaman), `5-06` Majalah Pandora (8 halaman). **Warna kembali penuh** seketika saat majalah pertama dibuka! | RUSH 07: Majalah musik & budaya kampus (layout, wawancara, artikel). Pandora: Zine sastra & karya kreatif | Warna dunia pulih dari sepia ke full-color dalam 600 ms! Komponen Flipbook 3D: drag sudut halaman, panah `←` `→`, swipe. 2 halaman di desktop, 1 halaman di HP. | Menutup majalah |
| **5.4 Panel Tugas & Organisasi** | `5-07` Buku-buku bertumpuk di meja baca, dokumen laporan keuangan KSM Comic Club | Fakta organisasi: *General Treasurer, KSM Comic Club (2021 – 2023)*; *Layout Editor, Inspira+ Magazine*. Beasiswa Gojek Batch 2. | Dokumen dapat di-klik untuk membaca ringkasan peran. | Menemukan easter egg |
| **5.5 Easter Egg Kucing Kertas (E5)** | `5-09` Kucing kertas kecil duduk di atas tumpukan buku di rak buku ujung | Gelembung kucing: *"Meow. Shh, library."* | Klik pada kucing membuat kucing mengeong bisu dan gelembung muncul. | Scroll ke ujung lorong |
| **5.6 Headphone dari Ujung Rak** | `5-10` Headphone DJ tergantung di ujung rak buku perpustakaan. `5-11` Kertas sobek seed 505 | Tanpa teks | Doll mengambil headphone dan memasangnya di kepala sambil berjalan. Robekan 505 terbuka. | Melangkah dengan headphone ke Chapter 6 |

---

### Chapter 6: Podcast · The Radio Booth
- **Wilayah**: Radio Tower · **Babak**: III · REMEMBERED · **Mode**: S · **TornEdge**: Tanpa robekan (tirai studio) · **Kostum**: K14 Siaran
- **Beat**: *"The best producer is the first listener."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **6.1 Masuk Radio Booth** | `6-01` Dinding akustik studio berpori berry/aubergine, `6-02` Meja siaran radio setengah lingkaran, `6-05` Konsol mixer audio dengan knob kertas timbul, `6-08` Kabel audio meliuk di lantai, `S_label_6` Papan nama | Papan nama: *CHAPTER 06 · THE RADIO BOOTH* dan *Podcast*. Headline: *The best producer is the first listener.* | Doll mengenakan blouse satin, hijab plum muda, dan headphone aktif di telinga. | Scroll ke kartu episode |
| **6.2 Headline & Konsol Siaran** | Knob mixer audio dan fader volume kertas timbul | Narasi: *"Behind the Microphone: learning that the most powerful voice is the one that knows when to listen."* | Hover pada knob mixer memicu rotasi kecil 15°. | Scroll ke kartu mikrofon |
| **6.3 Dua Kartu Episode Spotify** | `6-03` Dua mikrofon siaran vintage gantung bergaya kartu pemutar Spotify: Episode 1 & Episode 2 Kartini Radio Podcast | Judul episode podcast, durasi, deskripsi singkat bahasa Inggris. Tombol: *Listen on Spotify* dan *Show original* (membuka sinopsis bahasa Indonesia) | **Tanpa autoplay suara!** Audio hanya diputar jika pengunjung mengeklik tombol pemutar Spotify resmi. | Pemutaran episode |
| **6.4 Lampu ON AIR Menyala** | `6-04` Lampu kotak akrilik tanda *ON AIR* merah menyala di atas meja | Teks lampu: *ON AIR* | Lampu ON AIR hanya menyala saat audio Spotify aktif diputar. Doll mengangguk (*nod*) mengikuti ritme. | Scroll ke piala produser |
| **6.5 Piala Best Kartini Producer** | `6-06` Piala penghargaan *Best Kartini Radio Producer 2024* emas berkilau di samping mixer, `6-07` Headphone cadangan di meja | Plakat piala: *Best Radio Producer 2024 · Kartini Podcast*. Fakta: memproduksi siaran talkshow inspiratif wanita. | Hover piala menampilkan kilau champagne lembut. | Scroll ke penutup studio |
| **6.6 Rekaman Masuk Kotak Arsip** | `6-09` Kotak arsip karton berlabel pita rekaman terbuka di samping pintu studio | Tanpa teks | Pita rekaman dan naskah siaran melayang masuk ke dalam kotak arsip. Tirai studio menutup perlahan. | Tirai menutup, transisi ke Chapter 7 |

---

### Chapter 7: Archive · The Archive Room
- **Wilayah**: Archive Hall · **Babak**: III · REMEMBERED · **Mode**: S · **TornEdge**: Seed 606 · **Kostum**: K15 Arsip
- **Beat**: *"Everything I've made, nothing hidden."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **7.1 Masuk Ruang Arsip** | `7-01` Dinding arsip abu semen lembut, `7-02` Lemari laci arsip kartu bertingkat, `7-05` Map gantung, `7-06` Cap tanggal arsip, `7-07` Kotak arsip besar bertutup, `S_label_7` Papan nama | Papan nama: *CHAPTER 07 · THE ARCHIVE ROOM* dan *Archive*. Headline: *Everything I've made, nothing hidden.* | Doll mengenakan K15 (kardigan mustard pastel #D9A441, celana cokelat cocoa, memegang kotak arsip kecil). | Scroll ke daftar karya |
| **7.2 Daftar 34 Karya Bergulir** | Daftar 34 karya lengkap (tabel DF 20.2): 11 tulisan berita, 3 video Elsthetic, 6 flyer klinik, 3 video Karamina, 3 video Elspresso, 4 flyer Lassiewear, 4 bumper video | Judul karya, nama perusahaan, format (Writing/Video/Feed), tipe konten, tahun rilis, link konteks | Scroll vertikal daftar karya. Keyboard: panah `↑` `↓` berpindah baris. Tombol *Shuffle* mengacak urutan tampil. | Klik salah satu baris karya |
| **7.3 Mesin Archive Work Preview** | `7-04` Tab indeks warna brand, panel preview dinamis di sisi kanan layar | Preview media sesuai karya aktif (artikel berita, poster video, flyer resolusi tinggi). Tombol: *See it in context →* (melompat ke chapter asal) | Klik baris langsung memperbarui panel preview seketika. Variabel `--brand-accent` mengikuti warna brand karya terpilih. | Scroll ke akhir arsip |
| **7.4 Kartu Arsip Kosong** | `7-08` Kartu arsip kosong bergaris putus-putus dengan tab kuning #FFF1A8 melayang keluar dari laci | Teks kartu: *"Your project goes here."* | Kartu melayang keluar dari laci dan berputar pelan menuju tangan doll. | Robekan 606 terbuka |
| **7.5 Jalan Melengkung Pulang** | `7-09` Kertas sobek seed 606 terbuka memperlihatkan jalan melengkung menuju koridor sekolah awal | Tanpa teks | Doll membawa kartu kosong dan melangkah ke jalan setapak melengkung pulang. Jejak sepatu lama dari Chapter 0 masih terlihat! | Melangkah pulang ke Chapter 8 |

---

### Chapter 8: Contact · The Mailbox
- **Wilayah**: Paper School (Kembali ke Koridor) · **Babak**: III · REMEMBERED · **Mode**: S · **TornEdge**: Tanpa robekan (akhir perjalanan) · **Kostum**: K1 Seragam Santai
- **Beat**: *"I would love to hear your story."*

| Frame | Visual & Aset (ID Manifest) | Konten / Teks Resmi (EN) | Interaksi & Gerak | Transisi Keluar |
|---|---|---|---|---|
| **8.1 Jalan Melengkung Pulang** | Pemandangan Paper School dengan langit cotton-candy lembut #CDEBF8 / #FFD6E8. Jalur bata blush dan jejak sepatu hitam lama menyatu | Tanpa teks | Doll berjalan menyusuri jejak langkah awalnya hingga tiba kembali di depan jajaran loker sekolah. | Tiba di depan loker |
| **8.2 Amplop Masuk ke Loker Khusus** | `8-01` Kotak pos vintage Paper School, `8-02` Loker khusus bertuliskan pelat nama emas, `8-03` Amplop surat balasan `8_amplop-surat_V0` (`reuse_of` `0-26`), `8-04` Pita perangko & stempel pos | Pelat loker: *Reserved for: your story*. Headline penutup: *I would love to hear your story. Let's create something worth remembering.* | Doll memasukkan amplop surat ke celah loker dengan senyuman hangat. | Scroll ke kolom kontak |
| **8.3 Tiga Kolom Kontak** | `8-05` Kartu kontak 3 kolom bertepi kertas: Kolom 1 Email, Kolom 2 Social Media, Kolom 3 WhatsApp / Phone | Kolom 1: *Email: jassintaroidtriniti@gmail.com* (tombol Copy & Mail). Kolom 2: *Instagram: @jassintaroidt · TikTok: @jassintaroidt*. Kolom 3: *WhatsApp: +62 812-xxxx-xxxx* | Klik tombol copy memunculkan toast banner: *"Copied to clipboard!"*. Tombol WhatsApp menyusun link via JS aman. | Tombol aksi bawah |
| **8.4 Tombol Download CV** | Tombol stiker die-cut besar hot-pink berglitter #FF2E93 | Teks tombol: *Download CV (PDF)* | Klik langsung mengunduh berkas `Jassinta-Roid-Triniti-CV.pdf`. Analitik Plausible mencatat event `cv_download`. | Pilihan kembali ke loker |
| **8.5 Tombol Kembali ke Loker** | Tombol navigasi melingkar di footer | Teks: *Back to the lockers* | Klik melakukan scroll animasi lembut kembali ke Chapter 0. | Tiba kembali di Chapter 0 |
| **8.6 Loker Terbuka Penuh** | Loker koridor Chapter 0 kini **bebas di-scroll dan dibuka kapan saja** tanpa terkunci lagi | Microcopy: *"Welcome back. Feel free to explore."* | Seluruh 5 pintu loker dapat dijelajahi ulang tanpa hambatan. Perjalanan selesai sempurna! | Sesi selesai (`session_complete`) |

---

### Dunia Bersama, Papan Nama, Walk Strip, Peta, HUD, dan Ambient

| Kategori & ID Manifest | Jumlah Aset | Deskripsi Visual & Komponen | Perilaku & Interaksi |
|---|---|---|---|
| **12 Papan Nama Label Kertas (`S_label_*`)** | 12 file | Label kertas gunting bersudut membulat dengan dua brad di atas. Rotasi dekoratif tetap: S0 (−3°), S1 (4°), S2 (−2°), S3 (5°), S3A (−4°), S3B (3°), S3C (−5°), S4 (2°), S5 (−3°), S6 (4°), S7 (−2°), S8 (3°). | Muncul dengan animasi *sticker pop* (320 ms) saat doll tiba di setiap babak/chapter. |
| **7 Walk Strip (`W_strip_*`)** | 8 file (W1–W7 + strip lobi) | Jalur penghubung berparalaks 50 vh antar adegan: W1 (School ke Office Block), W2 (Office ke Press Tower), W3 (Lobby ke Boutique), W4 (Boutique ke Campus Rewind), W5 (Campus ke Radio Tower), W6 (Radio ke Archive), W7 (Archive melengkung ke School). | Diorama pan dengan paralaks 3 lapisan (latar 0,5×, jalan 1×, elemen depan 1,3×). Tombol *Skip to chapter* tersedia. |
| **Peta Paper Town & 9 Landmark (`M_map_*`, `M_lm_*`)** | 12 file | Peta kota kertas berlipat (M_map_00) dengan 9 landmark ikonik: Paper School, Office Block, Press Tower, Creator Plaza, The Café, The Clinic, The Terminal, Fashion Row, Memory Hill, Radio Tower, Archive Hall. | Dibuka via tombol `INDEX` di HUD kanan atas. Format buku catatan bergambar. Klik lokasi memicu auto-walk doll ke chapter tersebut (1.200–1.800 ms). Lencana progres: *"You've visited X of 9 places"*. |
| **Komponen HUD & UI (`H_*`)** | 18 file | `H_chip_babak` (kiri atas, flip 300 ms), `H_pin_awareness`, `engagement`, `conversion` (tengah atas), `H_btn_index` (kanan atas), `H_btn_info`, `H_btn_credit`, `H_stiker_quicklook` (kiri bawah: *"In a hurry? Take the shortcut"*), `H_rail_progres` (rel jahitan vertikal tepi kiri desktop dengan kepala mini doll K17). | HUD mengapung responsif di viewport. Chip babak flip warna tiap transisi. Stiker Quick Look membuka modal ringkasan kartu CV & karya dalam 30 detik. |
| **Ambient & Partikel Global (`A_*`)** | 6 file | `A_debu-kertas` (serat melayang lambat), `A_serpihan-newsprint` (Ch2), `A_confetti` (saat metrik tinggi 914 / 30K+ views), `A_bintang-dizzy` (saat doll diklik 5×), `A_kupu-kupu-kertas` (taman), `A_bayangan-doll` (elips dinamis 18% hitam). | Hanya transform & opacity via CSS. Maksimal 3 loop aktif bersamaan. Mati seketika pada mode Calm / `prefers-reduced-motion` dan off-screen. |
| **Paper Kit Fondasi (`KIT_*`)** | 12 file | Ubin tekstur netral 512×512 (`kit_paper-tile-neutral_512.webp`), ubin gelap, grain 220 px, deckle mask, pita tepi vertikal 6–10 px, motif washi tape, lipatan lantai vertikal 64 px, demo huruf potongan, favicon (32, 180, 512 px). | Fondasi material kertas handmade untuk seluruh kanvas web. Dipakai via `mix-blend-mode: multiply` di atas `--paper-color`. |

---

### Rig Karakter Doll, Wajah, Brad, dan 17 Kostum

| Aset Rig & ID Manifest | Detail Visual & Spesifikasi Teknis | Aturan & Reaksi Interaksi |
|---|---|---|
| **Master Turnaround (`doll_00_master_*`)** | 3 file: tampak depan (`_F`), samping kanan (`_W`), belakang (`_B`). Tinggi acuan H = 560 px (ekspor 2×) / 280 px (1×). Proporsi: dagu 18% H, bahu 24%, siku 39%, tangan 52%, pinggul 54%, lutut 73%, pergelangan 92%, telapak 100%. Kulit `#E8B795`, blush `#E9A39B` 60%, alis `#3A2A24`, hidung `#D49A7B`, mulut `#B5645F`, **sepatu selalu hitam** `#2E2E2E`. | 6 Lapisan fisik: Kepala+Hijab, Torso, Lengan Kiri, Lengan Kanan, Rok/Celana, Kaki+Sepatu. Paper-turn F↔W/B memakan waktu 240 ms (`scaleX 1 → 0.05 → 1`). |
| **6 Ekspresi Wajah (`face_*`)** | 12 file (6 ekspresi × tampak F dan W): *Neutral*, *Smile*, *Curious*, *Surprised*, *Proud*, *Focused*. Dibuat dari potongan kertas mikro (titik mata, sabit kelopak, lingkaran blush, sabit senyum tanpa kontur tinta). | Ekspresi dinamis berganti sesuai konteks naratif: *Curious* pada angka rendah, *Proud* pada rekor viral 914 / 30K+, *Surprised* saat tombol OPEN diklik, *Focused* saat menulis/membaca. |
| **Paku Lipat Brad (`brad_*`)** | 5 file SVG: bahu, siku, tangan, lutut, pergelangan kaki. Lingkaran abu `#BDBDBD` dengan cincin luar `#8A8A8A`. | Brad selalu terlihat di atas pakaian doll sebagai penanda fisik boneka kertas berengsel. Zona bersih 16 px di sekitar brad bebas dari tumpang-tindih motif. |
| **Katalog 17 Kostum (`K1` s/d `K17`)** | 15 busana cerita lengkap + K16 (varian sepia kilas balik) + K17 (ikon kepala favicon/HUD). Seluruh busana **wajib berhijab** dan **sepatu selalu hitam**. Hijab tidak pernah sewarna dinding chapter. | Ganti kostum 450 ms lewat tab bahu (persegi kecil 1,5% H). Detail palet hex persis mengikuti tabel PB 5.10 / DV 7. |

---

## 3. Daftar Seluruh Aturan Mutlak

1. **Kelengkapan Mutlak Tanpa Ada yang Tertinggal**:
   - Seluruh 381 bagian bible di `docs/03-coverage-matrix.csv` dan 355 aset di `asset-manifest.csv` wajib diimplementasikan.
   - Status diubah ke `done` hanya bila memiliki bukti verifikasi konkret (path berkas, screenshot, hasil pengujian).
2. **Estetika Murni Paper Cut-Out Art Bertekstur**:
   - **Dilarang keras**: kertas bergaris buku tulis, garis margin merah, garis ink/kontur tinta hitam pada potongan, sticky note kuning mengkilap, tulisan tangan langsung di dinding, glassmorphism, foto tekstur realistis, dan gradient halus pada ilustrasi.
   - **Wajib**: dinding, lantai, bangunan, huruf, dan kartu adalah potongan kertas handmade berlapis (serat + bintik + tepi deckle/gunting, tebal 3 px, highlight 1 px kiri-atas, bayangan 3 kedalaman via `filter: drop-shadow`).
3. **Chapter 1 Kanvas Putih Murni**:
   - Chapter 1 berlatar `#FFFFFF` bersih tanpa lantai, tanpa skyline, tanpa grain pada kanvas (grain hanya ada pada lembar dokumen fisik).
4. **Karakter Boneka Kertas (Doll)**:
   - Doll **selalu berhijab** di seluruh babak dan kostum.
   - **Sepatu selalu hitam** di semua busana.
   - Paku lipat (brad) selalu terlihat jelas di persendian.
   - Doll **selalu berjalan** (tidak pernah menaiki kendaraan; sepeda, mobil, pesawat, dan kapal hanya elemen latar ambient).
5. **Deterministik TornEdge (Hanya 6 Seed)**:
   - Robekan kertas hanya ada di 6 batas chapter dengan seed tetap: **101** (Ch0→1), **202** (Ch2→3), **303** (Ch3C→4), **404** (Ch4→5), **505** (Ch5→6), **606** (Ch7→8).
   - Dilarang memakai `Math.random()` saat runtime. Bayangan menggunakan `drop-shadow` pada wrapper luar (bukan clip-path zig-zag).
6. **Arsitektur 2.5D CSS 3D (Opsi A Tanpa WebGL)**:
   - Loker sekolah dibangun ulang secara prosedural dengan CSS 3D berlapis (langit-langit, rak, 3 dinding berketebalan 10–14 px).
   - **Dilarang menempelkan** gambar utuh `loker_tertutup.png` atau `loker_terbuka.png`.
7. **Scroll Halus Lenis & Penguncian Opening**:
   - Scroll diatur via Lenis. Tanpa scroll-snap global. `html, body { overflow-x: clip }`.
   - Area scroll bersarang (flipbook, modal, dropdown) diberi atribut `data-lenis-prevent`.
   - Opening terkunci penuh hingga pengunjung mengeklik tombol `▶ OPEN`.
8. **Pengendalian Audio yang Ketat**:
   - **Dilarang memainkan audio secara otomatis (no autoplay)**.
   - Hanya `intro.mp4` yang bersuara (diawali bisu hingga tombol play diklik; wajib disertai subtitle WebVTT).
   - Episode Spotify di Chapter 6 hanya bersuara jika diklik secara sadar. Video lainnya tanpa trek audio. Maksimal 6 video aktif bersamaan.
9. **Standar Aksesibilitas Penuh (A11y)**:
   - Navigasi keyboard 100%, outline focus pink 3 px (`:focus-visible`).
   - Seluruh modal dialog memiliki `role="dialog" aria-modal="true"`, focus trap, tombol Esc, dan fokus kembali ke pemicu.
   - Sedia halaman versi sederhana (*Plain page* di `#/plain`).
   - Sedia *Calm mode* dan dukungan penuh `prefers-reduced-motion` (animasi diganti crossfade 250 ms, ambient dinonaktifkan).
   - Target sentuh minimal 44×44 px. Kontras teks minimal 4,5:1. Dilarang mengunci zoom viewport (`user-scalable=no` dilarang).
10. **Satuan Viewport & Responsif Modern**:
    - Wajib memakai satuan dinamis `svh`, `dvh`, `lvh` (bukan `vh` mentah).
    - Memperhitungkan `env(safe-area-inset-*)`, formula `clamp()`, dan container queries.
    - Efek hover hanya aktif pada `@media (hover: hover) and (pointer: fine)`.
    - Tanpa horizontal scrollbar yang tidak diinginkan.
11. **Integritas Data Tunggal**:
    - Dilarang mengarang nama, angka views, tanggal rilis, tautan sosial, atau peran.
    - Data bertanda `[cek]` atau `[isi]` wajib ditandai `needsReview: true` dan dicatat di `docs/05-data-review.md`.
    - Ejaan wajib tepat: *Elspresso*, *Chindy*, *inNalar.com*.
12. **Sentralisasi Aset Media**:
    - Seluruh pemuatan berkas media wajib melewati fungsi pembantu `mediaUrl(path)` (`src/lib/media.ts`) dan komponen `SafeImage` / `SafeVideo`.
    - Dilarang menulis path URL media secara langsung (hardcoded).
13. **Kepatuhan Penamaan Berkas Manifest**:
    - Seluruh berkas aset wajib memiliki nama persis sesuai kolom `file` pada `asset-manifest.csv`.
14. **Palet Warna & Kontras Interior**:
    - Warna hanya menggunakan token hex resmi bible.
    - Benda di dinding tidak boleh sewarna dengan dinding; busana doll tidak boleh sewarna dengan dinding chapter.
15. **Orisinalitas Desain**:
    - Dilarang meniru karakter, komposisi, atau aset situs referensi Mr. Panda. Paper Town adalah ciptaan orisinal bertekstur.

---

## 4. Daftar Lengkap Entitas, Angka, Tanggal, Link, dan Baris Bible

### Daftar 10 Perusahaan Resmi
*(Sumber: Portfolio Bible Baris 2760–2771 [DF 14.2], Baris 1467–1479 [DF 28.3], Baris 125–136 [PB ch1])*

| No | Nama Perusahaan | File Logo | Kategori Tag | Warna Logo (Hex Ink) | Warna Kedua / Garis | Peran Jassinta | Masa Kerja Resmi | Baris Bible |
|---|---|---|---|---|---|---|---|---|
| 1 | **Elsthetic** | `logo_1.png` | Beauty | `#B08418` (emas tua) | Putih | Digital Marketing | Jun 2025 – Sep 2025 | 1469, 2762 |
| 2 | **Elspresso** | `logo_2.png` | F&B | `#066838` (hijau tua) | Putih, krem biji kopi | Video Content Creator | Jun 2025 – Sep 2025 | 1470, 2763 |
| 3 | **Aishi Aesthetic Academy** | `logo_3.png` | Beauty Training | `#B89440` (emas lembut) | Putih | Digital Marketing | Jun 2025 – Sep 2025 | 1471, 2764 |
| 4 | **Karamina Tour** | `logo_4.png` | Tour & Travel | `#066838` (hijau tua) | Krem `#F8F8C8`, emas | Video Content Creator | Jun 2025 – Sep 2025 | 1472, 2765 |
| 5 | **ELS Corp** | `logo_5.png` | Brand | `#F0D050` ke `#C88830` | Emas tembaga | Parent Company (Holding) | Jun 2025 – Sep 2025 | 1473, 2766 |
| 6 | **Aishi Beauty** | `logo_6.png` | Beauty | `#F0A810` (amber) | Putih | Digital Marketing | Jun 2025 – Sep 2025 | 1474, 2767 |
| 7 | **Lassiewear** | `logo_7.png` | Fashion | `#881838` (burgundy) | Rose `#983858` | Social Media Specialist | Apr 2026 – Aug 2026 | 1475, 2768 |
| 8 | **inNalar.com** | `logo_8.png` | Media | `#18E8C8` ke `#0898F8` | Oranye `#E8503A` | SEO Content Writer | Nov 2024 – Jan 2025 | 1476, 2769 |
| 9 | **Independen Media** | `logo_9.png` | Media | `#E80838` (merah) | Hitam `#080808` | Content Writer | Jan 2025 – Apr 2025 | 1477, 2770 |
| 10 | **Ikapunija Media** | `logo_10.png` | Campus Media | `#088898` (teal) | Merah `#E8402A` | Reporter, Inspira+ Magazine | Nov 2024 – May 2025 | 1478, 2771 |

---

### Daftar 34 Karya Terverifikasi
*(Sumber: Portfolio Bible Baris 3720–3755 [DF 20.2])*

| ID | Judul Karya | Perusahaan | Format | Tipe | Berkas Media | Rasio / Ukuran | Metrik & Catatan | Baris Bible |
|---|---|---|---|---|---|---|---|---|
| 1 | Inilah Sosok Jan Miskovic, Pemegang Rekor Mata Minus Tertinggi di Dunia yang Mengejutkan | Independen Media | Writing | News | `IMN_1.png` | 520 × 520 | Disc 1 Ch2 | 3722 |
| 2 | Carmen H2H Lolos Audisi di SM Entertainment Tanpa Sepengetahuan Orang Tuanya, Ini Cerita Lengkapnya | Independen Media | Writing | Entertainment | `IMN_2.png` | 520 × 520 | Disc 2 Ch2 | 3723 |
| 3 | Keren! Komik Digital Indonesia ‘Good Bad Fortune’ Laris Manis di Korea, Ini Sinopsisnya | Independen Media | Writing | News | `IMN_3.png` | 520 × 520 | Disc 3 Ch2 | 3724 |
| 4 | Kuwait Kuasai Posisi! Inilah Mata Uang Tertinggi di Dunia Saat Ini | Independen Media | Writing | News | `IMN_4.png` | 520 × 520 | Disc 4 Ch2 | 3725 |
| 5 | Uang Rusak Jangan Dibuang! 2 Kondisi Cacat Ini Tetap Bisa Jadi Cuan Mahal Jika Dibeli Kolektor | inNalar.com | Writing | Article | `innalar_1.png` | 520 × 520 | Disc 5 Ch2 | 3726 |
| 6 | Segini Harga Terkini Uang Kertas 100 Rupiah Gambar Perahu Layar Pinisi | inNalar.com | Writing | News | `innalar_2.png` | 520 × 520 | Disc 6 Ch2 | 3727 |
| 7 | Butuh Dana Rp 2,2 Triliun, Proyek Pelebaran Jalan Raya Sawangan Kota Depok Belum Juga Direalisasikan | inNalar.com | Writing | Opinion | `innalar_3.png` | 520 × 520 | Disc 7 Ch2 | 3728 |
| 8 | Sosok Junalies, Seorang Desainer Uang Kuno Indonesia yang Karyanya Mendunia: Salah Satunya Uang Seri Barong yang Legendaris | inNalar.com | Writing | Article | `innalar_4.png` | 520 × 520 | Disc 8 Ch2 | 3729 |
| 9 | Membangun Personal Branding yang Kuat | Ikapunija Media | Writing | Article | `Ikapunija_1.png` | 520 × 520 | Disc 9 Ch2 | 3730 |
| 10 | Brand Kopi Kreatif Gen Z Karya Prodi Desain Grafis | Ikapunija Media | Writing | News | `Ikapunija_2.png` | 520 × 520 | Disc 10 Ch2 | 3731 |
| 11 | Kunjungan Alumni IJTM ke Toyota dan Mitsubishi | Ikapunija Media | Writing | News | `Ikapunija_3.png` | 520 × 520 | Disc 11 Ch2 | 3732 |
| 12 | Facial Messo (2025-06-22) | Elsthetic, Aishi | Video | Video Animation | `kecantikan_1.mp4` | 9:16 (1080×1920) | 183 views, 2 likes, 2 shares | 3733 |
| 13 | Ceramide (2025-07-09) | Elsthetic, Aishi | Video | Video Education | `kecantikan_2.mp4` | 9:16 | 155 views, 0 like, 2 shares | 3734 |
| 14 | Pico Glow Laser (2025-07-13) | Elsthetic, Aishi | Video | Video Promotion | `kecantikan_3.mp4` | 9:16 | 230 views, 1 like, 2 shares | 3735 |
| 15 | Glow Max With Triple Geneo (15 Sep 2025) | Elsthetic, Aishi | Feed | Promotion | `flyer_kecantikan_1.jpg` | 1080 × 1072 | Flyer klinik 1 | 3736 |
| 16 | Mega Sale 9.9 Booster Facial (9 Sep 2025) | Elsthetic, Aishi | Feed | Promotion | `flyer_kecantikan_2.jpg` | 1:1 (1080×1080) | Flyer klinik 2 | 3737 |
| 17 | Promo Vit C Therapy (8 Sep 2025) | Elsthetic, Aishi | Feed | Promotion | `flyer_kecantikan_3.jpg` | 1:1 | Flyer klinik 3 | 3738 |
| 18 | Luxury Facial (2 Sep 2025) | Elsthetic, Aishi | Feed | Promotion | `flyer_kecantikan_4.jpg` | 1080 × 1077 | Flyer klinik 4 | 3739 |
| 19 | Promo 17 Agustus 2025 (15 Agu 2025) | Elsthetic, Aishi | Feed | Promotion | `flyer_kecantikan_5.jpg` | 1080 × 1079 | Flyer klinik 5 | 3740 |
| 20 | Luxury Glow Free Liposome (22 Jul 2025) | Elsthetic, Aishi | Feed | Promotion | `flyer_kecantikan_6.jpg` | 1:1 | Flyer klinik 6 | 3741 |
| 21 | Umroh Bareng Orang Tua dan Anak-Anak (2025-08-06) | Karamina Tour | Video | Promotion | `travel_3.mp4` | 9:16 | Video keluarga | 3742 |
| 22 | Umroh Itu Mahal Ya? (2025-08-03) | Karamina Tour | Video | Video Education Animation | `travel_1.mp4` | 9:16 | Video edukasi | 3743 |
| 23 | Rindu Melihat Ka’bah? (2025-08-09) | Karamina Tour | Video | Video Promotion | `travel_2.mp4` | 9:16 | 914 views, 98 likes (Rekor Ch3!) | 3744 |
| 24 | Elspresso Kini Hadir di Go-Food (20 Jul 2025) | Elspresso | Video | Video Education | `kuliner_1.mp4` | 9:16 | Peluncuran Go-Food | 3745 |
| 25 | Mood Menu (26 Jul 2025) | Elspresso | Video | Video Soft Selling | `kuliner_2.mp4` | 9:16 | 38 views, 0 like | 3746 |
| 26 | Meeting Package FullDay (22 Jul 2025) | Elspresso | Video | Video Promotion | `kuliner_3.mp4` | 9:16 | 43 views, 0 like | 3747 |
| 27 | Happy Labor Day | Lassiewear | Feed | Special Occasion | `Flyer Hari Besar 1_Lassiewear.png` | 4:5 (1080×1350) | Flyer 1 Lassiewear | 3748 |
| 28 | Selamat Hari Kartini | Lassiewear | Feed | Special Occasion | `Flyer Hari Besar 2_Lassiewear.png` | 4:5 | Flyer 2 Lassiewear | 3749 |
| 29 | World Earth Day | Lassiewear | Feed | Special Occasion | `Flyer Hari Besar 3_Lassiewear.png` | 4:5 | Flyer 3 Lassiewear | 3750 |
| 30 | Selamat Hari Pendidikan Nasional | Lassiewear | Feed | Special Occasion | `Flyer Hari Besar 4_Lassiewear.png` | 4:5 | Flyer 4 Lassiewear | 3751 |
| 31 | Al-Karamina Islamic School Bumper | --- | Video | Bumper | `SCHOOL_BUMPER.mp4` | 16:9 (1920×1080) | Bumper sekolah | 3752 |
| 32 | Karamina Tour Bumper | Karamina Tour | Video | Bumper | `KARAMINA_TOUR_BUMPER.mp4` | 16:9 | Bumper biro travel | 3753 |
| 33 | Elsthetic Bumper | Elsthetic | Video | Bumper | `ELSTHETIC_BUMPER.mp4` | 16:9 | Bumper klinik | 3754 |
| 34 | Smart Entrepreneur Muslim | --- | Video | Book Trailer | `BOOK.mp4` | 16:9 | Trailer buku bisnis | 3755 |

---

### Peta Deep Link & 17 Rute Hash
*(Sumber: Portfolio Bible Baris 2216–2248 [DF 24.1], Rule 20)*

| Rute Hash | Target Komponen & Halaman | Perilaku Navigasi |
|---|---|---|
| `#/participation` | Dialog Overlay Suvenir Participation (Loker 2) | Focus trap, Esc menutup, riwayat sertifikat & lomba |
| `#/achievement` | Dialog Overlay Suvenir Achievement (Loker 2) | Focus trap, Esc menutup, piala & penghargaan |
| `#/magazine-art` | Dialog Overlay Suvenir Magazine Art (Loker 2) | Kolase editorial & seni majalah mode |
| `#/photography` | Dialog Overlay Suvenir Photography (Loker 2) | Galeri portofolio fotografi retro |
| `#/my-message` | Dialog Overlay Suvenir My Message (Loker 4) | Surat filosofis Jassinta tentang bercerita |
| `#/my-strategy` | Dialog Overlay Suvenir My Strategy (Loker 4) | Peta strategi konten & pilar pemasaran |
| `#/notes` | Dialog Overlay Suvenir Notes (Loker 4) | Catatan ringkas metrik & psikologi audiens |
| `#/strategy/{hard-selling,entertainment,education,fun}` | Halaman Info 4 Pilar Konten Lassiewear (Chapter 4) | Breakdown rinci pilar konten butik |
| `#/personal-brand` | Chapter 1 (The Editor's Desk) | Scroll langsung melewati Opening dengan notifikasi gelembung |
| `#/writing-portfolio` | Chapter 2 (The Newsroom) | Scroll langsung ke ruang redaksi & rak disc |
| `#/content-marketing` | Chapter 3.0 (Creator Lobby) | Scroll ke lobi trilogi kreator |
| `#/content-marketing/cafe` | Chapter 3A (The Café Elspresso) | Scroll langsung ke adegan kafe |
| `#/content-marketing/clinic` | Chapter 3B (The Glow Clinic) | Scroll langsung ke adegan klinik kecantikan |
| `#/content-marketing/terminal`| Chapter 3C (The Terminal Karamina) | Scroll langsung ke adegan terminal perjalanan |
| `#/example-strategy` | Chapter 4 (The Boutique Lassiewear) | Scroll langsung ke butik busana |
| `#/project-campus` | Chapter 5 (The Campus Library) | Scroll langsung ke perpustakaan kilas balik |
| `#/podcast` | Chapter 6 (The Radio Booth) | Scroll langsung ke studio radio |
| `#/archive` | Chapter 7 (The Archive Room) | Scroll langsung ke ruang arsip karya |
| `#/contact` | Chapter 8 (The Mailbox) | Scroll langsung ke kotak kontak akhir |
| `#/plain` | Halaman Sederhana (Plain Accessible Page) | Versi HTML semantik ringan tanpa kanvas 3D |

---

### Metrik Angka, Tanggal, dan Spesifikasi Teknis
- **Data Metrik Pembuktian**:
  - Rekor views Karamina Tour: **914 views**, 98 likes (Video *Rindu Melihat Ka'bah?*, Baris 3744).
  - Rekor views Lassiewear: **30,000+ organic views** (Video Fun relatable, Baris 510, 1768).
  - Kecepatan produksi Lassiewear: **Up to 4 videos a day** (Baris 657).
  - Kecepatan publikasi jurnalistik: 11 artikel berita & feature terbit (Baris 3722–3732).
  - Total karya di portofolio: **34 karya terverifikasi** (DF 20.2).
- **Data Tanggal & Pendidikan**:
  - Pendidikan: Diploma III Publishing (Journalism), Politeknik Negeri Jakarta, **2021 – 2024**; IPK **3.70 / 4.00**; Penerima Beasiswa Gojek Batch 2 (2021); Bendahara KSM Comic Club (2021 – 2023) (Baris 117, 2808).
  - Domisili: Depok, Jawa Barat, Indonesia (Baris 2809).
- **Spesifikasi Fisik & Teknis**:
  - Ketebalan kertas handmade: **3 px** (sorot 1 px di atas/kiri, bayangan 12% lebih gelap di bawah/kanan).
  - Ukuran ubin tekstur dasar: **512 × 512 px** netral, format WebP (<60 KB).
  - Tinggi karakter doll acuan: **H = 560 px** (22–28% tinggi viewport).
  - Tiga kedalaman bayangan: Belakang `0 4px 6px rgba(0,0,0,.12)`, Tengah `0 8px 12px rgba(0,0,0,.18)`, Depan `0 14px 20px rgba(0,0,0,.22)`.
  - Durasi token gerak: Runway 800 ms, Sticker pop 320 ms, Wipe 700 ms, Ganti kostum 450 ms, Chip babak 300 ms, Turnaround 240 ms, Reduced-motion crossfade 250 ms.
