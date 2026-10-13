# BAGIAN 5 · DUNIA BERSAMA, OVERLAY, DAN HALAMAN GLOBAL

## 22. Overlay Suvenir (DF)

Tujuh barang di loker 2 dan 4 membuka halaman overlay. Di setiap chapter, benda terkait juga muncul sebagai **props kecil** yang membuka overlay yang sama, jadi pengunjung yang melewatkan loker tetap bisa menemukannya.

| **Overlay** | **Rute** | **Barang pemicu** | **Label hover** | **Isi** | **Props di chapter** |
| --- | --- | --- | --- | --- | --- |
| Participation | #/participation | Sertifikat | *Participation* | 5 foto sertifikat | Chapter 1 |
| Achievement | #/achievement | Piala | *Achievement* | 3 foto penghargaan | Chapter 6 (piala di rak studio) |
| Magazine Art | #/magazine-art | Majalah Vogue | *Magazine Art* | Kreator kolase majalah | Chapter 7 |
| Photography | #/photography | Kamera | *Photography* | 17 foto + credit | Chapter 3 |
| My Message | #/my-message | Surat | *My Message* | Surat tulisan tangan | Chapter 8 (amplop) |
| My Strategy | #/my-strategy | Buku | *My Strategy* | Alur 7 langkah | Chapter 4 |
| Notes | #/notes | Notes | *Notes* | Catatan tiga kunci | Chapter 2 sampai 4 (pin) |

**Perilaku semua overlay:** layar penuh dengan animasi *sticker pop* 320 ms, focus trap, Esc menutup, scroll body terkunci (Lenis stop), role=dialog aria-modal=true, fokus kembali ke pemicu saat ditutup. Tombol Back browser menutup overlay tanpa mengubah posisi scroll. Dibuka lewat URL langsung: Opening dilewati dan overlay langsung terbuka. Doll mundur 40 px dan mengecil ke 90% saat overlay terbuka. Semua foto memakai **PhotoFrame** (bingkai putih tebal, bayangan 0 10px 25px rgba(0,0,0,.25), object-fit: contain, tidak pernah memotong) di atas kertas **aged-paper** bergrain dengan **pin 3D** di ujungnya.

### 22.1 Participation (DF)

**Layout:** judul *Participation* di atas, papan kertas aged-paper berisi carousel foto bertepi pin, tombol panah kanan (**selain tombol, ada fitur geser ke kanan tanpa menekan tombol**, swipe dan drag), judul partisipasi di bawah. Foto tampil utuh sesuai rasio masing-masing. Di latar belakang foto ada bingkai putih yang bershadow, lalu di belakangnya kertas kekuningan dengan pin atau paku payung di ujungnya.

| **Foto (nama file, terpotong di CMD)** | **Ukuran** | **Tahun** | **Kategori** | **Caption (EN)** |
| --- | --- | --- | --- | --- |
| Partisipasi Sebagai Peserta Magang Indonesia Mengudara.jpg | 1949 × 1276 | 2025 | Participation | *Intern Participant, Indonesia Mengudara (2025)* |
| Partisipasi Sebagai Peserta Magang Kementerian Agama RI.jpg | 1500 × 1097 | 2023--2024 | Participation | *Intern Participant, Ministry of Religious Affairs of Indonesia (2023--2024)* |
| Partisipasi Sebagai Peserta Pelatihan Bidang Menulis Berita Siber.jpg | 1500 × 1092 | 2024 | Participation | *Participant, Cyber News Writing Training (2024)* |
| Partisipasi Sebagai Peserta Y20 Indonesia.jpg | 1003 × 1500 | 2022 | Participation | *Participant, Y20 Indonesia (2022)* |
| Partisipasi Sebagai Staff bendahara Umum Comic Club.jpg | 1512 × 1115 | 2021--2022 | Participation | *General Treasurer Staff, Comic Club (2021--2022)* |

Urutan: tahun terbaru dulu. **[cek]** periode Comic Club (CV: Jan 2022 -- Dec 2023). Usulan CV untuk caption Kemenag: *Public Relations Intern, Ministry of Religious Affairs of Indonesia (2023--2024)*. Tambahkan foto sertifikat *Gojek Scholarship, Batch 2 (2021)* bila ada. Samarkan nomor sertifikat, QR code, dan tanda tangan sebelum diunggah.

### 22.2 Achievement (DF)

Layout sama dengan Participation, judul *Achievement*, judul penghargaan di bawah.

| **Foto** | **Ukuran** | **Tahun** | **Caption (EN)** |
| --- | --- | --- | --- |
| Penghargaan Produser Kartini Radio Terbaik.jpg | 717 × 892 | 2025 | *Best Kartini Radio Producer (2025)* |
| Penghargaan Tim Siar Kartini Terbaik.jpg | 1949 × 1276 | 2025 | *Best Kartini Broadcast Team (2025)* |
| Penghargaan ISTC Indonesia.jpg | 1500 × 1105 | 2018 | *ISTC Indonesia Award (2018)* |

### 22.3 Magazine Art (DF)

**Judul:** *Let’s put together a fashion magazine!* **Konsep:** kreator kolase seperti situs Elle’s Collage Creator (amazon.com/salp/ellescollagecreator): banyak foto berbingkai putih, tiap foto bisa digerakkan **bebas tanpa mempengaruhi web atau foto lain**. Dimuat malas (React.lazy).

| **Bagian** | **Spesifikasi** |
| --- | --- |
| Buku majalah | Mockup buku dengan **4 lembar kosong yang bisa dibolak-balik** seperti buku biasa. Pengguna bebas menempel foto, elemen, tulisan di kertas. Di HP: 1 halaman + baki laci horizontal |
| Tempat kumpul | Baki berisi foto, tulisan, dan elemen di samping buku |
| Foto (17) | Vintage Cindy 1 sampai 17.jpg, bingkai putih (daftar ukuran di 22.4) |
| Teks **VOGUE** | Bodoni Moda 700 sampai 900 (cadangan Playfair Display), elegan, warna bisa diganti. Bisa digerakkan dan dipindahkan tanpa mempengaruhi hal lain. Nama mirip majalah nyata: risiko rendah, boleh diganti nama generik (keputusanmu) |
| Teks **Fashion** | Pinyon Script (cadangan Great Vibes), script, warna bisa diganti, bisa digerakkan |
| Teks **OOTD** | Bebas Neue (cadangan Oswald), elegan dan tegas, warna bisa diganti, bisa digerakkan |
| Elemen | Pita (bisa digerakkan), kamera, dan **10 elemen elegan** (usulan: bintang emas, untaian mutiara, lipstik, botol parfum, sepatu hak, kupu-kupu, washi tape, tulip, kacamata, stiker hati) |
| Interaksi | Tiap elemen bisa digeser, diperbesar, diputar lewat handle besar tanpa mempengaruhi elemen lain. Tombol: *Bring forward*, *Delete*, *Save as image* (disembunyikan bila CORS gagal) |

### 22.4 Photography (DF)

**Layout:** judul *Photography*, foto berderet menyamping di papan kertas aged-paper dengan pin, bingkai putih bershadow, carousel panah + geser tanpa tombol. **Credit** (kiri bawah): *Model: Chindy. Photograph: Jassinta Roid Triniti. Editing: Jassinta Roid Triniti.* Izin tertulis dari Chindy untuk 17 foto diperlukan (26.4).

| **Foto** | **Ukuran** | **Foto** | **Ukuran** |
| --- | --- | --- | --- |
| Vintage Cindy 1.jpg | 1080 × 1430 | Vintage Cindy 10.jpg | 1080 × 1440 |
| Vintage Cindy 2.jpg | 1080 × 1440 | Vintage Cindy 11.jpg | 1080 × 1432 |
| Vintage Cindy 3.jpg | 1080 × 1440 | Vintage Cindy 12.jpg | 1080 × 1449 |
| Vintage Cindy 4.jpg | 1080 × 1439 | Vintage Cindy 13.jpg | 1080 × 1440 |
| Vintage Cindy 5.jpg | 1080 × 1438 | Vintage Cindy 14.jpg | 1080 × 1447 |
| Vintage Cindy 6.jpg | 1080 × 1440 | Vintage Cindy 15.jpg | 1080 × 1440 |
| Vintage Cindy 7.jpg | 1080 × 1440 | Vintage Cindy 16.jpg | 1080 × 1440 |
| Vintage Cindy 8.jpg | 1080 × 1440 | Vintage Cindy 17.jpg | 1080 × 1431 |
| Vintage Cindy 9.jpg | 1080 × 1440 |  |  |

Nama file Vintage Cindy tetap, ejaan tampilan **Chindy**.

### 22.5 My Message (DF)

**Layout:** kertas handmade krem dengan serat halus, tepi deckle, dan Pita Tepi pink (seperti surat di kertas buatan tangan), tulisan font handwriting yang tetap mudah dibaca (**Shantell Sans**, mengganti Caveat), area surat bergulir sendiri (data-lenis-prevent). Kalimat kutipan diberi highlighter butter, penutup *Let’s create something worth remembering* besar, tanda tangan *Jassinta Roid Triniti* di akhir. Pesan lengkap tanpa diubah:

*To Those Who Believe in the Power of a Story*

Thank you for stopping by.

In a world that moves relentlessly fast, attention has become one of the most valuable things we have.

A single second can determine whether someone stops, looks, remembers—or simply scrolls away.

That is where I believe creativity matters.

I work at the intersection of strategy, storytelling, and visual expression as a Social Media Specialist, Content Creator, Videographer, and Graphic Designer.

I believe great content is not simply about looking beautiful.

It needs a reason to exist. Something worth saying. Someone worth speaking to. And, most importantly, something worth leaving behind.

Because behind every brand, there are people.

Behind every business, there is a journey. Behind every product, there is a story. And behind every screen, there is someone looking for something to feel, discover, or remember.

That is why I never see content as merely *content*.

I see it as part of an experience.

I look for the idea behind the brief. The story behind the numbers. The meaning behind the visual. And the possibility within something that may seem simple at first glance.

“If you come with a brand, I want to help give it a voice.”

“If you come with an idea, I want to help give it form.”

“If you come with a story, I want to help make it worth hearing.”

I don’t know what our project might become.

Perhaps a campaign. Perhaps a visual identity. Perhaps one film. Perhaps dozens of pieces of content. Or perhaps something we haven’t imagined yet.

But I believe the most meaningful work often begins with something simple:

“Two people, two minds, or two teams who share the desire to create something that matters.”

So, if you’re looking for someone to simply execute a brief, perhaps I’m not the person you’re looking for.

But if you’re looking for someone who wants to **understand, think, create, and grow alongside an idea**, then I would love to hear your story.

**Let’s create something worth remembering**

Jassinta Roid Triniti

**Sudah disetujui:** kalimat terakhir sebelum penutup di brief awal terputus (*...grow alongside an idea*). Kalimat final: *...grow alongside an idea, then I would love to hear your story.* (menggantikan baris kutipan *I would love to hear your story.* yang terpisah).

### 22.6 My Strategy (DF)

**Isi dari brief:** strategi mengelola konten media sosial terdiri dari berbagai tahap. Alur yang diminta dibuat **lebih menarik, lengkap, mudah dipahami, dalam bahasa Inggris**.

**Layout:** peta jalur bergaya buku catatan, **tujuh langkah berbentuk kartu bertab** yang disambung garis putus-putus dan panah. Doll berjalan di sepanjang jalur saat dibuka. Panah kembali ke langkah 1 menunjukkan siklus. Di HP jalur menjadi vertikal.

| **Langkah** | **Judul (EN)** | **Isi singkat (EN)** | **Asal di brief** |
| --- | --- | --- | --- |
| 1 | Define the Target Market | Who are we talking to, and what do they care about? | Menentukan target pasar |
| 2 | Build the Style Guide | Serif and sans-serif fonts, tone of voice, and hex colors for design and type. | Style guide: font serif dan sans serif yang diperlukan, tone, hex warna desain dan font |
| 3 | Plan the Content | Content pillars, references, scripts, and posting times. | Content plan: content pillar, referensi, script, waktu posting |
| 4 | Shoot and Record | Film and photograph following the script. | Perekaman dan pemotretan sesuai script |
| 5 | Edit to the Style Guide | Every edit stays consistent with the brand look. | Mengedit sesuai style guide |
| 6 | Post on Schedule | Publish at the planned posting times. | Memposting sesuai jam posting |
| 7 | Analyze | Review engagement, awareness, and conversion, then refine. | Analisis engagement, awareness, conversion |

Hover tiap langkah memunculkan contoh kecil (misalnya langkah 2 menampilkan titik warna palet).

### 22.7 Notes (DF)

**Layout:** label kertas butter dengan kertas bergrain dan sudut terangkat, tulisan **NOTES** pada barang di loker pas ukurannya. **Isi:** *The 3 keys to successful marketing and content are:* **Awareness**, **Engagement**, **Conversion**. Opsional: satu baris pendek per kata (*People find you. People respond. People act.*), hapus bila ingin persis seperti brief.

## 8.13 Overlay suvenir (DV)

| **ID** | **Overlay** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| O-01 | Participation dan Achievement | Papan kertas 1,8×1,2 Hd, pin 3D di sudut | #F3E3B8, pin #E5173F, #FF8DC7, #A98BDA bergantian | V0 | Foto di PhotoFrame #FFFFFF, rasio asli, tanpa crop. Panah stiker #FF2E93 |
| O-02 | Magazine Art: buku | Buku mockup, empat lembar kosong, tebal 0,06 Hd | Sampul #FFD6E8, lembar #FFFDF9 | V3 | Dibolak-balik |
| O-02a | Baki elemen | Baki kayu 1,2×0,4 Hd | #D9A87A [BARU] | VT | Tempat foto dan elemen |
| O-02b | Sepuluh elemen | Tiap elemen 0,2 sampai 0,3 Hd | Bintang emas #D4A64A, untaian mutiara #FFFDF9 (benang #F4EFF1), lipstik tabung #D4A64A isi #E5173F, botol parfum #FFD6E8 tutup emas, sepatu hak #FF8DC7, kupu-kupu #D4C1F5 dan #DA9AF2, washi #FFB3D9 70%, tulip kepala #FF8DC7 daun #B7D9A8, kacamata cat-eye #1B1017 lensa #FFD6E8, stiker hati #FF2E93 | V0 | Tepi putih, handle skala dan rotasi bulat 44 px #FFFFFF tepi ink |
| O-02c | Pita dan kamera | Pita 0,5×0,08 Hd, kamera mini 0,25 Hd | Pita #FF8DC7, kamera seperti 0-23 | V0 | Bisa digerakkan |
| O-03 | Photography | Papan seperti O-01, foto 1080×1440 | Sama | V0 | Credit kiri bawah, Shantell Sans |
| O-04 | My Message | Kertas handmade 1,6×2,0 Hd | #FFFDF9, serat #8FB8E8, pita tepi #FF8DC7 | V0 | Highlighter #FFF1A8 miring −2°, tanda tangan Shantell Sans |
| O-05 | My Strategy | Tujuh kartu bertab 0,5×0,4 Hd, garis putus-putus dan panah | #FFD6E8, #D4C1F5, #BFE3F5, #A8E6CF, #FFF1A8, #FFB38A, #E8A5B8 | V0 ±2° | Panah balik ke langkah 1 |
| O-06 | Notes | Label 0,9 Hd | Butter #FFF1A8, sudut terangkat | V0 −3° | Tiga kunci tulisan tangan |

## 23. INDEX, Quick Look, Plain Page, Frame Global, Kondisi Gagal (DF)

### 23.1 INDEX: peta Paper Town (DF)

- **Tombol:** *INDEX* di kanan atas. Klik membuka overlay standar berisi **peta Paper Town** sebagai buku catatan bergambar. Judul: *Paper Town*. Sub: *Where would you like to go?* Toggle: *Map* dan *List*. **List** (sembilan item teks: OPENING, PERSONAL BRAND, WRITING PORTFOLIO, CONTENT MARKETING SPECIALIST, EXAMPLE STRATEGY, PROJECT CAMPUS, PODCAST, ARCHIVE, CONTACT) adalah default untuk pembaca layar.

- **Klik tempat:** overlay menutup dan doll berjalan otomatis ke sana (1,2 sampai 1,8 detik, jarak jauh dipercepat). Reduced motion: langsung pindah.

- Tempat yang sudah dikunjungi diberi cap kecil. Lencana: *You’ve visited 4 of 9 places*. Disimpan selama sesi.

- Penghitung kecil di sudut peta (opsional): *Secrets found: 2 of 5*.

- Di dalam overlay: toggle **Calm mode** (*Calm mode: Off / On*) dan tautan *View as plain page →*.

- Item aktif ditandai titik pink. Sebelum Opening dibuka, INDEX belum aktif.

- Tiga titik A, B, C dari Chapter 3 hanya penanda progres, bukan item INDEX.

### 23.2 Quick Look (DF)

**Pemicu:** stiker kiri bawah *In a hurry? Take the shortcut*. Overlay standar, bisa ditutup dengan Esc, tidak mengganggu posisi scroll.

| **Bagian** | **Isi (EN)** |
| --- | --- |
| Judul | *Jassinta Roid Triniti* |
| Peran | *Digital Content Executive: Social Media Specialist, Content Planner, Videographer, and Graphic Designer* |
| Tiga sorotan | *Up to 7 news articles a day* (menggantikan *Online news writer for five years* karena CV mencatat tulisan berita profesional sejak Nov 2024). *30K+ views on a single Lassiewear video*. *Best Kartini Radio Producer, 2025* |
| Logo | Sepuluh logo perusahaan |
| Tombol | *Email*, *Instagram*, *WhatsApp*, *Download CV (PDF)* |
| Tautan cepat | Ke tiap chapter dan *View as plain page* |

Klaim sorotan harus bisa dibuktikan (sertifikat, tangkapan layar) dan diberi label tanggal.

### 23.3 Plain page (G.3) (DF)

Halaman satu kolom tanpa animasi: h1 *Jassinta Roid Triniti*, sub *Digital Content Executive* , banner *You’re viewing the simple version.*, tombol *Back to the journey →*. Satu h2 per chapter, teks, daftar karya dengan link, foto via PhotoFrame, video menjadi poster dan link. Skip link pertama di Tab. Juga menjadi isi noscript dan tampilan cetak. Browser tanpa CSS 3D otomatis masuk ke Plain page dengan banner *Showing the simple version.* Dasar SEO (teks nyata ada di DOM dan Plain page).

### 23.4 Frame global (DF)

| **Frame** | **Visual dan doll** | **Gerak dan interaksi** | **Copy (EN)** |
| --- | --- | --- | --- |
| G.1 HUD | **Chip babak** kiri atas (DM Mono 11 px). **Rel progres**: garis jahitan vertikal tipis di tepi kiri dengan kepala doll kecil (hanya desktop) | Chip berganti dengan papan flip 300 ms di batas babak. Rel bergerak mengikuti progres. Keduanya disembunyikan di Opening dan Chapter 8 | *ACT I · FELT*, *ACT II · SHARED*, *ACT III · REMEMBERED* |
| G.2 INDEX | Peta Paper Town (23.1) | Sticker pop 320 ms, focus trap, Esc menutup | *Paper Town*, *Where would you like to go?* |
| G.3 Plain page | 23.3 |  |  |
| G.4 Doll diklik (E1) | Doll berputar sekali setelah klik kelima. Klik biasa: lompat kecil 320 ms | Gelembung acak di klik biasa | *Hi!*, *Still here.*, *Keep scrolling →*. Klik kelima: *Dizzy!* |
| G.5 Quick Look | 23.2 | Overlay standar |  |
| G.6 Kondisi gagal | Placeholder kertas dan toast | Lihat 23.5 |  |
| G.7 Edge Tab | Label kertas chapter berikutnya mengintip di tepi kanan (6.6) | Dekoratif, aria-hidden | tanpa teks |

### 23.5 Kondisi gagal dan kosong (DF)

| **Situasi** | **Perilaku** | **Copy (EN)** |
| --- | --- | --- |
| Gambar gagal dimuat | Placeholder kertas dengan tombol coba lagi | *Image didn’t load.* Tombol: *Try again* |
| Video gagal | Poster tetap tampil dan link ke platform asli | *Video unavailable here.* Tombol: *Watch on Instagram ↗* atau *Watch on TikTok ↗* |
| Spotify gagal | Kartu cadangan | *Open in Spotify* |
| JavaScript mati | Isi Plain page tampil lewat noscript | *Turn on JavaScript for the full journey.* |
| Loading lebih dari 4 detik | Teks tambahan di preloader | *Taking longer than usual...* dan tombol *Skip to the quick look* |
| Offline | Toast kecil | *You seem to be offline.* |
| Rute tidak dikenal | Overlay 404: doll membawa peta dan kebingungan | *This page wandered off.* Tombol: *Back to the journey* |
| Salin gagal | Toast | *Couldn’t copy. Select and copy manually.* |
| Browser tanpa CSS 3D | Otomatis ke Plain page | Banner kecil: *Showing the simple version.* |
| Dicetak | Tampilan Plain page | n/a |

## Kartu Quick Look (PB)

| **Bagian** | **Isi** |
| --- | --- |
| Judul | Jassinta Roid Triniti |
| Peran | Digital Content Executive: Social Media Specialist, Content Planner, Videographer, and Graphic Designer |
| Tiga sorotan | *Up to 7 news articles a day*; *30K+ views on a single Lassiewear video*; *Best Kartini Radio Producer, 2025* |
| Logo | Sepuluh logo perusahaan |
| Tombol | Email, Instagram, WhatsApp, Download CV (PDF) |
| Tautan cepat | Ke tiap chapter dan *View as plain page* |

## 9. Dunia Bersama: Papan Nama, Walk Strip, Peta, HUD (DV)

### 9.1 Dua belas label kertas papan nama (DV)

Ukuran 0,45×0,45 Hd, rotasi sesuai deret 3.4. Sudut kanan bawah terangkat (segitiga lipatan 12% sisi, bayangan satu nada). Enam sampai delapan strip kertas sinar 1,5 px (panjang 0,06 sampai 0,10 Hd) memancar dari tiga sisi. Baris 1 DM Mono huruf besar minimal 11 px, baris 2 Shantell Sans 600. Muncul dengan sticker pop 320 ms. Edge Tab memakai warna dan bentuk papan chapter berikutnya, lebih kecil (0,3 Hd), tanpa teks terbaca, aria-hidden.

| **Frame** | **Warna label** | **Alasan** |
| --- | --- | --- |
| 0.7 START HERE | Mint #A8E6CF | Aksen Babak I |
| 1.1 Chapter 01 | Putih #FFFFFF, **datar tanpa grain** | Aturan kanvas putih |
| 2.1 Chapter 02 | Butter #FFF1A8 | Kontras dengan dinding merah, aqua, teal |
| 3.0.1 Chapter 03 | Baby-blue #BFE3F5 | Aksen Babak II di atas dinding lilac |
| 3A.1 | Apricot #FFD3B0 | Kontras dengan hijau |
| 3B.1 | Blush #FFD6E8 | Di atas marble putih |
| 3C.1 | Sky-pastel #A7D8F5 | Kontras dengan hijau |
| 4.1 Chapter 04 | Dusty-rose #E8A5B8 | Di atas burgundy |
| 5.1 Chapter 05 | Aged-paper #F3E3B8 | Sepia |
| 6.1 Chapter 06 | Orchid #DA9AF2 | Terang di atas plum gelap |
| 7.1 Chapter 07 | Honey #F6D76B | Aksen lantai |
| 8.1 Chapter 08 | Blush #FFD6E8 | Aksen Babak III di atas cotton-candy |

### 9.2 Walk strip (tujuh) (DV)

Zona D sekitar 50 vh. Dua lapisan gambar per strip: latar jauh (T5) dan jalur (T3). Garis jahitan 0-45 selalu ada.

| **Strip** | **Elemen yang digambar** | **Warna dan material** | **Sudut** |
| --- | --- | --- | --- |
| 0.7 | Papan START HERE, jejak pertama, awan, pesawat kecil | Seperti 0-43 sampai 0-47 | V0, VT |
| 0 ke 1 | Office Block: kotak putih 1,8 Hd tanpa grain (satu-satunya bangunan tanpa tekstur), Press Tower jauh | #FFFFFF dan T5 | V0 |
| 2 ke 3 | Tiga kios mini: tenda café belang (#F8F8C8 dan #066838) 0,9 Hd, salib klinik merah muda dan putih 0,9 Hd, pesawat kertas mini | Seperti L-04, L-05, 0-47 | V0 |
| 3C ke 4 | Pantai pastel: pasir #F3E3B8, laut #A7D8F5, kapal kertas 0,9 Hd, jalur dari gerbang ke Fashion Row, kanopi dusty-rose jauh, menara lampu merah jauh | Seperti C-11 | VS untuk kapal |
| 4 ke 5 | Arah terbalik (doll K16 berjalan ke kiri), Memory Hill sepia dengan perpustakaan, pita kaset melayang, Archive Hall jauh | Filter sepia | V0, W flip |
| 5 ke 6 | Radio Tower: menara 2,2 Hd dengan lampu merah berkedip, doll memasang headphone | Menara #7A2E5C, lampu #E5173F | V0 |
| 7 ke 8 | Jalan melengkung pulang, Paper School muncul, jejak 0-55 masih ada | Seperti 0-43 sampai 0-51 | VT |

### 9.3 Paper Town: peta dan sembilan landmark (DV)

Peta = buku catatan bergambar 1,8×1,2 Hd, kertas handmade, garis jahitan putus-putus melingkar menghubungkan sembilan tempat. Dibuat sekali dan dipakai di INDEX, mini-map HP, latar preloader, dan OG image 1200×630. Cap kunjungan bundar #E5173F 70%, Ø 0,12 Hd.

| **#** | **Landmark** | **Bentuk siluet** | **Warna wilayah** |
| --- | --- | --- | --- |
| 0 | Paper School | Gedung dengan jam | #B7D9A8 |
| 1 | Office Block | Kotak putih polos | #FFFFFF |
| 2 | Press Tower | Menara dengan roller dan jam | #F3E3B8 |
| 3 | Creator Plaza | Tenda café, salib klinik, gerbang berdampingan | #D4C1F5 |
| 4 | Fashion Row | Kanopi dusty-rose dan manekin | #E8A5B8 |
| 5 | Memory Hill | Bukit dan perpustakaan sepia | #F3E3B8 sepia |
| 6 | Radio Tower | Menara dan lampu merah #E5173F | #DA9AF2 |
| 7 | Archive Hall | Fasad laci katalog | #D9D3D6 |
| 8 | Mailbox | Loker *Reserved for: your story* | #FFD6E8 |

Landmark digambar V0 T5 (garis 1,5 px ink 45%) di strip, tetapi di peta memakai T2 penuh agar jelas. Wilayah diberi tint 20% di bawah kontur.

### 9.4 Komponen HUD dan UI (DV)

| **Komponen** | **Bentuk dan ukuran** | **Warna dan material** | **Detail** |
| --- | --- | --- | --- |
| Chip babak | Pill DM Mono 11 px, tinggi 28 px | Babak I mint #A8E6CF, II baby-blue #BFE3F5, III peach #FFB38A, teks #1B1017 | Papan flip 300 ms |
| Rel progres | Garis jahitan vertikal, kepala doll mini 0,05 Hd | Garis ink 50%, kepala K17 | Hanya desktop |
| Tombol INDEX | Stiker pill 44 px minimal | #FFFFFF tepi ink, teks Poppins 600 | Titik pink #FF2E93 untuk item aktif |
| Stiker Quick Look | Pill 0,7×0,12 Hd | Butter #FFF1A8, tepi putih | Kiri bawah, miring −3° |
| Tombol INFO dan CREDIT | Pill kecil | INFO #FFF1A8, CREDIT #FFFDF9 | Tengah atas dan kanan bawah |
| HoverLabel (price tag) | Tag 0,35×0,14 Hd dengan sudut terpotong dan lubang | #FFFDF9, jahitan putus-putus ink 40%, tali #D9B98C [BARU] | Miring ±3°, muncul juga saat fokus keyboard |
| StickerButton | Pill die-cut | Hot-pink glitter #FF2E93, teks #FFFFFF | Hover goyang dan naik 2 px |
| Pushpin | Paku payung 3D Ø 0,1 Hd, batang chrome | #E5173F, #FF2E93, #A98BDA | Bayangan tipis |
| PaperNote | Kertas dengan sudut terangkat | #F3E3B8 |  |
| PhotoFrame | Bingkai tebal 0,03 Hd | #FFFFFF, bayangan 0 10px 25px rgba(0,0,0,.25) | Rasio asli |
| SpeechBubble | Gelembung kertas, ekor 0,04 Hd, washi kecil di sudut kiri atas | #FFFFFF tepi ink 1,5 px, washi #FFB3D9 70% | Shantell Sans 17 px minimal |
| Tag Kertas | Gelembung kertas gunting | Isi #FFF8EE 70% | Hanya fakta singkat |
| Pin tiga kunci | Paku payung | Awareness #E5173F, Engagement #FF2E93, Conversion #A98BDA | Menyala satu per satu |
| Doll 404 | K1 membawa peta 0,5×0,35 Hd, dua tanda tanya T4 di atas hijab, ekspresi curious | Peta seperti 9.3 | *This page wandered off.* |
| Kartu About (pers) | Lihat 1-08 |  |  |

### 9.5 Ambient dan partikel (DV)

| **Elemen** | **Bentuk** | **Warna** | **Catatan** |
| --- | --- | --- | --- |
| Debu kertas | Titik 0,01 Hd | #FFFDF9 40% | Ch0, Ch5 |
| Serpihan newsprint | Kotak kecil 0,015 Hd | #F3E3B8 | Ch2 |
| Confetti | Lihat C-14 | Pink, butter, mint, baby-blue | Hanya saat proud |
| Bintang berputar (dizzy) | Bintang 5% H | #FFF1A8 | 600 ms |
| Kupu-kupu kertas | Sayap 0,06 Hd | #D4C1F5 dan #DA9AF2 | Hanya di loker 4 saat idle, opsional |

Hanya transform dan opasitas. Maksimal 3 loop aktif bersamaan.

