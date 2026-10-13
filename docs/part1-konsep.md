# BAGIAN 1 · KONSEP

Portfolio Jassinta Roid Triniti adalah perjalanan satu paper doll berhijab bernama Jassinta melintasi Paper Town, kota kertas handmade bertekstur, dari loker sekolah hingga kembali ke loker yang sama dengan satu kotak surat kosong untuk cerita pengunjung. Dokumen ini adalah satu-satunya acuan final: jika ada beda dengan dokumen lama, dokumen ini yang berlaku.

## Arah Visual Terbaru: Paper Cut-Out Art Bertekstur (REV)

*Revisi 13 Oktober 2026.* Dunia Paper Town tidak lagi memakai kertas buku tulis bergaris dan tidak lagi mengikuti tampilan website referensi. Dunia dikonsep sendiri sebagai **Paper Cut-Out Art bertekstur**: semua dinding, lantai, bangunan, benda, huruf, dan kartu adalah potongan **kertas handmade** (serat dan bintik terlihat, tepi tidak rata atau deckle) yang dilapis bertingkat seperti diorama.

- Dinding kertas bergaris dan garis margin diganti lembar kertas handmade bertekstur dengan Pita Tepi.

- Sticky note menjadi label kertas gunting, tulisan tangan di dinding menjadi huruf potongan kertas dan Tag Kertas, Wall Notes menjadi Tag Kertas, Peek Sign menjadi Edge Tab.

- Doll dan 55 aset yang sudah dibuat dipakai sebagai referensi desain dan bentuk saja. Aset akhir dibuat ulang dengan kode di website.

- Konsep, cerita, urutan chapter, data, dan palet hex tidak berubah.

Spesifikasi lengkapnya ada di Bagian 3 (Arah Visual Terbaru) dan Bagian 6 (Produksi Paper Cut-Out dengan Kode). Bagian itu berlaku di atas semua aturan visual lain di dokumen ini.

*Journey Story + Storyboard + Spesifikasi lengkap · Disusun untuk Jassinta Roid Triniti · 11 Oktober 2026 · Versi Final 1*

## 1. Ringkasan Konsep (PB)

**Premis.** Pengunjung tidak berpindah halaman, mereka berjalan bersama Jassinta. Tiap tempat adalah satu chapter dengan kostum, warna dunia, dan bukti karya sendiri. Tagline *Content that is Felt, Shared, Remembered* menjadi tiga babak cerita.

**Identitas profesional.** Jassinta Roid Triniti, Digital Content Executive: Social Media Specialist, Content Planner, Videographer, and Graphic Designer.

**Tujuan website.**

- Membuat recruiter, klien, dan media paham siapa Jassinta dalam 30 detik lewat Quick Look.

- Membuktikan kemampuan lewat karya nyata, angka jujur, dan tenure sepuluh perusahaan.

- Meninggalkan kesan visual yang unik dan hangat sehingga diingat dan mudah dibagikan.

- Membuat kontak menjadi langkah terakhir yang alami, bukan formulir dingin.

**Pesan inti.** Konten yang baik dimulai dari mendengarkan orang, dan semua angka di sini asli, termasuk yang kecil.

### Tiga babak (PB)

| **Babak** | **Chapter** | **Makna** | **Aksen warna** |
| --- | --- | --- | --- |
| I · Felt | 0 sampai 2 | Siapa Jassinta dan bagaimana ia menulis | Mint dan lilac |
| II · Shared | 3 sampai 4 | Konten, strategi, hasil nyata | Baby blue |
| III · Remembered | 5 sampai 8 | Akar, suara, arsip, cara menghubungi | Peach |

### Pengunjung dan jawabannya (PB)

| **Pengunjung** | **Pertanyaan utama** | **Jawaban di** |
| --- | --- | --- |
| Recruiter / HR | Siapa dia, kerja di mana, apa buktinya, bagaimana menghubungi? | Loker 1, 3, 5, Chapter 1, 3, 4, 8 |
| Pemilik brand / klien | Bisa bantu apa, strategi, hasil nyata? | Chapter 3, 4, My Strategy, Contact |
| Media / kolaborator | Gaya menulis, rekam jejak redaksi dan siaran | Chapter 2, 6, Achievement |
| Sesama kreator / dosen | Proses kreatif dan karya visual | Chapter 5, Archive, Magazine Art, Photography |

### Pembeda utama: Honest Portfolio (PB)

Angka ditampilkan apa adanya beserta pelajarannya. Angka kecil diberi ekspresi doll *curious*, bukan sedih; angka besar (914 views, 30K+ views) diberi ekspresi *proud* dan confetti kertas kecil. Setiap kartu hasil memuat label *Numbers as of* diikuti bulan peluncuran, yang diisi otomatis dari satu variabel LAUNCH_MONTH saat deploy.

### Keputusan yang mengunci konsep (PB)

- Loker menjadi pembuka dan penutup; Chapter 1 wajib putih murni.

- Doll berhijab di semua kostum, sepatu selalu hitam, doll selalu berjalan dan tidak naik kendaraan.

- Kertas sobek (TornEdge) hanya di enam transisi.

- Teknik Opsi A: 2.5D berlapis di DOM dengan CSS 3D, tanpa WebGL di versi pertama.

- Tanpa audio otomatis; video tanpa suara kecuali intro.mp4.

- Tersedia Plain page dan Calm mode; zoom tidak pernah dikunci.

- Bahasa website Inggris; penjelasan dokumen Indonesia.

## 1. Ringkasan dan Apa yang Berubah (DF)

**Premis:** portofolio ini adalah **perjalanan seorang paper doll bernama Jassinta** melintasi satu dunia kertas bernama **Paper Town**. Ia keluar dari loker sekolah, berjalan melewati meja editor, ruang redaksi, tiga dunia kreator (café, klinik, terminal), butik, perpustakaan kampus (kilas balik), studio siaran, ruang arsip, lalu pulang ke loker yang sama dan menyisakan satu kotak surat untuk ceritamu.

**Apa yang kamu temukan di website referensi, dan apa artinya untuk portofoliomu.** Dokumen lamamu sudah punya karakter, chapter, dan data yang kuat, tetapi tiap chapter masih terasa seperti adegan yang berdiri sendiri. Referensimu terasa seperti **satu dunia yang kamu jelajahi**. Lapisan baru di Bagian 6 menutup jarak itu:

| **#** | **Yang dipelajari dari referensi** | **Penerapan di portofoliomu** |
| --- | --- | --- |
| 1 | Dinding kertas buku tulis bergaris dengan garis margin merah, dan lantai berupa potongan kertas bertingkat dengan lipatan | **Dinding kertas handmade dan lantai kertas berlipat** menjadi bahasa visual semua chapter (kecuali Chapter 1 yang wajib putih murni), diwarnai ulang per chapter |
| 2 | Kamera berjalan menyusuri jalur, pengunjung *berjalan* bukan berpindah halaman | **Model kamera diorama:** scroll menggerakkan kamera dan doll di dalam adegan yang di-pin, sedangkan bagian padat konten (Archive, flipbook, daftar) tetap mengalir biasa |
| 3 | Judul bagian berupa **sticky note** miring bergambar coretan sinar, bukan kotak UI | Papan nama tempat menjadi **label kertas dengan huruf potongan kertas** |
| 4 | Isi ditulis tangan langsung di dinding, dengan **kartu gelembung bergaris tangan** untuk info singkat | **Tag Kertas** untuk fakta singkat (masa kerja, stiker fakta, resep, catatan dokter) |
| 5 | Benda menggantung di tali (pesawat, naga, awan berwajah) dan bergoyang sendiri | **Hanging props** tiap chapter (pesawat kertas, awan berwajah, lampu, papan) sebagai lapisan ambient |
| 6 | Tiap lingkungan punya tema dan props sendiri (rumput, pohon sakura, laut berombak, piramida, kapal) | **World Set** per chapter (Bagian 6.3): tanah, langit, gantungan, props darat, air bila ada |
| 7 | Sticky note bab berikutnya sudah mengintip di tepi kanan layar | **Edge Tab:** papan chapter berikutnya mengintip sebelum kamera sampai |
| 8 | Karakter ganti kostum dan kendaraan di tiap lingkungan | Kostum sudah ada. Doll **tetap berjalan** (agar jejak sepatu hitam tetap bermakna). Kendaraan hadir sebagai ambient yang melintas |
| 9 | Kelemahan: narasi tipis, karya dan kontak bukan fokus, berat di WebGL, user-scalable=no | Dijawab: gelembung doll, Honest Portfolio, Quick Look, Opsi A (DOM 2.5D), zoom tidak dikunci |

**Yang tidak berubah** (semua keputusanmu sebelumnya tetap): loker sebagai pembuka dan penutup, tiga babak Felt, Shared, Remembered, Honest Portfolio, doll berhijab di semua kostum, sepatu hitam, kertas sobek hanya di enam section, Opsi A (2.5D di DOM), tanpa suara otomatis, Plain page dan Calm mode, lima easter egg, tanpa Kind words, semua data karya, link, dan credit.

**Keputusan baru yang diterapkan dokumen ini** (sudah disetujui): model kamera diorama dengan tiga mode scroll per chapter, label kertas sebagai papan nama, Tag Kertas, Edge Tab, World Set per chapter, dan aturan *doll tidak naik kendaraan*.

## 4. Konsep Final (DF)

### 4.1 Tiga babak (DF)

Tagline di loker, *Content that is Felt, Shared, Remembered*, dijadikan struktur yang terasa sepanjang perjalanan.

| **Babak** | **Chapter** | **Makna** | **Warna aksen (dari blok highlight Opening)** | **Chip** | **Subjudul kartu babak (EN)** |
| --- | --- | --- | --- | --- | --- |
| I · Felt | 0 sampai 2 | Siapa Jassinta dan bagaimana ia menulis | Mint dan lilac | ACT I · FELT | *Who I am and how I write.* |
| II · Shared | 3 sampai 4 | Konten, strategi, hasil nyata | Baby blue | ACT II · SHARED | *What I made, and what actually happened.* |
| III · Remembered | 5 sampai 8 | Akar, suara, arsip, cara menghubungi | Peach | ACT III · REMEMBERED | *Where it began, what I heard, what I kept.* |

### 4.2 Alur tanya-jawab sebagai benang merah (DF)

- Chapter 2 bertanya: *kenapa satu post viral dan yang lain tenggelam?*

- Chapter 3 menjawab: *karena orang peduli pada artinya, bukan pada produknya.*

- Chapter 4 membuktikan dengan strategi dan angka (Fun: 30K+ views).

- Chapter 6 menegaskan bahwa **mendengarkan** adalah kuncinya.

Tiga kunci pada Notes (Awareness, Engagement, Conversion) dipasang sebagai tiga pin kecil di tengah atas layar yang menyala satu per satu: **Awareness di 2.4, Engagement di 3C.3, Conversion di 4.5.**

### 4.3 Honest Portfolio (dinyatakan, bukan hanya dilakukan) (DF)

Angka hasil ditampilkan apa adanya, termasuk yang kecil, beserta pelajarannya. Tanpa konteks, 0 like bisa terbaca sebagai kegagalan, jadi:

- **Pernyataan** kecil di bawah tiga pintu (3.0.4): *Every number here is real, including the small ones. The small ones taught me the most.*

- **Microcopy hover pintu:** *Real numbers. Yes, even the small ones.*

- **Label tanggal data** di setiap kartu hasil: *Numbers as of [bulan peluncuran]* (angka TikTok dan Instagram terus berubah).

- **Stempel:** *Day-one numbers* (3A.3), *Tested.* (3B.3), *Take-off* (3C.3).

- **Ekspresi doll curious** (bukan sedih) pada angka rendah. Ekspresi proud dan confetti kertas kecil pada angka tinggi (914 views, 30K+ views).

- **Kartu INFO empat blok:** *What I did*, *Result*, *What I learned*, *Next time* (opsional, kosong berarti blok tidak tampil).

### 4.4 Pengunjung dan jawabannya (DF)

| **Pengunjung** | **Pertanyaan utama** | **Di mana jawabannya** |
| --- | --- | --- |
| Recruiter / HR | Siapa dia, pernah kerja di mana, apa buktinya, bagaimana menghubunginya? | Loker 1, 3, 5, lalu Chapter 1, 3, 4, 8 |
| Pemilik brand / klien | Bisa bantu apa, strategi kerjanya, hasilnya nyata? | Chapter 3, 4, My Strategy, Contact |
| Media / kolaborator | Gaya menulis, rekam jejak redaksi dan siaran | Chapter 2, 6, Achievement |
| Sesama kreator / dosen | Proses kreatif, karya visual | Chapter 5, Archive, Magazine Art, Photography |

### 4.5 Jalur cepat (Quick Look) (DF)

Stiker kiri bawah *In a hurry? Take the shortcut* membuka kartu ringkasan: nama, peran, tiga sorotan, logo sepuluh perusahaan, tombol kontak, dan tautan cepat ke tiap chapter. Isi lengkap ada di 23.2.

## Keputusan yang Sudah Diambil (DF)

| **#** | **Keputusan** |
| --- | --- |
| 1 | Loker tetap pembuka dan penutup. Doll mengintip dari kertas sobek, lalu melangkah (0.5 sampai 0.7) |
| 2 | Honest Portfolio dipakai |
| 3 | Teknis Opsi A: 2.5D berlapis di DOM (CSS 3D) |
| 4 | Doll berupa ilustrasi gambar tangan. Foto cut-out Chapter 1 adalah Jassinta yang asli. **Sepatu doll hitam** |
| 5 | Project Campus dibingkai sebagai kilas balik |
| 6 | Video tanpa audio kecuali intro.mp4. Pause di semua video. Unmute dan CC hanya di intro.mp4 |
| 7 | Urutan dunia Chapter 3: Café, Clinic, Terminal. Video lobi memakai Elspresso, Elsthetic, Karamina Tour |
| 8 | Doll berhijab di setiap busana |
| 9 | Paper Town dan walk strip. Plain page dan Calm mode (P1) |
| 10 | Ambient di semua 12 adegan. Easter egg: E1, E4, E5, E6, E8. Suara tidak dibuat |
| 11 | Kartu About: bahasa dan fakta kecil dilewati. CV sudah ada dan tombol Download CV ikut |
| 12 | Tenure 10 perusahaan dari CV. Testimoni (Kind words) tidak dibuat |
| 13 | Tanggal Lassiewear diganti masa kerja *April -- August 2026* dan label *Numbers as of [bulan peluncuran]* |
| 14 | Archive tetap 34 karya. Bumper AISHI, ELS, flyer_pelatihan tidak dimasukkan |
| 15 | Ejaan: Elspresso, Chindy, inNalar.com |
| 16 | Overlay dan chapter lewat URL langsung melewati Opening |
| 17 | Prototipe pertama: lobi 3.0 dan café 3A |
| 18 | Foto cut-out Chapter 1 diganti file besar (tinggi minimal sekitar 1.300 px). Footage Fun hanya 4 file |
| 19 | Domain belum diputuskan, pakai Vercel dulu |
| 20 | Tipografi Arah C (Gloock, Fraunces, Shantell Sans, dst.) menggantikan Sentient dan Caveat |

## 2. Referensi dan Batas Orisinalitas (PB)

Referensi, *Mr. Panda's Psychologically Safe Portfolio* (Andrew Woan), terbaca dari tiga tangkapan layar sebagai satu dunia kertas yang dijelajahi, bukan deretan halaman. Portfolio Jassinta meminjam **bahasa visualnya**, bukan aset, karakter, atau komposisinya.

### Yang terlihat di tiga tangkapan layar (PB)

| **Layar** | **Ciri visual** | **Pelajaran** |
| --- | --- | --- |
| Pembuka (About Me) | Dinding buku tulis bergaris dengan margin merah muda, lantai hijau pastel berlipat vertikal, jalur bata blush, pesawat bertali, sticky note ungu miring, tulisan tangan langsung di dinding, awan berwajah, pohon sakura potongan kertas | Dunia = dinding bergaris + lantai berlipat + potongan bertingkat yang saling bayangan |
| Mesir (Work Experience) | Sticky note oranye, dua kartu gelembung bergaris tangan, piramida kardus dengan potongan penampang, teras berundak warna pasir, sticky note chapter berikutnya mengintip di tepi kanan | Data kerja berupa kartu tulisan tangan, bukan tabel; chapter berikutnya mengintip sebelum tiba |
| Jepang | Naga bertali, kuil, torii, kapal layar, lantai biru dengan puncak ombak berkontur hitam, margin merah tetap terlihat | Biome berganti lewat warna lantai dan props; dinding bergaris menjadi benang merah |

Detail yang membuatnya terasa fisik: bayangan lembut di bawah tiap potongan, tepi kertas yang sedikit tebal, lipatan vertikal pada lantai, serat pada kardus, garis tinta hitam dengan warna pastel.

### Diambil, diubah, ditinggalkan (PB)

| **Diambil** | **Diubah untuk Jassinta** | **Ditinggalkan** |
| --- | --- | --- |
| Karakter pemandu | Panda menjadi paper doll Jassinta; kostum = peran profesional | Pesan anti-toksisitas |
| Scroll sebagai perjalanan | Tiap tempat punya cerita dan bukti karya | Scroll tak berujung tanpa tujuan |
| Dunia kertas berlapis (dinding dan lantai) | Kertas handmade bertekstur dengan Pita Tepi, diwarnai per chapter; Chapter 1 putih murni | Kertas bergaris dan garis margin; buku tulis sebagai gaya |
| Lantai berlipat dan teras bertingkat | CSS 3D berlapis (Opsi A) | WebGL penuh |
| Judul sebagai benda tempel | Label kertas gunting dan huruf potongan kertas sebagai papan nama chapter | Sticky note; judul tanpa nomor |
| Info singkat sebagai benda di dunia | Tag Kertas hanya untuk fakta singkat | Tulisan tangan di dinding; paragraf panjang di dinding |
| Benda menggantung dan awan berwajah | Hanging props per chapter | Kostum fantasi |
| Ganti kostum per lingkungan | Kostum = peran, selalu berhijab | Kendaraan sebagai moda utama doll |
| Reaksi saat hover | Label harga kertas, juga saat fokus keyboard | Hitbox yang berkedip |

### Kelemahan referensi yang tidak ditiru (PB)

- Narasi teks tipis, sehingga Jassinta mendapat gelembung ucapan dan kartu INFO.

- Viewport yang mengunci zoom; di sini zoom tidak pernah dikunci.

- Karya dan kontak bukan fokus; di sini keduanya menjadi tujuan akhir.

- Beban WebGL di HP kelas menengah; di sini DOM 2.5D dengan mode hemat.

### Aturan orisinalitas (PB)

Dilarang meniru karakter panda, komposisi adegan, atau gambar spesifik dari situs referensi. Semua ilustrasi digambar sendiri dengan tokoh, palet, dan gaya Jassinta.

## 2. Analisis Website Referensi (DF)

**Mr. Panda’s Psychologically Safe Portfolio** (Andrew Woan), alamat yang kamu beri: mr-pandas-psychologically-safe-portfolio.com

### 2.1 Catatan jujur tentang cara menganalisis (DF)

Halaman live-nya dirender penuh oleh JavaScript dan WebGL, jadi alat saya hanya bisa membaca meta tag-nya. Analisis ini disusun dari **tiga tangkapan layar yang kamu lampirkan** (diamati langsung) dan dari sumber sekunder (README dan dokumentasi kode, halaman Awwwards dan CSS Winner, artikel Codrops). Aku tidak bisa menjalaninya sendiri. Tolong buka sekali di browser, scroll pelan dari awal sampai akhir, lalu koreksi bagian yang menurutmu meleset.

### 2.2 Yang terlihat di tiga tangkapan layarmu (DF)

| **Layar** | **Yang terlihat** | **Pelajaran desain** |
| --- | --- | --- |
| **1. Pembuka (ABOUT ME)** | Dinding kertas buku tulis bergaris dengan garis margin merah muda. Lantai hijau pastel berupa kertas dengan lipatan vertikal, ada jalur bata merah muda. Pesawat biru bertali menggantung dari atas. Sticky note ungu miring bertuliskan ABOUT ME dengan coretan sinar. Tulisan tangan langsung di dinding (salam pembuka dan paragraf pendek). Panda bersepeda berkeranjang. Rumput, bunga kecil, dua pohon sakura dari potongan kertas. Burung biru dalam jendela batu. Awan berwajah tersenyum, dengan bayangan lembut. Kamera sedikit miring dengan perspektif | Dunia = dinding bergaris + lantai berlipat + potongan kertas bertingkat yang saling bayangan. Judul bagian = sticky note. Isi = tulisan tangan di dinding |
| **2. Mesir (Work Experience)** | Sticky note oranye miring bertuliskan Work Experience dengan huruf warna-warni. Dua kartu gelembung bergaris tangan berisi jabatan, perusahaan, tanggal, dan tugas. Panda berkain merah di atas unta, simbol ankh. Piramida kardus berlipat dengan potongan penampang yang memperlihatkan emas, kumbang, dan sarkofagus. Teras berundak warna pasir. Di tepi kanan, sticky note abu-abu gelap Featured Work sudah mengintip | Data kerja ditampilkan sebagai kartu tulisan tangan di dinding, bukan tabel. Lingkungan punya warna dan material sendiri. **Peek:** bab berikutnya terlihat sebelum tiba |
| **3. Jepang** | Naga merah bergaris tali menggantung, kuil, pohon sakura, gerbang torii, kapal layar di atas lantai biru dengan puncak ombak berkontur hitam. Teras hijau bertemu air biru dengan potongan tegas. Panda berhelm samurai di sepeda. Awan berwajah. Garis margin merah tetap terlihat di dinding | Biome berganti lewat **warna lantai dan props**, sementara dinding bergaris dan garis margin menjadi benang merah yang konsisten |

**Detail yang membuatnya terasa fisik:** bayangan lembut di bawah tiap potongan, tepi kertas yang sedikit tebal, lipatan vertikal pada lantai dan teras, tekstur serat pada kardus dan kertas, gambar tangan dengan garis hitam dan warna pastel.

### 2.3 Mekanik pengalaman (dari sumber sekunder) (DF)

- **Scroll menjadi kendali kamera.** Input scroll menggerakkan kamera sepanjang jalur kurva. Pengunjung *berjalan*, bukan berpindah halaman.

- **Karakter pemandu** mengikuti jalur dan berganti kostum di tiap lingkungan bertema.

- **Dunia berlapis kertas:** semua tampak seperti kertas potong dan gambar tangan di atas kertas bergaris.

- **Tiga lapis animasi:** gerak karena scroll, gerak latar yang berjalan sendiri, reaksi saat hover.

- **Hal kecil yang memberi kejutan:** easter egg, kendaraan bergerak, reaksi saat disentuh.

- Scroll tak berujung dan berulang, jadi dunianya terasa seperti lingkaran.

### 2.4 Kenapa berhasil (DF)

- **Satu ide, satu rasa:** seluruh visual melayani emosi aman, hangat, nostalgia.

- **Karakter membuat perjalanan punya subjek.** Orang mengikuti panda, bukan menu.

- **Perubahan kostum dan lingkungan = penanda bab,** tanpa perlu label panjang.

- **Interaksi minimal:** scroll dan hover.

### 2.5 Kelemahan yang tidak ditiru (DF)

- Dari daftar *to-do* di README pembuatnya: loading screen perlu diperbaiki, area hover bisa berkedip, ide menambah kotak teks agar panda bisa bicara. Artinya **narasi teks tipis**.

- Meta viewport memakai user-scalable=no, menghambat pengguna yang butuh zoom.

- Karya dan kontak bukan fokus. Portofoliomu justru butuh **pembuktian karya dan kontak yang jelas**.

- WebGL berat di HP kelas menengah.

### 2.6 Diambil, diubah, ditinggalkan (DF)

| **Diambil** | **Diubah untuk Jassinta** | **Ditinggalkan** |
| --- | --- | --- |
| Karakter pemandu | Panda menjadi paper doll Jassinta, kostum = peran profesional di tempat itu | Pesan anti-toksisitas |
| Scroll sebagai perjalanan | Setiap tempat punya cerita dan bukti karya | Scroll tak berujung tanpa tujuan |
| Dunia kertas berlapis (dinding dan lantai) | Kertas handmade bertekstur dengan Pita Tepi, diwarnai per chapter. Chapter 1 putih murni (aturan kanvas) | Kertas bergaris dan garis margin; buku tulis sebagai gaya |
| Lantai kertas berlipat dan teras bertingkat | Dibuat dengan CSS 3D berlapis (Opsi A) | Lantai WebGL penuh |
| Judul bagian sebagai benda tempel | Label kertas gunting dan huruf potongan kertas sebagai papan nama chapter | Sticky note; judul bagian tanpa nomor |
| Info singkat sebagai benda di dunia | Tag Kertas untuk fakta singkat, bukan untuk isi panjang | Tulisan tangan di dinding; paragraf panjang di dinding |
| Benda menggantung dan awan berwajah | Hanging props per chapter | Kostum fantasi (samurai, zombie) |
| Ganti kostum per lingkungan | Kostum = peran, selalu berhijab | Kendaraan sebagai moda utama doll |
| Hover memberi reaksi | Label harga kertas, ada juga saat fokus keyboard | Hitbox yang berkedip |

### 2.7 Aturan orisinalitas (DF)

Kita mengambil **bahasa visualnya** (kertas handmade, lipatan, label kertas, potongan bertingkat), bukan asetnya. Jangan meniru karakter panda, komposisi adegan, atau gambar spesifik dari situs itu. Semua ilustrasi dibuat sendiri dengan gaya, warna, dan tokohmu.

## 1. Bacaan Gambar yang Kamu Lampirkan (DV)

| **Gambar** | **Yang terbaca** | **Keputusan** |
| --- | --- | --- |
| **Master doll** (blazer abu, hijab hitam) | Garis luar tipis dan bersih hitam. Warna datar tanpa gradient. Wajah bulat: mata titik dengan garis kelopak tipis, blush pink bulat, senyum kecil tertutup. Hijab hitam melilit di leher dengan 3 sampai 4 lipatan. Blazer satu kancing, dua saku flap, lapel bertakik, manset putih. Celana lurus. Sepatu flat hitam. Sepuluh brad abu (bahu, siku, tangan, lutut, pergelangan kaki), brad bahu dan siku dilingkari cincin gelap. Tepi stiker putih die-cut dengan bayangan abu tipis | **[KUNCI]** standar gaya untuk semua aset |
| **Referensi 1: pembuka** | Dinding bergaris dengan margin merah muda, lantai hijau pastel berlipat vertikal, jalur bata, sticky note ungu miring dengan coretan sinar, tulisan tangan di dinding, awan berwajah, pohon sakura potongan kertas, pesawat bertali | Bahasa dunia, bukan aset |
| **Referensi 2: Mesir** | Sticky note oranye, dua kartu gelembung tulisan tangan, piramida kardus dengan penampang terbuka, teras pasir berundak, sticky note berikutnya mengintip di tepi kanan | Penampang (VX) dan Peek Sign |
| **Referensi 3: Jepang** | Naga bertali, kuil, torii, kapal layar, lantai biru dengan puncak ombak berkontur hitam, margin merah tetap terlihat | Biome berganti lewat lantai dan props |

**Selisih gaya yang harus diputuskan:**

| **Aspek** | **Master doll** | **Referensi panda** | **Keputusan** |
| --- | --- | --- | --- |
| Garis | Tipis, bersih, seragam | Tebal 3 sampai 4 px, goyang, tampak digambar tangan | Semua benda memakai garis master (tipis, bersih). Goyang hanya pada **kontur potongan**, bukan pada ketebalan garis |
| Tepi | Putih die-cut tipis | Ketebalan kardus terlihat di tepi | Cutout kecil: tepi putih. Benda besar (lantai, teras, bangunan): sisi tebal kertas terlihat 6 sampai 22 px |
| Warna | Datar pastel | Pastel dengan serat | Datar pastel, serat hanya sebagai overlay tekstur |
| Wajah | Realistis ringkas (hidung, alis) | Titik dan senyum minimal | Doll tetap wajah master. Benda ramah (awan, bintang, kucing) memakai titik dan senyum |

