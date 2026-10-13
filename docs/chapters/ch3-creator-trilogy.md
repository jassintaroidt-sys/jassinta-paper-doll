## Chapter 3: The Creator Trilogy (Content Marketing Specialist)

### 16. Chapter 3: The Creator Trilogy (Content Marketing Specialist) (DF)

**Beat:** *Three companies, three worlds, one question: why does one post move people while another fades?* **Babak:** II · Shared. **Mode:** D (lobi), P (3A, 3B video, 3C). **Kertas sobek:** seed 303 (di dasar 3C). Dibagi menjadi **satu lobi dan tiga dunia**. Urutan mengikuti alur belajar: Café (langkah pertama) → Klinik (eksperimen dan pelajaran) → Terminal travel (pelajaran dipakai, hasil tumbuh). Perpindahan antardunia memakai **wipe bergaya kertas** (tirai, pintu geser), bukan kertas sobek.

| **Dunia** | **Perusahaan** | **Kostum doll** | **Adegan** | **Palet** | **Konten** |
| --- | --- | --- | --- | --- | --- |
| 3A The Café | Elspresso (café) | Apron barista di atas kardigan krem, hijab pashmina krem, notes pesanan di saku | Konter, papan menu kapur, tas Go-Food | Lihat Warna dunia tiap chapter (PB 5.2) dan DF 28.4 | 3 video |
| 3B The Glow Clinic | Elsthetic dan Aishi Beauty | Jas klinik pink pastel, name tag, hijab blush, pita kecil | Ruang treatment dan papan promo | Lihat Warna dunia tiap chapter (PB 5.2) dan DF 28.4 | 3 video + 6 flyer |
| 3C The Terminal | Karamina Tour (haji dan umroh) | Busana traveling sopan berlapis outer, hijab sky-blue dengan selendang pastel, paspor | Ruang keberangkatan, papan jadwal | Lihat Warna dunia tiap chapter (PB 5.2) dan DF 28.4 | 3 video |

#### 16.1 Runway standar (berlaku di 3A, 3B, 3C) (DF)

Konsep: **layout majalah/editorial dengan animasi scroll-driven** (mengikuti Aset 2.png), dengan tampilan fashion show runway.

| **Aspek** | **Spesifikasi** |
| --- | --- |
| **Ukuran media utama di tengah (no shrink)** | Video vertikal 9:16: tinggi penuh hingga 520 px, min(58vh, 520px), tegak dan megah seperti Reels/Stories. Foto / kampanye feed (1080 × 1072, 1:1): hingga 470 px, min(54vh, 470px), tajam tanpa terpotong atau tertekan |
| **Pre-reveal (upstage)** | Kartu belum aktif: translateZ(-240px) dengan perspective: 1200px, scale(0.70), opacity 0,80, depth-of-field blur 1,5 px, sedikit sudut miring |
| **Catwalk advance** | Saat digeser atau dipilih, kartu melangkah maju dari translateZ(-240px) ke translateZ(+40px) ke titik sorot utama. Blur memudar menjadi 0, scale membesar ke 1,0, diselimuti pendaran cahaya panggung |
| **Kartu sebelumnya mundur** | Kartu yang tadi di tengah melangkah mundur ke translateZ(-240px), mengecil, dan bergeser halus ke samping |
| **Kurva dan durasi** | cubic-bezier(0.18, 0.9, 0.28, 1), 800 ms (langkah percaya diri, berbobot, elegan) |
| **Radiant reveal glow** | **Luminous Border Pulse:** bingkai kartu memancarkan pendaran neon hot-pink dinamis (animate-reveal-glow) yang berdenyut lembut. **Ambient Aura Bloom:** lapisan cahaya lembut berpendar di belakang kartu (animate-aura-bloom) |
| **Media non-utama** | Tegak lurus (tidak dimiringkan) |
| **Latar penuh mengikuti item tengah** | Lapisan paling dasar menampilkan foto atau video yang sedang aktif. Video diputar ambien, foto tampil penuh. Ditutupi gradasi plum-night 50% (opacity-50) + film-grain putih dan subtle glow, sehingga teks, tombol INFO, dan kartu tetap tajam dan kontras |
| **Layout layar** | Tombol **INFO** di tengah atas (klik memunculkan info singkat), daftar isi kanan atas, nama platform dan jenis konten (misal *TikTok / carousel*, *Instagram / Feed*) di atas media tengah, judul konten dan tahun di bawah media (misal *Edukasi cara pembelian (2026)*), tanggal/bulan dalam angka di kiri bawah, tombol **CREDIT** kecil di kanan bawah |
| **Kontrol** | Scroll melangkah (pin), dua tombol panah stiker 44 px, titik 1/3 sampai 3/3, swipe horizontal, klik kartu samping, keyboard ← →. Video latar autoplay tanpa suara |

**Kartu CREDIT:** menampilkan perusahaan, akun Instagram atau TikTok (klik membuka link video asli), dan pembuat. **Kartu INFO** memuat empat blok bersusun, tanpa tab tambahan:

| **Blok** | **Isi** |
| --- | --- |
| What I did | Teks INFO karya |
| Result | Angka, plus label kecil *Numbers as of [bulan peluncuran]* |
| What I learned | Satu kalimat (draf di 16.9) **[cek]** |
| Next time | Satu kalimat, **opsional**. Kosong berarti blok tidak ditampilkan |

### Chapter 3.0: The Creator Lobby

#### 16.2 Lobi (3.0) (DF)

**Arah visual:** lobi kertas dengan tiga pintu. Kostum doll: kardigan pastel, hijab lilac, ponsel di tangan. Tiga titik progres kecil (A, B, C) di pojok layar menandai dunia yang sedang dikunjungi (bukan item INDEX).

| **Frame** | **Visual dan doll** | **Gerak dan interaksi** | **Copy (EN)** |
| --- | --- | --- | --- |
| 3.0.1 Headline | Papan nama label kertas. **Kartu babak** di atas lobi. Headline rata tengah 66 px: **From Ordinary Content to** (italic) dan **Memorable Stories** (Gloock) | Fade 400 ms. Kartu fade 400 ms, tampil 1,5 detik, chip berganti. Fluid clamp | Papan: *CHAPTER 03 · THE CREATOR TRILOGY* dan *Content Marketing Specialist*. Kartu: *ACT II · SHARED* dan *What I made, and what actually happened.* Headline: *From Ordinary Content to Memorable Stories* |
| 3.0.2 Narasi | Fraunces Italic 24,9 px | Muncul kata demi kata | *I used to wonder: Why does one post go viral while another fades unnoticed? That curiosity led me deeper into understanding algorithms, content psychology, and audience behavior. It was there that I realized that creating content is not just about publishing it, it is about understanding people.* |
| 3.0.3 Reveal enam video | **kuliner_1, kuliner_2, kecantikan_2, kecantikan_3, travel_1, travel_2** (1080 × 1920, mewakili Elspresso, Elsthetic, Karamina Tour) disebar dan diperkecil di sekitar teks, rasio tetap | Video autoplay tanpa suara saat terlihat, pause tersedia. Maks 6 video aktif serentak | tanpa teks |
| 3.0.4 Tiga pintu | Papan menu café, pintu klinik, gerbang keberangkatan, masing-masing bergambar kertas. Pernyataan kecil di bawah pintu | Hover pintu: label harga dan microcopy. Doll berjalan ke pintu pertama saat scroll. Gelembung muncul | Pernyataan: *Every number here is real, including the small ones. The small ones taught me the most.* Hover: *Real numbers. Yes, even the small ones.* Label: *Café*, *Clinic*, *Terminal*. Gelembung: *Pick a door. Any door.* |

**Catatan:** brief awal menyebut enam video Lassiewear untuk lobi. Keputusan final memakai video **Elspresso, Elsthetic, dan Karamina Tour** karena Lassiewear sudah menjadi pusat Chapter 4.

#### 8.4 Chapter 3.0: The Creator Lobby (DV)

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| L-01 | Dinding lobi | Bidang kertas handmade | Lilac #D4C1F5, serat tone-on-tone #BBA7E6 [BARU], pita tepi #E5173F 55% | V0 | Netral antar-brand |
| L-02 | Lantai | Ubin belah ketupat | Mint #D4F2E4 dan lilac #D4C1F5 | VT | Lipatan 64 px |
| L-03 | Panel brand penuh (3) | 1,3×2,2 Hd di belakang tiap pintu | Hijau #066838, emas #B08418, hijau #066838. Pita arsitektur krem #F8F8C8, amber #F0A810, emas #D4A64A | V0 | Panel hijau dan emas tidak bersebelahan dengan hijau yang sama (hijau, emas, hijau) |
| L-04 | Pintu café | Pintu kayu 1,0×2,0 Hd, kanopi mini belang, papan menu sandwich | Kayu cocoa #5A3A2E, kanopi #F8F8C8 dan #066838, papan #3B3B3B [BARU] tulisan kapur #FFFFFF | V0 | Papan menu VL 4° |
| L-05 | Pintu klinik | Pintu kaca 1,0×2,0 Hd, handle batang | Kaca #BFE3F5 tint 35%, bingkai emas #D4A64A | V0 | Goresan sorot 45°. Salib mini **merah muda #FF8DC7 di atas putih, bukan merah** (palang merah adalah lambang terlindungi) |
| L-06 | Gerbang keberangkatan | Lengkung 1,3×2,2 Hd, dua pilar, papan Departures | Krem #F8F8C8, trim emas #D4A64A | V0 | Papan flip kecil di atas lengkung |
| L-07 | Gelembung notifikasi (5) | Persegi membulat 0,25×0,12 Hd dengan ekor kecil | #FFFFFF, #FFD6E8, #BFE3F5, tepi ink. Satu berisi *1 ♥* (hati #FF2E93) | V0 | Melayang pelan |
| L-08 | Enam video reveal | Bingkai 9:16, diperkecil | Putih #FFFFFF | V0 ±3° | Poster saat Lite mode |
| L-09 | Titik progres A, B, C | Bulat 12 px dalam area sentuh 44 px | #FFFDF9 tepi ink, aktif #FF2E93 | V0 | Pojok layar |
| L-10 | Kartu babak | Kartu 0,9×0,45 Hd | Baby-blue #BFE3F5, tepi putih | V0 | ACT II · SHARED |
| L-11 | Tag Kertas kejujuran | Gelembung kertas gunting di bawah tiga pintu | Isi #FFF8EE 70%, tulisan ink | V0 ±1° | Microcopy hover pintu |

#### K4. Kardigan lobi (3.0) (DV)

- **Siluet:** kardigan panjang hem 62% terbuka tanpa kancing, kaus dalam, celana wide-leg hem 92% (lebar 26% H). Volume regular.

- **Warna:** kardigan #FFD6E8, kaus #FFFDF9, celana #FFF8EE.

- **Detail:** garis rib vertikal rapat di hem dan manset (T4), dua saku tempel 9%×8% H, kerah V kaus.

- **Hijab:** pashmina melilit **wisteria #A98BDA** (bukan lilac, agar tidak menyatu dengan dinding lilac).

- **Aksesori:** ponsel casing #FF8DC7, 5,5%×11% H, sudut membulat, layar #FFFFFF dengan hati kecil #FF2E93.

- **Tampak dan pose:** walk W, hold-1 ponsel F, point ke pintu F.

### Chapter 3A: The Café (Elspresso)

#### 16.3 3A The Café: Elspresso (DF)

**Beat:** *My first time managing a café’s content. A brand this new has small numbers, but the lessons are not small.* Adegan: doll di balik konter. Tiga cangkir bergeser di meja, tiap cangkir menyandarkan layar ponsel berisi video. Cangkir terpilih bergeser ke tengah dan menyala.

| **Frame** | **Visual dan doll** | **Gerak dan interaksi** | **Copy (EN)** |
| --- | --- | --- | --- |
| 3A.1 Masuk | Pintu café dengan lonceng. Papan nama. Doll berganti ke apron | Wipe pintu geser 700 ms, lonceng bergoyang, ganti kostum 450 ms | Papan: *3A · THE CAFÉ* dan *Elspresso*. *Welcome to the café.* Gelembung: *Day one. Small numbers, big lessons.* |
| 3A.2 Konter | Tiga cangkir di meja, tiap cangkir menyandarkan layar ponsel berisi video. Dua tombol panah stiker (44 px), titik 1/3 sampai 3/3 | Cangkir terpilih ke tengah (runway standar). Scroll melangkah (pin), klik cangkir samping, swipe, ← →. Video latar autoplay tanpa suara | tanpa teks |
| 3A.3 Hasil | **Struk kasir** tercetak dari mesin, menampilkan Views dan Likes, dengan stempel. Label kecil di bawah struk | Struk keluar 600 ms saat kartu aktif | Stempel: *Day-one numbers*. Label: *Numbers as of [bulan peluncuran]* |
| 3A.4 Info dan Credit | Kartu INFO dan CREDIT bergaya kertas | Sticker pop, fokus terkunci, Esc menutup | Lihat tabel |
| 3A.5 Jembatan | Doll membawa cangkir take-away pink. Selongsongnya berubah menjadi botol serum | Wipe tirai ke 3B | tanpa teks |
| 3A.6 Easter egg E4 | Tas Go-Food di dinding | Klik: tas berayun | Gelembung: *1 like. Still counts.* |

| **Karya** | **Tanggal** | **File** | **Platform dan jenis** | **Hasil** | **Teks INFO** | **Link CREDIT** |
| --- | --- | --- | --- | --- | --- | --- |
| Elspresso Kini Hadir di Go-Food | 20 Juli 2025 | kuliner_1.mp4 (1080×1920) | Instagram, Video Education | 24 views, 1 like | During my time at ELS Corp, I also had the opportunity to work with its subsidiary, Elspresso, creating and managing video content. This was my first experience managing social media and content for a company in the culinary or F&B sector. | https://www.instagram.com/reel/DMUwp8qBd5J/?igsh=czBnc3A3YXJlcW54 |
| Mood Menu | 26 Juli 2025 | kuliner_2.mp4 | Instagram, Video Soft Selling | 38 views, 0 like | While at Elspresso, I also had the opportunity to create a soft-selling animated video, produced almost entirely using animation, even though the engagement and conversion rates for this content were very low. | https://www.instagram.com/reel/DMkb0mKhkus/?igsh=MXNuZjVndzd5d200Nw== |
| Meeting Package FullDay | 22 Juli 2025 | kuliner_3.mp4 | Instagram, Video Promotion | 43 views, 0 like | I also created promotional video content during my time at Elspresso. Engagement and conversion rates were still low, which is understandable because Elspresso was a newly established culinary company. **[cek terjemahan dari teks Indonesia di brief]** | https://www.instagram.com/reel/DMaBAg8B0tG/?igsh=MXA0dGpkanZlamd4MQ== |

Kartu CREDIT 3A: perusahaan **Elspresso**, akun Instagram **@elspresso_coffepastry** (klik membuka link video), pembuat **Jassinta Roid Triniti**.

#### 8.5 Chapter 3A: The Café (Elspresso) (DV)

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| A-01 | Dinding | Bidang kertas handmade | **#066838**, serat #0A4F2C, pita tepi #F8F8C8 55% | V0 | Aturan 3.4 tidak sewarna benda |
| A-02 | Wainscot subway | Ubin 0,06×0,03 Hd, tinggi sepertiga dinding | Krem #F8F8C8, grout #C8DACA | V0 | Garis ink 40%, sorot 1 px |
| A-03 | Chair rail, list atas, pilaster | Rail 0,03 Hd, pilaster 0,06×1,8 Hd | Krem #F8F8C8, pilaster #FFFDF9 | V0 | Rail memisahkan wainscot |
| A-04 | Lantai | Kayu cocoa dan runner ubin | #5A3A2E dan #C8DACA | VT | Hangat |
| A-05 | Konter | 0,5×3,0 Hd, empat panel inset, permukaan atas | Panel walnut #7A4A32, permukaan krem #F8F8C8, lis krem | V0 + VT | Kanopi kecil berlis krem di atasnya |
| A-06 | Mesin kopi | 0,42×0,5 Hd, dua group head, manometer bundar, drip tray | Chrome #C9CCD5, tombol #FF6F6F | V3 | Sorot tajam, uap |
| A-07 | Cangkir runway (3) | Cangkir 0,22 Hd bersandar ponsel 0,18×0,34 Hd | Keramik #FFFDF9, tatakan #F8F8C8 | V0 | Layar ponsel berisi video 9:16. Aktif membesar dan menyala |
| A-08 | Papan menu kapur | 0,8×0,6 Hd, bingkai walnut | Papan #3B3B3B, kapur #FFFFFF | VL 4° | Doodle cangkir dan croissant |
| A-09 | Tas pengantar | Kantong 0,28×0,35 Hd, tali | Krem #F8F8C8 dengan strip #066838 | VH | **Tanpa logo merek nyata.** Ayun saat diklik (E4) |
| A-10 | Lonceng pintu | Lonceng 0,1 Hd di braket | Emas #D4A64A | VH | Bergoyang saat masuk |
| A-11 | Lampu gantung (3) | Kap kerucut 0,35 Hd | Kap #F8F8C8, kabel ink | VH | Sorot di kap |
| A-12 | Jendela dan sepeda | Jendela 1,2×0,9 Hd, sepeda profil 0,7 Hd | Bingkai walnut, kaca #BFE3F5, sepeda #F8F8C8 dengan tas | VS | Melintas tiap 20 detik |
| A-13 | Rak cangkir | Dua tingkat, enam cangkir | Walnut #7A4A32, cangkir #FFFDF9 | V0 | Putih di atas dinding hijau |
| A-14 | Mesin struk dan struk | Printer 0,2 Hd, struk 0,15×0,6 Hd bergerigi bawah | Printer #C9CCD5, kertas #FFFDF9 | V0 | Tiga baris Views dan Likes |
| A-15 | Stempel Day-one numbers | Bundar Ø 0,2 Hd, tepi ganda | Ink merah #E5173F | V0 miring −8° | Menempel di struk |
| A-16 | Lencana dinding | Bundar 0,12 Hd | #FFFDF9, ikon matahari dan biji kopi | V0 | Stiker kecil, bukan lencana raksasa |
| A-17 | Uap | Tiga garis lengkung | Ink 60% | V0 | Ambient |
| A-18 | Panah stiker (2), titik 1/3 sampai 3/3 | Bulat stiker 44 px | #FF2E93, panah #FFFFFF, titik aktif #FF2E93 | V0 |  |
| A-19 | Kartu INFO dan CREDIT | Kartu 0,9×0,7 Hd | #FFF8EE, tepi sobek kecil | V0 | Empat blok INFO |
| A-20 | Cangkir take-away (jembatan) | 0,22 Hd, sleeve | #FFB3D9, tutup #FFFFFF | V0 | Berubah menjadi botol serum |

#### K5. Barista (3A) (DV)

- **Siluet:** apron bib dari 30% sampai 70% H di atas kardigan hem 58%, celana lurus hem 92%. Regular.

- **Warna:** apron #F8F8C8 dengan list #066838, kardigan #FFF8EE, celana #5A3A2E.

- **Detail:** list hijau 2 px di tepi apron dan tali leher (1,5% H, menyilang di punggung), saku depan 10%×8% H berisi notes #FFF1A8, tali pinggang apron #F8F8C8 dengan simpul di belakang, lencana bundar 3% H di dada (cangkir mini putih di atas hijau).

- **Hijab:** pashmina melilit #F3E3B8.

- **Aksesori:** cangkir keramik putih 7% H dengan sorot dan uap tiga garis.

- **Tampak dan pose:** idle F, hold-1 cangkir F, B untuk ikatan apron.

### Chapter 3B: The Glow Clinic (Elsthetic dan Aishi Beauty)

#### 16.4 3B The Glow Clinic: Elsthetic dan Aishi Beauty (DF)

**Beat:** *Hard sell, soft sell, weekly flyers: this is where I tested what people actually respond to.* Papan nama klinik memuat logo Elsthetic dan Aishi Beauty berdampingan.

| **Frame** | **Visual dan doll** | **Gerak dan interaksi** | **Copy (EN)** |
| --- | --- | --- | --- |
| 3B.1 Masuk | Pintu kaca klinik. Papan nama. Doll berganti ke jas klinik | Pintu kaca bergeser 700 ms, ganti kostum 450 ms | Papan: *3B · THE GLOW CLINIC* dan *Elsthetic **&** Aishi Beauty*. *Welcome to the glow clinic.* |
| 3B.2 Treatment room | Tiga cermin vanity memutar video TikTok | Runway standar. Facial Messo mendapat sorotan karena animasi *before and after* | Gelembung: *I tested a lot here. Not everything worked.* |
| 3B.3 Hasil video | **Label kemasan skincare** menampilkan Views, Like, Shared. Stempel baru di label. Label tanggal data | Label menempel di cermin aktif. Stempel menempel 300 ms | Header label: *RESULTS*. Stempel: *Tested.* Label: *Numbers as of [bulan peluncuran]* |
| 3B.4 Papan promo | Enam flyer ditempel dengan washi tape, rasio hampir 1:1. **Catatan dokter** kecil di tiap flyer berisi tujuan | Tap membesar di PhotoFrame tanpa crop. Carousel dengan panah, swipe, keyboard | Lihat tabel flyer |
| 3B.4b Label kertas CV | Dua label kertas kecil di papan promo | Muncul setelah flyer terakhir | *I also hosted daily TikTok Live sessions, about an hour a day.* dan *I also managed the Elsthetic and Aishi Beauty stores on Tokopedia, Shopee, and TikTok Shop.* |
| 3B.5 Resep | **Resep dokter** besar turun dari atas | Tulisan muncul seperti diketik 1,2 detik | *Rx: People don’t care what I sell. They care how important it is to them.* |
| 3B.6 Jembatan | Stempel *IMPORTANT* dari resep berpindah menjadi cap di paspor | Wipe tirai ke 3C | tanpa teks |

**Video (TikTok):**

| **Karya** | **Tanggal** | **File** | **Jenis** | **Hasil** | **Teks INFO** | **Link CREDIT** |
| --- | --- | --- | --- | --- | --- | --- |
| Facial Messo | 22 Juni 2025 | kecantikan_1.mp4 | Video Animation | 183 views, 2 like, 2 shared | I was involved in developing educational and promotional animated content regarding facial mesotherapy treatments for dull skin, enlarged pores, and signs of aging. The most unique aspect of this project was the inclusion of engaging ‘before-and-after’ facial animations. | https://vt.tiktok.com/ZS94wSVfA/ |
| Ceramide | 9 Juli 2025 | kecantikan_2.mp4 | Video Education | 155 views, 0 like, 2 shared | This is arguably the best product-focused educational video, or ‘soft sell’, I have created during my time at Elsthetic, thanks to its crisp visuals and clear animation. However, despite the high quality of the animation and imagery, it falls short in terms of engagement, as the video underperformed regarding views, likes, and shares. | https://vt.tiktok.com/ZS94w5vFE/ |
| Pico Glow Laser | 13 Juli 2025 | kecantikan_3.mp4 | Video Promotion | 230 views, 1 like, 2 shared | During my time at Elsthetic, I also tried creating promotional or ‘hard-sell’ videos, as I believed such promotions were crucial for boosting company engagement. However, the engagement turned out to be very low; I realized that people didn’t really care about ‘what’ I was selling, but rather about ‘how important’ it was to them. | https://vt.tiktok.com/ZS94wfGX9/ |

CREDIT video: perusahaan **Elsthetic, Aishi Beauty**; akun TikTok **@ELSthetic Official** (klik membuka link video); pembuat **Jassinta Roid Triniti**.

**Flyer (Instagram Feed)**, akun CREDIT **@elsthetic_pesona**, perusahaan Elsthetic dan Aishi Beauty, pembuat Jassinta Roid Triniti:

| **File** | **Judul dan tanggal** | **Ukuran (daftar CMD)** | **Catatan dokter (tujuan)** | **Teks INFO** | **Link** |
| --- | --- | --- | --- | --- | --- |
| flyer_kecantikan_1.jpg | Glow Max With Triple Geneo, 15 Sep 2025 | 1080 × 1072 | Weekly price promo to boost sales | During my time at both Elsthetic and Aishi Beauty, I was also actively involved in creating and designing promotional price flyers on a weekly basis. The purpose of these promotional flyers was to boost sales. | https://www.instagram.com/p/DOmonNPj2By/?stkn=MWN1YjZpaWZqZnQ4bQ== |
| flyer_kecantikan_2.jpg | Mega Sale 9.9 Booster Facial, 9 Sep 2025 | 1080 × 1080 | Special-date promo (9.9, 7.7) | I also create promotional flyers for special dates, such as 9.9, 7.7, and so on. Just like the weekly promotions, the goal of these special-date promotions is to boost interest and sales. | https://www.instagram.com/p/DOXRYsuD4ze/?stkn=d3YwdWo1cGx5enJ2 |
| flyer_kecantikan_3.jpg | Promo Vit C Therapy, 8 Sep 2025 | 1080 × 1080 | Cohesive but distinct weekly design | When tasked with designing weekly flyers, the challenge often lies in creating designs that are cohesive yet distinct. This approach ensures that promotions look appealing while remaining aligned with the company’s design pillars and overall style. | https://www.instagram.com/p/DOUnEKHDxW1/?stkn=MWZ5d2J1ZTl1aXJlcw== |
| flyer_kecantikan_4.jpg | Luxury Facial, 2 Sep 2025 | 1080 × 1077 | Limited-slot promo | In fact, beyond the weekly and “special date” promotions, there is another offer: the limited-slot promotion. The purpose of this promotion is to encourage customers to quickly purchase or book beauty services at our clinic. | https://www.instagram.com/p/DOFf4gCj9kA/?stkn=MTFxcHV1YzBkNjF1cQ== |
| flyer_kecantikan_5.jpg | Promo 17 Agustus 2025, 15 Agu 2025 | 1080 × 1079 | Major-holiday promo | Our beauty clinic company also runs promotions for major holidays, such as August 17th and others. Naturally, these promotions are designed to boost interest and attract more customers during the holiday season. | https://www.instagram.com/p/DNWtJsYPp9L/?stkn=MXZrOG90b25rbjRldQ== |
| flyer_kecantikan_6.jpg | Luxury Glow Free Liposome, 22 Jul 2025 | 1080 × 1080 | Promo with educational elements | Working as a designer sometimes requires creative thinking and a strong sense of design. That is why I occasionally create promotional flyers that incorporate educational elements, ensuring potential customers understand the benefits for them. | https://www.instagram.com/p/DMZA7DIPlso/?stkn=MTJ3NzZzOHJtcTRpMw== |

Flyer tidak punya angka, jadi tiap flyer diberi catatan dokter berisi tujuannya. Ukuran flyer mengikuti daftar CMD (yang berlaku), bukan angka di teks brief (semua dibaca sebagai hampir 1:1).

#### 8.6 Chapter 3B: The Glow Clinic (Elsthetic dan Aishi Beauty) (DV)

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| B-01 | Dinding marble | Bidang | #FFFDF9, urat #E5E0E3, urat emas samar 15 sampai 20% | V0 | Pita tepi emas #B08418 55%, tanpa serat halus jelas |
| B-02 | Lantai | Marmer champagne | #F3E1C8, urat halus, lipatan | VT |  |
| B-03 | Rail, list, pilaster, kolom | Rail 0,03 Hd, kolom 0,1×1,9 Hd | Emas #B08418, kolom marble putih | V0 |  |
| B-04 | Pintu kaca | 1,0×2,0 Hd | Bingkai emas #D4A64A, kaca #BFE3F5 | V0 | Menjadi pintu geser |
| B-05 | Kursi treatment | Kursi rebah 1,0×0,8 Hd | Kulit #FFD6E8, rangka chrome #C9CCD5 | V3 | Jahitan putus-putus |
| B-06 | Cermin vanity (3) | Oval 0,9×1,2 Hd, sepuluh bohlam bulat keliling | Bingkai emas #D4A64A, bohlam #FFF6C9 | V0 | Layar video 9:16 di dalam cermin. Lampu berdenyut |
| B-07 | Botol serum | 0,12×0,3 Hd, dropper | #FFFDF9, tutup emas #D4A64A | V0 | Sorot kaca |
| B-08 | Rak kaca | 0,9×0,6 Hd, tiga tingkat | Kaca #BFE3F5, list amber #F0A810, botol #FFD6E8 dan #A8E6CF | V0 |  |
| B-09 | Tanaman | Pot 0,25 Hd, daun 0,5 Hd | Pot #FFF8EE, daun #B7D9A8 | V0 |  |
| B-10 | Papan promo | 2,6×1,2 Hd | Bingkai emas #D4A64A, permukaan #FFFDF9 | V0 | Enam flyer 0,55 Hd ditempel washi |
| B-11 | Washi tape | Strip 0,25×0,06 Hd, ujung bergerigi | #FFB3D9, #A8E6CF, #FFF1A8 pada 70% | V0 ±8° |  |
| B-12 | Catatan dokter (6) | 0,3×0,18 Hd, simbol Rx | #FFFDF9, tinta #B08418 | V0 ±2° | Satu per flyer |
| B-13 | Resep dokter | 1,2×0,9 Hd | #FFFDF9, header emas | V0 | Turun dari atas. Tulisan emas tua |
| B-14 | Label kemasan RESULTS | 0,5×0,7 Hd, pita atas | Putih, pita #FFD6E8 | V0 | Menempel di cermin |
| B-15 | Stempel Tested. dan IMPORTANT | Bundar Ø 0,2 Hd | Tested #B08418, IMPORTANT #E5173F | V0 −6° | IMPORTANT menjadi cap paspor |
| B-16 | Label CV (2) | 0,35 Hd | Butter #FFF1A8 | V0 |  |
| B-17 | Plakat nama dua logo | 0,9×0,35 Hd | #FFFDF9, bingkai emas | V0 | Logo berdampingan |
| B-18 | Glitter | Bintang empat titik 0,02 Hd (12) | #FFFFFF dan #EBD08C | V0 | Berkelip pelan |

#### K6. Jas klinik (3B) (DV)

- **Siluet:** jas klinik panjang hem 70% berkerah lebar, celana lurus hem 92%. Regular.

- **Warna:** jas #FFB3D9, kerah dan dalam #FFFFFF, celana #FFFDF9, kancing mutiara #FFFFFF.

- **Detail:** kerah notch 5% H, tiga kancing, dua saku besar 10%×9% H, belahan sisi 6% H, manset putih.

- **Hijab:** **segitiga rapi** #FFD6E8, titik di dagu, tepi tegas, tanpa gulungan leher.

- **Aksesori:** name tag #FFFFFF 8%×4% H bingkai emas #D4A64A dengan dua garis abu, pita kecil #FF8DC7 3% H di kerah. Botol serum #FFFDF9 3%×11% H bertutup emas.

- **Tampak dan pose:** hold-1 botol F, point ke flyer F.

### Chapter 3C: The Terminal (Karamina Tour)

#### 16.5 3C The Terminal: Karamina Tour (DF)

**Beat:** *When I applied the lesson, the numbers moved.* Siluet Ka’bah dan Masjidil Haram digambar **tenang dan hormat, tanpa karikatur, tanpa efek lucu, tanpa animasi yang mempermainkan bentuknya**. Satu orang dari Karamina Tour sebaiknya meninjau siluetnya.

| **Frame** | **Visual dan doll** | **Gerak dan interaksi** | **Copy (EN)** |
| --- | --- | --- | --- |
| 3C.1 Masuk | Ruang keberangkatan kertas, papan jadwal, pesawat kertas besar bertali. Papan nama. Doll berganti ke busana traveling | Wipe geser 700 ms. Papan jadwal berputar seperti flip display | Papan: *3C · THE TERMINAL* dan *Karamina Tour*. *Now boarding.* |
| 3C.2 Gerbang | Tiga **boarding pass** berurutan tanggal | Runway standar, pass aktif membesar. Runway pin | Gelembung: *Same me. New lesson.* |
| 3C.3 Hasil | Angka views pada boarding pass. **Pin Engagement** menyala | Angka dihitung naik 1,2 detik seperti pesawat lepas landas. Video tertinggi (914) mendapat sorotan. Pin menyala sekali 600 ms | *Take-off*. *2 / 3 Engagement* |
| 3C.4 Info dan Credit | Kartu kertas | Sticker pop, Esc menutup | Lihat tabel |
| 3C.5 Recap | Tiga kartu kecil membandingkan konten terbaik tiap dunia | Muncul sekali, bergantian 200 ms | *Three worlds. One lesson: make it matter to them.* |
| 3C.6 Keluar | Dasar section robek (seed 303), memperlihatkan butik. Koper doll terbuka di depan butik, isinya hanger kosong. Jalan melewati pantai pastel | Robekan statis | tanpa teks |
| 3C.7 Easter egg E5 | Pesawat kertas menggantung | Klik: pesawat terbang melintas layar | Gelembung: *Next stop: your campaign.* |

| **Karya** | **Tanggal** | **File** | **Jenis** | **Hasil** | **Teks INFO** | **Link CREDIT** |
| --- | --- | --- | --- | --- | --- | --- |
| Umroh Itu Mahal Ya? | 3 Agustus 2025 | travel_1.mp4 | TikTok, Video Education Animation | 359 views, 32 like, 1 save, 3 shared | During my time at Karamina Tour, I also had the opportunity to create animated educational videos that delivered impressive results in terms of quality, engagement, and conversions on TikTok. These videos incorporated a ‘soft sell’ approach at the end, which helped drive an increase in the number of subscribers. | https://vt.tiktok.com/ZS94K1qgA/ |
| Umroh Bareng Orang Tua dan Anak-Anak | 6 Agustus 2025 | travel_3.mp4 | TikTok, Video Promotion | 698 views, 75 like, 1 comment, 7 saved, 3 shared | While working under the umbrella of ELS Corp, specifically at its subsidiary, Karamina Tour, I had the opportunity to create animated TikTok content incorporating video footage from Umrah pilgrimages. Engagement and conversion rates for this content saw significant growth, resulting in strong sales performance. | https://vt.tiktok.com/ZS94wBUV5/ |
| Rindu Melihat Ka’bah? | 9 Agustus 2025 | travel_2.mp4 | TikTok, Video Promotion | 914 views, 98 like, 2 comment, 10 save, 3 shared | Uploading this video to TikTok also led to an increase in engagement, promotion, and customer reach; the impact on the company was substantial, with views rising significantly to reach 914. | https://vt.tiktok.com/ZS94wW7Ja/ |

CREDIT 3C: perusahaan **Karamina Tour**, akun TikTok **@KARAMINA TOUR** (klik membuka link tiap video), pembuat **Jassinta Roid Triniti**.

**Catatan data:** angka views dikoreksi sesuai konfirmasimu: Facial Messo 183 (di brief 179), Umroh Itu Mahal Ya? 359 (di brief 179), Umroh Bareng 698 (di brief 179). Semua angka diberi label *Numbers as of [bulan peluncuran]*.

#### 8.7 Chapter 3C: The Terminal (Karamina Tour) (DV)

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| C-01 | Dinding | Bidang kertas handmade | **#066838**, serat #0A4F2C, pita tepi #EBD08C 55% | V0 | Dibedakan dari 3A oleh panel dan pilaster |
| C-02 | Pilaster dan panel | Pilaster emas 0,08×1,9 Hd, panel lengkung krem, list emas ganda | #D4A64A dan #F8F8C8 | V0 |  |
| C-03 | Lantai | Krem-sage dengan strip landasan | #E6EBE0, strip #FFFFFF | VT | Lampu landasan kecil #FFF6C9 |
| C-04 | Gerbang | Lengkung 1,3×2,2 Hd, pilar | Krem #F8F8C8, trim emas #D4A64A | V0 | Sama dengan L-06 versi besar |
| C-05 | Papan jadwal flip | 1,8×0,9 Hd, lima baris flap | Panel #04502A, huruf #F8F8C8 DM Mono | V0 | Flap berputar |
| C-06 | Boarding pass (3) | Portrait 0,5×0,95 Hd, stub bawah berperforasi | Kertas #F8F8C8, bingkai #066838, barcode ink | V0 | Jendela video 9:16. Aktif menyala |
| C-07 | Pesawat kertas besar | Origami panah 2,4 Hd | #FFFDF9, lipatan #A7D8F5 | VH | Tali ink. Klik E5 |
| C-08 | Ka'bah dan Masjidil Haram | Kubus 0,6 Hd, kiswah, arkade | **Hanya #1B1017 dan emas #D4A64A** | V0 | Tenang dan hormat, tanpa wajah, tanpa animasi, tanpa efek lucu |
| C-09 | Koper | 0,24×0,18 Hd | Gading #F8F0DC, trim #EBD08C | V3 | Sama dengan prop K8 |
| C-10 | Cap paspor | Bundar Ø 0,2 Hd | Ink hijau #04502A | V0 | Siluet pesawat |
| C-11 | Laut dan kapal | Bidang air 3,0×0,6 Hd, kapal 0,9 Hd | Air #A7D8F5, layar #FFFDF9, lambung #D9A87A [BARU], tiang walnut | VS | Goyang 2° |
| C-12 | Jendela sky | 1,4×0,9 Hd | Bingkai krem #F8F8C8, langit #A7D8F5 | V0 | Awan dan laut |
| C-13 | Recap (3 kartu) | 0,5×0,7 Hd | #FFFDF9 dengan pita atas #066838, #B08418, #066838 | V0 | Muncul sekali |
| C-14 | Confetti kertas | Kotak dan bintang 0,02 Hd | #FF8DC7, #FFF1A8, #A8E6CF, #BFE3F5 | V0 | Hanya saat proud |

#### K7. Traveling (3C) (DV)

- **Siluet:** outer panjang hem 80% berlapis di atas blus hem 54%, celana wide-leg hem 92% (lebar 28% H). Volume lebar.

- **Warna:** outer #F8F0DC, dalam #FFFDF9, celana #D9D3D6.

- **Detail:** kerah tinggi tegak, outer terbuka, dua saku sisi, jahitan putus-putus.

- **Hijab:** pashmina melilit **#A7D8F5** dan selendang diagonal #B8C4F2 dari bahu kiri layar menyilang ke pinggul kanan sampai 62% H, ujung dengan empat rumbai.

- **Aksesori:** paspor #04502A 4%×6% H dengan lambang bulat emas #D4A64A.

- **Tampak dan pose:** walk W, hold-1 paspor F.

### Penutup Chapter 3: Recap Trilogi dan Draf What I learned

#### 16.6 Recap trilogi (muncul sekali di akhir 3C) (DF)

| **Dunia** | **Konten terbaik** | **Views** | **Like** | **Pelajaran (EN)** |
| --- | --- | --- | --- | --- |
| 3A Café | Meeting Package FullDay | 43 | 0 | *Starting from zero is normal* |
| 3B Clinic | Pico Glow Laser | 230 | 1 | *People care about meaning, not products* |
| 3C Terminal | Rindu Melihat Ka’bah? | 914 | 98 | *A lesson applied becomes results* |

#### 16.7 Draf What I learned (13 karya, semua [cek]) (DF)

Tulis ulang dengan suaramu atau hapus yang tidak sesuai.

| **Karya** | **What I learned (draf EN)** |
| --- | --- |
| Elspresso Kini Hadir di Go-Food | *A launch needs a reason to care, not just an announcement.* |
| Mood Menu | *Polished animation cannot replace a brand people already know.* |
| Meeting Package FullDay | *Starting from zero is normal. Keep posting, keep learning.* |
| Facial Messo | *A visible transformation is the most memorable part of a treatment video.* |
| Ceramide | *Great visuals alone do not earn engagement.* |
| Pico Glow Laser | *People care about why it matters to them, not what I sell.* |
| Umroh Itu Mahal Ya? | *A soft sell at the end of an educational video grew subscribers.* |
| Umroh Bareng Orang Tua dan Anak-Anak | *Real footage with animation made the story feel closer.* |
| Rindu Melihat Ka’bah? | *Starting from a feeling, not a package, reached the most people.* |
| Hard Selling (Lassiewear) | *A story and a vintage mood sold the boutique better than a price list.* |
| Entertainment (Lassiewear) | *A trending format works when it fits the brand’s world.* |
| Education (Lassiewear) | *Teaching customers how to order removes a real barrier.* |
| Fun (Lassiewear) | *Humor and a relatable trend travelled the farthest.* |

