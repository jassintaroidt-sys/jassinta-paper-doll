# BAGIAN 3 · FONDASI BERSAMA: GAYA GAMBAR, DUNIA, KARAKTER, DESAIN, DAN ATURAN GLOBAL

## Arah Visual Terbaru: Paper Cut-Out Art Bertekstur (Kertas Handmade) (REV)

### A. Keputusan dan prioritas

Bagian ini mengikat dan menggantikan setiap aturan lama tentang kertas buku tulis bergaris, garis biru, garis margin, kontur tinta, sticky note, tulisan tangan di dinding, Wall Notes, dan Peek Sign di seluruh dokumen. Bila masih ada sisa yang bertentangan, bagian ini yang berlaku. Ukuran, sudut, proporsi, hex, urutan cerita, dan data tidak berubah.

| **#** | **Keputusan** | **Isi** |
| --- | --- | --- |
| 1 | Konsep dunia | Paper Town dibangun sebagai Paper Cut-Out Art bertekstur. Tidak ada garis buku tulis, garis biru, atau garis margin di mana pun. Dunia dikonsep sendiri dan tidak mengikuti tampilan website referensi. |
| 2 | Material | Kertas handmade (rag atau cotton paper): serat dan bintik terlihat, tepi tidak rata (deckle). |
| 3 | Bahasa bentuk | Dinding, lantai, bangunan, benda, huruf, dan kartu adalah potongan kertas yang dilapis bertingkat. Bentuk dibaca dari siluet dan tepi kertas, bukan dari kontur tinta. |
| 4 | Pengganti elemen referensi | Sticky note menjadi label kertas gunting. Tulisan tangan di dinding menjadi huruf potongan kertas dan Tag Kertas. Wall Notes menjadi Tag Kertas. Peek Sign menjadi Edge Tab. Garis margin menjadi Pita Tepi. |
| 5 | Doll dan 55 aset | Hanya referensi desain, bentuk, dan proporsi. Dibuat ulang dengan kode di website. |
| 6 | Yang tetap | Chapter 1 putih murni. Kamera diorama dan tiga mode scroll. Lantai berlipat dan teras bertingkat. TornEdge di enam tempat (tepi robek memperlihatkan serat kertas). Palet dan token hex. Seluruh konten, data, dan urutan cerita. |

### B. Prinsip Paper Cut-Out Art

- **Tactile:** terasa disentuh. Serat, bintik, dan ketebalan tepi kertas terlihat pada tampilan 100%.

- **Handmade:** tepi tidak rata, miring 2 sampai 5 derajat, tidak ada simetri sempurna ala vektor.

- **Layered:** kedalaman datang dari tumpukan lapisan kertas nyata dan bayangan berlapis, bukan dari gambar perspektif.

- **Warm and clean:** hangat, tetapi komposisi tetap bersih dan terbaca sebagai portofolio profesional.

- **Satu sumber cahaya:** dari kiri atas, bayangan jatuh ke bawah dan kanan.

- **Tidak dipakai:** garis buku tulis, kontur tinta hitam pada potongan, gradient halus pada ilustrasi, kilau plastik atau logam realistis, foto tekstur realistis (tekstur kertas dibuat dari serat dan bintik buatan sendiri).

### C. Material: kertas handmade

| **Lapisan tekstur** | **Spesifikasi** | **Catatan produksi** |
| --- | --- | --- |
| Dasar kertas | Warna dasar dari token palet (proporsi 60 / 25 / 12 / 3 tetap). | Satu ubin tekstur netral dipakai ulang di semua warna. |
| Serat | Serat pendek 4 sampai 12 px, tebal 0,5 sampai 0,8 px, melengkung ringan, arah acak. Warna: dasar 8 sampai 14% lebih gelap (tone-on-tone) pada kertas terang, putih 40% pada kertas gelap. Kepadatan sekitar 1 serat per 400 px². | Ubin seamless 512×512 px. |
| Bintik | Titik 0,8 sampai 2,2 px, sekitar 1 per 900 px². Warna #8A6A4F [BARU] opasitas 18 sampai 30% pada kertas terang, #FFFFFF opasitas 25% pada kertas gelap. Sebagian bintik berkelompok 3 sampai 5. | Digabung dalam ubin yang sama. |
| Mottling | Variasi tonal halus 3 sampai 5% berskala besar agar kertas tidak terlihat rata dan digital. | SVG feTurbulence baseFrequency 0,012. |
| Tepi deckle | Tepi tidak rata: amplitudo 4 sampai 9 px pada lembar besar, 1 sampai 2 px pada benda kecil, dengan rumbai serat putih 1 sampai 2 px di tepi. | feTurbulence baseFrequency 0,035, numOctaves 3, lalu feDisplacementMap scale 6 sampai 10 (dipra-render). |
| Tepi gunting | Tepi bersih sedikit bergoyang (5 sampai 9 titik goyang, amplitudo 1 sampai 2 px) untuk benda, label, dan huruf. | Path SVG dengan jitter seed deterministik. |
| Ketebalan | Satu lembar setebal 3 px. Sisi bawah dan kanan 12% lebih gelap, tepi atas dan kiri 8% lebih terang. Ekstrusi benda tetap 6 sampai 10 lapis translateZ (mode hemat maksimal 3). | Highlight 1 px di tepi atas. |
| Bayangan | Tiga kedalaman: belakang 0 4px 6px rgba(0,0,0,.12), tengah 0 8px 12px rgba(0,0,0,.18), depan 0 14px 20px rgba(0,0,0,.22), ditambah bayangan kontak 2 sampai 3 px satu nada. | filter: drop-shadow agar mengikuti kontur. |
| Grain | Grain kertas per section (5.4 dan 9.3) tetap, kini di atas serat. Chapter 1 tidak memakai grain pada kanvas, hanya pada lembar dokumen. | Dipotong bersama section. |
| Lipatan | Lantai dan teras: lipatan vertikal tiap sekitar 64 px, 8% lebih gelap. | Tetap seperti 6.1. |

**Jenis kertas tiap chapter.**

| **Chapter** | **Dinding** | **Lantai dan benda besar** | **Catatan tekstur** |
| --- | --- | --- | --- |
| 0 Paper School | Handmade cotton putih kebiruan dengan serat paper-blue #8FB8E8 | Kertas handmade hijau matcha pastel #B7D9A8, jalur bata dari potongan kertas blush | Pita Tepi merah muda di sambungan lembar |
| 1 Blank Page | Kanvas putih murni #FFFFFF, tanpa tekstur global | Tanpa lantai | Lembar dokumen: kertas handmade putih dengan grain halus |
| 2 Newsroom | Newsprint krem dengan serat halus dan bintik cokelat. Tiga bay: kertas berwarna penuh brand | Kayu kertas cocoa, runner tint brand | Bay memakai serat tone-on-tone dari tabel 28.4 |
| 3.0 Lobby | Handmade lilac #D4C1F5, serat tone-on-tone #BBA7E6 | Kertas lilac-mint bertumpuk | Panel kertas tebal berwarna brand di tiap pintu |
| 3A Café | Handmade hijau #066838, serat #0A4F2C | Kayu kertas cocoa dengan ubin potongan kertas krem-hijau | Pita Tepi krem #F8F8C8; wainscot subway dari potongan kertas krem |
| 3B Clinic | Kertas marmer (marbled paper) putih #FFFDF9, urat abu #E5E0E3 dan urat emas samar | Kertas marmer champagne #F3E1C8 | Pita Tepi emas #B08418; glitter halus tetap |
| 3C Terminal | Handmade hijau #066838, serat #0A4F2C | Kertas krem-sage #E6EBE0 dengan strip landasan putih | Laut: lapisan kertas sky-pastel bergelombang bertumpuk; Pita Tepi champagne #EBD08C |
| 4 Boutique | Handmade burgundy #881838, serat #6B1230 | Karpet kertas flocked (beludru) blush #E5C8CA bertingkat | Pita arsitektur champagne #EBD08C dan panel rose #983858 |
| 5 Campus Library | Kertas tua aged-paper #F3E3B8, bintik lebih padat (sepia lalu berwarna) | Kayu kertas walnut #7A4A32 | Tepi deckle lebih lusuh |
| 6 Radio Booth | Kertas gelap plum-night #2A0F2E ke aubergine #4B1D4F, serat putih 40% | Berry #7A2E5C | Pita Tepi merah redup 35% |
| 7 Archive Hall | Kertas arsip warm-grey #D9D3D6 dan aged-paper | Honey #F6D76B | Tab indeks berwarna brand |
| 8 Mailbox | Tiga lembar kertas tipis (tisu atau washi) pink #FFD6E8, lilac #E3D4FA, baby-blue #CDEBF8 bertumpuk dengan tepi deckle | Matcha pastel dan jalur bata seperti 0.7 | Peralihan warna datang dari tumpukan kertas tipis, bukan gradient digital |

### D. Anatomi lapisan dan kedalaman

| **Lapisan** | **Isi** | **Bahan** | **Tepi** | **Bayangan** |
| --- | --- | --- | --- | --- |
| Langit dan latar jauh | Awan, pesawat kertas, skyline, landmark | Kertas tipis atau handmade pucat | 1 sampai 2 px, deckle ringan | Belakang |
| Dinding | Lembar besar, dua sampai tiga lembar bertumpuk per chapter | Handmade sesuai jenis kertas chapter | 3 px, deckle 4 sampai 9 px | Belakang |
| Panel dan arsitektur | Panel brand, chair rail, wainscot, pilaster, pita arsitektur | Kertas tebal | 3 px | Tengah |
| Lantai dan teras | Lembar bertingkat, jalur bata | Handmade berlipat | Sisi depan 14 sampai 22 px | Tengah |
| Props tengah | Meja, konter, rak, mesin | Kertas atau kardus berlipat | 3 px | Tengah |
| Doll | Jassinta dan bayangan elips di lantai | Kertas kulit, hijab, kostum | 2% Hd, minimal 3 px | Tipis #E6E6E6 |
| Props depan | Hanger, tanaman, pot, pinggir kertas | Kertas | 3 px | Depan |
| Label, Tag, Gelembung | Papan nama, fakta singkat, ucapan doll | Handmade berwarna babak | 3 px, dua lapis | Depan |
| Edge Tab dan HUD | Penanda chapter berikutnya, chip babak, rel progres | Handmade berwarna babak | 3 px | Depan paling atas |

### E. Dunia: dinding, lantai, dan sambungan

- **Dinding.** Lembar kertas handmade polos bertekstur (bukan bergaris). Tiap kira-kira satu lebar layar ada sambungan antar lembar: lembar depan menumpuk di atas lembar belakang dengan tepi deckle dan bayangan belakang.

- **Pita Tepi.** Strip kertas tipis vertikal 6 sampai 10 px di sambungan lembar, menggantikan garis margin. Warnanya sama dengan warna margin lama (hex dan opasitas 55% tetap, mis. cherry-red #E5173F). Ada di semua chapter kecuali Chapter 1.

- **Pita arsitektur.** Garis arsitektur lama (chair rail, bingkai, list) dibuat dari strip kertas tebal 3 px dengan warna yang sama.

- **Lantai.** Lembar kertas berlipat bertingkat. Jalur bata dibuat dari potongan kertas kecil blush yang ditempel satu per satu.

- **Langit dan awan.** Awan berwajah dipotong dari kertas handmade putih dengan serat halus. Wajah ramah tetap hanya pada awan, bintang kertas, kucing kertas, dan matahari kecil Chapter 8.

- **Tali.** Tali gantung berupa tali kertas pilin atau benang jahit 1,5 px, bukan garis tinta.

- **Air (3C).** Lapisan kertas sky-pastel bergelombang bertumpuk, puncak ombak berupa potongan kertas bertepi deckle, bergeser translateX sekitar 8 px.

- **Chapter 1.** Tetap kanvas putih murni tanpa lantai, skyline, dan grain pada kanvas. Lembar dokumen memakai kertas handmade.

### F. Pengganti elemen website referensi

| **Lama** | **Baru** | **Spesifikasi** |
| --- | --- | --- |
| Kertas buku tulis bergaris | Kertas handmade polos bertekstur | Bagian C. Tidak ada garis horizontal di mana pun. |
| Garis margin | Pita Tepi | Bagian E. Hex dan opasitas margin lama dipakai ulang. |
| Sticky note papan nama | **Label Kertas Gunting** | Potongan tidak beraturan bersudut membulat, dua lapis: atas berwarna babak, bawah lembar bayangan 12% lebih gelap bergeser 3 px. Sudut kanan bawah terangkat (segitiga 12% sisi), miring 2 sampai 5 derajat sesuai deret 3.4, ukuran tetap 0,45 Hd, menancap di garis jahitan saat doll tiba. Baris 1 DM Mono, baris 2 Shantell Sans 600. Chapter 1: label putih datar tanpa grain. |
| Coretan sinar | Strip kertas sinar | Enam sampai delapan strip kertas tipis (lebar 1,5 px, panjang 0,06 sampai 0,10 Hd) memancar dari tiga sisi label. |
| Tulisan tangan di dinding | **Huruf Potongan Kertas** untuk judul, Tag Kertas untuk fakta singkat | Bagian H. Tidak ada tulisan langsung di dinding. |
| Wall Notes | **Tag Kertas** | Tag kertas gunting dengan lubang dan tali jahit, bertepi deckle, isi Shantell Sans minimal 17 px. Hanya untuk fakta singkat (masa kerja, stiker fakta, resep, catatan dokter). Isi panjang tetap Fraunces Italic. |
| Kartu gelembung bergaris tangan | **Gelembung Kertas Gunting** | Gelembung berekor kecil, dua lapis seperti label, tepi gunting. |
| Peek Sign | **Edge Tab** | Label kertas gunting kecil (0,3 Hd) tanpa teks yang mengintip dari tepi kanan layar pada 20% terakhir tiap chapter, kecuali Chapter 8. Dekoratif (aria-hidden), tidak bisa diklik, hilang di Calm mode. |
| Kontur tinta | Tepi potongan | Bagian K. |
| Tali garis ink | Tali kertas pilin atau benang jahit | Bagian E. |

### G. Warna: pemetaan token

Semua hex tetap. Yang berubah hanya nama dan peran.

| **Lama** | **Baru** | **Hex** | **Peran baru** |
| --- | --- | --- | --- |
| notebook-blue (garis buku tulis) | paper-blue | #8FB8E8 | Serat biru pada kertas tertentu, kostum, dan lapisan langit pendukung |
| Garis margin | Pita Tepi | #E5173F pada 55% (atau hex margin chapter) | Strip kertas tipis di sambungan lembar |
| –line-tint | –fiber-tint | per chapter | Warna serat tone-on-tone |
| –brand-wall-deep | –brand-wall-deep | shade 15% lebih gelap | Serat tone-on-tone di dinding brand |
| –brand-line | –brand-line | per chapter | Warna pita arsitektur |
| [BARU] –paper-speck | –paper-speck | #8A6A4F opasitas 18 sampai 30% | Bintik kertas pada kertas terang |
| [BARU] –paper-fiber-light | –paper-fiber-light | #FFFFFF opasitas 40% | Serat pada kertas gelap |

### H. Tipografi pada Paper Cut-Out

- **Headline tetap teks nyata** (Gloock dan Fraunces Light Italic) agar terbaca pembaca layar. Tampilan kertasnya dibuat dengan CSS: bayangan teks berlapis satu nada lebih gelap sebagai ketebalan kertas dan overlay tekstur serat halus (background-clip: text) pada judul besar.

- **Huruf Potongan Kertas** dipakai untuk judul pendek pada label (nama chapter, ABOUT ME, Work Experience, OPEN, judul overlay): tiap huruf berdiri sebagai potongan kertas berwarna dengan rotasi ±3 derajat, jarak antarhuruf sedikit tidak rata, dan bayangan kontak. Maksimal empat kata. Teks tetap nyata di DOM (aria-label atau teks tersembunyi visual).

- **Tulisan label.** Shantell Sans 400 dan 600 tetap dipakai pada Label, Tag Kertas, gelembung doll, caption foto, dan My Message, sebagai tulisan spidol di atas kertas, bukan tulisan langsung di dinding.

### I. Doll dan 55 aset yang sudah dibuat

- Gambar rujukan doll (Paper_doll_Jassinta_Full_Body.png) dan 55 aset yang sudah dibuat dipakai sebagai **referensi desain, bentuk, proporsi, dan warna saja**.

- Aset akhir dibuat ulang dengan kode (Bagian 6: Produksi Paper Cut-Out dengan Kode). File gambar lama tidak dikirim ke produksi.

- Garis tinta pada rujukan diterjemahkan menjadi tepi potongan kertas. Tingkat garis T1 sampai T6 di Design Bible Visual 2.1 dibaca sebagai tebal tepi dan kekuatan bayangan, angkanya tetap.

- Wajah doll dibuat dari potongan kertas kecil: titik mata hitam, sabit kelopak tipis, lingkaran blush pink semi-transparan, sabit senyum. Tidak ada garis tinta kontur.

- Brad, hijab, kostum, tabel pose, matriks 31 kombinasi, turnaround, dan ukuran dalam Hd tetap berlaku.

### K. Aturan membaca bagian lama

- “Garis ink”, “kontur”, “bergaris ink”, “garis tinta”, dan “berkontur ink” dibaca sebagai **tepi potongan kertas** dengan bayangan. Ketebalan yang tertulis dibaca sebagai ketebalan tepi.

- “Tepi putih die-cut” dibaca sebagai **tepi kertas** (ketebalan lembar, Bagian C).

- “Dinding bergaris” dibaca sebagai dinding kertas handmade, dan “garis margin” sebagai Pita Tepi.

- “Garis tone-on-tone” dibaca sebagai serat tone-on-tone, dan “garis arsitektur” sebagai pita arsitektur.

- “Sticker” untuk label dan papan nama dibaca sebagai label kertas gunting.

### L. Uji penerimaan visual

- Tidak ada garis buku tulis atau garis margin di chapter mana pun.

- Serat dan bintik kertas terlihat pada tampilan 100% di dinding dan pada label.

- Tepi deckle terlihat di sambungan lembar dinding dan di tepi lembar besar.

- Tidak ada kontur tinta hitam pada potongan, doll, dan benda.

- Bayangan berlapis tiga kedalaman terlihat dan konsisten dari kiri atas.

- Siluet doll terbaca di tiga warna dinding berbeda (uji satu warna dinding lulus).

- Chapter 1 tetap putih murni tanpa tekstur global pada kanvas.

- Calm mode dan reduced motion mematikan gerak, tekstur tetap statis.

*Bentuk, warna, dan sudut gambar untuk tokoh, 17 kostum, semua barang, interior, dan dunia Paper Town · Disusun untuk Jassinta Roid Triniti · 11 Oktober 2026 · Versi 1*

## 0. Cara Memakai Bible Ini (DV)

Dua dokumen sebelumnya sudah mengunci konsep, chapter, 15 kostum, palet, dan font. Yang belum ada: **perintah menggambar** tiap benda, yaitu bentuknya, warna dasar dan bayangannya, dari sudut mana digambar, dan seberapa besar. Bible ini adalah lembar kerja ilustrasi untuk **semua aset gambar** (sekitar 160 aset ditambah doll) dan menjawab tiga hal yang kamu minta: **bentuk, warna, dan sudut**.

**Prioritas:** untuk urusan bentuk, warna, sudut, dan ukuran gambar, bible ini yang berlaku. Untuk konsep, copy, data karya, dan perilaku interaksi, Portfolio Bible (Final) tetap berlaku. Urutan: gambar masterku (Paper_doll_Jassinta_Full_Body.png) > bible ini > Portfolio Bible 5.x dan 28 > Dokumen Final.

| **Satuan** | **Arti** |
| --- | --- |
| **Hd** | Tinggi doll di layar = 1,0 Hd. Semua ukuran benda ditulis dalam Hd agar skala konsisten (doll tampil 22 sampai 28% tinggi layar). Contoh: konter 0,5 Hd = setinggi pinggul doll |
| **px kerja** | Gambar di kanvas 4×: doll 1.120 px. Ekspor 2× (560 px) dan 1× (280 px). Benda memakai skala sama: 1 Hd = 1.120 px kerja |
| **Hex** | Semua warna dari token Portfolio Bible 5.2, 5.10, 28.3. Hex baru diberi tanda [BARU] |
| **[REF]** | Dibaca dari gambar masterku atau tangkapan layar referensi |
| **[KUNCI]** | Tidak boleh berubah |
|  | Keputusan baru dari bible ini, bisa kamu tolak |

**Yang ditambahkan bible ini:** (1) sistem sudut gambar delapan kode, (2) turnaround doll dari depan, samping, belakang, (3) tabel sudut sendi tiap pose dan siklus jalan, (4) detail 17 kostum, (5) spesifikasi bentuk, warna, sudut, dan ukuran untuk semua barang dan interior per chapter, overlay, peta, walk strip, dan HUD, (6) aturan lapisan dan penamaan file.

## 2. Hukum Gaya Gambar (DV)

### 2.1 Garis (DV)

| **Tingkat** | **Dipakai untuk** | **Tebal (tampil 2×)** | **Warna** |
| --- | --- | --- | --- |
| T1 | Doll, wajah, tangan, sepatu | 0,25% Hd, minimal 1,5 px (±1,5 px pada doll 560 px) **[KUNCI]** | ink #1B1017 |
| T2 | Benda kecil dan menengah (sampai 0,5 Hd): cangkir, ponsel, buku, botol | 1,5 px | ink #1B1017 |
| T3 | Benda besar dan arsitektur (lebih dari 0,5 Hd): konter, pintu, loker, bangunan | 2,0 sampai 2,5 px | ink #1B1017 |
| T4 | Detail dalam: lipatan, jahitan, serat, ventilasi | 1 px | ink 60% |
| T5 | Latar jauh: skyline, siluet landmark | 1,5 px | ink 45% |
| T6 | Tulisan spidol pada label kertas dan Tag Kertas | Stroke 2 px (Shantell Sans 400/600) | ink #1B1017 atau warna kedua dinding |

Ujung potongan membulat (radius sudut sesuai 2.5). Semua bentuk tertutup tanpa celah lebih dari 1 px (diperlukan untuk isi warna dan hit-test alpha barang loker). Tidak ada tepi ganda.

### 2.2 Isi warna: tiga nada (DV)

Setiap benda memakai maksimal tiga nada ditambah tepi kertas:

| **Nada** | **Rumus** | **Letak** |
| --- | --- | --- |
| Dasar | Hex dari tabel | Seluruh bidang |
| Bayangan | Dasar 10 sampai 12% lebih gelap (HSL L −10) | Pita 6 sampai 8% lebar benda di tepi kanan dan bawah, atau 2 sampai 3 garis arsiran 45° |
| Sorot | Dasar dicampur putih 14% | Satu goresan 2 px di tepi kiri atas, **hanya** untuk logam, kaca, keramik, glitter, kulit |

Tanpa gradient pada ilustrasi. Satu-satunya gradient yang sah: dinding inNalar (aqua ke biru), latar cotton-candy Chapter 8, dan tombol glitter. Cahaya dari atas kiri, bayangan jatuh lurus ke bawah.

### 2.3 Tepi putih dan ketebalan kertas (DV)

- Semua potongan berdiri (cutout): tepi kertas 2 sampai 3 px (sisi atas dan kiri 8% lebih terang, sisi bawah dan kanan 12% lebih gelap), ditambah bayangan filter drop-shadow sesuai lapisan kedalaman (Portfolio Bible 6.1). Doll: tepi kertas 2% Hd (minimal 3 px), bayangan tipis #E6E6E6 [KUNCI]. Benda besar yang berupa kertas bertingkat (lantai, teras, kardus): sisi depan setebal 14 sampai 22 px, warna dasar dikurangi 8% kecerahan, lipatan vertikal tiap 64 px, highlight 1 px putih di tepi atas.

- Doll: tepi putih 2% Hd (minimal 3 px), bayangan tipis #E6E6E6 **[KUNCI]**.

- Benda besar yang berupa kertas bertingkat (lantai, teras, kardus): sisi depan setebal 14 sampai 22 px, warna dasar dikurangi 8% kecerahan, garis lipatan vertikal tiap 64 px, highlight 1 px putih di tepi atas.

### 2.4 Material yang diterjemahkan ke kertas (DV)

Semua benda tetap terbaca sebagai kertas. Material asli hanya **diisyaratkan** lewat warna, serat, dan satu detail penanda.

| **Material** | **Cara menggambar** | **Warna dasar** | **Tekstur dan penanda** |
| --- | --- | --- | --- |
| Kertas handmade | Serat pendek dan bintik, ubin 512 px, tepi deckle | #FFFDF9, serat #8FB8E8, pita tepi #E5173F 55% | Grain per section |
| Kardus berlipat | Lipatan 45°, sisi berlapis | #D9A87A [BARU] | Serat searah, garis alur kardus 1 px ink 40% |
| Kayu kertas | Papan memanjang, garis serat panjang | cocoa #5A3A2E, walnut #7A4A32 | 3 sampai 5 garis serat per papan, satu mata kayu per 4 papan |
| Kain dan tirai | Lipatan vertikal bergelombang, jahitan putus-putus 2 px | Mengikuti tabel | Dua nada lipatan, tepi bawah bergelombang |
| Beludru | Isi datar dengan sorot lebar lembut (tint 8%) | #E5C8CA | Tanpa garis serat |
| Keramik, cangkir | Bentuk bulat tebal, sorot kiri atas | putih #FFFDF9 | Sorot 2 px |
| Kaca dan jendela | Isi tint tembus 35%, dua goresan diagonal putih | baby-blue #BFE3F5 | Goresan 45°, 3 px dan 1,5 px |
| Logam chrome | Isi abu terang, sorot tajam | chrome #C9CCD5 | Sorot putih 2 px dan titik baut kubah |
| Emas | Isi emas, sorot champagne | gold #D4A64A, champagne #EBD08C | Sorot putih 1,5 px |
| Marmer | Dasar putih, urat tipis tak beraturan | #FFFDF9 | Urat abu #E5E0E3 dan urat emas 15 sampai 20% |
| Kulit (kamera, tas) | Isi datar, jahitan putus-putus | Mengikuti barang | Leather grain, jahitan 1,5 px |
| Tanaman | Daun potongan runcing membulat | matcha #B7D9A8, sage #A9C4A0 | Satu tulang daun 1 px |
| Awan | Bentuk bergelombang | putih #FFFDF9 | Serat kertas halus di dalamnya (kertas handmade) |
| Air | Bidang berlipat, puncak ombak berupa potongan kertas bertepi deckle | sky-pastel #A7D8F5 | Garis ombak putih 2 px |
| Koran | Kolom teks abu dan kotak foto | #F3E3B8 | Garis kolom 1 px, judul tebal #1B1017 |

### 2.5 Bentuk dan wajah (DV)

- Siluet terbaca dalam 1 detik. Sudut membulat, radius minimal 6% sisi terpendek. Proporsi sedikit tebal. Tepi potongan memiliki **5 sampai 9 titik goyang kecil** (amplitudo 1 sampai 2 px) agar terlihat digunting tangan **[KUNCI]**.

- Satu bangunan = satu atap, satu pintu, satu jendela, satu papan. Detail lain datang dari barang di dalamnya.

- **Wajah ramah** (dua titik mata diameter 1,2% lebar benda, senyum busur 28% lebar) hanya pada: awan, bintang kertas, kucing kertas, matahari kecil di Chapter 8. Tidak pada benda lain.

### 2.5b Larangan gambar (DV)

Kertas bergaris, garis margin, kontur tinta pada potongan, kaca mengilap, neon (kecuali glow hot-pink tombol), foto tekstur realistis, gradient halus di ilustrasi, ketebalan garis tidak konsisten, perspektif gambar rumit (kedalaman dari tumpukan lapisan), ikon stok, karakter berhak cipta, logo merek nyata pada props (logo brand hanya pada papan nama, kartu CREDIT, dokumen Chapter 1, tab Archive), dan karikatur Ka'bah.

## 3. Sistem Sudut Gambar (DV)

### 3.1 Kamera dunia (DV)

- Dunia terdiri dari tiga bidang: **dinding vertikal** (benda berdiri), **lantai** (bidang CSS 3D rotateX 58 sampai 64°, perspective 1.200 px), dan **langit** (lapisan jauh).

- Tinggi mata kamera setinggi pinggul doll (horizon di 0,5 Hd dari lantai). Kamera sedikit miring (rotateY ±2° di belokan, scale 1,00 ke 1,04 saat tiba).

- Benda berdiri adalah **billboard datar** yang menghadap kamera. Kedalaman datang dari tumpukan lapisan translateZ, bukan dari gambar perspektif.

### 3.2 Delapan kode sudut (DV)

| **Kode** | **Nama** | **Definisi** | **Dipakai untuk** |
| --- | --- | --- | --- |
| **V0** | Tampak depan lurus | Garis vertikal tegak, tanpa konvergensi, horizon 0,5 Hd. **Default** | 85% aset: furniture, bangunan, props, label kertas, doll (F) |
| **V3** | Tiga perempat | Dua lapisan: muka depan penuh dan sisi menyempit 40% dengan skew 12°. Di layar diputar rotateY ±18 sampai 25° | Benda hero besar: loker, mesin kopi, mikrofon, kotak arsip, koper, kamera |
| **VS** | Profil samping | 90°, menghadap kanan (gambar dasar), kiri dengan flip | Doll berjalan (W), sepeda Go-Food, kapal, pesawat lewat, kucing di rak |
| **VB** | Belakang | Tampak punggung | Doll (B), punggung kursi dan manekin |
| **VT** | Atas | Tampak atas lurus, dipetakan ke bidang lantai atau meja | Karpet, jalur bata, runner, permukaan konter, peta Paper Town, struk |
| **VX** | Penampang | Dinding depan dibuka, interior terlihat (gaya piramida bercelah di referensi) | Bangunan skyline besar, lemari berkas, laci katalog, kuil kecil di strip |
| **VH** | Gantung | V0 dengan pivot di ujung tali, swing ±2° | Pesawat kertas, lampu, bendera, papan, label harga |
| **VL** | Sandar | V0 diputar tetap 2 sampai 8° menyandar ke dinding | Payung 7,5°, papan menu kapur 4°, tangga 8°, koper 3° |

### 3.3 Sudut default per jenis aset (DV)

| **Jenis** | **Kode** | **Catatan** |
| --- | --- | --- |
| Doll | F, W, B (bagian 4.9) | Tidak pernah V3 |
| Loker | V3 sungguhan (CSS 3D) | Muka pintu V0, ketebalan dari lapisan |
| Furniture dan konter | V0 | Permukaan atas digambar terpisah sebagai VT |
| Props di rak dan meja | V0 | Menempel di permukaan, bayangan 0 4px 6px |
| Benda gantung | VH | Pivot digambar sebagai titik 3 px |
| Lantai, karpet, jalur | VT | Dipetakan ke bidang lantai |
| Kendaraan lewat | VS | Sepeda Go-Food, kapal, pesawat |
| Skyline | V0 atau VX | Siluet tanpa detail interior, kecuali VX |
| Label kertas dan Tag Kertas | V0 + rotasi dekoratif | Bagian 3.4 |
| Foto berbingkai | V0 | Tidak pernah dimiringkan lebih dari 4° |

### 3.4 Rotasi dekoratif (tetap, tidak acak) (DV)

| **Benda** | **Deret rotasi** |
| --- | --- |
| 12 papan nama label kertas (urut frame) | −3°, 4°, −2°, 5°, −4°, 3°, −5°, 2°, −3°, 4°, −2°, 3° |
| 10 dokumen Chapter 1 | −3°, 4°, −5°, 2°, 3°, −2°, 5°, −4°, 1°, −3° |
| Tag Kertas | ±1 sampai 2° |
| Washi tape | ±8° |
| Foto di papan pin | ±2 sampai 4° |
| Stiker die-cut | ±3° |

### 3.5 Lapisan kedalaman (DV)

| **Lapisan** | **translateZ** | **Isi** |
| --- | --- | --- |
| Langit | −240 px | Awan, pesawat besar |
| Skyline | −120 px | Siluet landmark |
| Dinding | −60 px | Dinding kertas handmade, panel brand, chair rail |
| Tengah | 0 | Doll, props tengah, konter |
| Teras | +24 px per tingkat | Panggung, bukit |
| Hero | +40 px | Benda utama chapter |
| Depan | +80 px | Hanger, tanaman, tepi kertas |

## 5. Visual Direction (PB)

Arah visualnya bernama **Handmade Paper Cut-Out Diorama**: dunia Paper Cut-Out Art bertekstur dari kertas handmade yang dipotong, dilipat, dilapis, dan ditempel, lalu disusun bertingkat seperti diorama mini di atas meja. Semua keputusan di bagian ini mengikat; bila bagian lain bertentangan, bagian ini yang berlaku untuk urusan tampilan.

### 5.1 Estetika (PB)

Tesis desain. Terasa seperti membuka kotak kerajinan seseorang yang rapi tetapi hangat: ada kertas handmade, selotip washi, label kertas, dan potongan bertingkat, namun komposisinya tetap bersih dan terbaca sebagai portfolio profesional.

| **Dimensi** | **Arah** | **Bukan** |
| --- | --- | --- |
| Suasana | Playful, girly, hangat, nostalgia sekolah, percaya diri | Kekanak-kanakan, norak, korporat dingin |
| Medium yang ditiru | Kertas handmade (serat dan bintik), kardus, kertas washi, kertas kraft, label die-cut | Plastik mengilap, kaca, logam, neon |
| Kerapian | Imperfeksi terkendali: miring 2 sampai 5 derajat, tepi potongan dan deckle sedikit tidak rata | Berantakan acak, atau simetri sempurna ala vektor |
| Emosi | Aman, ramah, jujur, sedikit jenaka | Dramatis, gelap, agresif (kecuali Radio Booth yang sengaja intim) |
| Kedewasaan | Layout dan tipografi tertata seperti majalah | Dekorasi menutupi konten |

**Tiga kata kunci:** *tactile* (terasa disentuh), *handmade* (jejak tangan terlihat), *warm* (hangat dan tidak mengintimidasi).

**Pembeda dari referensi.** Referensi bernuansa ilustrasi pastel sederhana. Portfolio Jassinta lebih *chic*: tipografi editorial (Gloock dan Fraunces), warna brand sebagai arsitektur ruangan, doll berhijab dengan kostum tertata, dan pembuktian karya yang terstruktur.

**Aturan emas.** Dekorasi tidak pernah menutupi teks, angka, atau tombol. Jika dua elemen berebut perhatian, yang membawa konten menang.

### 5.2 Warna (PB)

**Proporsi 60 / 25 / 12 / 3** di setiap adegan:

- **60%** netral kertas: dinding, lantai, ruang kosong.

- **25%** warna dunia chapter: dinding penuh warna brand atau pastel babak.

- **12%** pastel pendukung: props, kostum, label kertas.

- **3%** aksen panas: cherry-red, hot-pink, staples, pin, stempel.

**Palet inti (dipakai di seluruh situs).**

| **Peran** | **Token** | **Hex** |
| --- | --- | --- |
| Tinta utama | ink | #1B1017 |
| Tinta di kertas | espresso | #2B1B17 |
| Kertas putih | milk-white | #FFFDF9 |
| Kanvas Chapter 1 | pure-white | #FFFFFF |
| Kertas krem hangat | vanilla | #FFF8EE |
| Kertas tua / sepia | aged-paper | #F3E3B8 |
| Biru kertas | paper-blue | #8FB8E8 |
| Pita tepi | cherry-red pada opasitas 55% di atas kertas | #E5173F |
| Pink lembut | blush | #FFD6E8 |
| Pink manis | bubblegum | #FF8DC7 |
| Aksen utama / tombol | hot-pink | #FF2E93 |
| Teks pink kecil | raspberry | #D81B72 |
| Aksen panas, staples, headline merah | cherry-red | #E5173F |
| Lilac | lilac | #D4C1F5 |
| Mint | pastel-mint | #A8E6CF |
| Baby blue | baby-blue | #BFE3F5 |
| Peach | peach-fizz | #FFB38A |
| Butter (label kertas) | butter | #FFF1A8 |
| Kayu terang / gelap | cocoa / walnut | #5A3A2E / #7A4A32 |
| Emas / champagne | gold / champagne | #D4A64A / #EBD08C |
| Gelap intim (Radio Booth) | plum-night / aubergine / berry | #2A0F2E / #4B1D4F / #7A2E5C |

Token pelengkap lain di brief awal (rose-quartz, powder-pink, coral-pop, orchid, wisteria, matcha, sage, periwinkle, steel-lilac, chrome, dan seterusnya) tetap sah, tetapi hanya untuk props dan detail kecil, tidak pernah untuk dinding atau lantai.

**Warna dunia tiap chapter.** Dinding kertas handmade dan Pita Tepi selalu ada (kecuali Chapter 1); yang berganti adalah warna dinding, lantai, dan pita arsitektur.

| **Chapter** | **Dinding** | **Lantai** | **Pita arsitektur dan aksen** |
| --- | --- | --- | --- |
| 0 Paper School | Putih kebiruan dengan serat paper-blue | Hijau matcha pastel #B7D9A8, jalur bata blush | Awan, pesawat kertas, sakura; label kertas putih datar |
| 1 Blank Page | Putih murni #FFFFFF, tanpa garis | Tanpa lantai | Staples merah; warna brand hanya di logo pada lembar |
| 2 Newsroom | Intro newsprint krem; bay 1 merah #E80838, bay 2 gradient #18E8C8 ke #0898F8, bay 3 teal #088898 | Kayu cocoa terang, runner tint brand | Bay 1 rail putih dan list hitam; bay 2 rail dan panel lengkung putih; bay 3 rail krem dan titik merah #E8402A |
| 3.0 Lobby | Lilac #D4C1F5, panel brand di tiga pintu | Gradient lilac-mint | Garis krem, amber, emas sesuai pintu |
| 3A Café | Hijau #066838, serat tone-on-tone #0A4F2C | Kayu cocoa dengan ubin krem-hijau #C8DACA | Chair rail krem #F8F8C8, wainscot subway krem, konter walnut |
| 3B Clinic | Putih marble #FFFDF9, urat abu #E5E0E3, urat emas samar | Marmer champagne #F3E1C8 | Emas #B08418, amber #F0A810; glitter halus |
| 3C Terminal | Hijau #066838, serat #0A4F2C | Krem-sage #E6EBE0 dengan strip landasan putih | Pilaster emas, panel lengkung krem, laut sky-pastel #A7D8F5 |
| 4 Boutique | Burgundy #881838, serat #6B1230 | Karpet blush #E5C8CA bertingkat | Champagne #EBD08C, panel rose #983858 |
| 5 Campus Library | Aged-paper #F3E3B8, sepia lalu berwarna | Walnut #7A4A32 | Headline merah |
| 6 Radio Booth | Plum-night #2A0F2E dan aubergine #4B1D4F | Berry #7A2E5C | ON AIR cherry-red |
| 7 Archive Hall | Warm-grey #D9D3D6 dan aged-paper | Honey #F6D76B | Tab indeks berwarna brand tiap karya |
| 8 Mailbox | Gradient cotton-candy #FFD6E8, #E3D4FA, #CDEBF8 | Matcha pastel dan jalur bata seperti 0.7 | Bintang kertas berkelip |

**Aturan warna brand.** Warna brand menjadi arsitektur ruangan, bukan logo yang ditempel di mana-mana. Barang di dinding tidak boleh sewarna dinding (pakai krem, putih, emas, atau bingkai kontras 2 sampai 3 px). Lantai tidak pernah full warna brand. Kostum doll tidak sewarna dinding. Pembeda 3A dan 3C yang sama-sama hijau: 3A hangat (kayu, ubin krem, aroma kafe), 3C berwibawa (emas, panel lengkung, langit dan laut di jendela), dan 3B putih marble berada di antaranya sehingga dua hijau tidak pernah bersebelahan.

**Warna babak.** Aksen babak dipakai pada highlight tipografi, titik INDEX, dan garis progres: Felt = mint dan lilac, Shared = baby blue, Remembered = peach. HUD (label harga, pin, chip babak) selalu memakai palet inti agar konsisten di semua dunia.

**Kontras (wajib).** Teks isi minimal 4,5 : 1 dan teks besar minimal 3 : 1. Teks pink kecil (di bawah 24 px) di latar terang memakai raspberry atau ink; hot-pink hanya untuk teks besar tebal, ikon, dan latar tombol. Di atas dinding aqua (bay 2) dan teal (bay 3) teks kecil ditulis di tag kertas krem, bukan langsung di dinding. Cherry-red di atas pink atau peach diperiksa dengan alat kontras sebelum rilis.

### 5.3 Tipografi (PB)

Lima keluarga font membawa hampir semua teks; empat lainnya hanya hidup di komponen khusus. Semua gratis di Google Fonts.

| **Peran** | **Font** | **Pengaturan** | **Dipakai di** |
| --- | --- | --- | --- |
| Judul utama | Gloock | clamp(2.1rem, 1.2rem + 3.6vw, 4.125rem), line-height 1,02, letter-spacing -0,01em, text-wrap: balance | Headline semua chapter |
| Aksen judul miring | Fraunces Light Italic | wght 300, SOFT 0, WONK 1, opsz 144; boleh cherry-red #E5173F | Kata kunci pada headline |
| Narasi dan nilai kontak | Fraunces Italic 400 | SOFT 100, WONK 0, opsz 24, clamp(1rem, 0.85rem + 0.7vw, 1.556rem), line-height 1,5, maksimal 58 karakter | Narasi, email, Instagram, nomor WA |
| Tulisan label | Shantell Sans 400 dan 600 | Minimal 17 px di HP | Label kertas, Tag Kertas, gelembung doll, caption foto, My Message |
| Label dan UI kecil | DM Mono | Huruf besar, minimal 11 px | Papan nama baris 1, chip babak, hover label, footer |
| Tombol dan UI | Poppins 400, 500, 600 | Minimal 14 px di HP | Tombol, INDEX, kartu |
| Raksasa Chapter 1 | Anton, cherry-red | Huruf kapital, line-height 0,95 | *WHICH COMPANIES HAVE I WORKED FOR?* |
| Khusus Magazine Art | Pinyon Script, Bodoni Moda 700 sampai 900, Bebas Neue | Dimuat hanya di overlay Magazine Art | Script, VOGUE, OOTD |

**Pola headline dua gaya.** Setiap headline memadukan Gloock untuk kata penghubung dan Fraunces Light Italic untuk kata kunci, misalnya *From* Scrolling *to* Strategy (Scrolling dan Strategy italic). Opening: *Content that* (Gloock), *is Felt,* (Fraunces Light Italic), *Shared,* (Gloock), *Remembered* (Fraunces Italic 400), tiap kata di atas blok highlight berbeda warna.

**Aturan.** Label HEADLINE dan NARATION di brief tidak ditampilkan. Judul panjang memakai overflow-wrap: anywhere. Teks Tag Kertas hanya untuk fakta singkat, tidak untuk paragraf panjang. Hanya Gloock, Fraunces (dua instance statis), DM Mono, dan Poppins yang dimuat kritis; subset Latin, display=swap.

### 5.4 Tekstur (PB)

Tekstur adalah inti rasa *tactile*, tetapi diterapkan ringan: satu tekstur dominan per permukaan dan tidak pernah menimpa teks.

| **Permukaan** | **Tekstur** | **Spesifikasi** |
| --- | --- | --- |
| Dinding | Kertas handmade | Serat pendek 4 sampai 12 px (tebal 0,5 px), warna dasar 8 sampai 14% lebih gelap (tone-on-tone), sekitar 1 serat per 400 px²; bintik 0,8 sampai 2,2 px sekitar 1 per 900 px² (#8A6A4F opasitas 18 sampai 30%); semuanya dari satu ubin seamless 512×512 px yang dipra-render dari SVG feTurbulence, bukan filter hidup. Sambungan antar lembar tiap kira-kira satu lebar layar memperlihatkan tepi deckle dan Pita Tepi vertikal 6 sampai 10 px. Di dinding brand, serat dibuat tone-on-tone 10 sampai 14% lebih gelap |
| Lantai | Kertas berlipat | Lipatan vertikal tiap sekitar 64 px, 8% lebih gelap; jalur bata blush di lantai luar ruang |
| Kardus dan kayu | Serat halus | Serat tipis searah; kayu kertas cocoa atau walnut; piramida atau konter tampak dari kardus berlipat |
| Semua section | Grain kertas | Overlay ::after per section, statis; SVG feTurbulence fractalNoise baseFrequency 0,9, numOctaves 2, ubin 220×220 px; grain terang = noise hitam, multiply, opasitas 0,06 sampai 0,10; grain gelap = noise putih, screen, opasitas 0,05 |
| Kartu dan kertas | Vignette tepi | Noise halus, serat tipis, vignette tepi; highlight 1 px di tepi atas |
| Sticker | Die-cut | Tepi kertas 3 sampai 4 px, bayangan lembut, rotasi kecil |
| Washi tape | Strip bermotif | Semi-transparan, ujung bergerigi, rotasi deterministik |
| Tombol utama | Glitter pink | Gradient + noise terang + background-blend-mode |
| Kamera dan tas | Leather grain | Hanya pada barang loker |
| Dekor tertentu | Halftone dots | Latar dekor kecil, bukan latar teks |

**Aturan grain.** Grain dipotong bersama section kertasnya dan berhenti tepat di kontur robekan; tidak pernah menempel di body atau overlay fixed global. Chapter 1 tidak memakai grain pada kanvas, hanya pada lembar dokumen.

### 5.5 Karakter Ilustrasi (PB)

Gaya potongan kertas. Semua benda dan tokoh adalah potongan kertas handmade berlapis tanpa kontur tinta. Siluet dibentuk oleh tepi potongan (deckle ringan, 5 sampai 9 titik goyang kecil), isi warna datar pastel dengan serat dan bintik kertas; bayangan di dalam gambar berupa satu lapisan kertas 10% lebih gelap yang diselipkan di bawah (geser 2 sampai 3 px), tanpa gradient dan tanpa arsiran tinta. Detail kecil (mata, senyum, blush, jendela, tombol) berupa potongan kertas kecil di atas lapisan dasar. Gambar rujukan doll Jassinta (Paper_doll_Jassinta_Full_Body.png) dan 55 aset yang sudah dibuat hanya menjadi referensi bentuk, proporsi, dan desain; garis tintanya diterjemahkan menjadi tepi potongan. Setiap potongan memiliki tepi kertas 2 sampai 3 px dan bayangan tipis agar siluet terbaca di warna dinding apa pun.

**Paper doll Jassinta.**

| **Atribut** | **Spesifikasi** |
| --- | --- |
| Proporsi | Semi-realistis ramping mengikuti gambar rujukan: sekitar 4 kepala termasuk hijab (5,5 kepala bila hanya wajah), lengan dan kaki panjang proporsional, tangan berbentuk sarung tangan sederhana, sepatu flat hitam; rincian di 5.10 |
| Tinggi di layar | 22 sampai 28% tinggi viewport, maksimal 320 px di layar 1440 px ke atas |
| Wajah | Mata titik hitam dengan garis kelopak tipis, alis tipis, hidung titik kecil, blush bulat pink lembut, senyum kecil tertutup; hijab tidak pernah menutupi wajah |
| Hijab | Selalu ada, menutup rambut dan leher, dengan dua sampai tiga garis lipatan sederhana; bentuk berganti per kostum (pashmina segitiga, bergo pendek, selendang panjang) dan warna mengikuti palet kostum |
| Konstruksi | Enam lapisan: kepala dan hijab, torso, lengan kiri, lengan kanan, rok atau celana, kaki dan sepatu; sepuluh paku brad abu-abu (bahu, siku, tangan, lutut, pergelangan kaki) selalu terlihat di semua kostum sebagai pivot gerak dan tanda khas paper doll |
| Ekspresi | Neutral, smile, curious, surprised, proud, focused; hanya mengganti lapisan kepala |
| Yang tidak pernah berubah | Hijab, sepatu hitam, proporsi tubuh |
| Gerak | Selalu berjalan; tidak naik kendaraan; kendaraan hanya lewat sebagai ambient |
| Hubungan dengan foto | Foto cut-out di Chapter 1 adalah Jassinta asli; doll adalah versi kertasnya |

**Tokoh dan benda lain.** Semua memakai ketebalan garis yang sama dengan doll, wajah sederhana (titik dan senyum) hanya pada makhluk dan benda ramah seperti awan dan bintang kertas, serta proporsi sedikit tebal dan menggemaskan. Tidak ada perspektif gambar yang rumit; kedalaman datang dari tumpukan lapisan, bukan dari gambar.

**Produksi gambar.** Digambar dengan pen tablet atau di atas kertas lalu dipindai; setiap benda diekspor sebagai lapisan terpisah berlatar transparan (WebP atau AVIF, 1× dan 2×), dengan garis, warna, dan tepi putih sudah menyatu.

### 5.6 Kedalaman 3D (PB)

Kedalamannya sengaja **dangkal dan jujur**: seperti diorama kertas bertingkat, bukan ruangan fotorealistis. Cahaya datang dari atas, bayangan jatuh lurus ke bawah, dan tebal kertas selalu terlihat di tepi.

| **Lapisan** | **Contoh isi** | **Kecepatan paralaks** | **Bayangan** |
| --- | --- | --- | --- |
| Langit dan skyline jauh | Awan, siluet landmark, pesawat kecil | 0,2× | Tanpa atau 0 4px 6px rgba(0,0,0,.12) |
| Latar tengah | Dinding, bangunan, rak | 0,5× | 0 4px 6px rgba(0,0,0,.12) |
| Jalur dan doll | Garis jahitan, doll (tetap 35% dari kiri di desktop) | 1× terhadap jalur | Elips tipis di lantai |
| Props tengah | Meja, konter, mesin | 1× | 0 8px 12px rgba(0,0,0,.18) |
| Props depan | Hanger, tanaman, pot, tepi kertas | 1,3× | 0 14px 20px rgba(0,0,0,.22) |
| Teks | Headline dan narasi | 0,9× | Tanpa |

**Geometri.**

- Lantai: bidang CSS 3D rotateX sekitar 58 sampai 64 derajat, perspective 1200 px.

- Teras bertingkat: dua sampai tiga tingkat, tiap tingkat translateZ sekitar 24 px, tepi depan tebal 14 sampai 22 px.

- Ketebalan benda: tumpukan lapisan translateZ (0, 6, 12 px dan seterusnya), 6 sampai 10 lapis untuk barang loker.

- Kamera: rotateY ±2 derajat di belokan dan scale 1,00 menjadi 1,04 saat tiba di tempat baru.

- Bayangan memakai filter: drop-shadow agar mengikuti kontur potongan.

**Tiga tingkat kedalaman.**

| **Tingkat** | **Kapan** | **Perilaku** |
| --- | --- | --- |
| Penuh | Desktop LG dan XL | Semua lapisan, paralaks mouse, ekstrusi penuh |
| Ringan | Tablet dan HP | translateZ dikurangi, blur dimatikan, ekstrusi maksimal 3 lapis, paralaks mati, runway menjadi carousel satu kartu |
| Calm | prefers-reduced-motion atau tombol Calm mode | Lapisan diam, bayangan statis, crossfade 250 ms sebagai pengganti gerak |

### 5.7 Bentuk Objek (PB)

**Bahasa bentuk.** Siluet sederhana yang terbaca dalam satu detik, sudut membulat, proporsi sedikit tebal, dan tepi seperti digunting tangan (lima sampai sembilan titik goyang kecil, bukan lurus sempurna).

| **Objek** | **Bentuk** | **Aturan** |
| --- | --- | --- |
| Bangunan dan ruang | Persegi panjang dengan atap atau kanopi sederhana, potongan penampang bila perlu (seperti piramida bercelah) | Detail dibatasi: satu jendela, satu pintu, satu papan |
| Props | Siluet chunky dengan lipatan atau tab | Tepi putih 2 sampai 3 px; tidak ada sudut tajam yang berbahaya |
| Label kertas | Persegi miring 2 sampai 5 derajat, sudut terangkat | Strip kertas sinar di sekeliling; warna butter, peach-fizz, lilac, blush, mint |
| Tag Kertas | Gelembung kertas gunting dengan ekor kecil | Bukan kotak UI; hanya fakta singkat |
| Awan | Bentuk bergelombang dengan mata titik dan senyum | Dua sampai tiga per adegan luar ruang |
| Benda gantung | Digantung tali tinta 1,5 px dengan titik pivot | Bergoyang ±2 derajat, 4 sampai 6 detik |
| Loker | Kotak vertikal rasio pintu minimal 1:3, 3D sungguhan | Dibangun ulang dengan CSS 3D berlapis, bukan menempel gambar |
| Robekan | Kontur robekan kertas realistis per seed | Hanya di enam transisi (seed 101, 202, 303, 404, 505, 606) |

**Skala dan komposisi.** Tiap adegan punya satu benda pahlawan (25 sampai 35% lebar layar), tiga sampai lima benda tengah (10 sampai 18%), dan benda kecil secukupnya (3 sampai 6%). Doll selalu berada di ruang yang bebas dari teks utama.

### 5.8 Referensi Visual (PB)

| **Referensi** | **Yang diambil** | **Yang tidak diambil** |
| --- | --- | --- |
| Mr. Panda's Psychologically Safe Portfolio (tiga tangkapan layar) | Dinding kertas handmade dan margin, lantai berlipat, label kertas, kartu gelembung, benda gantung, edge tab | Karakter panda, komposisi, aset |
| Game berdunia kertas (misalnya seri Paper Mario dan Tearaway) | Rasa dunia kertas bertingkat, benda terlipat, tepi tebal | Gaya karakter dan antarmuka game |
| Jurnal scrapbook dan bullet journal | Washi tape, sticker die-cut, tulisan tangan, tempelan foto | Kekacauan tanpa hierarki |
| Alat tulis pastel Korea dan Jepang | Palet lembut, sticker, label | Karakter berhak cipta |
| Buku pop-up dan diorama miniatur | Lapisan bertingkat, potongan penampang | Skala fotorealistis |
| Majalah editorial | Kontras serif tinggi dan layout rapi (untuk overlay Magazine Art) | Meniru masthead asli |
| Koran dan ruang redaksi vintage | Newsprint krem, mesin tik, roller cetak | Nostalgia yang terlalu gelap |

**Anti-referensi (dilarang).** Plastik atau kaca mengilap (glassmorphism), neon, ilustrasi vektor korporat generik, ikon stok, foto tekstur realistis, gradient halus pada gambar, dan gambar dengan ketebalan garis yang tidak konsisten.

### 5.9 Uji Visual Sebelum Rilis (PB)

- **Uji tiga detik:** apakah siapa, di mana, dan apa yang bisa diklik terbaca dalam tiga detik?

- **Uji siluet:** blok semua gambar jadi hitam; apakah doll dan benda utama masih dikenali?

- **Uji satu warna:** apakah dinding tetap terbaca sebagai satu warna dunia, dengan pita arsitektur yang sedikit?

- **Uji kontras:** semua teks lulus 4,5 : 1 (teks besar 3 : 1) di atas latar sebenarnya.

- **Uji sentuh:** tap area minimal 44×44 px dan tidak bergantung pada hover.

- **Uji Calm:** seluruh situs tetap bisa dipakai tanpa gerak dan tanpa paralaks.

### 5.10 Model Sheet Doll dan Kostum (PB)

Gambar rujukan Paper_doll_Jassinta_Full_Body.png (Jassinta berblazer abu-abu dengan hijab hitam) adalah **master doll** dan satu-satunya standar bentuk. Semua kostum digambar ulang di atas tubuh yang sama; yang berganti hanya pakaian, hijab, dan aksesori.

**Yang dikunci dari rujukan.** Garis luar tipis dan bersih, warna datar tanpa gradient, wajah bulat dengan mata titik dan blush, hijab dengan lipatan melilit di leher, tangan sederhana, sepatu flat hitam, tepi putih die-cut seperti stiker, dan sepuluh brad abu-abu di bahu, siku, tangan, lutut, serta pergelangan kaki. Brad digambar di atas kain pada semua kostum, termasuk rok.

**Warna dasar tubuh.**

| **Bagian** | **Hex** | **Catatan** |
| --- | --- | --- |
| Kulit | #E8B795 | Wajah, tangan, kaki; tanpa bayangan gradient |
| Blush | #E9A39B | Bulat, opasitas 60% |
| Garis luar | #1B1017 | Sekitar 0,25% tinggi tokoh, minimal 1,5 px |
| Hijab model sheet | #1F1F1F | Hanya di model sheet dan favicon (kontras tinggi di 32 px); di situs, hijab mengikuti tabel kostum |
| Sepatu flat | #2E2E2E | Selalu hitam di semua kostum; sol dalam #E8B795 |
| Brad | #BDBDBD, cincin #8A8A8A | Cincin gelap tipis di sekeliling brad lutut dan siku |
| Tepi stiker | #FFFFFF | Sekitar 2% tinggi tokoh (minimal 3 px), bayangan tipis #E6E6E6 |

**Proporsi tubuh** (persen dari tinggi total H, 0% = puncak hijab).

| **Titik** | **Posisi** | **Titik** | **Posisi** |
| --- | --- | --- | --- |
| Dagu | 18% | Pinggul | 54% |
| Ujung drape hijab di leher | 25% | Lutut (brad) | 73% |
| Bahu (brad) | 24% | Pergelangan kaki (brad) | 92% |
| Siku (brad) | 39% | Telapak sepatu | 100% |
| Ujung tangan (brad) | 52% | Lebar kepala dengan hijab | 18% H |
| Lebar tubuh termasuk lengan | 35% H | Lebar pinggul celana lurus | 20% H |

Kelas volume pakaian: **ramping** (lebar pinggul sampai 22% H), **regular** (23 sampai 27% H), **lebar** (28 sampai 34% H, untuk rok dan outer). Tinggi doll di layar tetap 22 sampai 28% tinggi viewport untuk semua kostum.

**Kostum (15).** Hem dalam persen H. Semua berhijab, sepatu hitam, brad terlihat. Tidak ada kostum yang sewarna dinding chapter-nya.

| **#** | **Frame** | **Bentuk dan proporsi** | **Warna busana** | **Hijab** | **Aksesori** |
| --- | --- | --- | --- | --- | --- |
| 1 | Ch.0 dan Ch.8 | Kemeja lengan panjang, rompi rajut hem 56%, rok plisket A-line hem 80%, volume lebar | Kemeja #FFFDF9, rompi #A8E6CF, rok #BFE3F5 | Pashmina melilit, #F3E3B8 | Kalung ID dengan tali #FF8DC7 |
| 2 | Ch.1 | Persis potongan master: blazer satu kancing hem 51%, celana lurus hem 92%, ramping | Blazer #F7CAD0, dalam #FFFFFF, celana #F8F0DC | Pashmina melilit, #F8F0DC | Kalung ID |
| 3 | Ch.2 | Rompi reporter hem 56% dengan dua saku, kemeja lengan panjang, celana lurus hem 92%, ramping | Rompi #F3E3B8, kemeja #FFFDF9, celana #A57C5B | Pashmina melilit, #BFE3F5 | Notes kecil #FFF1A8 di saku |
| 4 | Lobi 3.0 | Kardigan panjang hem 62%, kaus dalam, celana wide-leg hem 92%, volume regular | Kardigan #FFD6E8, kaus #FFFDF9, celana #FFF8EE | Pashmina melilit, #A98BDA | Ponsel casing #FF8DC7 |
| 5 | 3A Café | Apron bib dari 30% sampai 70% di atas kardigan hem 58%, celana lurus hem 92%, regular | Apron #F8F8C8 list #066838, kardigan #FFF8EE, celana #5A3A2E | Pashmina melilit, #F3E3B8 | Notes pesanan #FFF1A8 di saku apron |
| 6 | 3B Clinic | Jas klinik panjang hem 70%, kerah lebar, celana lurus hem 92%, regular | Jas #FFB3D9, kerah dan dalam #FFFFFF, celana #FFFDF9 | Segitiga rapi, #FFD6E8 | Name tag #FFFFFF tepi #D4A64A, pita kecil #FF8DC7 |
| 7 | 3C Terminal | Outer panjang hem 80% berlapis, celana wide-leg hem 92%, volume lebar | Outer #F8F0DC, dalam #FFFDF9, celana #D9D3D6 | Pashmina melilit #A7D8F5, selendang pastel diagonal #B8C4F2 | Paspor #04502A |
| 8 | 4 dasar | Blouse longgar hem 54%, rok panjang A-line hem 88%, volume lebar | Blouse #FFF8EE, rok #EBD08C | Pashmina melilit, #E8A5B8 | Koper gading #F8F0DC trim #EBD08C |
| 9 | 4.7 Hard Selling | Gaun vintage lengan panjang, pinggang 48%, rok melebar hem 85%, volume lebar | Gaun #E8A5B8, kerah #FFF8EE | Pashmina melilit #EBD08C dengan topi kecil #FFF8EE pita #881838 | Tas kecil #D4A64A |
| 10 | 4.7 Entertainment | Dibelah vertikal: kiri blazer kantor hem 51% dan celana lurus, kanan jaket kampus hem 52% dan celana yang sama; ramping | Kiri blazer #B9B8CC, kanan jaket #FFB38A strip #FFFFFF, celana #5A3A2E | Pashmina melilit, #F4EFF1 | Tidak ada |
| 11 | 4.7 Education | Blouse sederhana hem 54%, rok A-line hem 82%, regular | Blouse #FFFDF9, rok #8FB8E8 | Pashmina melilit, #F4EFF1 | Ponsel dengan gelembung DM #FF8DC7 |
| 12 | 4.7 Fun | Tunik hem 58%, celana lurus lebar hem 92%, regular | Tunik #FF8DC7, celana #A8E6CF | Pashmina melilit, #FFF1A8 | Kacamata hitam #1B1017 lensa #FF2E93 |
| 13 | Ch.5 | Jaket kampus bomber hem 52%, kemeja, jeans lurus hem 90% (ujung digulung), ramping | Jaket #B9B8CC, kemeja #FFFDF9, jeans #8FB8E8 | Pashmina melilit, #D9D3D6 | Ransel #FFB38A selebar 22% H |
| 14 | Ch.6 | Blouse satin longgar hem 56%, celana wide-leg hem 92%, regular | Blouse #DA9AF2 dengan sorot #F4DDFB, celana #F3E3B8 | Pashmina melilit, #C58AC9 | Headphone #1B1017 bantalan #FF2E93 |
| 15 | Ch.7 | Kardigan panjang hem 64%, celana lurus hem 92%, ramping | Kardigan #D9A441, dalam #FFFDF9, celana #5A3A2E | Pashmina melilit, #F3E3B8 | Kotak arsip #D9D3D6 label #FFF1A8 |

**Gerak dari brad.** Tiap anggota tubuh berputar di sekitar brad-nya; pinggul memakai pivot tersembunyi di bawah hem baju.

| **Pivot** | **Rentang putar** | **Dipakai untuk** |
| --- | --- | --- |
| Bahu | ±22 derajat | Ayun lengan saat jalan, reach, point, wave |
| Siku | 0 sampai 25 derajat | Hold, lift, reach |
| Pinggul (tersembunyi) | ±18 derajat | Langkah jalan |
| Lutut | 0 sampai 18 derajat | Langkah jalan, lompat kecil |
| Pergelangan kaki | ±8 derajat | Tumit dan ujung kaki saat melangkah |

Siklus jalan 6 frame pada 8 fps dengan gerak naik-turun tubuh 2 px. Pergantian kostum 450 ms: kostum lama meluncur keluar, kostum baru menempel tanpa mengubah tubuh dan brad. Ekspor kostum sebagai lapisan terpisah (pakaian, hijab, aksesori), tinggi sekitar 560 px pada 2×.

**Catatan hasil audit warna.** Hijab lobi memakai wisteria #A98BDA (bukan lilac) agar tidak menyatu dengan dinding lilac, dan kardigan arsip memakai mustard #D9A441 agar tidak sewarna lantai honey.

## 9. Design System (DF)

Tema: **playful, girly, textured**. Nama token = nama di tabel (CSS variables di :root dan warna kustom Tailwind).

### 9.1 Palet warna (DF)

**Pink**

| **Token** | **Hex** | **Pemakaian** |
| --- | --- | --- |
| --hot-pink | #FF2E93 | Tombol utama, glow reveal, aksen kuat |
| --barbie-pink | #E91E8C | Hover tombol, teks aksen, sticker |
| --raspberry | #D81B72 | Garis aksen, ikon, teks pink ukuran kecil |
| --bubblegum | #FF8DC7 | Blok highlight, badge |
| --candy-pink | #FFB3D9 | Badan loker terbuka, sticker |
| --blush | #FFD6E8 | Latar section lembut |
| --rose-quartz | #F7CAD0 | Kartu, kertas |
| --powder-pink | #FDE4EC | Latar section terang |
| --dusty-rose | #E8A5B8 | Bayangan berwarna |
| --cherry-red | #E5173F | Headline italic merah (The Campus, The Story, the Microphone), staple, pin |
| --lipstick-red | #C8102E | Elemen majalah |
| --coral-pop | #FF6F6F | Aksen playful |
| --peach-fizz | #FFB38A | Blok highlight, label |
| --apricot | #FFD3B0 | Highlight lembut |

**Ungu / Lavender**

| **Token** | **Hex** | **Pemakaian** |
| --- | --- | --- |
| --lavender | #BFA8E5 | Amplop, kartu, loker |
| --lilac | #D4C1F5 | Latar section, highlight |
| --wisteria | #A98BDA | Aksen sekunder |
| --orchid | #DA9AF2 | Glow, gradient |
| --grape-soda | #7B4FB8 | Teks di atas pastel |
| --berry | #7A2E5C | Interior loker terbuka |
| --aubergine | #4B1D4F | Gradient gelap |
| --plum-night | #2A0F2E | Latar gelap utama |

**Mint / Hijau / Biru pastel**

| **Token** | **Hex** | **Pemakaian** |
| --- | --- | --- |
| --mint-cream | #D4F2E4 | Latar lembut |
| --pastel-mint | #A8E6CF | Highlight, kamera, kartu |
| --matcha | #B7D9A8 | Detail tanaman |
| --sage | #A9C4A0 | Aksen netral |
| --baby-blue | #BFE3F5 | Highlight, ikon |
| --sky-pastel | #A7D8F5 | Aksen |
| --periwinkle | #B8C4F2 | Aksen |
| --paper-blue | #8FB8E8 | Garis kertas handmade |
| --steel-lilac | #B9B8CC | Loker tertutup |

**Kuning / Krem / Kertas**

| **Token** | **Hex** | **Pemakaian** |
| --- | --- | --- |
| --butter | #FFF1A8 | Highlight, label kertas |
| --lemon-chiffon | #FFF6C9 | Highlight lembut |
| --vanilla | #FFF8EE | Latar krem hangat |
| --aged-paper | #F3E3B8 | Kertas kekuningan (papan pin foto) |
| --honey | #F6D76B | Aksen |
| --milk-white | #FFFDF9 | Kertas putih, teks di atas gelap |
| --pure-white | #FFFFFF | Kanvas Personal Brand (wajib pure white) |

**Netral dan logam**

| **Token** | **Hex** | **Pemakaian** |
| --- | --- | --- |
| --ink | #1B1017 | Teks utama |
| --espresso | #2B1B17 | Teks pada kertas |
| --cocoa | #5A3A2E | Detail kayu |
| --walnut | #7A4A32 | Gagang payung, rak kayu |
| --pearl | #F4EFF1 | Netral terang |
| --warm-grey | #D9D3D6 | Garis, bayangan |
| --chrome | #C9CCD5 | Logam |
| --gold | #D4A64A | Bingkai, piala |
| --champagne | #EBD08C | Highlight emas |
| --staple-red | #D7263D | Staple dan pin di kertas |

**Gradient bernama**

| **Token** | **Nilai** |
| --- | --- |
| --grad-plum-night | linear-gradient(160deg, #2A0F2E 0%, #4B1D4F 55%, #7A2E5C 100%) |
| --grad-cotton-candy | linear-gradient(135deg, #FFD6E8 0%, #E3D4FA 50%, #CDEBF8 100%) |
| --grad-bubblegum | linear-gradient(135deg, #FF8DC7 0%, #FF2E93 100%) |
| --grad-lilac-mint | linear-gradient(135deg, #D4C1F5 0%, #D4F2E4 100%) |

**Aturan kontras:** teks pink ukuran kecil (di bawah 24 px) di atas latar terang memakai --raspberry atau --ink. --hot-pink hanya untuk teks besar dan tebal, ikon, dan latar tombol. Cherry-red #E5173F di atas putih sekitar 4,6 : 1 (lulus tipis untuk teks biasa), **di atas blok pink dan peach perlu dicek ulang** dengan alat kontras. Cek juga teks putih di atas pink dan label DM Mono kecil.

### 9.2 Tipografi final (Arah C: Chic Scrapbook) (DF)

Semua font gratis di Google Fonts, jadi tidak perlu Fontshare. **Setiap penyebutan Sentient di dokumen lama dibaca sebagai font pada tabel ini:** Sentient Bold = Gloock. Sentient Bold Italic dan Sentient Italic = Fraunces Light Italic.

| **Peran** | **Font** | **Pengaturan** | **Dipakai di** |
| --- | --- | --- | --- |
| Judul utama | Gloock | clamp(2.1rem, 1.2rem + 3.6vw, 4.125rem), line-height 1,02, letter-spacing -0,01em, text-wrap: balance | Headline semua chapter, label Email dan WA/Phone |
| Aksen judul miring | Fraunces Light Italic | wght 300, SOFT 0, WONK 1, opsz 144 | *Storytelling*, *From Ordinary Content to*, *Scrolling*, *Strategy*, *Social Media* |
| Aksen merah | Fraunces Light Italic, warna cherry-red #E5173F | sama | *The Campus*, *The Story*, *the Microphone* |
| Narasi dan nilai kontak | Fraunces Italic 400 | SOFT 100, WONK 0, opsz 24, clamp(1rem, 0.85rem + 0.7vw, 1.556rem), line-height 1,5, text-wrap: pretty, maksimal 58 karakter | Narasi tiap chapter, email, Instagram, nomor WA |
| Raksasa Personal Brand | Anton, cherry-red | Huruf kapital, line-height 0,95 (cadangan Archivo Black, Impact) | *WHICH COMPANIES HAVE I WORKED FOR?* |
| Tulisan label | Shantell Sans 400 dan 600 | Minimal 17 px di HP | Surat My Message, Notes, caption foto, Tag Kertas, gelembung doll, label kertas |
| Script | Pinyon Script | Cadangan Great Vibes | *Fashion* |
| Majalah | Bodoni Moda 700 sampai 900 | Cadangan Playfair Display | *VOGUE* |
| OOTD | Bebas Neue | Cadangan Oswald | *OOTD* |
| Label | DM Mono (cadangan Special Elite) | Minimal 11 px | Label hover, footer, REF-ARC, chip babak, papan nama |
| UI dan tombol | Poppins 400, 500, 600 | Minimal 14 px di HP | Tombol, INDEX, kartu |
| Caption polaroid | Permanent Marker atau Shantell Sans | Cadangan cursive | Polaroid di loker 4 |

**Ukuran fluid:** headline 66 px = clamp(2.1rem, 1.2rem + 3.6vw, 4.125rem). Narasi 24,9 px = clamp(1rem, 0.85rem + 0.7vw, 1.556rem). Jarak headline ke narasi: --headline-narration-gap: 1,5 rem. Judul panjang memakai overflow-wrap: anywhere. Body minimal 14 px di HP, caption dan DM Mono minimal 11 px.

**Tipografi Opening:** *Content that* (Gloock), *is Felt,* (Fraunces Light Italic), *Shared,* (Gloock), *Remembered* (Fraunces Italic 400), masing-masing di atas **blok highlight berbeda warna**: Content that = pink dan butter (kuning), is Felt, = mint dan lilac, Shared, = baby blue, Remembered = peach.

**Pola headline dua gaya** (di semua chapter, agar tipografi terlihat kece): kata pertama pasangan memakai Gloock, kata kunci memakai Fraunces Light Italic. Contoh: *Storytelling* (italic) *Through Screens* (Gloock). Ukuran dan jenis font responsif mengikuti device.

**Teks HEADLINE dan NARATION:** label “HEADLINE” dan “NARATION” di brief tidak ditampilkan di web, hanya isinya.

### 9.3 Tekstur (inti tema textured, diterapkan konsisten tetapi ringan) (DF)

| **Tekstur** | **Aturan** |
| --- | --- |
| **Grain / noise** | Overlay ::after **per section** (position: absolute, bukan satu layer fixed seluruh halaman, agar tidak memaksa re-compositing tiap frame). Statis, tanpa animasi. SVG feTurbulence fractalNoise, baseFrequency 0,9, numOctaves 2, stitchTiles, feColorMatrix alpha 0,55, ubin 220×220 px |
| Grain terang | Noise **hitam** (RGB 0) + mix-blend-mode: multiply, opacity 0,06 sampai 0,10 |
| Grain gelap (film grain) | Noise **putih** (RGB 1) + mix-blend-mode: screen, opacity 0,05. Noise hitam + screen tidak terlihat, jangan dipakai |
| **Aturan penting grain** | Grain dipotong bersama section kertasnya. Tidak pernah menempel di body, overlay fixed global, atau viewport. Saat dasar section robek, grain berhenti tepat di kontur robekan. Section berikutnya mulai dengan grain independennya sendiri |
| Paper grain | Noise halus + serat tipis + vignette tepi pada kartu dan kertas |
| Cardstock dan lipatan | Highlight tepi 1 px + bayangan bertingkat |
| Glitter pink | Gradient + noise terang + background-blend-mode (tombol utama dan huruf aksen) |
| Sticker die-cut | Tepi kertas 3 sampai 4 px + bayangan lembut + rotasi kecil |
| Washi tape | Strip semi-transparan bermotif, ujung bergerigi, rotasi acak (deterministik) |
| Leather grain | Kamera dan tas |
| Halftone dots | Dekor latar tertentu |
| Kertas handmade | Ubin serat dan bintik 512×512 px (dipra-render dari SVG feTurbulence) ditambah Pita Tepi merah muda di sambungan lembar |

### 9.4 Komponen reusable (dibuat sekali, dipakai di mana-mana) (DF)

| **Komponen** | **Deskripsi** |
| --- | --- |
| HoverLabel text | Label price-tag kertas (latar --milk-white, jahitan putus-putus, tali kecil, rotasi kecil) muncul dekat kursor atau objek saat hover. **Juga muncul saat fokus keyboard.** Layar sentuh: muncul saat tap pertama atau long-press, plus caption kecil tetap di bawah barang. Collision detection agar tidak keluar viewport |
| StickerButton | Tombol sticker die-cut pink glitter, sedikit miring, bayangan keras-lembut, hover = goyang + naik 2 px |
| Pushpin | Paku payung 3D kecil (--cherry-red, --hot-pink, atau --wisteria) |
| PaperNote | Kertas --aged-paper + grain + sudut terangkat |
| PhotoFrame | Bingkai putih tebal + bayangan 0 10px 25px rgba(0,0,0,.25). **Tidak pernah memotong foto** (object-fit: contain, bingkai mengikuti rasio foto) |
| TornEdge seed color | Bagian 11 |
| TocOverlay dan TocInline | Bagian 10.1 |
| SectionHero | Headline + narasi + (opsional) media reveal |
| Overlay | Layar penuh: focus trap, Esc menutup, scroll body terkunci (Lenis stop), animasi masuk *sticker pop*, role=dialog aria-modal=true, fokus kembali ke pemicu saat ditutup |
| Carousel | Tombol panah + drag atau swipe (pointer events), snap, keyboard ← →, tanpa memotong media |
| SafeImage dan SafeVideo | Bagian 12.6 |
| PaperLabelSign | Papan nama bab (6.6) |
| PaperTag | Gelembung kertas gunting (6.1) |
| SpeechBubble | Gelembung doll (7.5) |

## Warna Brand pada World Set (DF)

### 28.2 Aturan warna brand (tidak boleh full warna logo) (DF)

chapter yang menampilkan karya perusahaan memakai **warna logo penuh untuk dinding**, dan dinding itu diberi **pita arsitektur** berwarna kedua yang cocok dengan logo. **Pengecualian: 3B Clinic memakai dinding putih marble.**

| **Bagian** | **Aturan** |
| --- | --- |
| **Dinding (3A, 3C, 4)** | Warna logo penuh (--brand-wall). Serat kertas menjadi **tone-on-tone** (10 sampai 14% lebih gelap atau lebih terang dari warna dinding), pita tepi memakai warna pita arsitektur |
| **Pita arsitektur di dinding** | Warna kedua yang cocok: krem, putih, emas, champagne. Bentuk: chair rail, list atas (crown), pilaster tipis, panel dan wainscot. Jumlah garis sedikit dan rapi agar dinding tetap terbaca sebagai satu warna |
| **Dinding 3B Clinic** | **Putih marble**: dasar #FFFDF9, urat abu halus #E5E0E3, urat emas samar (15 sampai 20% opacity). Warna logo (emas #B08418 dan amber #F0A810) hanya pada garis, bingkai, dan barang |
| **Lantai** | **Tidak full warna logo.** Material netral atau tint: kayu cocoa, ubin krem, karpet tint, marmer champagne |
| **Barang yang menempel di dinding** | **Tidak boleh sewarna dinding.** Pakai warna kedua (krem, putih, emas) atau bingkai kontras 2 sampai 3 px, dengan sedikit warna logo sebagai list atau pita |
| **Teks di dinding** | Krem atau putih (Shantell Sans). Emas hanya untuk ornamen dan huruf besar |
| **Kostum doll** | Tidak sewarna dinding (apron 3A krem dengan list hijau, busana 3C gading, bukan hijau tua) |
| **Newsroom dan Lobi** | Beberapa brand dalam satu ruang: dinding netral, warna brand hadir sebagai **panel dinding penuh** di belakang tiap meja atau pintu |
| **Tetap dari design system** | Doll, label kertas papan nama bab (pastel babak), awan berwajah, rumput, bayangan, grain. Material kayu tetap cocoa atau walnut |

**Token CSS (per brand):** --brand-wall (warna logo penuh), --brand-wall-deep (shade 15% lebih gelap untuk serat tone-on-tone), --brand-line (warna pita arsitektur), --brand-mid, --brand-tint, --brand-wash, --brand-accent. Di Chapter 2 dan 7, **--brand-accent mengikuti item aktif**.

### 28.3 Palet logo (diambil dari file logo_1 sampai logo_10) (DF)

Hex diambil dari piksel dominan logo lalu dibulatkan. **[cek]** bila kamu punya kode warna resmi brand.

| **Brand** | **Warna logo (ink)** | **Mid** | **Tint** | **Wash** | **Warna kedua** |
| --- | --- | --- | --- | --- | --- |
| Elsthetic (logo_1) | #B08418 emas tua | #D0B370 | #EEE0C3 | #F7EEDD | putih |
| Elspresso (logo_2) | #066838 hijau tua | #6AA283 | #C8DACA | #E6EBE0 | putih, krem biji kopi |
| Aishi Aesthetic Academy (logo_3) | #B89440 emas lembut | #D4BD88 | #EFE4CC | #F8F0E1 | putih |
| Karamina Tour (logo_4) | #066838 hijau tua | #6AA283 | #C8DACA | #E6EBE0 | krem #F8F8C8, emas tepi, hitam Ka’bah |
| ELS Corp (logo_5) | gradient emas #F0D050 ke #C88830 | #DEB67E | #F3E1C8 | #FAEFE0 | emas tembaga |
| Aishi Beauty (logo_6) | #F0A810 amber | #F6C96B | #FCE8C1 | #FEF2DC | putih |
| Lassiewear (logo_7) | #881838 burgundy | #B87283 | #E5C8CA | #F3E3E0 | rose #983858 |
| inNalar (logo_8) | gradient aqua #18E8C8 ke biru #0898F8 | #6BBFF6 | #C9E4F4 | #E6F0F4 | merah-oranye tagline #E8503A |
| Independen Media (logo_9) | merah #E80838 | #F16983 | #FAC5CA | #FDE2E0 | hitam #080808 |
| Ikapunija Media (logo_10) | teal #088898 | #6BB6BC | #C9E1DF | #E6EFEA | merah titik #E8402A |

### 28.4 Penerapan per chapter (DF)

| **Chapter** | **Dinding** | **Lantai** | **Arsitektur dan garis di dinding** | **Interior dan barang di dinding** | **Aksen** |
| --- | --- | --- | --- | --- | --- |
| **0 Paper School** | Dinding kertas handmade putih kebiruan | Hijau pastel berlipat, jalur bata blush | Tetap | Tetap | Tetap |
| **1 Blank Page** | **Putih murni (#FFFFFF)**, tanpa garis, tanpa lantai | n/a | n/a | Lembar dokumen putih. Warna brand hanya ada di logo pada lembar | Staples merah |
| **2 Newsroom** (tiga media, tiga dinding; lihat 28.7) | **Wall Shift:** dinding belakang rak disc berganti **penuh warna logo** mengikuti media disc aktif. Disc 1 sampai 4 (Independen): merah penuh #E80838. Disc 5 sampai 8 (inNalar): gradient vertikal aqua #18E8C8 ke biru #0898F8. Disc 9 sampai 11 (Ikapunija): teal penuh #088898. Bagian intro (headline) berdinding newsprint krem netral dengan tiga bendera brand menggantung | Kayu cocoa terang. Karpet runner tint brand ikut berganti bersama dinding (#FAC5CA, #C9E4F4, #C9E1DF) | Independen: chair rail putih, list hitam ganda #080808, pilaster hitam. inNalar: rail dan list putih, panel lengkung putih. Ikapunija: rail dan list krem, titik merah #E8402A sebagai ornamen | Papan nama media berlogo, papan info berpin, **Wall Gallery** (cetak kecil berbingkai tiap artikel), lampu meja, koran berpita warna brand. **Rak disc: --brand-accent mengikuti disc aktif** | Merah titik Ikapunija, tagline inNalar *#BikinPaham* sebagai stiker kecil, hitam dan putih Independen |
| **3.0 Lobby** | Lilac handmade (netral antar-brand), dengan **panel penuh warna brand di sekitar tiap pintu**: hijau #066838, emas #B08418, hijau #066838 | Mint-lilac | Tiga pintu: café (garis krem), klinik (garis amber), gerbang keberangkatan (garis emas dan krem) | Papan menu, plakat, dan label harga hover mengikuti warna pintunya | Krem Karamina #F8F8C8 |
| **3A The Café** (Elspresso) | **Hijau penuh #066838**, serat tone-on-tone #0A4F2C | Kayu cocoa dengan ubin karpet krem-hijau #C8DACA | **Chair rail putih-krem #F8F8C8** setinggi sepertiga dinding, wainscot ubin subway krem di bawahnya, list atas krem, pilaster tipis putih. Konter walnut berlapis krem, kanopi berlis krem | Papan menu kapur berbingkai walnut dengan tulisan putih, rak cangkir putih, mesin kopi chrome, tas Go-Food krem, lonceng emas, lencana matahari dan biji kopi putih dari logo sebagai stiker | Putih, krem, cokelat biji kopi. Kostum doll: apron barista **krem dengan list hijau** |
| **3B The Glow Clinic** (Elsthetic, Aishi Beauty) | **Putih marble** (#FFFDF9, urat abu halus, urat emas samar) | Marmer champagne #F3E1C8 dengan urat halus dan lipatan | **Chair rail, list atas, dan pilaster emas #B08418.** Bingkai pintu kaca emas, kolom putih marble, panel marmer berborder amber tipis | Cermin vanity berlampu berbingkai emas, rak kaca dengan list amber #F0A810, botol serum bertutup emas, papan promo berbingkai emas, resep dokter bertinta emas tua. Papan nama menampilkan logo Elsthetic dan Aishi Beauty berdampingan | Emas tembaga ELS Corp #C88830 pada ornamen kecil, kilau glitter halus. Mint dan blush hanya pada props kecil |
| **3C The Terminal** (Karamina Tour) | **Hijau penuh #066838**, serat tone-on-tone #0A4F2C. Dibedakan dari 3A oleh garis dan panel (di bawah) | Krem-sage #E6EBE0 dengan strip landasan putih | **Pilaster vertikal emas, panel lengkung krem #F8F8C8** di sekitar gerbang, list emas ganda di atas. Gerbang keberangkatan dan pilar krem bertrim emas | Papan jadwal flip hijau gelap #04502A berhuruf krem, boarding pass krem berbingkai hijau, koper, cap paspor. Ka’bah dan Masjidil Haram hanya hitam dan emas seperti di logo, tenang dan hormat. Langit dan laut di jendela tetap sky-pastel | Emas tepi tameng logo, hitam siluet. Kostum doll: busana traveling **gading** dengan selendang pastel |
| **4 Boutique** (Lassiewear) | **Burgundy penuh #881838**, serat tone-on-tone #6B1230 | Karpet blush #E5C8CA bertingkat dengan border champagne | **Chair rail champagne ganda #EBD08C**, list atas champagne, panel rose #983858 di antara pilaster. Kanopi champagne bertepi burgundy gelap, kusen empat ruang ganti gading dan champagne | Hanger champagne, rel hanger emas, tas belanja gading bertali burgundy, pouf beludru blush, tirai ruang ganti gading berumbai burgundy, label harga gading. Manekin netral | Champagne dan emas |
| **5 Campus Library** | Aged-paper handmade, sepia lalu berwarna | Walnut | Tetap | Tetap | Merah headline |
| **6 Radio Booth** | Plum-night dan aubergine dengan garis samar | Berry | Tetap. **[opsional]** kirim logo Kartini Radio atau Kartini Podcast bila ingin mengikuti warna logonya | Tetap | ON AIR merah |
| **7 Archive Room** | Warm-grey dan aged-paper netral (campuran banyak brand) | Honey | Laci dan lemari netral | **Tab indeks dan stiker karya memakai warna brand** tiap perusahaan (28.3). Di preview, --brand-accent mengikuti karya terpilih | Merah staples |
| **8 Mailbox** | Blush, lilac, cotton-candy | Hijau pastel dan jalur bata seperti 0.7 | Tetap | Tetap | Tetap |

**Aturan transisi antar-dunia:** saat wipe dari 3A ke 3B ke 3C, variabel --brand-* berganti bersama wipe (700 ms), jadi dinding, lantai, dan barang berubah warna bersamaan dengan pergantian kostum doll. Kostum doll tetap memakai palet kostum di 7.2, tetapi aksen kecilnya (pita, name tag, selendang) boleh mengambil warna kedua brand.

**Hover label dan HUD:** label harga kertas, pin, dan chip babak tetap memakai palet design system (agar konsisten). Hanya bingkai dan pita tepi dunia yang mengikuti brand.

### 28.5 Catatan aset logo (DF)

- Logo Karamina Tour, Independen Media, Ikapunija Media, dan inNalar terlihat **beresolusi rendah dan sedikit buram**. Untuk dipakai di papan nama besar, minta **versi vektor (SVG atau AI)** dari masing-masing brand. Bila tidak ada, logo dipakai kecil, dan warna brand tetap dipakai pada arsitektur.

- Logo Elspresso memakai ilustrasi cangkir bergaya lencana. Cukup dipakai kecil sebagai stiker dinding, jangan ditiru menjadi lencana raksasa di arsitektur.

- Warna brand diterapkan sebagai **warna dunia**, bukan menempelkan logo di mana-mana. Logo hanya di papan nama, kartu CREDIT, dokumen Chapter 1, dan tab Archive.

- Bila brand punya panduan merek (brand guideline) yang membatasi penggunaan warna, cek dulu sebelum rilis. Izin brand sudah beres (26.4), tetapi pewarnaan arsitektur dengan warna logo sebaiknya ikut ditunjukkan ke mereka.

### 28.6 Dampak ke produksi (DF)

Karena dunia diwarnai lewat variabel, **tidak ada tambahan gambar baru**: dinding, lantai, teras, dan props yang sama dipakai ulang dan diwarnai --brand-*. Tambahan pekerjaan hanya: (1) membuat tiga tema warna siap pakai untuk Newsroom (tiga meja), (2) satu tema warna untuk 3A, 3B, 3C, 4, (3) tab indeks berwarna di Archive. Style Test (tahap 0) sebaiknya memakai **3A (hijau Elspresso)** supaya aturan 60/25/12/3 bisa langsung dinilai.

## 6. Paper World Bible (DF)

Bagian ini adalah lapisan yang membuat chapter-chapter terasa sebagai **satu dunia**, seperti website referensi. Semua teknik memakai Opsi A (DOM berlapis dengan CSS 3D), bukan WebGL.

### 6.1 Bahasa visual dunia (spesifikasi render) (DF)

| **Elemen** | **Spesifikasi** |
| --- | --- |
| **Dinding kertas handmade** | Lembar kertas handmade polos: ubin serat dan bintik 512×512 px (WebP, dipra-render dari SVG feTurbulence, bukan filter hidup) sebagai background-image dengan mix-blend-mode multiply di atas warna dasar. Sambungan antar “halaman” (sekitar satu lebar layar) memperlihatkan tepi deckle dan Pita Tepi vertikal 6 sampai 10 px berwarna blush-raspberry. Warna kertas dan serat diwarnai ulang per chapter lewat variabel --wall-tint dan --fiber-tint (lihat 6.3). Grain menempel pada section, bukan pada body |
| **Lantai berlipat** | Bidang CSS 3D (rotateX sekitar 58 sampai 64 derajat, perspective 1200 px) dengan lipatan vertikal tiap sekitar 64 px (repeating-linear-gradient, 8 persen lebih gelap). Ada jalur bata berwarna blush pada lantai outdoor |
| **Teras bertingkat** | Dua sampai tiga tingkat, tiap tingkat translateZ sekitar 24 px, tepi depan tebal 14 sampai 22 px dengan lipatan dan highlight 1 px di tepi atas. Dipakai untuk konter, panggung, bukit |
| **Potongan kertas (cutout)** | Semua prop adalah kertas handmade yang dipotong: tepi kertas 2 sampai 3 px, tanpa kontur tinta, tepi deckle ringan (5 sampai 9 titik goyang), warna pastel dari design system, serat dan bintik halus |
| **Bayangan berlapis** | Berdasarkan kedalaman: belakang 0 4px 6px rgba(0,0,0,.12), tengah 0 8px 12px rgba(0,0,0,.18), depan 0 14px 20px rgba(0,0,0,.22). Memakai filter: drop-shadow agar mengikuti kontur potongan |
| **Lapisan ekstrusi** | Ketebalan benda dibuat dengan tumpukan lapisan translateZ (0, 6, 12 px dst). Normal 6 sampai 10 lapis untuk barang loker, mode hemat maksimal 3 |
| **Tali gantung** | Tali kertas pilin atau benang jahit 1,5 px dengan titik pivot. Bergoyang rotate sekitar ±2 derajat, 4 sampai 6 detik, ease-in-out, fase acak per benda (tetap, deterministik) |
| **Awan berwajah** | Awan kertas kecil dengan mata titik dan senyum, dua sampai tiga per adegan outdoor, bayangan lembut, bergeser pelan |
| **Rumput dan bunga** | Rumpun matcha dan sage, bunga kecil blush. Bergoyang sekitar 1 derajat saat scroll cepat |
| **Air** | Bidang baby-blue atau sky-pastel dengan lipatan, puncak ombak berupa potongan kertas bertepi deckle, bergeser translateX sekitar 8 px dalam loop 6 detik. Hanya di 3C dan walk strip 3C → 4 |
| **Bayangan doll** | Elips tipis di lantai, ikut skala doll |
| **Label kertas** | Kertas butter, peach-fizz, lilac, blush, atau mint, miring 2 sampai 5 derajat, sudut terangkat, strip kertas sinar di sekelilingnya (dipakai untuk papan nama, 6.6) |
| **Tag Kertas** | Tag atau gelembung kertas gunting bertepi deckle (bukan kotak UI), isi Shantell Sans 17 px minimal. Untuk fakta singkat: masa kerja, stiker fakta, resep, catatan dokter. **Bukan untuk paragraf panjang** (itu tetap Fraunces Italic) |
| **Pengecualian Chapter 1** | Kanvas putih murni (#FFFFFF), tanpa garis, tanpa lantai, tanpa skyline, tanpa grain pada kanvas. Grain hanya pada lembar dokumen |

### 6.2 Model kamera dan scroll (DF)

**Prinsip:** scroll vertikal selalu menggerakkan perjalanan. Bedanya, ada tiga mode:

| **Mode** | **Nama** | **Cara kerja** | **Dipakai di** |
| --- | --- | --- | --- |
| **D** | Diorama pan | Section di-pin. Scroll menggeser lapisan ke samping sesuai kecepatan paralaks. Doll tetap sekitar 35 persen dari kiri (desktop) atau tengah bawah (HP). Kamera sedikit berputar (rotateY ±2 derajat) di belokan dan sedikit membesar (1,00 → 1,04) saat tiba | Walk strip, frame 0.7, lobi 3.0, 4.1 sampai 4.4 (masuk butik) |
| **P** | Pinned carousel | Section di-pin dan scroll melangkah antar kartu. Semua kartu juga bisa digerakkan dengan panah, swipe, atau klik | Rak disc (2.5), runway 3A, 3B (video), 3C, ruang ganti 4.6 |
| **S** | Stack flow | Mengalir biasa ke bawah dengan paralaks ringan | Opening terbuka, Chapter 1, headline dan narasi tiap chapter, 5, 6, 7, 8, overlay |

**Panjang scroll tiap chapter (titik awal usulan, diuji saat prototipe):**

| **Chapter** | **Panjang** | **Mode** | **Pin?** | **Input utama** | **Alternatif** |
| --- | --- | --- | --- | --- | --- |
| 0 Opening | 100 vh terkunci, lalu 120 vh | S | Terkunci sampai OPEN | Klik OPEN | Enter atau Space pada tombol |
| 1 Editor’s Desk | 250 vh | S | Tidak | Scroll | Tab ke dokumen |
| 2 Newsroom | 150 vh intro + 440 vh disc (11 × 40) | S lalu P | Pin saat rak disc | Scroll melangkah disc | ← →, swipe, klik disc samping |
| 3.0 Lobby | 250 vh | D | Tidak | Scroll | Klik pintu |
| 3A Café | 220 vh (3 × 60 + info) | P | Pin runway | Scroll melangkah | ← →, swipe, klik cangkir samping |
| 3B Clinic | 380 vh (video 180, flyer carousel 100, resep 100) | P | Pin di video | Scroll (video), klik atau swipe (flyer) | ← →, Esc |
| 3C Terminal | 280 vh (pass 180, recap 100) | P | Pin runway | Scroll melangkah | ← →, swipe, klik pass samping |
| 4 Boutique | 450 vh (headline 150, ruang ganti 300) | S lalu P | Pin di ruang ganti | Scroll mengganti outfit | Klik video, ← → |
| 5 Campus Library | 300 vh | S | Tidak | Scroll, klik buku | Flipbook: ← →, drag, swipe |
| 6 Radio Booth | 250 vh | S | Tidak | Scroll, klik player | Tab |
| 7 Archive Room | 250 vh, daftar bergulir sendiri | S | Tidak | Scroll, klik baris | ↑ ↓ |
| 8 Mailbox | 150 vh | S | Tidak | Scroll | Tab |

Total sekitar 3.600 vh, ditambah walk strip sekitar 350 vh, kira-kira **3.950 vh (sekitar 40 layar)**. Cocok dengan alur 3 sampai 5 menit di 5.4.

**Aturan input:**

- **Swipe horizontal hanya di dalam area carousel.** Halaman memakai touch-action: pan-y agar scroll vertikal tidak bentrok.

- **Kontrol runway 3A dan 3C:** dua tombol panah stiker 44 px di bawah meja atau gerbang, titik 1/3 sampai 3/3, swipe horizontal, klik kartu samping untuk memilihnya, keyboard ← →.

- **Video:** latar dan reveal diputar otomatis **tanpa suara**, hanya saat terlihat (IntersectionObserver, playsinline). Suara tidak pernah menyala sendiri. Semua video kecuali intro.mp4 diunggah tanpa trek audio. Tombol pause di semua video, tombol unmute dan CC hanya di intro.mp4. Maksimal 6 video aktif serentak.

- **Keyboard:** ↓, PageDown, Space menggulir seperti biasa. ← → hanya bekerja di dalam carousel yang fokus. Esc menutup overlay. Tab tidak boleh terjebak di section yang di-pin.

- **Opening:** OPEN diingat selama sesi, refresh tidak mengunci lagi. *Back to the locker* tidak mengunci ulang.

- **Tombol Back browser** menutup overlay tanpa mengubah posisi scroll. Back dari posisi chapter kembali ke chapter sebelumnya, bukan ke Opening.

**Lapisan paralaks (kecepatan relatif terhadap scroll):**

| **Lapisan** | **Isi** | **Kecepatan** |
| --- | --- | --- |
| Langit dan skyline jauh | Awan kertas, landmark siluet, pesawat kecil | 0,2× |
| Latar tengah | Dinding, bangunan, rak | 0,5× |
| Jalur dan doll | Garis jahitan, doll (tetap 35% dari kiri di desktop) | 1× terhadap jalur |
| Props tengah | Meja, konter, mesin | 1× |
| Props depan | Hanger, tanaman, pot, pinggir kertas | 1,3× |
| Teks | Headline dan narasi | 0,9× (Chapter 1: paling lambat) |

Paralaks mouse hanya di desktop. Layar sentuh, reduced motion, dan Calm mode: paralaks mati, lapisan diam.

### 6.3 World Set tiap chapter (DF)

| **Chapter** | **Dinding dan lantai** | **Gantungan dan langit** | **Props darat dan air** | **Edge Tab (label chapter berikutnya)** |
| --- | --- | --- | --- | --- |
| **0 Paper School** (di luar, setelah 0.6) | Dinding kertas handmade putih kebiruan, lantai hijau pastel dengan lipatan, jalur bata blush | Dua awan berwajah, pesawat kertas kecil bertali, jam sekolah | Rumput, bunga kecil, satu pohon sakura kertas, bangku | Label kertas datar putih *Personal Brand* |
| **1 The Blank Page** | Putih murni, tanpa garis, tanpa lantai | Klip kertas berayun | Staples, lembar dokumen | Label kertas krem berwarna newsprint |
| **2 Newsroom** | Lihat tabel Warna dunia tiap chapter (PB 5.2) dan Penerapan per chapter (DF 28.4) | Lembar koran bertali, lampu meja, jam berdetik | Meja redaksi, roller mesin cetak, tumpukan koran, mesin tik | Tenda café mini, salib klinik mini, pesawat kertas mini |
| **3.0 Lobby** | Lihat tabel Warna dunia tiap chapter (PB 5.2) dan Penerapan per chapter (DF 28.4) | Gelembung notifikasi melayang (salah satunya *1 ♥*), awan | Tiga pintu: papan menu café, pintu kaca klinik, gerbang keberangkatan | Label kertas apricot *3A* |
| **3A Café** | Lihat tabel Warna dunia tiap chapter (PB 5.2) dan Penerapan per chapter (DF 28.4) | Papan menu kapur, tas Go-Food, lampu gantung, lonceng pintu | Konter, mesin kopi, tiga cangkir. Jendela dengan sepeda pengantar Go-Food melintas | Label kertas blush *3B* |
| **3B Clinic** | Lihat tabel Warna dunia tiap chapter (PB 5.2) dan Penerapan per chapter (DF 28.4) | Cermin vanity berlampu, papan promo, resep dokter | Kursi treatment, botol serum, tanaman. Kilau glitter halus | Label kertas sky-pastel *3C* |
| **3C Terminal** | Lihat tabel Warna dunia tiap chapter (PB 5.2) dan Penerapan per chapter (DF 28.4) | **Pesawat kertas besar bertali** (pembesaran motif dari Paper School), papan jadwal flip, awan | Gerbang, koper, siluet Ka’bah dan Masjidil Haram (tenang dan hormat). **Laut pastel dengan kapal layar kertas** di belakang landasan | Label kertas dusty-rose *Chapter 04* |
| **4 Boutique** | Lihat tabel Warna dunia tiap chapter (PB 5.2) dan Penerapan per chapter (DF 28.4) | Rak hanger, label harga berkibar, lampu gantung champagne | Manekin, empat ruang ganti, pouf beludru, tas belanja | Label kertas sepia *Chapter 05* |
| **5 Campus Library** (sepia lalu berwarna) | Dinding aged-paper handmade, lantai walnut | Lampu baca, pita kaset | Rak buku, tangga, kucing kertas tidur, jendela dengan bukit dan pohon | Label kertas plum *Chapter 06* |
| **6 Radio Booth** | Dinding plum-night dan aubergine dengan garis samar, lantai berry | Lampu ON AIR, panel busa kertas | Mikrofon besar, VU meter, rak, piala kecil | Label kertas honey *Chapter 07* |
| **7 Archive Hall** | Dinding warm-grey dan aged-paper handmade, lantai honey | Lampu gantung, tab indeks bergoyang | Laci katalog, lemari berkas, kotak arsip | Label kertas blush-lilac *Chapter 08* |
| **8 Mailbox (Paper School)** | Dinding cotton-candy gradient handmade, lantai hijau pastel dan jalur bata yang sama dengan 0.7 | Awan berwajah, pesawat kertas, bintang kertas berkelip | Loker berlabel washi, amplop, **jejak sepatu hitam dari 0.7** | Tidak ada (akhir) |

Prinsip: dinding kertas handmade dan pita tepi adalah **benang merah** (selalu ada kecuali Chapter 1), sementara lantai, warna, dan props berganti seperti biome di referensi.

### 6.4 Peta dunia: Paper Town (DF)

Semua tempat adalah lokasi dalam satu kota kertas, dilewati **satu garis jahitan putus-putus** dari Chapter 0 sampai 8 yang melengkung kembali ke sekolah (perjalanan berbentuk lingkaran, seperti referensi). Ilustrasi **peta Paper Town** dibuat sekali dan dipakai di empat tempat: (1) INDEX bergambar, (2) mini-map di HP, (3) latar halaman loading, (4) gambar share link (OG image).

| **#** | **Tempat** | **Wilayah** | **Landmark siluet** | **Mulai terlihat di** |
| --- | --- | --- | --- | --- |
| 0 | Locker Hallway | Paper School (awal dan akhir) | Gedung sekolah dengan jam | Strip 7→8 (jauh) |
| 1 | Editor’s Desk | Office Block | Gedung putih polos tanpa tekstur (satu-satunya bangunan tanpa grain) | Strip 0→1 |
| 2 | Newsroom | Press Tower | Menara dengan roller mesin cetak dan jam | Strip 0→1 (jauh) |
| 3 | Creator Trilogy | Creator Plaza | Tenda café, salib klinik, gerbang bandara berdampingan | Jendela di 2.1 |
| 4 | Boutique | Fashion Row | Kanopi dusty-rose dan manekin | Strip 2→3 (jauh) |
| 5 | Campus Library | Memory Hill | Perpustakaan **sepia** di atas bukit | Jendela di 3.0 (jauh, sepia) |
| 6 | Radio Booth | Radio Tower | Menara dengan lampu merah berkedip | Strip 3C→4 |
| 7 | Archive Room | Archive Hall | Fasad laci katalog | Strip 4→5 |
| 8 | Mailbox | Kembali ke Paper School | Loker berlabel *Reserved for: your story* | Strip 6→7 (jauh) |

**Aturan skyline:** landmark hanya terlihat lewat **jendela, pintu, atau walk strip**. Skyline tidak pernah menimpa konten, dan Chapter 1 tidak punya skyline. Perpustakaan sepia yang terlihat kecil dari jauh sejak Chapter 3 membuat *rewind* di 5.1 terasa seperti janji yang ditepati.

### 6.5 Walk strip: jalan di antara tempat (DF)

Zona scroll mode D (sekitar 50 vh) tempat doll berjalan di garis jahitan melewati skyline, sebelum robekan atau wipe terjadi. Mekanik transisi tidak diubah, hanya diberi jalan di depannya.

| **Transisi** | **Mekanik** | **Walk strip** | **Benda dibawa** | **Skyline** |
| --- | --- | --- | --- | --- |
| 0 → 1 | Doll menarik kertas sobek 101 (0.6) | **Frame 0.7:** doll menapak, sepatu hitam meninggalkan jejak di garis jahitan, papan *Chapter 01* muncul | Kalung ID | Office Block, Press Tower jauh |
| 1 → 2 | Lembar Independen Media membesar menjadi koran (1.6) | Tidak ada strip | Dokumen | Press Tower |
| 2 → 3 | Robekan 202 (2.9) | Jalan dengan kios kecil: tenda café, salib klinik, pesawat kertas (pratinjau trilogi) | Disc terakhir | Creator Plaza |
| 3.0 → 3A | Pintu geser | Tidak ada | Cangkir | n/a |
| 3A → 3B | Wipe tirai | Tidak ada | Cangkir menjadi botol serum | n/a |
| 3B → 3C | Wipe tirai | Tidak ada | Stempel menjadi cap paspor | n/a |
| 3C → 4 | Robekan 303 | Doll menarik koper menyusuri jalan dari gerbang ke Fashion Row, **melewati pantai pastel dengan kapal kertas** | Koper | Fashion Row, Radio Tower (lampu merah) |
| 4 → 5 | Robekan 404 + rewind (5.1) | **Arah jalan terbalik:** doll berjalan ke kiri dalam sepia, pita kaset berputar mundur | Label harga | Memory Hill sepia, Archive Hall |
| 5 → 6 | Robekan 505 | Doll berjalan sambil memasang headphone | Headphone | Radio Tower |
| 6 → 7 | Tirai menutup 700 ms | Tidak ada | Kotak arsip | Archive Hall |
| 7 → 8 | Robekan 606 | Jalan **melengkung pulang**, Paper School muncul, **jejak sepatu dari 0.7 masih ada di jalan** | Kartu kosong | Paper School |

Jejak sepatu dari 0.7 yang muncul lagi di strip 7→8 adalah balasan emosional perjalanan: pengunjung sadar doll sudah mengelilingi kotanya dan kembali ke awal.

### 6.6 Papan nama tempat (label kertas) (DF)

Tiap tempat diberi **label kertas** miring dengan sinar potongan kertas yang menancap di garis jahitan saat doll tiba (diadaptasi dari referensi). Baris 1: DM Mono, minimal 11 px, huruf besar. Baris 2: Shantell Sans 600, lebih besar. Muncul dengan *sticker pop* 320 ms (reduced motion: langsung tampil). Di Chapter 1 papan dibuat datar polos tanpa grain. Warna sticky mengikuti palet chapter (6.3). Papan ini menggantikan label PODCAST di 6.1.

| **Frame** | **Baris 1** | **Baris 2** |
| --- | --- | --- |
| 0.7 | START HERE | Paper School |
| 1.1 | CHAPTER 01 · THE EDITOR’S DESK | Personal Brand |
| 2.1 | CHAPTER 02 · THE NEWSROOM | Writing Portfolio |
| 3.0.1 | CHAPTER 03 · THE CREATOR TRILOGY | Content Marketing Specialist |
| 3A.1 | 3A · THE CAFÉ | Elspresso |
| 3B.1 | 3B · THE GLOW CLINIC | Elsthetic & Aishi Beauty |
| 3C.1 | 3C · THE TERMINAL | Karamina Tour |
| 4.1 | CHAPTER 04 · THE BOUTIQUE | Example Strategy |
| 5.1 | CHAPTER 05 · THE CAMPUS LIBRARY | Project Campus |
| 6.1 | CHAPTER 06 · THE RADIO BOOTH | Podcast |
| 7.1 | CHAPTER 07 · THE ARCHIVE ROOM | Archive |
| 8.1 | CHAPTER 08 · THE MAILBOX | Contact |

INDEX tetap sembilan item sesuai brief. Papan memakai nama tempat, INDEX memakai nama chapter.

**Edge Tab:** pada 20 persen terakhir tiap chapter, label kertas chapter berikutnya mengintip dari tepi kanan layar (seperti Featured Work di referensi), kecuali di Chapter 8. Hanya dekoratif (aria-hidden), tidak bisa diklik, hilang di Calm mode.

### 6.7 Tiga babak di layar (DF)

- **Chip babak** tampil permanen di kiri atas (DM Mono 11 px). Saat melewati batas babak chip berganti dengan efek papan flip 300 ms. Disembunyikan di Opening dan Chapter 8.

- **Kartu babak** muncul sebentar (1,5 detik, bisa dilewati dengan scroll) di frame **3.0.1** dan **5.1**. Babak I tidak perlu kartu karena sudah diwakili Opening.

- Aksen warna babak dipakai pada highlight tipografi, titik INDEX, dan garis progres.

### 6.8 HUD: zona layar (DF)

| **Zona** | **Elemen** |
| --- | --- |
| Kiri atas | Chip babak |
| Tengah atas | Tombol INFO (Chapter 3), pin Awareness / Engagement / Conversion |
| Kanan atas | INDEX (peta Paper Town) |
| Kiri bawah | Stiker Quick Look *In a hurry? Take the shortcut* |
| Kanan bawah | CREDIT, Cassette, Video Reveal |
| Tepi kiri (desktop) | Rel progres: garis jahitan vertikal tipis dengan kepala doll kecil. Disembunyikan di Opening dan Contact |
| Tengah bawah (HP) | Doll |

Tombol INDEX mengambang disembunyikan otomatis saat section yang punya tombol sendiri sedang terlihat (lihat 10.2).

## 7. Karakter Doll: Character Bible (DF)

### 7.1 Character sheet (DF)

| **Atribut** | **Spesifikasi** |
| --- | --- |
| Tinggi di layar | 22 sampai 28% tinggi viewport (maksimal 320 px di layar 1440 px ke atas) |
| Gaya gambar | Gambar tangan dengan tepi kertas putih 2 sampai 3 px dan bayangan tipis, agar siluet terbaca di warna latar apa pun |
| Konstruksi | Enam lapisan: kepala dan hijab, torso, lengan kiri, lengan kanan, rok atau celana, kaki dan sepatu. Brad (paku lipat) selalu terlihat; tab lipat di bahu hanya terlihat saat ganti kostum (DV 4.8) |
| Wajah | Sederhana: mata titik, blush bulat, senyum kecil. Hijab tidak pernah menutupi wajah |
| Selalu sama | Hijab, **sepatu hitam di semua kostum**, proporsi tubuh |
| Yang berganti | Pakaian, warna dan gaya hijab, aksesori, prop |
| Ekspresi (6) | Neutral, smile, curious, surprised, proud, focused. Ekspresi hanya mengganti lapisan kepala |
| Hubungan dengan foto | Foto cut-out di Chapter 1 adalah Jassinta yang asli. Doll adalah versi kertasnya |
| Moda gerak | **Selalu berjalan.** Tidak naik kendaraan, agar jejak sepatu hitam tetap bermakna. Kendaraan hadir sebagai ambient |

### 7.2 Inventaris kostum (15 kostum) (DF)

Semua berhijab. Chapter 8 memakai ulang kostum Chapter 0.

| **#** | **Frame** | **Pakaian** | **Hijab** | **Aksesori dan prop** |
| --- | --- | --- | --- | --- |
| 1 | Ch.0 dan Ch.8 | Seragam santai pastel | Krem | Sepatu hitam, kalung ID |
| 2 | Ch.1 | Blazer pink pastel | Putih gading | Kalung ID |
| 3 | Ch.2 | Rompi reporter krem | Biru muda | Notes kecil |
| 4 | 3.0 | Kardigan pastel | Lilac | Ponsel |
| 5 | 3A | Apron barista di atas kardigan krem | Pashmina krem | Notes pesanan di saku |
| 6 | 3B | Jas klinik pink pastel | Blush | Name tag, pita kecil |
| 7 | 3C | Busana traveling sopan berlapis outer | Sky-blue dan selendang pastel | Paspor |
| 8 | 4 dasar | Blouse krem dan rok panjang | Dusty-rose | Koper |
| 9 | 4.7 Hard Selling | Gaun vintage lengan panjang | Dengan topi kecil | Tas kecil |
| 10 | 4.7 Entertainment | Setengah blazer kantor, setengah jaket kampus | Netral | Tidak ada |
| 11 | 4.7 Education | Blouse sederhana | Netral | Ponsel dengan gelembung DM |
| 12 | 4.7 Fun | Set warna cerah | Cerah | Kacamata hitam |
| 13 | Ch.5 | Jaket kampus abu pastel | Abu lembut | Ransel |
| 14 | Ch.6 | Blouse satin | Plum muda | Headphone |
| 15 | Ch.7 | Kardigan mustard pastel | Krem | Kotak arsip |

### 7.3 Matriks pose (hanya yang dipakai) (DF)

Pose dasar: idle, walk, point, hold, reach, jump, wave. Ditambah **peek, lift, nod**. Semua pose untuk semua kostum akan 105 gambar, dengan matriks ini cukup **31 kombinasi**.

| **Kostum** | **Pose** | **Jumlah** |
| --- | --- | --- |
| 1 Seragam | peek (0.5), walk, wave, hold surat (Ch.8) | 4 |
| 2 Blazer | walk, idle, reach (ambil dokumen 1.6) | 3 |
| 3 Reporter | walk, idle | 2 |
| 4 Lobi | walk, hold ponsel, point ke pintu | 3 |
| 5 Café | idle, hold cangkir | 2 |
| 6 Klinik | hold botol, point ke flyer | 2 |
| 7 Traveling | walk, hold paspor | 2 |
| 8 Butik dasar | hold koper, reach ke hanger | 2 |
| 9 sampai 11 | idle (masing-masing) | 3 |
| 12 Fun | idle, jump | 2 |
| 13 Kampus | walk, reach ke headphone | 2 |
| 14 Siaran | nod, reach melepas headphone | 2 |
| 15 Arsip | lift kotak, idle | 2 |
| **Total** |  | **31** |

**Catatan produksi:** tiap kombinasi diekspor sebagai WebP transparan atau SVG berlapis, digerakkan dengan CSS transform. Siklus jalan 6 frame, 8 fps, ditambah gerak naik-turun tubuh 2 px. Ekspor 2× (tinggi sekitar 560 px), maksimal sekitar 80 KB per file. Hanya sprite chapter yang sedang dikunjungi yang dimuat. Pergantian kostum 450 ms: kostum lama meluncur keluar lewat tab bahu, kostum baru menempel.

### 7.4 Reaksi doll (DF)

| **Pemicu** | **Reaksi** |
| --- | --- |
| Diam lebih dari 8 detik | Berkedip tiap 4 detik, napas pelan (naik-turun 2 px) |
| Scroll cepat | Condong ke depan 3 derajat, kembali tegak setelah berhenti 1,5 detik |
| Hover atau fokus pada barang interaktif | Kepala menoleh ke barang itu |
| Klik atau tap doll | Lompat kecil 320 ms dan satu gelembung acak: *Hi!*, *Still here.*, *Keep scrolling →*. Klik kelima: berputar sekali, *Dizzy!* |
| Overlay terbuka | Mundur 40 px dan mengecil ke 90%, kembali saat overlay ditutup |
| Video atau podcast diputar | Mengangguk pelan |
| Tiba di papan nama tempat | Berhenti dan tersenyum 600 ms |
| Hasil tinggi (914 views, 30K+ views) | Ekspresi proud dan confetti kertas kecil |
| Hasil rendah (0 like, 24 views) | Ekspresi **curious**, bukan sedih. Angka kecil dibingkai sebagai bahan belajar |
| Reduced motion atau Calm mode | Doll diam, hanya berganti pose tanpa animasi |

### 7.5 Gelembung ucapan (doll berbicara) (DF)

Menjawab kelemahan referensi: narasi teks yang tipis. **Aturan:** maksimal satu gelembung per frame dan 9 kata. Shantell Sans, minimal 17 px di HP, di dalam gelembung kertas bertab. Muncul **sekali** saat pertama tiba, hilang saat scroll atau tap, tidak mengulang saat pengunjung kembali. Bukan sumber informasi penting (semua informasi penting tetap ada di teks halaman). role=note.

| **Frame** | **Gelembung (EN)** |
| --- | --- |
| 0.7 | *Okay, here we go.* |
| 1.1 | *That’s me. The non-paper version.* (menunjuk foto) |
| 1.2 | *Ten places. Hover to see my role.* |
| 2.1 | *Headlines first. Stories second.* |
| 2.5 | *Spin a disc. Read the story.* |
| 3.0.4 | *Pick a door. Any door.* |
| 3A.1 | *Day one. Small numbers, big lessons.* |
| 3B.2 | *I tested a lot here. Not everything worked.* |
| 3C.2 | *Same me. New lesson.* |
| 4.1 | *Time to dress for the content.* |
| 4.7 Hard Selling | *Hard sell, but make it vintage.* |
| 4.7 Entertainment | *Office or campus? Both.* |
| 4.7 Education | *Teaching, one DM at a time.* |
| 4.7 Fun | *Okay, let’s have fun.* |
| 5.1 | *Rewind. Where did it begin?* |
| 6.1 | *Shh. We’re on air.* |
| 7.1 | *Nothing hidden, remember?* |
| 8.1 | *One more thing: your story goes here.* |

Gelembung tambahan dari easter egg dan deep link ada di 8.2 dan 24.1.

## 4. Master Doll: Jassinta (DV)

### 4.1 Proporsi dan posisi sendi (DV)

Tinggi total H = 560 px (ekspor 2×), 0% di puncak hijab. Nilai dari tabel Portfolio Bible 5.10 diterjemahkan ke piksel.

| **Titik** | **% H** | **px** |
| --- | --- | --- |
| Dagu | 18% | 101 |
| Ujung drape hijab di leher | 25% | 140 |
| Bahu (brad) | 24% | 134 |
| Siku (brad) | 39% | 218 |
| Ujung tangan (brad) | 52% | 291 |
| Pinggul (pivot tersembunyi) | 54% | 302 |
| Lutut (brad) | 73% | 409 |
| Pergelangan kaki (brad) | 92% | 515 |
| Telapak sepatu | 100% | 560 |

| **Lebar** | **% H** | **px** |
| --- | --- | --- |
| Kepala dengan hijab | 18% | 101 |
| Tubuh termasuk lengan | 35% | 196 |
| Pinggul, celana lurus | 20% | 112 |
| Jarak brad bahu kiri ke kanan **[REF]** | 16% | 90 |
| Jarak brad siku **[REF]** | 24% | 134 |
| Jarak brad tangan **[REF]** | 33% | 185 |
| Jarak brad lutut dan pergelangan **[REF]** | 11% | 62 |

Semua jarak brad ±1% (dibaca dari gambar masterku). Kelas volume pakaian: ramping (pinggul sampai 22% H), regular (23 sampai 27%), lebar (28 sampai 34%).

### 4.2 Warna tubuh (DV)

| **Bagian** | **Hex** | **Catatan** |
| --- | --- | --- |
| Kulit | #E8B795 | Wajah, tangan, kaki. Tanpa gradient |
| Blush | #E9A39B, opasitas 60% | Bulat, diameter 22% lebar wajah |
| Garis luar | #1B1017 | T1 |
| Mata | #1B1017 | Titik, garis kelopak tipis di atas |
| Alis | #3A2A24 [BARU] | Garis lengkung tipis 1 px |
| Hidung | #D49A7B [BARU] | Titik 0,6% H |
| Mulut | #B5645F [BARU] | Garis lengkung tipis 1 px |
| Hijab model sheet | #1F1F1F | Hanya di model sheet dan favicon. Di situs mengikuti tabel kostum |
| Sepatu | #2E2E2E, sol dalam #E8B795 | Selalu hitam **[KUNCI]** |
| Brad | #BDBDBD, cincin #8A8A8A | Titik sorot putih 1 px |
| Tepi stiker | #FFFFFF, bayangan #E6E6E6 | 2% H |

### 4.3 Wajah: kisi penempatan (DV)

Wajah tampak = oval bulat selebar ±12% H dan setinggi ±11% H di dalam bukaan hijab. Posisi dihitung dalam persen tinggi wajah (0% = tepi atas bukaan hijab).

| **Fitur** | **Posisi** | **Ukuran** |
| --- | --- | --- |
| Mata | 50% tinggi wajah, jarak antarmata 46% lebar wajah | Titik diameter 11% lebar wajah, garis kelopak 14% lebar wajah di atasnya |
| Alis | 38% tinggi wajah | 16% lebar wajah, lengkung tipis |
| Hidung | 62% | Titik kecil |
| Blush | 68%, di bawah luar mata | Diameter 22% lebar wajah |
| Mulut | 84% | Lebar 18% lebar wajah, busur naik 2 px |

### 4.4 Hijab (DV)

- **Bentuk dasar [REF]:** kain menutup rambut dan leher, bukaan wajah oval, kain melilit di leher menjadi gulungan tebal dengan 3 sampai 4 lipatan miring, ujung kain jatuh sampai 25% H.

- **Garis lipat:** 2 sampai 3 garis lengkung di dahi sampai samping (T4), 3 sampai 4 garis lipatan di gulungan leher.

- **Empat gaya** (bentuk berganti per kostum, bagian 7):

| **Gaya** | **Bentuk** | **Dipakai di** |
| --- | --- | --- |
| Pashmina melilit | Gulungan leher tebal, ujung jatuh ke dada | Kostum 1 sampai 15 (default) **[REF]** |
| Segitiga rapi | Titik segitiga di dagu, tanpa gulungan, tepi tegas | Kostum 6 klinik |
| Pashmina + selendang | Gulungan leher dan selendang diagonal menyilang bahu kiri ke pinggul kanan sampai 62% H | Kostum 7 terminal |
| Hijab + topi atau headphone | Gulungan leher, aksesori di atas kepala | Kostum 9, 14 |

- Hijab tidak pernah menutupi wajah. Warna mengikuti tabel kostum.

### 4.5 Tangan (DV)

Bentuk dasar sarung tangan sederhana (mitten) dengan satu tonjolan ibu jari **[REF]**. Brad tangan ada di punggung tangan, 25% dari pergelangan.

| **Bentuk** | **Gambar** | **Dipakai untuk** |
| --- | --- | --- |
| Terbuka (default) | Mitten dengan ibu jari kecil | idle, wave |
| Menggenggam | Mitten melengkung, ibu jari di atas benda | hold, lift |
| Menunjuk | Mitten dengan satu jari telunjuk panjang 40% panjang tangan | point |
| Menjangkau | Mitten terbuka lebar, jari merenggang | reach |
| Memegang tepi | Mitten dengan ibu jari menekan, untuk kertas sobek | peek |

Benda yang dipegang menempel di **slot tangan**: titik 30% dari pergelangan ke ujung tangan. Benda digambar di lapisan atas tangan agar jari terlihat memegang.

### 4.6 Kaki dan sepatu (DV)

- Kaki lurus, kulit #E8B795 hanya terlihat di bukaan sepatu (3 px). Pada celana panjang kaki tertutup kain sampai 92% H.

- Sepatu flat berujung bulat seperti kacang almond: lebar 11% H (depan), panjang telapak 14% H pada tampak samping, tinggi 4% H, garis sol 1,5 px.

- Variasi bentuk : flat (default), sneakers rendah hitam dengan strip sol putih #FFFDF9 (kostum 12 dan 13). **Warna atas selalu hitam #2E2E2E [KUNCI]**.

- Rok dan gaun (kostum 1, 8, 9, 11): betis tertutup kaus kaki #FFFDF9 dari hem sampai 92% H, brad pergelangan di atas kaus kaki.

### 4.7 Brad (paku lipat) (DV)

Sepuluh brad **selalu terlihat di semua kostum**, digambar **di atas kain**: bahu, siku, tangan, lutut, pergelangan kaki (kiri dan kanan). Diameter 2,4% H (13 px), cincin gelap 1 px, sorot putih 1 px. Brad siku dan lutut diberi cincin gelap lebih besar (diameter 4,5% H) sebagai lekukan kain **[REF]**. Pola, saku, dan kancing tidak boleh menimpa area 16 px di sekitar brad. Pinggul memakai pivot tersembunyi di bawah hem baju (tidak digambar).

### 4.8 Tab lipat (DV)

Setiap lapisan pakaian punya dua tab kecil di bahu dan satu di pinggang (persegi 1,5% H, warna sama dengan kain, lebih gelap 8%). **Hanya terlihat saat ganti kostum (450 ms)**, tersembunyi di bawah garis luar pada kondisi diam.

### 4.9 Turnaround: tiga tampak (DV)

| **Tampak** | **Kode** | **Isi gambar** | **Dipakai** |
| --- | --- | --- | --- |
| Depan | **F** | Master. Wajah penuh, kedua lengan, brad lengkap | idle, hold, point, reach, jump, wave, nod, ekspresi |
| Samping (menghadap kanan) | **W** | Tubuh menyempit ke 24% H, hijab profil dengan gulungan leher di sisi, satu mata, satu blush, hidung sedikit menonjol 0,8% H, mulut pendek. Lengan dekat kamera (N) menimpa badan, lengan jauh (J) sebagian terlihat 60%. Brad: bahu N, siku N, tangan N, bahu J terlihat setengah | walk, reach, lift. Menghadap kiri dengan flip horizontal |
| Belakang | **B** | Tanpa wajah. Hijab dari belakang dengan lipatan tengah vertikal. Detail punggung kostum (belahan blazer, ikatan apron, tali ransel). Brad bahu, siku, tangan terlihat | Peek keluar, jalan menjauh di strip 4 ke 5 (dengan flip), siluet di peta |

**Putar kertas:** perubahan F ke W atau B memakai animasi paper-turn 240 ms (scaleX 1 ke 0,05, ganti lapisan, kembali ke 1), bukan gambar perantara. Tidak ada tampak tiga perempat untuk doll.

### 4.10 Struktur lapisan (DV)

Enam lapisan **[KUNCI]**: kepala dan hijab, torso, lengan kiri, lengan kanan, rok atau celana, kaki dan sepatu. Ditambah lapisan opsional: aksesori, prop pegangan, lapisan wajah (6 ekspresi), brad (selalu di atas).

Penamaan: doll_{kostum#}_{nama}_{tampak}_{pose}.webp, contoh doll_05_cafe_F_hold-cup.webp, doll_03_reporter_W_walk-1.webp sampai walk-6. Wajah: face_{ekspresi}_{F|W}.webp. Brad: brad_{shoulder|elbow|hand|knee|ankle}.svg. Ekspor 2× dan 1×, WebP transparan, maksimal ±80 KB per file.

### 4.11 Bayangan doll (DV)

Elips tipis di lantai, lebar 40% lebar sepatu ganda, tinggi 6 px, #1B1017 pada opasitas 18%, ikut skala doll. Saat lompat mengecil ke 70% dan memudar ke 10%.

## 5. Enam Ekspresi (DV)

Hanya lapisan wajah yang berganti. Posisi fitur mengikuti kisi 4.3. Ekspresi digambar untuk tampak F dan W.

| **Ekspresi** | **Mata** | **Alis** | **Mulut** | **Blush** | **Kepala** | **Dipakai** |
| --- | --- | --- | --- | --- | --- | --- |
| **neutral** | Titik normal, garis kelopak | Datar 0° | Garis lurus 12% lebar wajah, naik 1 px | 60% | 0° | Idle, jalan |
| **smile** (master) | Titik normal | Lengkung natural | Busur 18% lebar, naik 2 px | 60% | 0° | Default, wave, peek |
| **curious** | Titik bergeser 1 px ke atas dan ke arah miring | Alis kiri layar naik 10°, kanan 0° | Busur kecil 10% lebar, miring 3° | 60% | Miring 6° | Angka kecil (0 like, 24 views), klik karya |
| **surprised** | Titik +20% diameter dengan sorot putih 1 px | Naik 12° | Oval kecil, lebar 6%, tinggi 9% tinggi wajah | 70% | Mundur 2 px | Gelembung kejutan, deep link, easter egg |
| **proud** | Busur tertutup (^ ^) lebar 14% wajah | Naik 4° | Senyum lebar terbuka bentuk D, lebar 22%, isi #B5645F 40% | 90% | Dagu naik 2° | 914 views dan 30K+ views, bersama confetti kertas |
| **focused** | Titik 10% lebih kecil | Turun ke dalam 6° | Garis lurus 10% lebar | 50% | 0°, torso condong 2° | Menulis, memegang notes, Radio Booth |

**Dizzy (E1):** wajah surprised ditambah tiga bintang kertas kecil (5% H) berputar di atas hijab selama 600 ms. Bukan ekspresi ke-7, hanya dekor.

## 6. Pose dan Sudut Sendi (DV)

### 6.1 Aturan sudut (DV)

- Sudut diukur dari garis vertikal turun. **Tampak F:** positif = menjauh dari badan atau naik. **Tampak W:** positif = ke depan arah hadap, negatif = ke belakang. Siku dan lutut hanya menekuk (0 sampai maksimum).

- Rentang siklus jalan mengikuti Portfolio Bible (bahu ±22°, siku 0 sampai 25°, pinggul ±18°, lutut 0 sampai 18°, pergelangan ±8°) **[KUNCI]**.

- Pose hero (point, reach, wave, hold, lift) memakai **rentang diperluas**: bahu sampai 150°, siku sampai 90°. Perubahan ini perlu agar tangan bisa mencapai wajah, rak, dan kotak, dan tetap mudah karena sendinya brad yang bisa berputar penuh.

- KL = kiri layar, KR = kanan layar. N = sisi dekat kamera, J = sisi jauh (tampak W).

### 6.2 Tabel pose (DV)

| **Pose** | **Tampak** | **Bahu** | **Siku** | **Pinggul** | **Lutut** | **Torso dan kepala** | **Tangan** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **idle** | F | KL +4°, KR +4° | 4° / 4° | 0° | 0° | Tegak. Napas naik-turun 2 px, kedip tiap 4 detik | Terbuka |
| **point** | F | KR +70°, KL +4° | KR 10°, KL 4° | 0° | 0° | Torso 3° ke arah tunjuk, kepala menoleh 4° | Menunjuk |
| **hold** (dua tangan) | F | +10° / +10° | 75° / 75° | 0° | 0° | Tegak, kepala menunduk 3° | Menggenggam, tangan bertemu di 44% H |
| **hold-1** (cangkir, ponsel, paspor, botol, koper) | F | KR +25°, KL +4° | KR 80°, KL 4° | 0° | 0° | Kepala miring 3° ke benda | Menggenggam KR |
| **reach** | W | N +95°, J −15° | N 10°, J 5° | N +10°, J −10° | N 10°, J 4° | Torso +6° ke depan, kepala +3° | Menjangkau |
| **jump** | F | Tekuk: +10° ×2. Udara: +35° ×2 | 15° ×2 | 0° | Tekuk 18° ×2, udara 12° ×2 (tuck) | Naik 0,12 Hd (67 px), durasi 320 ms: 80 tekuk, 160 udara, 80 mendarat | Terbuka |
| **wave** | F | KR +150°, KL +4° | KR berosilasi 20° ke 50° (periode 600 ms) | 0° | 0° | Kepala miring 4° ke KR | Terbuka |
| **peek** | F potong (0 sampai 35% H) | Satu lengan KR +40° | 35° | n/a | n/a | Kepala miring 6°, ekspresi smile | Memegang tepi, brad tangan di tepi kertas |
| **lift** | W | N +40°, J +40° | 55° / 55° | N +6°, J −6° | 10° / 10° | Torso −3° (menyeimbangkan), kotak di 50% H | Menggenggam di bawah kotak |
| **nod** | F | Idle | Idle | 0° | 0° | Kepala translateY +2 px dan rotateX 6°, 300 ms turun, 300 ms kembali | Idle |

### 6.3 Siklus jalan (W), enam bingkai, 8 fps (DV)

Satu langkah = 6 bingkai. Sisi A dan B bergantian. Gerak naik-turun tubuh amplitudo 2 px.

| **Bingkai** | **Fase** | **Pinggul A / B** | **Lutut A / B** | **Pergelangan A / B** | **Bahu A / B (berlawanan dengan pinggul)** | **Tubuh (y)** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Kontak A | +18° / −18° | 0° / 6° | +8° / −8° | −22° / +22° | 0 px |
| 2 | Turun A | +10° / −12° | 8° / 14° | 0° / −6° | −12° / +12° | +2 px |
| 3 | Lewat A | 0° / 0° | 0° / 18° | 0° / −4° | 0° / 0° | +1 px |
| 4 | Kontak B | −18° / +18° | 6° / 0° | −8° / +8° | +22° / −22° | 0 px |
| 5 | Turun B | −12° / +10° | 14° / 8° | −6° / 0° | +12° / −12° | +2 px |
| 6 | Lewat B | 0° / 0° | 18° / 0° | −4° / 0° | 0° / 0° | +1 px |

Siku selama jalan: 8° (lengan depan) dan 4° (lengan belakang). Kecepatan jejak sepatu 90 px per jejak (token Jejak sepatu). Bayangan bergerak mengikuti telapak.

### 6.4 Matriks gambar (31 kombinasi dari Portfolio Bible, ditambah 3 tampak belakang) (DV)

| **Kostum** | **Pose dan tampak** | **Jumlah** |
| --- | --- | --- |
| 1 Seragam | peek F, walk W (6), wave F, hold surat W | 4 |
| 2 Blazer | walk W, idle F, reach W (ambil dokumen) | 3 |
| 3 Reporter | walk W, idle F | 2 |
| 4 Lobi | walk W, hold-1 ponsel F, point ke pintu F | 3 |
| 5 Café | idle F, hold-1 cangkir F | 2 |
| 6 Klinik | hold-1 botol F, point ke flyer F | 2 |
| 7 Traveling | walk W, hold-1 paspor F | 2 |
| 8 Butik dasar | hold-1 koper F, reach ke hanger W | 2 |
| 9, 10, 11 | idle F masing-masing | 3 |
| 12 Fun | idle F, jump F | 2 |
| 13 Kampus | walk W, reach ke headphone W | 2 |
| 14 Siaran | nod F, reach melepas headphone W | 2 |
| 15 Arsip | lift W, idle F | 2 |
| **Total** |  | **31** |
| tampak B | Kostum 1 (OG image dan peta), kostum 5 (ikatan apron), kostum 13 (ransel) | +3 |

Walk W dihitung satu kombinasi (enam bingkai satu set).

## 7. Katalog Kostum (17) (DV)

Semua berhijab, sepatu hitam, brad terlihat. Hex pakaian dari Portfolio Bible 5.10 **[KUNCI]**. Detail bentuk di bawah adalah arahan gambarnya. Bayangan memakai rumus 2.2. Hem dalam persen H dari puncak hijab.

### K16. Varian sepia (strip 4 ke 5)  (DV)

K13 berjalan ke kiri (W flip), enam bingkai jalan dipakai ulang. Filter: sepia(0,9) saturate(0,7) brightness(0,97) contrast(0,95). Tidak ada gambar baru. Warna kembali penuh dengan fade 600 ms saat buku pertama dibuka (frame 5.7).

### K17. Ikon kepala (favicon, OG, peta)  (DV)

Kepala dan hijab saja, hijab hitam #1F1F1F, wajah smile. Ukuran 32 px: tanpa alis dan hidung, mata dua titik, blush dua titik, senyum satu garis, tepi putih 1 px. Ukuran 180 dan 512 px: wajah lengkap. Kanvas persegi dengan jarak tepi 8%.

### 7.1 Cek kontras kostum terhadap dunia (DV)

| **Dunia** | **Dinding** | **Kostum** | **Risiko** | **Tindakan** |
| --- | --- | --- | --- | --- |
| Ch0 dan Ch8 | Biru kertas, cotton-candy | K1 | Rok biru muda menyatu di ujung kanan Ch8 | Andalkan tepi putih 2% H |
| Newsroom Bay 1 | Merah #E80838 | K3 | Rendah | n/a |
| Newsroom Bay 2 | Aqua ke biru | K3 | Hijab #BFE3F5 lemah | Uji, bila perlu hijab K3 jadi #FFFDF9 |
| Lobi | Lilac | K4 | Hijab lilac menyatu | Sudah wisteria #A98BDA |
| 3A | Hijau #066838 | K5 | Rendah | Apron krem dan list hijau |
| 3B | Putih marble | K6 | Jas pink di marble | Cukup, tepi ink |
| 3C | Hijau #066838 | K7 | Rendah | Gading, bukan hijau |
| Ch4 | Burgundy #881838 | K8 | Rok champagne dan chair rail champagne sejajar | Rok di bawah chair rail (lantai), tidak bertumpuk |
| Ch6 | Plum-night | K14 | Rendah, blouse orchid kontras | n/a |
| Ch7 | Warm-grey, lantai honey | K15 | Kardigan kuning dan lantai kuning | Sudah mustard #D9A441 |

## 8. Lapisan Hidup: Ambient dan Easter Egg (DF)

### 8.1 Ambient loop per chapter (dibuat di semua 12 adegan) (DF)

Referensi punya tiga lapis animasi: scroll, ambient, hover. Lapisan ambient membuat dunia tetap hidup saat pengunjung berhenti membaca.

| **Chapter** | **Ambient loop** |
| --- | --- |
| 0 | Lampu koridor berkedip pelan, serpihan debu kertas, satu loker bergetar 2 derajat acak tiap sekitar 10 detik. Di luar: awan bergeser, pesawat kertas kecil bergoyang di talinya, rumput bergoyang |
| 1 | Dokumen bernapas 0,5 px, klip kertas berayun. **Tanpa grain** (aturan kanvas putih) |
| 2 | Roller mesin cetak berputar, jam berdetik, serpihan newsprint jatuh pelan |
| 3.0 | Gelembung notifikasi kecil melayang, salah satunya bertuliskan *1 ♥* (lelucon yang jujur) |
| 3A | Uap cangkir, lonceng pintu, sepeda pengantar Go-Food melintas di jendela tiap 20 detik |
| 3B | Kilau glitter di cermin, lampu vanity berdenyut, label kemasan bergoyang |
| 3C | Pesawat kertas melintas, papan jadwal berputar, awan pastel bergeser, ombak dan kapal kertas bergerak pelan |
| 4 | Hanger berayun, label harga berkibar, tirai ruang ganti beriak |
| 5 | Debu dalam cahaya sepia, halaman buku di kejauhan terbalik sendiri, kucing kertas tertidur di rak atas |
| 6 | VU meter bergerak, gelombang suara melingkar saat diputar. ON AIR tetap hanya menyala saat player berjalan |
| 7 | Laci bergeser sedikit, tab indeks bergoyang, satu kartu jatuh tiap beberapa detik |
| 8 | Surat melayang, bintang kertas berkelip, doll melambai tiap 6 detik |

**Aturan ambient:** hanya CSS transform dan opacity (tanpa JS per frame). Berhenti saat di luar layar (IntersectionObserver) dan saat tab tersembunyi. Mati di Calm mode dan reduced motion. **Maksimal 3 loop aktif bersamaan.**

### 8.2 Easter egg (lima yang dibuat) (DF)

| **ID** | **Chapter** | **Pemicu** | **Reaksi** | **Status** |
| --- | --- | --- | --- | --- |
| E1 | Semua | Klik doll 5 kali | Doll berputar sekali, gelembung *Dizzy!* | Dibuat |
| E2 | 0 | Klik pelat nomor loker 01 sampai 05 berurutan | Hujan confetti kertas, *You found the combo.* | Dihapus (terlalu tersembunyi) |
| E3 | 2 | Putar disc terlalu cepat | Efek goresan, stiker *BREAKING: you scrolled too fast* | Dihapus (deteksi gestur rawan salah) |
| E4 | 3A | Klik tas Go-Food | Tas berayun, gelembung *1 like. Still counts.* | Dibuat |
| E5 | 3C | Klik pesawat kertas | Pesawat terbang melintas layar, gelembung *Next stop: your campaign.* | Dibuat |
| E6 | 5 | Klik kucing kertas di rak atas | Kucing mengangkat kepala 400 ms, gelembung *Shh, library.* | Dibuat |
| E7 | 6 | Klik mikrofon | Lampu ON AIR berkedip, *Testing, 1, 2.* | Dihapus (dekoratif tanpa cerita) |
| E8 | 7 | Klik kartu kosong *Your project goes here.* | Kartu terbang ke Contact (sekaligus jalan pintas) | Dibuat |

Penghitung opsional di peta INDEX: *Secrets found: 2 of 5*. **Aturan egg:** tidak pernah menutupi konten, bisa dijangkau keyboard (tombol dengan aria-label), tanpa suara, dikerjakan paling akhir.

### 8.3 Suara (DF)

**Tidak dibuat.** Toggle suara tidak ada. Satu-satunya suara: intro.mp4 (hanya saat diklik) dan pemutar Spotify (hanya saat diklik).

## 10. Aturan Global (DF)

### 10.1 Struktur one-page dan daftar isi (DF)

**Urutan section:** OPENING → PERSONAL BRAND → WRITING PORTFOLIO → CONTENT MARKETING SPECIALIST → EXAMPLE STRATEGY → PROJECT CAMPUS → PODCAST → ARCHIVE → CONTACT.

**Daftar isi** (hanya daftar, klik = scroll halus ke section): OPENING · PERSONAL BRAND · WRITING PORTFOLIO · CONTENT MARKETING SPECIALIST · EXAMPLE STRATEGY · PROJECT CAMPUS · PODCAST · ARCHIVE · CONTACT. Daftar ditaruh sebagai header pojok kanan atas dalam bentuk tombol **INDEX** dulu, daftar terlihat setelah diklik (kemudian diperkaya menjadi peta Paper Town di 23.1).

**Dua varian ToC:**

- **TocInline:** daftar 1 sampai 2 kolom di footer Opening-terbuka (kanan bawah). Kolom 1 = OPENING, PERSONAL BRAND, WRITING PORTFOLIO, CONTENT MARKETING SPECIALIST, EXAMPLE STRATEGY. Kolom 2 = PROJECT CAMPUS, PODCAST, ARCHIVE, CONTACT.

- **TocOverlay:** tombol kecil *Contents* / INDEX.

**Posisi tombol per section:** Cassette (disc) kanan bawah. Content Marketing kanan atas. Video Reveal kanan bawah. Archive kanan atas. Contact kanan atas. Section lain (Personal Brand, semua hero, Campus, Podcast) memakai tombol mengambang kanan atas. **Tombol mengambang disembunyikan otomatis** saat section yang punya tombol sendiri sedang terlihat (hindari tombol ganda).

Item aktif diberi penanda (titik atau underline pink) lewat IntersectionObserver. Jika Opening belum dibuka, ToC belum aktif. Navigasi memakai **lenis.scrollTo(element)**, bukan anchor hash (hash dipakai khusus oleh route overlay).

### 10.2 Hash route (overlay dan chapter) (DF)

| **Hash** | **Halaman** |
| --- | --- |
| #/participation | Participation |
| #/achievement | Achievement |
| #/my-message | My Message |
| #/magazine-art | Magazine Art |
| #/photography | Photography |
| #/my-strategy | My Strategy |
| #/notes | Notes |
| #/strategy/{hard-selling, entertainment, education, fun} | Halaman Informasi Jenis Konten |
| #/personal-brand, #/writing-portfolio, #/content-marketing (+ /cafe, /clinic, /terminal), #/example-strategy, #/project-campus, #/podcast, #/archive, #/contact | Deep link chapter (24.1) |
| #/plain | Plain page |

Tombol Back browser menutup overlay, posisi scroll halaman tidak berubah. **Buka lewat URL langsung:** Opening dilewati otomatis dan overlay atau chapter langsung terbuka (keputusan final, 24.1).

### 10.3 Scroll-lock di Opening (DF)

Selama loker tertutup, halaman tidak boleh di-scroll (blok wheel, touchmove, Space, PageDown, Arrow, scroll anchor; Lenis stop()). Setelah OPEN dan transisi selesai, kunci dilepas (start()). Di HP tiga loker tengah ditampilkan dulu dan bisa digeser horizontal (scroll-lock **vertikal** tetap berlaku sebelum OPEN). prefers-reduced-motion: crossfade singkat.

### 10.4 Scroll global (DF)

Smooth hanya lewat Lenis. html.lenis memakai scroll-behavior: auto. Area scroll bersarang (isi surat, daftar Archive, overlay) diberi **data-lenis-prevent**. scroll-padding-top disetel. **Scroll-snap tidak dipakai global.** html, body { overflow-x: clip } (kompatibel dengan position: sticky).

### 10.5 Preloader (DF)

Preloader ringan bertema (sticker dan kertas) sebelum Opening: menunggu font kritis dan gambar Opening. **Maksimal 2 detik**, tidak memblokir bila ada yang gagal. Bila loading lebih dari 4 detik, muncul teks tambahan *Taking longer than usual...* dan tombol *Skip to the quick look*.

### 10.6 Footer layar penuh (DF)

Teks kecil huruf besar DM Mono: **2026** (kiri), **Jassinta Roid Triniti** (tengah), elemen kanan sesuai section (*Creative Portfolio* / daftar isi / *Contents*). Tinggi footer loker (tertutup dan terbuka) **20 px**, hanya baris tahun dan nama.

### 10.7 Token gerak (DF)

| **Token** | **Nilai** | **Dipakai untuk** |
| --- | --- | --- |
| Runway | cubic-bezier(0.18, 0.9, 0.28, 1), 800 ms | Pergantian kartu aktif |
| Sticker pop | 320 ms, overshoot kecil | Tombol, label, overlay, papan nama |
| Wipe antardunia | 700 ms | Pintu, tirai, geser |
| Ganti kostum | 450 ms, kertas meluncur dan menempel | Pergantian outfit |
| Papan nama | Sticker pop 320 ms | Papan tempat |
| Chip babak | Papan flip 300 ms | Pergantian babak |
| Kartu babak | Fade 400 ms, tampil 1,5 detik | 3.0.1 dan 5.1 |
| Gelembung doll | Fade dan naik 8 px, 250 ms. Hilang saat scroll atau tap | Semua gelembung |
| Jejak sepatu | Stempel 400 ms per jejak, jarak 90 px | 0.7 dan strip 7→8 |
| Auto-walk INDEX | 1.200 ms (dekat) sampai 1.800 ms (jauh) | Klik tempat di peta |
| Reduced motion dan Calm mode | Crossfade 250 ms, paralaks dan ambient mati | Semua |

## 11. TornEdge: Transisi Kertas Sobek yang Realistis (DF)

**TornEdge BUKAN footer dekoratif, BUKAN pembatas zig-zag, dan BUKAN strip gradient terpisah.** Efeknya harus tampak seolah-olah tepi bawah section dirobek dengan tangan. Dalam dunia Paper Town, robekan adalah lembar kertas handmade yang ditarik lepas sehingga biome berikutnya terlihat di baliknya.

### 11.1 Aturan inti (DF)

- **Section itu sendiri adalah selembar kertas.** Background, gradient, grain, tekstur, ilustrasi, foto, dan isinya terus sampai batas robekan. Jangan membuat persegi gradient terpisah di bawah section.

- **Section berikutnya mulai tepat di belakang robekan.** Area transparan hasil mask menyingkap background asli section berikutnya, **bukan** background body global.

- Section tetap dalam **document flow normal**. Tidak memakai fixed positioning. Tepi robekan tidak ditaruh di layer fixed global.

- Semua section berdampingan langsung. **Tidak ada margin-bottom** pada section robek dan tidak ada elemen spacer vertikal. Ruang napas diberikan lewat **padding-bottom di dalam** section. Wrapper boleh meluas secara visual di bawah section tetapi tidak membuat celah layout.

### 11.2 Struktur DOM (DF)

| **Lapisan** | **Elemen** |
| --- | --- |
| Pembungkus | TornSection > div.torn-section-shadow-wrapper |
| Kertas | section.torn-paper-section (berisi konten section, di-mask) |
| Serat sisa | TornFiberEdge |
| Highlight robekan | TornHighlight |

### 11.3 Masking (DF)

Tepi robekan diterapkan langsung ke section dengan **SVG mask-image**: -webkit-mask-image dan mask-image, mask-repeat: no-repeat, mask-position: center bottom, mask-size: 100% 100%. SVG mask **dibuat secara programatik**: putih (opak) di atas garis robekan, transparan di bawahnya, sehingga section benar-benar terpotong.

**Dilarang:** clip-path polygon(), gelombang SVG lurus sederhana, pola zig-zag berulang, segitiga, scallop seragam, CSS border-image, footer putih palsu, strip transisi gradient, gradient latar yang pura-pura robekan.

### 11.4 Bentuk robekan yang realistis (DF)

Kontur unik tetapi deterministik untuk tiap section, gabungan **tiga lapis noise seeded**:

| **Lapis** | **Karakter** |
| --- | --- |
| 1. Deformasi kertas skala besar | Gelombang lebar tak beraturan, 2 sampai 4 naik-turun besar sepanjang lebar |
| 2. Robekan skala sedang | Bongkahan tidak rata, puncak dan lembah asimetris, bagian robek tak beraturan |
| 3. Noise serat skala halus | Gerigi kecil tak beraturan, serat menonjol halus, serpihan kertas kecil. Tetap terlihat meyakinkan, bukan noise piksel |

Hasil akhir harus menyerupai **kertas yang benar-benar dirobek tangan**: tidak terlihat buatan komputer, tidak berulang, tidak simetris, tidak seperti mata gergaji. Utamakan noise halus berlapis dan nilai seeded yang diinterpolasi, bukan lompatan acak titik ke titik.

### 11.5 Seed, ukuran, dan lebar (DF)

| **Section** | **Seed** |
| --- | --- |
| Opening (terbuka) | 101 |
| Writing Portfolio / Cassette | 202 |
| Content Marketing | 303 |
| Example Strategy / Video Reveal | 404 |
| Project Campus | 505 |
| Archive | 606 |

- Seed yang sama selalu menghasilkan bentuk yang sama, jadi tepi tidak berubah saat re-render. **Tidak ada Math.random() saat render.** Pakai generator pseudo-random seeded.

- **Tinggi daerah robek:** height: clamp(36px, 6vw, 90px). Posisi tepi tepat boleh bervariasi alami sepanjang lebar.

- **Lebar:** membentang seluruh lebar viewport dengan overscan: width: calc(100% + 4px); margin-left: -2px. Tidak boleh ada celah horizontal di kiri atau kanan.

### 11.6 Ketebalan, serat, dan detail fisik (DF)

- **Lapisan serat kedua** tepat di bawah kontur utama, 3 sampai 8 px offset mengikuti kontur, warna --milk-white. Bukan gradient. Lebih lembut, lebih halus, dan sedikit berbeda dari robekan utama, menyerupai serat dalam kertas yang tersisa setelah dirobek. **Bukan border putih**, bukan garis putih kontinu. Hanya muncul di area kecil yang tidak beraturan.

- **Serat panjang:** sangat sedikit serat memanjang di tepi robekan, tidak beraturan panjang dan jarak, sebagian menjulur 2 sampai 8 px di luar kontur utama. Jangan semua identik.

- **Potongan kecil menggantung:** sesekali fragmen kertas kecil menjuntai, jarang dan asimetris, tidak mengulang pola yang sama.

- **Ketebalan kertas fisik:** sebagian bagian memperlihatkan kertas dalam yang lebih gelap, sebagian memperlihatkan serat terang, sebagian tetap tipis. Efek halus dan fotografis, bukan kartun.

- **Highlight curl:** highlight 1 px halus di bagian tertentu robekan untuk serat terbuka dan lengkung ringan. Halus, tidak beraturan, tidak lengkap, **tidak pernah berupa border kontinu**.

- **Kedalaman kertas:** highlight tepi halus, sisi bawah sedikit gelap, drop shadow lembut, ketidakteraturan serat kecil. Hindari efek 3D berlebihan.

### 11.7 Bayangan (DF)

Bayangan ditaruh di **wrapper luar, bukan di section ber-mask**: filter: drop-shadow(0 6px 8px rgba(0,0,0,.18)). Bayangan mengikuti kontur robekan fisik dan memberi ilusi kertas sedikit terangkat di atas section berikutnya. **Jangan memakai box-shadow** pada section ber-mask karena menghasilkan bayangan persegi buatan.

### 11.8 Kontinuitas background dan urutan tumpukan (DF)

Background section aktif harus langsung masuk ke kontur robekan tanpa patahan warna. Contoh: Section A = kertas pink bertekstur, Section B = kertas krem bertekstur, di robekan kertas pink berakhir secara fisik dan kertas krem muncul di belakangnya. **Tidak boleh disisipkan:** strip putih, pemisah solid, pemisah gradient, strip abu-abu transparan, pembagi gelombang generik, jarak antar section.

**Urutan tumpukan:** background halaman → section berikutnya → section kertas robek saat ini → sisa serat → highlight robekan → konten section. Setiap section menjaga background independennya. Bila Section B punya grain sendiri, grain itu tetap menempel pada Section B, bukan pada halaman. Grain section A **berhenti tepat di robekan**, grain B mulai di bawahnya, menciptakan ilusi dua lembar bertekstur yang ditumpuk.

### 11.9 Performa, responsif, aksesibilitas (DF)

- **Performa:** path SVG tiap seed dibuat sekali lalu di-memoize. Tidak membuat ulang tiap frame animasi. **Tidak ada animasi pada kontur robekan.** Tepi tetap statis kecuali section-nya sendiri sengaja dianimasikan (misalnya doll menarik kertas di 0.6).

- **Responsif:** robekan tetap alami di desktop, laptop, tablet, dan HP. Kontur dibuat ulang atau diskalakan sambil mempertahankan seed dan karakter visual. **Jangan menekan SVG secara horizontal** hingga robekan tampak datar di HP.

- **HP:** kurangi detail yang sangat halus, pertahankan ketidakteraturan besar dan sedang. Tepi tetap terlihat robek di layar 360 px.

- **Aksesibilitas:** TornEdge dekoratif dan tidak boleh mengganggu pointer events, navigasi keyboard, atau pembaca layar. Pakai pointer-events: none. Tidak boleh menghalangi tombol, link, video, atau elemen interaktif.

### 11.10 Section yang memakai TornEdge (DF)

Hanya di bagian bawah **enam** section: **Opening (terbuka), Cassette, Content Marketing, Video Reveal / Example Strategy, Project Campus, Archive.** Jangan otomatis menaruhnya di bawah setiap komponen kecil. Tidak ada robekan di: loker tertutup (bagian bawah layar bersih penuh), Chapter 1, Chapter 6, Chapter 8. Perpindahan lain memakai wipe, bukan sobekan.

### 11.11 Implementasi React (DF)

Buat komponen reusable **TornSection** (props: seed, backgroundClass, children, contoh seed 101 dan backgroundClass opening-paper). Komponen bertanggung jawab atas: pembuatan tear SVG deterministik, penerapan SVG mask, pemotongan tekstur section bersama kertas, rendering sisa serat halus, rendering highlight robekan tak beraturan, pembuatan wrapper drop-shadow luar, ukuran responsif, dan menjaga document flow normal.

Utilitas reusable: **generateSeededNoise(seed)**, **generateTornPath(seed, width, height)**, **generateTornMaskSvg(seed)**, **createTornEdgeStyle(seed)**. Pakai useMemo() agar path SVG tidak dihitung ulang. Jangan memakai nilai acak langsung di JSX render. Robekan dihasilkan dari noise matematis, bukan zig-zag hardcode.

## 12. Responsif, Performa, Aksesibilitas, Media (DF)

### 12.1 Breakpoint (DF)

| **Kelas** | **Lebar** | **Doll** | **Layout dan interaksi** | **Efek 3D** |
| --- | --- | --- | --- | --- |
| XS | di bawah 480 px (HP) | Tengah bawah, sekitar 22% tinggi | 1 kolom, media dikecilkan, loker 1 per layar. Tap pertama memunculkan label, tap kedua membuka | Disederhanakan: runway menjadi carousel satu kartu fokus, paralaks mati |
| SM | 480 sampai 767 px | Tengah bawah | 1 sampai 2 kolom (Chapter 1 dua kolom) | Sama |
| MD | 768 sampai 1023 px (tablet) | 30% dari kiri | 2 kolom, portrait dan landscape ditangani terpisah. Tap, bukan hover | Runway 3D ringan: translateZ dikurangi, blur dimatikan |
| LG | 1024 sampai 1439 px (desktop) | 35% dari kiri | Layout desktop penuh. Hover dan paralaks mouse | Penuh |
| XL | 1440 sampai 1919 px | Maksimal 320 px tinggi | Acuan desain (1920×1080). Konten maksimal 1440 px di tengah, latar, skyline, dan kertas memanjang ke samping | Penuh |
| 2XL | 1920 px ke atas | Sama | Konten diberi max-width dan dipusatkan, media tidak membesar tak terbatas | Penuh |
| HP landscape | Tinggi di bawah 500 px | 22% dari tinggi, HUD menyusut | Sama dengan desktop sempit, tap. Petunjuk kecil *Best viewed upright* yang bisa ditutup | Sederhana |

### 12.2 Aturan wajib (DF)

- **Unit tinggi layar:** svh, dvh, lvh, bukan vh (misal min-height: 100svh). Berlaku juga di loker.

- **Safe area:** env(safe-area-inset-*); meta viewport = width=device-width, initial-scale=1, viewport-fit=cover. **Tidak memakai user-scalable=no**, teks tetap terbaca di zoom 200%.

- Tipografi fluid clamp(); overflow-wrap: anywhere untuk teks panjang (judul artikel).

- **Container query** (container-type: inline-size) untuk pintu loker, kartu, disc.

- @media (hover: hover) and (pointer: fine) untuk efek mouse. Layar sentuh punya padanan tap. **Area sentuh minimal 44×44 px** (termasuk titik A, B, C dan pin kecil).

- prefers-reduced-motion: matikan paralaks, tilt, glow berdenyut, auto-play berat. Ganti fade, tetap berfungsi penuh.

- Hitung ulang layout dinamis (Archive engine, flipbook, kolase, runway) pada resize, orientationchange, visualViewport, fullscreen. ResizeObserver di-debounce sekitar 100 ms.

- **Tidak ada horizontal scroll halaman.** Konten lebar scroll di dalam kontainernya.

- Gambar dan video menjaga rasio asli.

### 12.3 Strategi area berisiko (DF)

| **Area** | **Desktop** | **HP dan tablet** |
| --- | --- | --- |
| Loker | Pintu rasio sekitar 9:16 (1090:2000) minimal 1:3. 5 loker, tengah di tengah | Tablet portrait dan HP: 1 loker per layar, geser horizontal (scroll-snap), loker tengah dulu (tiga loker tengah terlihat), titik 1 sampai 5 |
| Kolase hero | Tersebar di sekitar teks | Tablet 4 media. HP baris kecil atas dan bawah teks |
| Runway | 3D penuh | 1 kartu tengah + samping sebagian, swipe, 3D dikurangi |
| Cassette (disc) | Deretan disc 3D | Disc tengah besar, samping kecil, info 4 baris di atas disc |
| Video reveal Strategy | 4 video serentak | Carousel 1 video fokus, 3D disederhanakan |
| Archive | 2 kolom | Preview sticky di atas, list di bawah |
| Flipbook | 2 halaman | Portrait 1 halaman |
| Kolase majalah | Buku mockup + baki elemen | 1 halaman + baki laci horizontal, handle skala dan rotasi besar |
| Contact | 3 kolom | 1 kolom |
| Dokumen Chapter 1 | Kolase dengan paralaks mouse | Dua kolom rapi tanpa horizontal scroll, paralaks mati |

### 12.4 Performa dan anggaran (DF)

| **Hal** | **Aturan** |
| --- | --- |
| Skor | Lighthouse Mobile Performance 70 atau lebih, Accessibility 90 atau lebih, tanpa CLS besar. Target internal 80 untuk Opening |
| LCP Opening | 2,5 detik atau kurang di 4G. Preloader maksimal 2 detik dan tidak memblokir |
| JavaScript | Awal (shell dan Opening) sekitar 200 KB gzip atau kurang. Tiap chunk chapter sekitar 150 KB gzip atau kurang. React.lazy + Suspense untuk Flipbook, Magazine collage, Archive engine |
| Aset sebelum OPEN | Sekitar 600 KB atau kurang (loker, doll mengintip, font kritis) |
| Font | Hanya Gloock, Fraunces Italic, DM Mono, Poppins yang kritis. Fraunces dengan sumbu SOFT, WONK, opsz itu berat, jadi buat **dua instance statis** (Light Italic dan Italic 400), subset Latin, display=swap. **Pinyon, Bodoni Moda, Bebas Neue hanya dimuat di dalam Magazine Art** |
| Gambar | WebP atau AVIF, srcset 1× dan 2×, lazy kecuali Opening (loading=lazy, decoding=async). Lebar dan tinggi dari data agar CLS nol |
| Video | Target H.264 MP4, maksimal 1080×1920. **Versi latar 720×1280**, loop 8 sampai 12 detik, sekitar 1,2 MB atau kurang, plus poster WebP, preload=none. Versi 1080×1920 (maksimal 8 sampai 15 MB) hanya dimuat saat diklik. .webm opsional. Video hanya play saat terlihat. **Maksimal sekitar 6 video aktif serentak** (hitung semua: hero, runway, ambient, Archive) |
| Flipbook | Muat halaman aktif plus 3 di kiri dan kanan. Thumbnail WebP sekitar 120 KB atau kurang |
| Archive | Muat thumbnail dulu, preview penuh hanya untuk karya terpilih |
| Urutan muat | Prefetch chapter berikutnya saat progres 60%. Lepas media chapter yang sudah lebih dari 2 tempat di belakang |
| Animasi | Hanya transform dan opacity. Hindari blur() besar di banyak elemen. will-change hanya pada elemen yang sedang beranimasi |
| **Mode hemat (Lite mode otomatis)** | Aktif bila hardwareConcurrency 4 atau kurang, deviceMemory 4 GB atau kurang, HP, Save-Data menyala, FPS di bawah 40 selama 3 detik, atau Calm mode aktif. Efek: kurangi blur dan glow, jumlah salinan Archive, lapisan ekstrusi barang (maksimal 3 vs 6 sampai 10), sederhanakan detail 3D loker (tanpa ventilasi cekung detail, tanpa goresan), paralaks dan ambient mati, runway menjadi 2D, video menjadi poster |

### 12.5 Aksesibilitas (DF)

| **Area** | **Spesifikasi** |
| --- | --- |
| Dasar | Semua tombol dan barang interaktif dapat dioperasikan keyboard (Tab, Enter, Space), punya aria-label, :focus-visible outline pink 3 px, overlay role=dialog aria-modal=true, gambar bermakna punya alt (Inggris), video dekoratif aria-hidden |
| **Plain page** | Halaman linear satu kolom: satu h1, satu h2 per chapter, teks dan daftar karya dengan link, foto via PhotoFrame, video menjadi poster dan link. Tanpa animasi dan 3D. Juga isi noscript, dasar SEO, dan tampilan cetak. Tautan masuk: skip link pertama saat Tab, INDEX, Quick Look, footer |
| **Calm mode** | Toggle di overlay INDEX untuk orang yang tidak mengatur reduced motion di perangkatnya. Mematikan paralaks, ambient, autoplay video, efek lompat doll. Transisi menjadi crossfade 250 ms |
| Struktur | Tiap chapter adalah section dengan aria-labelledby ke headline. Satu h1. Lapisan dekoratif (skyline, ambient, doll, edge tab) aria-hidden. Urutan baca mengikuti urutan cerita |
| Skip link | *Skip to contact* dan *Skip the journey (plain page)* |
| Alt | Alt untuk semua karya. Doll dan ilustrasi dekoratif memakai alt kosong. Contoh: foto Chapter 1 *Portrait of Jassinta Roid Triniti, seated.* Flyer: *Instagram flyer: Glow Max With Triple Geneo promo, 15 September 2025.* Disc: *Article: Inilah Sosok Jan Miskovic..., Independen Media, 20 January 2025 (in Indonesian).* Sertifikat: *Certificate: Intern Participant, Indonesia Mengudara (2025).* Halaman flipbook: *RUSH 07 magazine, page 12 of 89.* Pelat nomor loker dan doll: kosong |
| Video | intro.mp4 diberi teks (WebVTT) karena berisi ucapan. Video lain: deskripsi singkat di kartu INFO. Podcast: ringkasan atau transkrip pendek per episode |
| Hover saja | Label harga kertas muncul juga saat **fokus keyboard** |
| Bahasa | html lang=en, dan lang=id pada judul karya berbahasa Indonesia |
| Gerak | Setiap gerak lebih dari 5 detik yang berjalan sendiri bisa dijeda (Calm mode memenuhi ini) |
| Kilatan | Lampu kilat pink di 0.3 maksimal satu kali dan lembut, di bawah 3 kali per detik |
| Zoom | Teks terbaca di zoom 200% |

### 12.6 Media helper (wajib dipakai semua komponen) (DF)

File src/lib/media.ts: BASE = VITE_MEDIA_BASE_URL (tanpa garis miring di ujung, kosong = same origin). Fungsi **mediaUrl(path)** mengembalikan BASE + /assets/ + path (tanpa garis miring di awal path). Tambahkan src/vite-env.d.ts untuk tipe VITE_MEDIA_BASE_URL. Semua komponen memakai mediaUrl(“video/lassiewear_fun.mp4”), **tidak menulis path langsung**.

**CORS:** hit-test alpha (barang loker) dan *Save as image* (Magazine Art) memakai canvas. Elemen gambar harus crossOrigin=anonymous. Bila media di CDN, CDN wajib mengirim header Access-Control-Allow-Origin. Bila gagal, fallback ke clip-path atau bounding box dan sembunyikan *Save as image*.

**SafeImage dan SafeVideo:** membungkus semua media dengan lebar dan tinggi dari data (CLS nol), placeholder kertas, dan kondisi gagal (23.5).

## 6. Interaksi, Navigasi, dan Motion (PB)

Scroll selalu menggerakkan perjalanan; klik hanya membuka detail. Semua yang bisa diklik juga bisa dijangkau keyboard dan sentuh.

### Zona layar (HUD) (PB)

| **Zona** | **Elemen** |
| --- | --- |
| Kiri atas | Chip babak (DM Mono 11 px); berganti dengan efek papan flip 300 ms; tersembunyi di Opening dan Chapter 8 |
| Tengah atas | Tombol INFO (Chapter 3), pin Awareness / Engagement / Conversion |
| Kanan atas | INDEX, peta Paper Town; tersembunyi otomatis saat section punya tombol sendiri |
| Kiri bawah | Stiker *In a hurry? Take the shortcut* (Quick Look) |
| Kanan bawah | CREDIT, Cassette, Video Reveal |
| Tepi kiri (desktop) | Rel progres: garis jahitan vertikal dengan kepala doll kecil; tersembunyi di Opening dan Contact |
| Tengah bawah (HP) | Doll |

### Navigasi (PB)

- **INDEX** menampilkan peta Paper Town bergambar (sembilan tempat, klik satu dan doll berjalan ke sana, 1.200 sampai 1.800 ms); tampilan daftar teks menjadi alternatif dan default untuk pembaca layar.

- **Papan nama** label kertas menancap di garis jahitan tiap kali doll tiba; 20% terakhir tiap chapter menampilkan **Edge Tab**, label kertas chapter berikutnya yang mengintip dari tepi kanan (dekoratif, tidak bisa diklik).

- **Deep link:** #/personal-brand, #/writing-portfolio, #/content-marketing (+ /cafe, /clinic, /terminal), #/example-strategy, #/project-campus, #/podcast, #/archive, #/contact. Overlay: #/participation, #/achievement, #/my-message, #/magazine-art, #/photography, #/my-strategy, #/notes, #/strategy/{hard-selling, entertainment, education, fun}. #/plain membuka Plain page.

- Membuka lewat URL langsung melewati Opening. Tombol Back menutup overlay tanpa mengubah posisi scroll.

- **Opening:** halaman terkunci sampai OPEN diklik; OPEN diingat selama sesi, dan *Back to the locker* tidak mengunci ulang.

### Input (PB)

- Swipe horizontal hanya di dalam area carousel (touch-action: pan-y pada halaman).

- ↓, PageDown, Space menggulir biasa; ← → hanya di carousel yang fokus; Esc menutup overlay; Tab tidak boleh terjebak di section yang di-pin.

- Layar sentuh: tap pertama memunculkan label price-tag, tap kedua membuka. Area sentuh minimal 44×44 px.

- Paralaks mouse hanya pada desktop dengan pointer halus.

### Gerak (PB)

| **Token** | **Nilai** | **Dipakai untuk** |
| --- | --- | --- |
| Runway | cubic-bezier(0.18, 0.9, 0.28, 1), 800 ms | Pergantian kartu aktif |
| Sticker pop | 320 ms dengan overshoot kecil | Tombol, label, overlay, papan nama |
| Wipe antardunia | 700 ms | Pintu, tirai, geser; variabel warna brand berganti bersamaan |
| Ganti kostum | 450 ms, kertas meluncur dan menempel | Pergantian outfit |
| Chip babak | Papan flip 300 ms | Pergantian babak |
| Kartu babak | Fade 400 ms, tampil 1,5 detik | Frame 3.0.1 dan 5.1 |
| Gelembung doll | Fade dan naik 8 px, 250 ms; hilang saat scroll atau tap | Semua gelembung |
| Jejak sepatu | Stempel 400 ms per jejak, jarak 90 px | Frame 0.7 dan strip 7 ke 8 |
| Rewind | 800 ms | Transisi 4 ke 5 |
| Reduced motion dan Calm | Crossfade 250 ms, paralaks dan ambient mati | Seluruh situs |

Tiga lapis animasi: gerak karena scroll, gerak ambient yang berjalan sendiri (benda gantung bergoyang ±2 derajat, awan bergeser pelan, air bergeser 8 px dalam loop 6 detik), dan reaksi saat hover atau fokus.

### Doll berbicara dan bereaksi (PB)

Gelembung ucapan Shantell Sans muncul sekali per momen, singkat, dan tidak pernah menutupi konten. Ekspresi mengikuti data: *curious* pada angka kecil, *proud* pada angka besar disertai confetti kertas kecil.

### Easter egg (lima, dikerjakan paling akhir) (PB)

| **ID** | **Chapter** | **Pemicu** | **Reaksi** |
| --- | --- | --- | --- |
| E1 | Semua | Klik doll 5 kali | Doll berputar sekali, gelembung *Dizzy!* |
| E4 | 3A | Klik tas Go-Food | Tas berayun, gelembung *1 like. Still counts.* |
| E5 | 3C | Klik pesawat kertas | Pesawat melintas layar, gelembung *Next stop: your campaign.* |
| E6 | 5 | Klik kucing kertas | Kucing mengangkat kepala 400 ms, gelembung *Shh, library.* |
| E8 | 7 | Klik kartu kosong *Your project goes here.* | Kartu terbang ke Contact |

Counter *Secrets found: 2 of 5* tampil di INDEX. Easter egg tidak menutupi konten, bisa dijangkau keyboard, dan tanpa suara.

### Audio (PB)

Tidak ada suara otomatis dan tidak ada desain suara. Audio hanya dari intro.mp4 (unmute dan CC oleh pengunjung) dan pemutar Spotify di Radio Booth (hanya bunyi saat diklik). Semua video lain tanpa trek audio dan memiliki tombol pause.

## 7. Spesifikasi Teknis (PB)

Targetnya: terasa seperti game kertas, tetapi tetap ringan, bisa diakses, dan terbaca mesin pencari.

### Fondasi (PB)

| **Area** | **Keputusan** |
| --- | --- |
| Teknik dunia | Opsi A: DOM berlapis dengan CSS 3D (rotateX, translateZ, perspective); tanpa WebGL di versi pertama |
| Framework | React; React.lazy dan Suspense untuk Flipbook, Magazine collage, dan Archive engine |
| Scroll | Smooth hanya lewat Lenis; area scroll bersarang diberi data-lenis-prevent; tanpa scroll-snap global; html dan body overflow-x: clip |
| Hosting | Vercel, di proyek yang sama dengan link CV (jassinta-roid-triniti-eswy.vercel.app); domain sendiri dipasang belakangan dengan redirect |
| Analitik | Plausible, tanpa cookie dan tanpa data pribadi |
| Bahasa | html lang=en; lang=id pada judul karya berbahasa Indonesia |

### Responsif (PB)

| **Kelas** | **Lebar** | **Doll** | **Layout dan efek 3D** |
| --- | --- | --- | --- |
| XS | di bawah 480 px (HP) | Tengah bawah, sekitar 22% tinggi | 1 kolom, loker 1 per layar, runway menjadi carousel satu kartu, paralaks mati |
| SM | 480 sampai 767 px | Tengah bawah | 1 sampai 2 kolom |
| MD | 768 sampai 1023 px (tablet) | 30% dari kiri | 2 kolom, 3D ringan, tap menggantikan hover |
| LG | 1024 sampai 1439 px | 35% dari kiri | Layout penuh, hover dan paralaks mouse |
| XL | 1440 sampai 1919 px | Maksimal 320 px tinggi | Acuan desain 1920×1080; konten maksimal 1440 px di tengah |
| 2XL | 1920 px ke atas | Sama | Konten dipusatkan, media tidak membesar tanpa batas |
| HP landscape | tinggi di bawah 500 px | 22% dari tinggi | Mode sederhana, petunjuk *Best viewed upright* yang bisa ditutup |

Aturan wajib: satuan svh, dvh, lvh (bukan vh); viewport width=device-width, initial-scale=1, viewport-fit=cover dan tidak memakai user-scalable=no; safe-area env(safe-area-inset-*); tipografi clamp(); container query untuk pintu loker, kartu, dan disc; efek mouse hanya di @media (hover: hover) and (pointer: fine); layout dinamis dihitung ulang saat resize, orientationchange, dan visualViewport (ResizeObserver di-debounce sekitar 100 ms); tanpa horizontal scroll halaman; gambar dan video menjaga rasio asli.

### Performa (PB)

| **Hal** | **Anggaran** |
| --- | --- |
| Lighthouse mobile | Performance minimal 70 (target internal 80 untuk Opening), Accessibility minimal 90, tanpa CLS besar |
| LCP Opening | 2,5 detik atau kurang di 4G; preloader maksimal 2 detik dan tidak memblokir |
| JavaScript | Awal sekitar 200 KB gzip atau kurang; tiap chunk chapter sekitar 150 KB gzip atau kurang |
| Aset sebelum OPEN | Sekitar 600 KB atau kurang |
| Gambar | WebP atau AVIF, srcset 1× dan 2×, lazy kecuali Opening, lebar dan tinggi dari data agar CLS nol |
| Video | H.264 MP4; versi latar 720×1280, loop 8 sampai 12 detik, sekitar 1,2 MB atau kurang, poster WebP, preload=none; versi 1080×1920 (8 sampai 15 MB) hanya dimuat saat diklik; maksimal sekitar 6 video aktif |
| Flipbook | Halaman aktif plus 3 di kiri dan kanan; thumbnail WebP sekitar 120 KB atau kurang |
| Archive | Thumbnail dulu; preview penuh hanya untuk karya terpilih |
| Font | Fraunces sebagai dua instance statis (Light Italic dan Italic 400), subset Latin, display=swap |

### Transisi kertas sobek (TornEdge) (PB)

Hanya enam transisi memakai robekan: seed 101 (0 ke 1), 202 (2 ke 3), 303 (3C ke 4), 404 (4 ke 5), 505 (5 ke 6), 606 (7 ke 8). Section itu sendiri adalah selembar kertas: background, grain, dan ilustrasi berlanjut sampai kontur robekan, dan section berikutnya mulai tepat di belakangnya. Section tetap dalam document flow normal tanpa fixed positioning, tanpa margin atau spacer di antara section; ruang napas lewat padding di dalam section. Pada reduced motion dan Calm mode, robekan menjadi crossfade 250 ms.

### Aksesibilitas (PB)

- Semua tombol dan benda interaktif bisa dioperasikan keyboard (Tab, Enter, Space), memiliki aria-label, dan fokus tampil sebagai outline pink 3 px.

- Overlay: role=dialog, aria-modal=true, focus trap, Esc menutup, fokus kembali ke pemicu.

- Tiap chapter adalah section dengan aria-labelledby ke headline; satu h1; lapisan dekoratif (skyline, ambient, doll, edge tab) aria-hidden; alt kosong untuk ilustrasi dekoratif, alt bahasa Inggris untuk karya.

- Label price-tag muncul juga saat fokus keyboard.

- intro.mp4 memakai teks WebVTT; podcast memiliki ringkasan per episode.

- Gerak yang berjalan sendiri lebih dari 5 detik bisa dijeda; lampu kilat pink maksimal sekali dan lembut.

- Teks terbaca pada zoom 200%.

- **Calm mode:** toggle di overlay INDEX; mematikan paralaks, ambient, autoplay video, dan efek lompat doll.

- **Plain page (#/plain):** satu kolom linear tanpa animasi atau 3D, satu h1 dan satu h2 per chapter, isi noscript, tampilan cetak, dan dasar SEO. Browser tanpa CSS 3D otomatis masuk ke sini dengan banner *Showing the simple version.*

### Kondisi gagal (PB)

| **Situasi** | **Perilaku** | **Copy** |
| --- | --- | --- |
| Gambar gagal | Placeholder kertas dan tombol coba lagi | *Image didn't load.* Tombol *Try again* |
| Video gagal | Poster tetap tampil dan link ke platform asli | *Video unavailable here.* Tombol *Watch on Instagram ↗* atau *Watch on TikTok ↗* |
| Spotify gagal | Kartu cadangan | *Open in Spotify* |
| JavaScript mati | Isi Plain page lewat noscript | *Turn on JavaScript for the full journey.* |
| Loading lebih dari 4 detik | Teks tambahan dan tombol | *Taking longer than usual...* dan *Skip to the quick look* |
| Offline | Toast kecil | *You seem to be offline.* |
| Rute tidak dikenal | Overlay 404, doll membawa peta | *This page wandered off.* Tombol *Back to the journey* |
| Salin gagal | Toast | *Couldn't copy. Select and copy manually.* |

### SEO dan gambar share (PB)

| **Elemen** | **Isi** |
| --- | --- |
| Title | Jassinta Roid Triniti · Digital Content Executive · Creative Portfolio |
| Meta description | Paper doll portfolio of Jassinta Roid Triniti: social media strategy, video, writing, and design, with real numbers. |
| OG image | 1200×630, peta Paper Town dengan doll dan nama, dibuat dari ilustrasi induk |
| Favicon | Kepala doll: 32 px, 180 px (apple-touch), 512 px |
| Data terstruktur | JSON-LD Person: nama, pekerjaan, url, sameAs (Instagram); tanpa email dan nomor telepon |
| Konten | Teks nyata ada di DOM dan di Plain page |

### Analitik (event) (PB)

opening_open, chapter_reached (1 sampai 8, sekali per sesi), quick_look_open, work_open, external_click, overlay_open, cv_download, contact_click (email, instagram, whatsapp, copy), plain_page_open, calm_mode_on, egg_found, session_complete. Target angka ditetapkan setelah 30 hari data dasar.

