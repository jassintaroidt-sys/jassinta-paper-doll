# BAGIAN 6 · PRODUKSI, KONTEN, QA, DAN PELUNCURAN

## 8. Konten, Copywriting, dan Aset Produksi (PB)

### Aturan copywriting (PB)

- Semua teks website berbahasa Inggris, hangat, singkat, dan sedikit jenaka; kalimat di bawah 25 kata.

- Judul karya berbahasa Indonesia tetap asli dengan keterangan kecil *Article in Indonesian* atau *Episode in Indonesian*.

- Ejaan tampilan: **Elspresso**, **Chindy**, **inNalar.com**.

- Angka ditulis apa adanya, selalu dengan label *Numbers as of* diikuti bulan peluncuran dari variabel LAUNCH_MONTH.

- Kartu INFO memakai empat blok: *What I did*, *Result*, *What I learned*, *Next time*; blok kosong tidak ditampilkan.

- Klaim di Quick Look hanya yang bisa dibuktikan dengan sertifikat atau tangkapan layar.

### Keputusan konten yang mengunci (PB)

- Archive memuat 34 karya; kolom Company menampilkan tanda strip bila perusahaan belum tercatat. Bumper AISHI, ELS, flyer_pelatihan, dan tiga varian foto Jassinta tidak dimasukkan.

- Tanggal per karya Lassiewear tidak ditampilkan; diganti stiker masa kerja *Apr - Aug 2026*.

- Testimoni (*Kind words*) tidak dibuat.

- Google Business Profile tidak ditampilkan di Loker 5.

- Overlay Magazine Art memakai nama generik pengganti VOGUE.

- Foto cut-out Chapter 1 memakai file besar (tinggi minimal sekitar 1.300 px).

- Video: Instagram dan TikTok memakai poster dan tombol link-out; hanya Spotify yang di-embed, dengan kartu cadangan.

### Izin dan risiko (PB)

| **Risiko** | **Penanganan** |
| --- | --- |
| Izin brand dan talent | Sudah beres; angka rendah dibingkai sebagai pelajaran, bukan kritik pada brand |
| Gambar artikel milik penerbit | Pakai tangkapan layar judul dengan byline atau kreditkan sumber gambar |
| Sertifikat dan dokumen | Samarkan nomor sertifikat, QR code, tanda tangan, dan nama orang lain |
| Musik dan audio tren | Semua video diunggah tanpa trek audio kecuali intro.mp4 |
| Representasi Ka'bah | Hitam dan emas seperti di logo, tenang dan hormat; ditinjau satu orang dari Karamina Tour sebelum rilis |
| Warna logo pada arsitektur | Ditunjukkan ke brand terkait sebelum rilis; logo resolusi rendah dipakai kecil sampai versi vektor tersedia |
| Orisinalitas | Jangan meniru karakter atau komposisi website referensi |

### Inventaris ilustrasi (perkiraan sekitar 160 aset) (PB)

| **Area** | **Isi** | **Jumlah** |
| --- | --- | --- |
| Ch.0 | Loker tertutup dan terbuka, 7 suvenir, 3 kartu berpin, robekan 101 | 15 |
| Ch.1 | Meja putih, staples, tag kategori, label REF-ARC | 4 |
| Ch.2 | Meja redaksi, template disc, newsprint, pin, robekan 202 | 5 |
| 3.0 | Lobi dan tiga pintu | 4 |
| 3A, 3B, 3C | Konter dan kafe; klinik; terminal, laut, kapal, robekan 303 | 8, 8, 9 |
| Ch.4 | Fasad, koper, hanger, ruang ganti, pouf, tas, label, robekan 404 | 8 |
| Ch.5, 6, 7, 8 | Perpustakaan; studio; arsip; kotak surat | 8, 7, 5, 4 |
| Overlay | Papan, buku majalah, elemen, buku catatan peta, label kertas | 15 |
| Paper Town dan walk strip | Peta induk, sembilan landmark, tujuh strip dua lapisan | 10 dan 14 |
| World Set | Dinding, lantai, awan, rumput, sakura, pesawat, tali, 12 label kertas papan nama, Edge Tab | 20 |
| Kit kertas | Washi, pin 3D, glitter, grain, enam tepi sobek | 15 |
| Doll | 31 kombinasi pose-kostum dan 6 ekspresi | 31 dan 6 |

Beban dikurangi dengan satu paper kit yang dipakai semua chapter dan diwarnai ulang lewat variabel --brand-*, bukan digambar ulang. Token brand per chapter: --brand-wall, --brand-wall-deep, --brand-line, --brand-mid, --brand-tint, --brand-wash, --brand-accent (di Chapter 2 dan 7 mengikuti item aktif).

## 24. URL, SEO, Analitik, Model Data (DF)

### 24.1 Peta URL dan deep link (DF)

Pengunjung (terutama recruiter) perlu membagikan link ke chapter tertentu. Rute lengkap ada di 10.2. **Aturan deep link:** Opening dilewati otomatis (preloader, lalu loker dianggap sudah dibuka) dan langsung ke chapter atau overlay. Gelembung doll: *Skipped ahead for you. Scroll up to see the beginning.* Berlaku sama untuk overlay lewat URL langsung. #/plain (dan /plain sebagai path asli bila hosting mendukung, lewat rewrite di vercel.json) menampilkan Plain page.

### 24.2 SEO, hosting, dan gambar share (DF)

| **Elemen** | **Isi** |
| --- | --- |
| Title | *Jassinta Roid Triniti · Digital Content Executive · Creative Portfolio* |
| Meta description | *Paper doll portfolio of Jassinta Roid Triniti: social media strategy, video, writing, and design, with real numbers.* |
| OG image 1200 × 630 | Peta Paper Town dengan doll dan nama (dibuat dari ilustrasi induk) |
| Favicon | Kepala doll: 32 px, 180 px (apple-touch), 512 px |
| Data terstruktur | JSON-LD Person: nama, pekerjaan, url, sameAs (Instagram). **Jangan** memasukkan email atau nomor telepon |
| Konten | Teks nyata ada di DOM dan Plain page |
| Hosting | Pakai Vercel dulu. Simpan alamat dasar situs sebagai satu variabel lingkungan untuk canonical dan OG image. Deploy ke proyek Vercel yang sama dengan link CV (jassinta-roid-triniti-eswy.vercel.app), lalu redirect saat domain sendiri dipilih dan perbarui CV. Pakai preview deployment untuk menguji di HP, ukur Lighthouse di URL produksi |

### 24.3 Analitik (tanpa cookie, tanpa data pribadi) (DF)

Plausible, Umami, atau Cloudflare Web Analytics.

| **Event** | **Menjawab** |
| --- | --- |
| opening_open | Berapa orang menekan OPEN? |
| chapter_reached (1 sampai 8, sekali per sesi) | Di chapter mana pengunjung berhenti? |
| quick_look_open | Seberapa banyak yang memilih jalan pintas? |
| work_open, external_click | Karya mana yang paling menarik? |
| overlay_open | Suvenir mana yang dibuka? |
| cv_download, contact_click (email, instagram, whatsapp, copy) | Apakah situs mengubah pengunjung menjadi kontak? |
| plain_page_open, calm_mode_on | Seberapa penting versi sederhana? |
| egg_found | Apakah kejutan kecil ditemukan? |
| session_complete (sampai Chapter 8) | Berapa persen menyelesaikan perjalanan? |

Ambil data 30 hari dulu, baru tetapkan target. Jangan menetapkan angka target sebelum ada garis dasar.

### 24.4 Model data konten (DF)

Konten (34 karya, 10 perusahaan, semua copy) disimpan di satu sumber data, bukan di dalam komponen. Dari sumber yang sama dibuat disc, runway, Archive, Plain page, dan hitungan Quick Look.

| **Field Work** | **Tipe** | **Contoh** |
| --- | --- | --- |
| id | angka tetap | 23 |
| slug | teks | rindu-melihat-kabah |
| title, titleLang | teks, id atau en | Rindu Melihat Ka’bah?, id |
| companyId | referensi | karamina-tour |
| chapter, world | teks | 3, 3C |
| format, type | teks | Video, Video Promotion |
| aspect | lebar, tinggi | 1080, 1920 |
| files | src, poster, src beresolusi rendah | travel_2.mp4, poster WebP |
| metrics | views, likes, comments, saves, shares, asOf | 914, 98, 2, 10, 3, tanggal data |
| link | url, label | link TikTok, *Watch on TikTok* |
| credit | perusahaan, akun, pembuat, talent, referensi | Karamina Tour, @KARAMINA TOUR, Jassinta Roid Triniti |
| info, lesson | teks EN | teks INFO, *What I learned* |
| permission | status | approved, pending, atau muted-audio |

**Company:** id, name, logo, tag, role, tenure, chapterLink. **Strings:** semua copy dalam satu berkas teks (siap diterjemahkan). **Menambah karya baru dalam 4 langkah:** (1) taruh file di folder aset dengan rasio benar, (2) tambah satu entri di berkas data, (3) pilih chapter atau world, (4) build. Karya otomatis muncul di Archive, runway atau disc bila perlu, Plain page, dan hitungan Quick Look.

## 25. Daftar Aset (nama file dan ukuran yang paling benar) (DF)

Nama file di bawah ini **sudah benar dan tidak boleh diubah** (dilihat lewat CMD). Bila beda dengan bagian lain, pakai nama ini.

| **File** | **Lebar × Tinggi (px)** | **Dipakai di** |
| --- | --- | --- |
| Flyer Hari Besar 1 sampai 4_Lassiewear.png | 1080 × 1350 | Archive 27 sampai 30 |
| flyer_kecantikan_1.jpg | 1080 × 1072 | 3B, Archive |
| flyer_kecantikan_2.jpg, 3, 6 | 1080 × 1080 | 3B, Archive |
| flyer_kecantikan_4.jpg | 1080 × 1077 | 3B, Archive |
| flyer_kecantikan_5.jpg | 1080 × 1079 | 3B, Archive |
| flyer_pelatihan_1.png, 2 | 1080 × 1350 | Tidak dipakai |
| Footage Konten Education 1 sampai 5, Entertainment 1 sampai 5, Hardselling 1 sampai 5 | 1080 × 1920 | Halaman jenis konten |
| Footage Konten Fun 2_Lassiewear 1, Fun 2, Fun 3, Fun 4 (hanya 4 file) | 1080 × 1920 | Halaman jenis konten Fun |
| FOTO JASSINTA ROID TRINITI ESTETIK.png | 1203 × 677 | Tidak dipakai |
| FOTO JASSINTA TAMPAK DEPAN.png | 500 × 500 | Tidak dipakai (resolusi terbatas) |
| foto_jassinta_duduk.png | 408 × 612 | Chapter 1 (diganti file besar baru, tinggi minimal sekitar 1.300 px) |
| foto_jassinta_setengah_badan.png | 1980 × 1980 | Tidak dipakai |
| Ikapunija_1, 2, 3.png; IMN_1 sampai 4.png; innalar_1 sampai 4.png | 520 × 520 | Chapter 2, Archive |
| Inspirasi Konten Education, Entertainment, Fun, Hardselling (Lassiewear).jpg | 1080 × 1920 | Foto referensi |
| pandora_1 sampai 8.jpg | 1100 × 1747 | Flipbook Pandora |
| rush_07_1.jpg | 1000 × 704 | Flipbook (halaman lebar) |
| rush_07_2 sampai 62, 66 sampai 89.jpg | 1000 × 1419 | Flipbook RUSH 07 |
| rush_07_63, 64, 65.jpg | 1000 × 1393 | Flipbook RUSH 07 |
| Partisipasi (5 file) dan Penghargaan (3 file) | Lihat 22.1 dan 22.2 | Overlay |
| Vintage Cindy 1 sampai 17.jpg | 1080 × 1430 sampai 1449 | Photography, Magazine Art |
| logo_1 sampai logo_10.png | placeholder 1980 × 1980 | Chapter 1 |

**Video (nama file di CMD):**

| **File** | **Piksel** | **Catatan** |
| --- | --- | --- |
| intro.mp4 | 1080 × 1920 | Satu-satunya video bersuara (WebVTT wajib) |
| kecantikan_1, 2, 3.mp4 | 1080 × 1920 | Tanpa audio |
| kuliner_1, 2, 3.mp4 | 1080 × 1920 | Tanpa audio |
| travel_1, 2, 3.mp4 | 1080 × 1920 | Tanpa audio |
| Hasil Konten Education / Entertainment / Fun / Hardselling Lassiewear.mp4 | 1080 × 1920 | Tanpa audio |
| SCHOOL_BUMPER, KARAMINA_TOUR_BUMPER, ELSTHETIC_BUMPER, BOOK.mp4 | 1920 × 1080 | Archive |
| AISHI AESTHETIC_BUMPER.mp4, ELS_BUMPER.mp4 | 1920 × 1080 | Tidak dimasukkan |

**Aset yang perlu disiapkan untuk prototipe pertama (lobi 3.0 + café 3A):** kostum doll 4 (lobi: kardigan, hijab lilac, sepatu hitam; walk, hold ponsel, point) 3 gambar, kostum 5 (café: apron, hijab pashmina krem; idle, hold cangkir) 2 gambar, latar lobi dan tiga pintu 4, latar café dan props (konter, papan menu kapur, tas Go-Food, lonceng, jendela, cangkir, struk, stempel) 8, video 9 unik (kuliner_1, 2, 3 + kecantikan_2, 3 + travel_1, 2 untuk lobi, **tanpa audio, 720 × 1280, loop 8 sampai 12 detik, sekitar 1,2 MB atau kurang, plus poster WebP**), font (Gloock, Fraunces Italic, Shantell Sans, DM Mono, Poppins). Prototipe bisa memakai **bentuk kertas sementara dari CSS** bila gambarmu belum selesai.

**Referensi website dari briefmu:** jasonbergh.com (contact, archive, reportage), joshuabaker.com, a24.raviklaassens.com/television, jesperlandberg.com (dan /projects/casa-di-solare), amazon.com/salp/elleslocker, amazon.com/salp/ellescollagecreator. Ditambah **mr-pandas-psychologically-safe-portfolio.com** (referensi dunia kertas).

## 26. Produksi, QA, Izin (DF)

### 26.1 Inventaris ilustrasi (perkiraan kasar) (DF)

Beban terbesar adalah **gambar tangan**, bukan kode. Banyak yang template dipakai ulang.

| **Area** | **Isi** | **Perkiraan** |
| --- | --- | --- |
| Ch.0 | Loker tertutup (2 warna), loker terbuka, 7 suvenir, 3 kartu berpin, robekan 101 | 15 |
| Ch.1 | Meja putih, staples, tag kategori, label REF-ARC | 4 |
| Ch.2 | Meja redaksi, template disc, newsprint, pin Awareness, robekan 202 | 5 |
| 3.0 | Lobi dan tiga pintu | 4 |
| 3A | Konter, papan menu kapur, tas Go-Food, cangkir, struk, stempel, lonceng, jendela | 8 |
| 3B | Ruang treatment, cermin vanity, papan promo, washi, resep, papan nama, botol serum, label kemasan | 8 |
| 3C | Ruang keberangkatan, papan jadwal, pesawat kertas, siluet Ka’bah (hormat), boarding pass, paspor, cap, laut dan kapal, robekan 303 | 9 |
| Ch.4 | Fasad, koper, hanger, ruang ganti, pouf, tas belanja, label harga, robekan 404 | 8 |
| Ch.5 | Perpustakaan, rak, dua buku, stiker pita kaset, headphone, kucing kertas, robekan 505 | 8 |
| Ch.6 | Studio, mikrofon, ON AIR, dinding busa, tirai, piala kecil, kotak arsip | 7 |
| Ch.7 | Laci katalog, lemari, kartu indeks, kotak arsip, robekan 606 | 5 |
| Ch.8 | Loker kotak surat, label washi, amplop, bintang | 4 |
| Overlay | Papan Participation dan Achievement, buku majalah, 10 elemen elegan, buku catatan peta, label kertas | 15 |
| Paper Town | Peta induk dan sembilan landmark | 10 |
| Walk strip | Tujuh strip dua lapisan | 14 |
| **World Set (baru)** | Dinding kertas handmade per chapter (variabel warna), lantai berlipat dan teras, awan berwajah, rumput dan bunga, pohon sakura, pesawat kertas, tali gantung, label kertas papan nama (12), Edge Tab | 20 |
| Kit kertas | Pola washi, pin 3D, glitter, grain, enam tepi sobek | 15 |
| **Total** |  | **sekitar 160** |
| Doll | 31 kombinasi pose-kostum dan 6 ekspresi | 31 + 6 |

**Cara mengurangi beban:** satu **paper kit** (washi, pin, grain, tepi sobek, dinding kertas handmade, lantai berlipat) yang dipakai semua chapter, diwarnai ulang lewat variabel warna, bukan digambar ulang. Props yang sama (cangkir, hanger, awan, rumput) dipakai ulang di beberapa adegan.

### 26.2 Tahap pengerjaan (DF)

| **Tahap** | **Isi** | **Kriteria selesai** |
| --- | --- | --- |
| 0. Style test | Model sheet doll, satu kostum, paper kit, **satu adegan World Set (dinding kertas handmade + lantai berlipat + 3 props)**, tipografi pada satu frame | Kamu merasa ini dia. Doll terbaca di tiga latar berbeda |
| 1. Prototipe 3A dan lobi 3.0 | Runway, struk, pintu geser, INFO dan CREDIT, ganti kostum, gelembung doll | Lancar di HP menengah. Lighthouse 70 atau lebih pada irisan ini. Kamu mencobanya di HP-mu |
| 2. Tulang punggung | Chapter 0 sampai 2, jalur jahitan, walk strip, HUD, mesin overlay, kerangka Plain page | Perjalanan Opening sampai Newsroom mulus. Lulus uji keyboard dan reduced motion |
| 3. Babak Shared | 3B, 3C, recap, Chapter 4, halaman jenis konten | Semua angka cocok dengan sumber. Semua link terbuka benar |
| 4. Babak Remembered | Chapter 5 sampai 8, flipbook, mesin preview Archive | Flipbook 89 halaman lancar. Archive 34 karya tanpa crop |
| 5. Dunia dan overlay | Tujuh overlay suvenir, peta Paper Town, Quick Look, About, CV | Semua rute berfungsi. Tombol Back benar |
| 6. Poles | Ambient, easter egg, audit aksesibilitas dan performa | Daftar QA tuntas. Lighthouse 70 atau lebih di seluruh situs |
| 7. Peluncuran | Domain, OG image, analitik, 404, uji link | Link yang dibagikan di WhatsApp menampilkan kartu yang benar |

### 26.3 Daftar QA (DF)

| **Area** | **Cek** |
| --- | --- |
| Perangkat | iPhone Safari, Android Chrome kelas menengah, iPad, desktop Chrome, Safari, Firefox, layar 1440 px ke atas |
| Akses | Keyboard saja, pembaca layar dasar (VoiceOver atau NVDA), zoom 200%, reduced motion, Calm mode |
| Jaringan | Slow 4G (throttle), Save-Data menyala |
| Link | Semua link eksternal Instagram, TikTok, Spotify (30 lebih) terbuka benar. Cek ulang tiap bulan |
| Data | Tiap angka dicocokkan dengan tangkapan layar sumber, ada tanggal *as of* |
| Copy | Ejaan (Elspresso, Chindy, inNalar.com), tidak ada teks Indonesia di data Inggris selain judul asli berlabel |
| Overlay | Esc menutup, Back menutup, fokus kembali ke pemicu, URL langsung berfungsi |
| Loker | Seluruh loker dan footer terlihat utuh di HP, tablet, desktop, landscape. Barang tidak melayang, tertimpa, atau terpotong. Label hover tidak tertutup |
| Robekan | Tepi statis, grain berhenti di robekan, tidak ada celah di kiri atau kanan, terlihat robek di 360 px |
| Skor | Lighthouse (mobile) dan WebPageTest |

### 26.4 Izin dan risiko (bukan nasihat hukum; keputusanmu: izin brand dan talent sudah beres) (DF)

| **Risiko** | **Saran** |
| --- | --- |
| Musik dan audio tren | Semua video diunggah **tanpa trek audio** kecuali intro.mp4. Atau embed atau link ke platform asli |
| Izin brand | Sudah beres. Angka rendah tetap dibingkai sebagai pelajaranmu, bukan kritik pada brand |
| Izin talent | Siti Nur Azizah, Chindy, Bella Damayanti, Vira Ananda, plus 17 foto Chindy: persetujuan untuk tampil dan menautkan handle |
| Gambar artikel berita | IMN_*, innalar_* dapat memuat foto atau ilustrasi milik penerbit. Pakai tangkapan layar judul dengan byline-mu atau kreditkan sumber gambar |
| Sertifikat dan foto dokumen | Samarkan nomor sertifikat, QR code, tanda tangan, nama orang lain |
| Kontak publik | Susun mailto dan wa.me lewat JavaScript. Pakai WhatsApp Business bila ada |
| Embed pihak ketiga | Instagram dan TikTok memakai poster + tombol link-out. Hanya Spotify yang di-embed (dengan cadangan) |
| Merek dagang | VOGUE di Magazine Art dan majalah loker: risiko rendah, boleh diganti nama generik |
| Representasi Ka’bah | Pertahankan aturan hormat. Sebaiknya satu orang dari Karamina Tour meninjau siluetnya |
| Klaim di Quick Look | Pastikan bisa dibuktikan dan beri label tanggal |
| Orisinalitas dunia kertas | Jangan meniru karakter atau komposisi website referensi (2.7) |

## Hex Baru dan Produksi Gambar (DV)

### 10.1 Hex baru yang dipakai bible ini (DV)

| **Hex** | **Dipakai untuk** |
| --- | --- |
| #D9A87A | Kardus berlipat, lambung kapal, baki O-02a |
| #D9B98C | Tali rami polaroid, tali price tag |
| #D49A7B | Hidung doll |
| #B5645F | Mulut doll |
| #3A2A24 | Alis doll |
| #BBA7E6 | Garis dinding lobi |
| #3B3B3B | Papan menu kapur |
| #C9A27E | Lantai Newsroom |
| #5C1A1F | Lampu ON AIR mati |

### 10.2 Aturan produksi gambar (DV)

- **Urutan:** (1) master doll turnaround F, W, B dan enam ekspresi, (2) paper kit: dinding kertas handmade, lantai berlipat, tepi putih, brad, washi, pin, (3) K1, K2, K5 dan kostum lain, (4) adegan Style Test 3A dan satu bay Newsroom, (5) sisanya per chapter mengikuti roadmap tahap 1 sampai 7.

- **Lapisan:** benda kompleks digambar sebagai lapisan terpisah: garis, isi, bayangan, sorot. Benda dengan ketebalan 3D (loker, rak disc, kamera) menyertakan lapisan sisi.

- **Ekspor:** WebP atau AVIF transparan, 1× dan 2×, garis dan tepi putih sudah menyatu, tanpa kanal alfa setengah transparan di kontur (hit-test alpha).

- **Penamaan:** {chapter}_{id}_{nama}_{sudut}.webp, contoh 3A_A-06_mesin-kopi_V3.webp. Kostum: lihat 4.10.

- **Pemakaian ulang:** cangkir, hanger, awan, rumput, pilaster, bingkai foto, pin, dan label kertas digambar sekali lalu diwarnai ulang lewat variabel --brand-*. Itulah yang menjaga total aset di sekitar 160.

### 10.3 Daftar periksa tiap aset sebelum diserahkan (DV)

- Garis memakai tingkat yang benar (2.1) dan tertutup.

- Maksimal tiga nada ditambah ink dan tepi putih.

- Tepi putih 2 sampai 3 px ada, bayangan mengikuti lapisan kedalaman.

- Sudut gambar sesuai kode (3.2).

- Warna dasar persis dari tabel, tidak sewarna dinding chapter-nya.

- Uji siluet (blok hitam masih dikenali) dan uji satu warna dinding lulus.

- Benda yang dipegang atau menempel sudah punya slot dan bayangan di titik kontak.

- Brad terlihat pada kostum dan tidak tertimpa pola.

## Produksi Paper Cut-Out dengan Kode (REV)

Doll dan 55 aset yang sudah dibuat hanya referensi bentuk dan desain. Semua aset akhir dibuat ulang sebagai komponen kode yang menghasilkan tampilan Paper Cut-Out bertekstur, supaya tekstur kertas handmade konsisten, warna bisa diganti per chapter lewat variabel, dan total berat gambar turun.

### Komponen Paper Kit

| **Komponen** | **Fungsi** | **Teknik** |
| --- | --- | --- |
| PaperTexture | Ubin serat, bintik, dan mottling kertas handmade | Skrip build (Node dengan sharp dan SVG feTurbulence) menghasilkan satu ubin netral 512×512 px (WebP atau AVIF, targetnya di bawah 60 KB). Warna dasar datang dari CSS (background-color: var(–paper-color)) dan ubin netral dipakai dengan mix-blend-mode: multiply, jadi satu ubin melayani semua chapter |
| PaperShape | Potongan kertas dari path SVG (doll, benda, bangunan, awan) | Path SVG dari bentuk aset referensi, clip-path, isi var(–paper-color), overlay ubin netral, tepi bergoyang dari jitter path dengan seed deterministik |
| DeckleEdge | Tepi tidak rata pada lembar besar (dinding, lantai, label besar) | Mask PNG atau SVG yang dipra-render dengan feTurbulence dan feDisplacementMap saat build, bukan filter hidup |
| PaperLayer | Tumpukan lapisan dan bayangan berlapis | CSS translateZ (0, 6, 12 px dst.), filter drop-shadow tiga kedalaman, bayangan kontak |
| PaperLabel, PaperTag, PaperBubble | Label papan nama, Tag Kertas, gelembung doll | Komponen React dengan dua lapis (atas dan lembar bayangan), tepi gunting, miring sesuai deret 3.4 |
| EdgeTab | Penanda chapter berikutnya di tepi kanan | Komponen PaperLabel ukuran 0,3 Hd tanpa teks, aria-hidden |
| CutLetters | Judul pendek dari huruf potongan kertas | Komponen yang memecah teks menjadi huruf, rotasi ±3 derajat dari seed, teks asli tetap di DOM |
| TornEdge | Robekan enam tempat | Tetap Bagian 11, dengan rumbai serat putih di kontur robekan |

### Preset bahan kertas

| **Preset** | **Dipakai di** | **Serat** | **Bintik** | **Tepi** |
| --- | --- | --- | --- | --- |
| handmade | Dinding dan benda umum | Sedang, tone-on-tone | Jarang | Deckle sedang |
| cotton-white | Lembar dokumen Chapter 1, kertas putih | Halus | Sangat jarang | Gunting bersih |
| newsprint | Chapter 2 | Halus, kecokelatan | Sedang | Gunting dengan sedikit rumbai |
| aged | Chapter 5 dan 7 | Sedang | Padat | Deckle lusuh |
| dark | Chapter 6 | Putih 40% | Putih 25% | Deckle sedang |
| tissue | Chapter 8, awan, pita | Sangat halus | Tidak ada | Deckle ringan, semi-transparan |
| marbled | Chapter 3B | Halus | Tidak ada | Gunting bersih, urat abu dan emas |
| flocked | Karpet Chapter 4 | Pendek rapat | Tidak ada | Gunting bersih |
| kraft | Kardus, piramida, kotak arsip | Panjang, searah | Sedang | Gunting dengan lipatan |

### Aturan produksi

- **Seed deterministik.** Tiap aset memakai seed dari ID-nya (mis. hash dari 3A_A-06) agar jitter tepi dan serat sama di setiap muat. Seed robekan TornEdge tetap 101, 202, 303, 404, 505, 606.

- **Performa.** Filter SVG hidup dilarang pada area lebih dari satu viewport. Maksimal enam filter hidup di layar. Tekstur dasar memakai satu ubin netral yang dipakai ulang, deckle dinding dipra-render. Mode hemat mematikan displacement dan memakai tepi statis.

- **Aksesibilitas.** Lapisan dekoratif aria-hidden, huruf potongan kertas tetap teks nyata, kontras teks pada label mengikuti aturan yang ada.

- **Penamaan.** ID aset tetap memakai skema {chapter}*{id}*{nama}_{sudut}. Komponen kode memakai ID yang sama agar daftar aset tidak berubah.

- **Referensi.** Tangkapan layar, 55 aset lama, dan prompt AI di Bagian 7 dipakai untuk membaca bentuk, warna, dan suasana, bukan sebagai file produksi.

### Penyesuaian tahap pengerjaan

| **Tahap** | **Tambahan untuk Paper Cut-Out** | **Kriteria tambahan** |
| --- | --- | --- |
| 0. Style test | Ubin PaperTexture, satu PaperShape (doll), satu dinding dengan DeckleEdge dan Pita Tepi, satu PaperLabel dan satu Tag Kertas | Serat dan bintik terlihat pada 100%, tepi deckle terlihat, doll terbaca di tiga warna dinding, tidak ada garis buku tulis |
| 1. Prototipe lobi 3.0 dan café 3A | Doll dan props sebagai PaperShape, label papan nama, gelembung doll | Bundel gambar dan tekstur sesuai anggaran performa |
| 2. Tulang punggung | Dinding dan lantai semua chapter 0 sampai 2, EdgeTab, CutLetters | Jalur Opening sampai Newsroom mulus di HP kelas menengah |
| 3 sampai 7 | Komponen yang sama dipakai ulang per chapter lewat variabel warna | Kriteria tahap asli tetap berlaku |

## 9. Roadmap Produksi dan Kriteria Selesai (PB)

Website dibangun dalam delapan tahap; tiap tahap hanya dianggap selesai bila kriterianya terpenuhi.

| **Tahap** | **Isi** | **Kriteria selesai** |
| --- | --- | --- |
| 0. Style test | Model sheet doll, satu kostum, paper kit, satu adegan World Set (3A hijau Elspresso dengan pita krem) dan satu bay Newsroom (Independen merah), tipografi pada satu frame | Doll terbaca di tiga latar berbeda; dua pola dinding penuh warna terlihat serasi |
| 1. Prototipe lobi 3.0 dan café 3A | Runway, struk, pintu geser, INFO dan CREDIT, ganti kostum, gelembung doll | Lancar di HP kelas menengah; Lighthouse 70 atau lebih pada irisan ini |
| 2. Tulang punggung | Chapter 0 sampai 2, jalur jahitan, walk strip, HUD, mesin overlay, kerangka Plain page | Perjalanan Opening sampai Newsroom mulus; lulus uji keyboard dan reduced motion |
| 3. Babak Shared | 3B, 3C, recap, Chapter 4, halaman jenis konten | Semua angka cocok dengan sumber; semua link terbuka benar |
| 4. Babak Remembered | Chapter 5 sampai 8, flipbook, mesin preview Archive | Flipbook 89 halaman lancar; Archive 34 karya tanpa crop |
| 5. Dunia dan overlay | Tujuh overlay suvenir, peta Paper Town, Quick Look, About, CV | Semua rute berfungsi; tombol Back benar |
| 6. Poles | Ambient, easter egg, audit aksesibilitas dan performa | Daftar QA tuntas; Lighthouse 70 atau lebih di seluruh situs |
| 7. Peluncuran | Domain, OG image, analitik, 404, uji link | Link yang dibagikan di WhatsApp menampilkan kartu yang benar |

### Daftar QA (PB)

| **Area** | **Cek** |
| --- | --- |
| Perangkat | iPhone Safari, Android Chrome kelas menengah, iPad, desktop Chrome, Safari, Firefox, layar 1440 px ke atas |
| Akses | Keyboard saja, pembaca layar dasar, zoom 200%, reduced motion, Calm mode |
| Jaringan | Slow 4G (throttle), Save-Data menyala |
| Link | Semua link eksternal (30 lebih) terbuka benar; dicek ulang tiap bulan |
| Data | Tiap angka dicocokkan dengan tangkapan layar sumber dan memiliki label *as of* |
| Copy | Ejaan Elspresso, Chindy, inNalar.com; tidak ada teks Indonesia di data Inggris selain judul asli berlabel |
| Overlay | Esc dan Back menutup, fokus kembali ke pemicu, URL langsung berfungsi |
| Loker | Utuh di HP, tablet, desktop, landscape; barang tidak melayang, tertimpa, atau terpotong |
| Robekan | Tepi statis, grain berhenti di robekan, tidak ada celah kiri atau kanan, terlihat robek di 360 px |
| Visual | Lulus enam uji di bagian 5.9 |

### Prioritas bila waktu terbatas (PB)

- **Wajib sebelum rilis:** Opening, Chapter 1 sampai 4, Contact, Quick Look, Plain page, aksesibilitas dasar, anggaran performa.

- **Sangat disarankan:** Chapter 5 sampai 7, peta INDEX, kondisi gagal, SEO dan OG image.

- **Bonus:** easter egg, ambient lengkap, walk strip berlapis dua.

