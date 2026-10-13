## 8. Katalog Barang dan Interior per Chapter (DV)

**Cara baca.** ID = chapter dan nomor urut. Ukuran dalam Hd (T = tinggi, L = lebar), kecuali loker yang tetap memakai var(--px) dari Portfolio Bible 13.3 sampai 13.6. Warna menyebut warna dasar. Bayangan dan sorot mengikuti rumus 2.2. Sudut memakai kode 3.2. Semua benda memakai tepi putih 2 sampai 3 px dan garis tingkat sesuai ukuran (2.1).

## Chapter 0: The Locker Hallway (Opening)

### 13. Chapter 0: The Locker Hallway (Opening) (DF)

**Beat:** *Every story starts with something you keep close.* **Babak:** I · Felt. **Mode:** S. **Kertas sobek:** seed 101 (hanya pada keadaan terbuka).

**Arah visual:** koridor sekolah bergaya kertas. Loker tertutup berwarna steel-lilac dan lavender. Loker terbuka berinterior berry dan lavender dengan warna loker berbeda dari tertutup. Kostum doll: seragam santai pastel, hijab krem, kalung ID, sepatu hitam. Tema keseluruhan: playful, girly, textured.

#### 13.1 Konsep dua keadaan (DF)

Website berbentuk one page, dimulai dengan **opening loker tertutup**. Selama tertutup halaman belum boleh di-scroll. Begitu tombol **OPEN** diklik, **loker tertutup berganti menjadi loker terbuka** (warna loker berbeda dan berisi barang-barang), lalu halaman bisa di-scroll ke bawah. Ini **bukan adegan pintu membuka**: yang tampil adalah loker terbuka tanpa pintu, kecuali loker 1, 3, dan 5 yang tetap berpintu dan menampilkan kartu di depannya.

**Tata letak lima loker (rasio pintu minimal 1:3, align tengah):**

| **Loker** | **Keadaan tertutup** | **Keadaan terbuka** |
| --- | --- | --- |
| 1 | Pintu steel-lilac #B9B8CC, pelat chrome 01, ventilasi, handle | Pintu + kartu *I Can Help You With:* |
| 2 | Pintu, pelat 02 | **Terbuka**, tanpa pintu: Sertifikat, Piala, Majalah, Kamera, Sepatu |
| 3 (tengah) | Pintu memuat tipografi *Content that is Felt, Shared, Remembered* dan tombol ▶ OPEN | Pintu + kartu video perkenalan (intro.mp4) |
| 4 | Pintu, pelat 04 | **Terbuka**, tanpa pintu: Foto polaroid, Surat, Notes, Buku, Payung, Tas |
| 5 | Pintu steel-lilac #B9B8CC, pelat chrome 05, ventilasi, handle | Pintu + kartu *Platform I Am Proficient in:* |

Footer (satu baris, tinggi 20 px): **2026** (kiri), **Jassinta Roid Triniti** (tengah), **Creative Portfolio** (kanan). Pada keadaan terbuka, TocInline ada di kanan bawah footer. **Bagian bawah layar tertutup bersih penuh tanpa robekan kertas.** Bagian bawah terbuka berbentuk robekan kertas realistis yang menyatu dengan background (Bagian 11).

#### 13.2 Aturan wajib bentuk loker (3D dan material) (DF)

- Loker dibuat **3D sungguhan**: ada **langit-langit loker**, **rak yang terlihat**, **tembok rak tiga sisi** (kiri, kanan, belakang), dan setiap rak, besi, tiang penyangga, pintu, lubang ventilasi, pegangan pintu, dan lubang kunci **memiliki ketebalan dan volume bahan seperti aslinya**.

- Bentuk, warna, detail, tekstur, dan kedalaman 3D harus **sama** dengan desain buatanmu: **loker_tertutup.png** (tertutup) dan **loker_terbuka.png** (terbuka).

- **Dilarang menempelkan** hasil gambar loker_tertutup.png atau loker_terbuka.png sebagai bagian dari web. Loker **dibuat ulang sama persis** (ukuran, bentuk, warna, detail, kedalaman 3D) dengan CSS 3D berlapis.

- Ukuran minimal pintu 1080 × 3240 px atau 1:3.

- Karena loker terbuka adalah kelanjutan loker tertutup, **ukuran dan tampilan di layar harus sama persis** agar konsisten.

#### 13.3 Ukuran fisik di layar (desktop acuan) (DF)

| **Komponen** | **Ukuran lama** | **Ukuran terbaru** | **Keterangan** |
| --- | --- | --- | --- |
| Lebar pintu (doorWidth) | sekitar 280 sampai 308 px | **sekitar 325 px** | Bertambah besar proporsional |
| Tinggi pintu (doorHeight) | sekitar 840 sampai 924 px | **sekitar 975 px** | Rasio 1:3 terjaga |
| Lebar total kabinet | sekitar 1.540 sampai 1.680 px | **sekitar 1.781 px** | 5 pintu + 4 tiang divider + 2 tiang luar |
| Tinggi total kabinet | sekitar 920 sampai 990 px | **sekitar 1.044 px** | Memenuhi sekitar 97% tinggi layar |
| Skala satuan var(--px) | sekitar 0,268 px | **sekitar 0,301 px** | Otomatis memperbesar seluruh elemen |
| Tinggi footer loker | sekitar 50 sampai 65 px | **20 px** | Hanya baris tahun dan nama |

**Tampilan di layar (tertutup dan terbuka):** loker harus tampil **secara keseluruhan** di HP, tablet, PC, dan layar landscape lain **tanpa bagian yang terpotong atau tertutup**, termasuk footer *2026 / Jassinta Roid Triniti / Creative Portfolio*. Gunakan rasio 1:3 untuk menentukan tampilan. Tampilan loker tertutup dan terbuka sama dalam ukuran dan posisi. **Di HP:** tampilan pertama menampilkan 3 loker tengah, bisa digeser ke kanan dan kiri.

#### 13.4 Komponen loker tertutup (DF)

| **Komponen** | **Ukuran / nilai** | **Keterangan** |
| --- | --- | --- |
| Plat nomor pintu | 480 × 120 var(--px) | Plat chrome dengan baut kubah |
| Font nomor pintu (01 sampai 05) | 76 var(--px) (clamp 18 sampai 32 px) | Bebas Neue tebal |
| Ventilasi udara (5 baris) | Lebar 700 var(--px), tinggi 28 var(--px) | Slit berongga timbul |
| Handle loker (01, 02, 04, 05) | 210 × 530 var(--px) | Chrome latch bar 78 × 310 var(--px) |
| Kata *Content that* | Font 84 var(--px), padding 36 × 15 var(--px) | Block highlight pink dan kuning |
| Kata *is Felt,* | Font 84 var(--px), padding 34 × 15 var(--px) | Block highlight mint dan lilac |
| Kata *Shared,* | Font 88 var(--px), padding 48 × 15 var(--px) | Block highlight baby blue |
| Kata *Remembered* | Font 88 var(--px), padding 48 × 15 var(--px) | Block highlight peach |
| Tombol ▶ OPEN | Font 70 var(--px), min-h 175 var(--px), padding 96 × 32 var(--px) | Icon play 54 var(--px) |

Tipografi memakai blok highlight dengan latar berbeda tiap kata (lihat 9.2). Hover loker: bergetar 2 derajat. Handle ada di loker 01, 02, 04, 05 (loker tengah memuat tipografi dan tombol OPEN).

#### 13.5 Kartu loker terbuka (loker 1, 3, 5) (DF)

Kartu **memenuhi penuh pintu loker** dan tidak ada bagian yang keluar dari loker. Teks yang terlalu panjang otomatis turun ke baris berikutnya.

| **Komponen** | **Ukuran / nilai** | **Keterangan** |
| --- | --- | --- |
| Pin / paku payung | Diameter 80 var(--px) | Tengah atas kartu (Pink loker 1, Merah loker 3, Lavender loker 5) |
| Tag atas (SERVICES / HELLO / STACK) | Font 70 var(--px), padding 26 sampai 30 × 8 var(--px) | Bersih di bawah pin |
| Sub-tag (✧ CAPABILITIES / EXPERTISE) | Font 70 var(--px) |  |
| Heading utama kartu | Font 78 var(--px) |  |
| Pill bullet (loker 1 dan 5) | Font 70 var(--px), padding 24 × 13 var(--px) | Lingkaran centang 74 × 74 var(--px) |
| Placeholder video (loker 3) | 930 × 1.653 var(--px) | Rasio portrait 9:16 |
| Tombol play overlay video | Diameter 146 × 146 var(--px) | Ikon segitiga 64 var(--px) |
| Tombol pause dan mute video | Diameter 76 × 76 var(--px) | Ikon 36 var(--px) |
| Kutipan footer video | Font 70 var(--px) | Serif italic tebal |

#### 13.6 Barang 3D di loker terbuka (loker 2 dan 4) (DF)

Barang dibuat **senyata mungkin**, punya **volume 3D**, dan bahan sesuai ketebalan dan struktur aslinya. Barang adalah **tombol** menuju halaman tertentu: **tombol mengikuti bentuk dan ukuran barang** (hit-test alpha pada kontur), tidak boleh berbentuk asal. Referensi bentuk dan detail memakai gambar-gambar referensimu (envelope.png, books.png, bag.png, umbrella.png, shoes.png, polaroids.png, magazine.png, dll). **Dilarang menempelkan gambar referensi itu di website**; barang dibuat ulang dengan bentuk, detail, dan warna sesuai referensi.

| **Barang** | **Ukuran (lebar × tinggi)** | **Posisi dan status penataan** | **Halaman** | **Label hover** |
| --- | --- | --- | --- | --- |
| **Sertifikat** (loker 2, rak 1) | 960 × 700 var(--px) | Mengisi 89% dinding belakang rak atas, digantung di dinding rak dengan tali gantung emas | #/participation | *Participation* |
| **Piala** (loker 2, rak 1 kanan) | 520 × 750 var(--px) | Di depan sertifikat, duduk rapat menempel permukaan rak 1 | #/achievement | *Achievement* |
| **Kumpulan majalah Vogue** (loker 2, rak 2) | 740 × 960 var(--px) | Berdiri menghadap depan memperlihatkan cover, memenuhi rak, menempel di permukaan rak 2, tidak melayang | #/magazine-art | *Magazine Art* |
| **Kamera Pastelca** (loker 2, rak 2 kanan) | 560 × 365 var(--px) | Di depan majalah, duduk di permukaan rak 2 | #/photography | *Photography* |
| **Sepatu Retro Runners** (loker 2, lantai dasar) | 980 × 440 var(--px) | Mengisi 91% lantai dasar loker, **warna sepatu pink**, bentuk dan detail sama dengan shoes.png | tidak ada halaman (dekoratif) | n/a |
| **Foto polaroid** (loker 4, rak 1 atas) | 3 frame, masing-masing 280 × 330 var(--px) | Tiga foto digantung pada tali rami yang membentang 100% dinding kiri ke kanan rak paling atas, tidak boleh terputus dari rak | dekoratif | n/a |
| **Surat / amplop** (loker 4, rak 1 bawah) | 840 × 530 var(--px) | Di bawah foto, menempel langsung di permukaan rak 1, tidak melayang | #/my-message | *My Message* |
| **Kumpulan buku** (loker 4, rak 2) | 1.050 × 780 var(--px) | Menempel 100% rata ke dinding sisi kiri rak (0 ruang kosong), memenuhi rak 2, tidak melayang. **Tanpa tulisan apa pun**, bentuk, posisi, dan warna sama dengan books.png | #/my-strategy | *My Strategy* |
| **Notes** (loker 4, rak 2 kanan) | 520 × 760 var(--px) | Di depan kumpulan buku, berdiri tegak menghadap depan di rak 2 | #/notes | *Notes* |
| **Tas Hobo** (loker 4, lantai kiri bawah) | 800 × 700 var(--px) | Duduk rapat di pojok kiri bawah lantai loker | dekoratif | n/a |
| **Payung polkadot** (loker 4, lantai kanan) | 210 × 880 var(--px) | Miring 7,5° ke kanan menyandar dinding, terlihat 100% utuh, kanan bawah | dekoratif | n/a |

**Aturan penataan:** barang tidak boleh tertimpa, tertutup, atau terpotong bagian lain, dan **tidak boleh melayang**: posisi tepat berada di atas raknya. Majalah: tulisan **VOGUE** (bukan Belleza) dengan bentuk dan warna sama seperti majalah di magazine.png. Notes: tulisan **NOTES**. Tulisan VOGUE dan NOTES disesuaikan ukuran desain, **tidak terlalu besar atau kecil, tidak terpotong, tidak ada bagian yang turun baris karena kebesaran**. Buku: tanpa tulisan.

**Urutan atas ke bawah tiap loker (dari ASCII):**

- **Loker 2:** Sertifikat (rak atas, digantung di dinding rak) → Piala (kanan, di depan sertifikat) → Kumpulan majalah (berdiri menghadap depan, tidak melayang) → Kamera (di depan majalah) → Kumpulan sepatu (rak paling bawah).

- **Loker 4:** Foto polaroid (3 foto, tali dari sisi kanan ke kiri rak paling atas) → Surat (di bawah foto) → Notes (kanan atas rak 2, di depan kumpulan buku) → Kumpulan buku (memenuhi rak 2) → Payung (kanan bawah, bersandar) → Tas (rak paling bawah).

**Label hover** (*Participation*, *Achievement*, *Magazine Art*, *Photography*, *My Message*, *My Strategy*, *Notes*) berlatar label price-tag. Label **tidak boleh tertutup, terpotong, atau tertimpa bagian lain**, dan posisinya mengikuti letak barang, dengan collision detection agar tidak keluar viewport.

#### 13.7 Isi kartu (DF)

**Loker 1 (kartu SERVICES):**

| **Bagian** | **Isi** |
| --- | --- |
| Tag | *SERVICES* |
| Sub-tag | *✧ CAPABILITIES* |
| Judul | *I Can Help You With:* |
| Pill (sesuai CV) | Social Media Management, Social Media Strategy, Content Planning, SEO Writing, Copywriting, Video Content, Graphic Design, Video Bumper Animation, TikTok Live Hosting, E-commerce Store Management, Performance Analysis, *and more* |
| Tombol | *Download CV (PDF)* (membuka file CV; nama file Jassinta-Roid-Triniti-CV.pdf) |

**Loker 3 (kartu HELLO):** tag *HELLO*. Video portrait 9:16 intro.mp4 (**satu-satunya video bersuara**). Bisu sampai diklik. Tombol play besar, lalu pause, mute/unmute, dan **CC** selalu terlihat. Teks WebVTT disediakan. Setelah selesai kembali ke poster. Kutipan di bawah video (serif italic tebal): *Hi, I’m Jassinta. Let’s make something worth remembering.*

**Loker 5 (kartu STACK):**

| **Bagian** | **Isi** |
| --- | --- |
| Tag | *STACK* |
| Sub-tag | *✧ EXPERTISE* |
| Judul | *Platform I Am Proficient in:* |
| Pill (sesuai CV) | Instagram, TikTok, Facebook, Canva, CapCut, Adobe Photoshop, Illustrator, Premiere Pro, InDesign, Tokopedia, Shopee, TikTok Shop, CMS. **Google Business Profile dihapus** kecuali memang kamu pakai **[cek]** (tidak ada di CV) |

#### 13.8 Frame (DF)

| **Frame** | **Visual dan doll** | **Gerak dan interaksi** | **Copy (EN)** |
| --- | --- | --- | --- |
| 0.1 Preloader | Stiker kertas pink di tengah layar, pita progres seperti zipper | Maksimal 2 detik, tidak memblokir bila ada aset gagal | *Putting the finishing touches on the lockers...* |
| 0.2 Koridor tertutup | Lima pintu loker (rasio minimal 1:3), pelat nomor chrome 01 sampai 05, ventilasi timbul, handle. Pintu tengah memuat tipografi: **Content that** (Gloock, blok pink dan kuning), ***is Felt,*** (Fraunces Light Italic, blok mint dan lilac), **Shared,** (Gloock, blok baby blue), *Remembered* (Fraunces Italic 400, blok peach). Tombol ▶ OPEN di bawahnya. Footer: 2026, Jassinta Roid Triniti, Creative Portfolio | Scroll terkunci. Hover loker: bergetar 2 derajat. Di HP: tiga loker tengah, geser horizontal, titik 1 sampai 5 | *Content that is Felt, Shared, Remembered*. Tombol: *OPEN* |
| 0.3 Klik OPEN | Tombol pop, lampu kilat pink lembut dari celah pintu (maksimal sekali) | Wipe 900 ms: loker tertutup berganti loker terbuka yang berwarna lain. Reduced motion: crossfade | tanpa teks |
| 0.4 Koridor terbuka | Loker 2 dan 4 tanpa pintu, berisi barang 3D. Loker 1, 3, 5 tetap berpintu dan berkartu | Barang jatuh ke rak satu per satu (stagger 60 ms, mendarat di permukaan rak). Hover barang: label harga kertas dekat kursor. Layar sentuh: tap pertama label, tap kedua membuka halaman | Label: *Participation*, *Achievement*, *Magazine Art*, *Photography*, *My Message*, *My Strategy*, *Notes* |
| 0.4a Kartu Loker 1 | Kartu penuh di pintu, pin merah muda di tengah atas | Pill muncul bergantian | Lihat 13.7 |
| 0.4b Kartu Loker 3 | Kartu video portrait 9:16, pin merah | Lihat 13.7 | Lihat 13.7 |
| 0.4c Kartu Loker 5 | Kartu penuh di pintu, pin lavender | Pill muncul bergantian | Lihat 13.7 |
| 0.5 Idle 3 detik | Doll mengintip dari dasar kertas sobek: kepala dan satu tangan memegang robekan, hijab krem, kalung ID. Sepatu tidak terlihat. HUD (chip babak, rel progres) belum tampil | Tangan melambai pelan. Stiker kecil berdenyut | *Scroll to follow Jassinta →* |
| 0.6 Scroll pertama | Doll menarik kertas ke bawah seperti tirai, memperlihatkan dunia luar Paper School di baliknya | Kertas sobek turun mengikuti scroll, grain ikut terpotong di robekan | tanpa teks |
| 0.7 Langkah pertama | Setelah kertas ditarik, doll melangkah ke garis jahitan di atas lantai hijau berlipat dan jalur bata. **Sepatu hitam** meninggalkan jejak. Papan nama label kertas menancap. Chip babak muncul di kiri atas, rel progres di kiri. Awan berwajah dan pesawat kertas kecil bertali terlihat | Jejak distempel 400 ms per langkah. Papan sticker pop. Gelembung doll muncul | Papan: *START HERE* dan *Paper School*. Chip: *ACT I · FELT*. Gelembung: *Okay, here we go.* |

**Catatan:** footer loker terbuka setinggi 20 px, hanya tahun dan nama. Daftar isi (TocInline) di kanan bawah footer. **Benda penghubung ke Chapter 1:** kalung ID (lanyard) yang dipakai doll.

### 8.1 Chapter 0: The Locker Hallway dan Paper School (DV)

**Loker tertutup**

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| 0-01 | Badan loker (5) | Kotak vertikal, pintu 325×975 var (rasio 1:3), kabinet total 1.781×1.044 var, langit-langit, rak, tiga dinding, tiang divider (4) dan tiang luar (2) | Pintu 1 dan 5 steel-lilac #B9B8CC, pintu 2 dan 4 lavender #BFA8E5, pintu 3 lilac #D4C1F5. Tiang chrome #C9CCD5 | V3 | Dibangun ulang dengan CSS 3D, bukan gambar tempel. Ketebalan pintu, tiang, rak 10 px |
| 0-02 | Plat nomor | 480×120 var, empat baut kubah di sudut | Chrome #C9CCD5, angka 01 sampai 05 Bebas Neue 76 var #1B1017 | V0 | Sorot putih 2 px di tepi atas |
| 0-03 | Ventilasi | Lima slit 700×28 var, berongga timbul | Isi rongga ink 35%, tepi atas sorot | V0 | Pada loker 1, 2, 4, 5 |
| 0-04 | Handle dan dudukan | Dudukan 210×530 var, batang latch 78×310 var | Chrome #C9CCD5 | V3 | Pada loker 1, 2, 4, 5. Tebal sisi 12 px |
| 0-05 | Lubang kunci | Bundar 40 var | Ink dengan cincin chrome | V0 | Di bawah handle |
| 0-06 | Blok tipografi pintu 3 | Empat blok highlight berbeda warna di belakang tiap kata | Pink #FF8DC7 dan butter #FFF1A8 (Content that), mint #A8E6CF dan lilac #D4C1F5 (is Felt,), baby-blue #BFE3F5 (Shared,), peach #FFB38A (Remembered) | V0, miring 1° | Blok seperti stiker potongan bertepi putih |
| 0-07 | Tombol OPEN | Stiker die-cut pill, min-h 175 var, ikon play 54 var | Hot-pink glitter #FF2E93, teks dan ikon #FFFFFF | V0, miring 2° | Hover goyang dan naik 2 px |

**Loker terbuka (loker 2 dan 4 tanpa pintu; 1, 3, 5 berpintu dan berkartu)**

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| 0-10 | Interior loker | Langit-langit, tiga dinding, dua rak plus lantai, tebal rak 14 px | Dinding berry #7A2E5C, rak lavender #BFA8E5, sisi depan rak #A98BDA | V3 | Warna berbeda dari loker tertutup agar pergantian terasa |
| 0-11 | Kartu SERVICES | Kertas memenuhi pintu, pin 80 var | Kertas #FFFDF9 bergrain, pin hot-pink #FF8DC7, tag latar #FF2E93 teks #FFFFFF, pill latar #FFD6E8 tepi ink, lingkaran centang #FF2E93 74 var | V0 | Sub-tag CAPABILITIES, 12 pill, tombol Download CV |
| 0-12 | Kartu HELLO | Video 930×1.653 var (9:16) berbingkai putih | Pin merah #E5173F, tag latar #FFB38A, tombol play #FF2E93 146 var | V0 | Kutipan serif italic di bawah. Poster saat bisu |
| 0-13 | Kartu STACK | Sama dengan SERVICES | Pin lavender #A98BDA, tag latar #BFA8E5, pill #D4C1F5 | V0 | 13 pill |

**Barang loker 2 dan 4 (menempel di rak, tidak melayang, hit-test mengikuti kontur)**

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| 0-20 | Sertifikat | 960×700 var, menggantung | Kertas #FFFDF9, bingkai ganda emas #D4A64A, segel pita bundar #E5173F dengan dua ekor, garis teks placeholder abu | V0 | Tali gantung emas dengan paku kecil. Mengisi 89% dinding rak |
| 0-21 | Piala | 520×750 var, tiga bagian: cawan dua telinga, tangkai, alas bertingkat | Emas #D4A64A, sorot champagne #EBD08C, alas walnut #7A4A32, plakat #FFFDF9 | V3 | Bintang kecil di cawan. Duduk di rak, di depan sertifikat |
| 0-22 | Majalah (5) | 740×960 var, berdiri menghadap depan, cover terlihat | Cover #FFD6E8, #D4C1F5, #FFF1A8, #BFE3F5, #FFB38A. Masthead VOGUE Bodoni 800 #1B1017 | V0 | Siluet potret flat di tiap cover. Nama generik boleh menggantikan VOGUE |
| 0-23 | Kamera Pastelca | 560×365 var, kamera film retro | Badan #BFE3F5, kulit #FFFDF9 (leather grain), plat atas chrome #C9CCD5, cincin lensa #FFFDF9 inti #1B1017 | V3 | Strap #FF8DC7. Duduk di depan majalah |
| 0-24 | Sepatu Retro Runners | Sepasang, 980×440 var, 91% lantai dasar | Badan **pink #FF8DC7**, strip samping dan sol #FFFDF9, garis sol #FF2E93, tali putih | VS | Tidak punya halaman (dekoratif) |
| 0-25 | Polaroid (3) | Masing-masing 280×330 var, bingkai tebal bawah | Bingkai #FFFFFF, isi sketsa pastel #FFD6E8, #BFE3F5, #A8E6CF | V0, miring ±3° | Tali rami #D9B98C [BARU] sepanjang rak, dua jepit kayu #F6D76B per foto. Caption Shantell Sans |
| 0-26 | Amplop surat | 840×530 var | Amplop #FFFDF9, flap segitiga, tepi garis pos #FF8DC7 dan #8FB8E8, segel hati #E5173F | V0 | Menempel di rak, dipakai ulang di Chapter 8 |
| 0-27 | Buku (7) | 1.050×780 var, berdiri rapat, tinggi bervariasi 80 sampai 100% | Punggung #FF8DC7, #A8E6CF, #FFF1A8, #BFE3F5, #D4C1F5, #FFB38A, #E8A5B8 | V0 | **Tanpa tulisan**. Rata 100% ke dinding kiri rak |
| 0-28 | Notes | 520×760 var, berdiri | Butter #FFF1A8, sudut terangkat, pin merah | V0 | Tulisan NOTES Shantell Sans 600, tidak terpotong |
| 0-29 | Tas Hobo | 800×700 var, setengah bulan | Peach #FFB38A, strap walnut #7A4A32, gesper emas #D4A64A | V3 | Jahitan putus-putus. Pojok kiri bawah lantai |
| 0-30 | Payung polkadot | 210×880 var, tertutup | Kain #FFFDF9 dengan polkadot #FF8DC7, gagang J walnut #7A4A32 | VL 7,5° | Menyandar kanan bawah, terlihat 100% |

**Latar koridor dan Paper School (luar, setelah 0.6)**

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| 0-40 | Lantai koridor | Ubin kertas persegi | #FFFDF9 dan #F4EFF1 bergantian | VT | Grain per section |
| 0-41 | Lampu koridor | Panel persegi panjang 0,6×0,06 Hd | Cangkang #C9CCD5, kaca #FFF6C9 | VH | Berkedip pelan (ambient) |
| 0-42 | Dinding luar handmade | Bidang kertas handmade | #FFFDF9, serat #8FB8E8, pita tepi #E5173F 55% | V0 | Benang merah semua chapter |
| 0-43 | Lantai hijau berlipat | Bidang lipat vertikal tiap 64 px | Matcha #B7D9A8, lipatan 8% lebih gelap | VT | Jalur bata di atasnya |
| 0-44 | Jalur bata | Bata persegi panjang 2 baris | Blush #FFD6E8, bata #F7CAD0, serat #E8A5B8 | VT | Lebar 0,3 Hd |
| 0-45 | Garis jahitan | Garis putus-putus 10 px garis, 8 px jeda | Ink 70%, 2 px | VT | Jalur doll di seluruh perjalanan |
| 0-46 | Awan berwajah (2) | 0,5×0,28 Hd, tepi bergelombang | Putih #FFFDF9 dengan serat halus di dalam | V0 | Mata titik, senyum. Bergeser pelan |
| 0-47 | Pesawat kertas kecil | Origami panah 0,7×0,3 Hd | Baby-blue #BFE3F5, lipatan putih #FFFDF9 | VH miring −12° | Tali ink ke pivot atas. **Bukan** pesawat referensi |
| 0-48 | Pohon sakura kertas | Batang berserat bercabang 3, kanopi 6 gugus bunga, 1,4 Hd | Batang cocoa #5A3A2E, bunga lima kelopak #FFD6E8 pusat #FFF1A8 | V0 | Tiga garis serat di batang |
| 0-49 | Bangku | 0,35×0,9 Hd, dua slat dan sandaran | Walnut #7A4A32, dudukan cocoa #5A3A2E | V0 | Kaki papan, bukan besi |
| 0-50 | Rumput dan bunga | Rumpun 0,18 Hd (5 helai), bunga batang 0,22 Hd | Matcha #B7D9A8 dan sage #A9C4A0, bunga #FFD6E8 | V0 | Goyang 1° saat scroll cepat |
| 0-51 | Gedung Paper School | Fasad 1,6 Hd, satu atap, satu pintu, satu jendela, jam | Dinding #FFF8EE, atap #E8A5B8 | V0 jauh | Siluet T5, muncul di strip 7 ke 8 |
| 0-52 | Jam sekolah | Bundar 0,26 Hd | Bingkai #FFFDF9, titik jam, jarum ink | V0 | Jarum detik #E5173F |
| 0-53 | Kertas sobek 101 | Kontur sobek seed 101 | Kertas koridor, serat #FFFDF9 | V0 | Doll memegang tepinya di 38% H |
| 0-54 | Stiker Scroll to follow | Pill 0,35×0,1 Hd | #FF2E93, teks putih Poppins 600 | V0 miring 3° | Berdenyut skala 1 ke 1,06 |
| 0-55 | Jejak sepatu | Telapak flat 6%×3% H, sepasang bergantian | #2E2E2E opasitas 85% | VT, ±4° mengikuti jalur | Jarak 90 px, bertahan sampai Chapter 8 |
| 0-56 | Preloader | Stiker 0,6 Hd persegi membulat dan pita zipper | Stiker #FFB3D9, gigi zipper #C9CCD5, slider emas #D4A64A | V0 | Pita progres sebagai zipper |

### K1. Seragam santai (Chapter 0 dan 8) (DV)

- **Siluet:** tiga lapis: kemeja lengan panjang, rompi rajut V hem 56%, rok plisket A-line hem 80%. Volume lebar (rok 30% H).

- **Warna:** kemeja #FFFDF9, rompi #A8E6CF, rok #BFE3F5, kaus kaki #FFFDF9 (80 sampai 92% H).

- **Detail:** kerah Peter Pan bulat 6% H, manset 2 px. Rompi V sampai 38% H dengan pita tepi #FFFDF9, empat garis kabel rajut vertikal di tengah bawah (T4). Rok sembilan lipatan plisket dengan nada bergantian.

- **Hijab:** pashmina melilit #F3E3B8.

- **Aksesori:** kalung ID, tali #FF8DC7 lebar 1% H dari leher sampai 45% H, kartu putih #FFFFFF 6%×8% H bertepi kertas, ikon foto #BFE3F5, klip chrome kecil.

- **Tampak dan pose:** peek F, walk W, wave F, hold surat W (amplop #FFFDF9 18%×11% H). **Peek:** hanya 0 sampai 35% H, kalung ID terlihat di dada atas.

- **Catatan:** di Chapter 8 rok #BFE3F5 mendekati ujung gradient #CDEBF8. Andalkan tepi putih 2% H dan garis ink.

