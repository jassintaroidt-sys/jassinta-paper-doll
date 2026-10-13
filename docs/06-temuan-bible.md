# 06 · Temuan Audit Bible (P00)

Laporan audit komprehensif terhadap `docs/portfolio-bible.md`, `docs/design-bible-visual.md` (DV), `docs/prompts-aset.md` (PA), `asset-manifest.csv` (355 baris), `docs/03-coverage-matrix.csv` (381 bagian), dan seluruh dokumen pendukung per 13 Oktober 2026.

---

## 1. Laporan Pencocokan `asset-manifest.csv` (355 Baris) vs DV & PA

Audit otomatis dilakukan terhadap 355 baris aset pada `asset-manifest.csv`:

| Kategori Pencocokan | Jumlah Baris | Persentase | Catatan & Analisis |
|---|---|---|---|
| Memiliki referensi baris DV (`bible_line_dv`) | **212** | 59,7% | Merujuk tepat ke nomor baris tabel/katalog barang per chapter di DV (Bagian 8 DV, baris 2659–4046 di bible). |
| Tanpa referensi baris DV (`bible_line_dv` kosong) | **143** | 40,3% | Terdiri dari aset yang spesifikasinya didefinisikan lewat Prompt AI (PA), aturan Paper Cut-Out (REV), atau tabel DF khusus (lihat rincian di Bagian 2). |
| Memiliki referensi baris PA (`bible_line_pa`) | **343** | 96,6% | Merujuk tepat ke nomor baris prompt AI di Bagian 7 PA (baris 4641–5198 di bible). |
| Tanpa referensi baris PA (`bible_line_pa` kosong) | **12** | 3,4% | Hanya 12 aset Paper Kit (`KIT_*`), yang dibuat langsung berdasarkan arsitektur REV Paper Cut-Out (Bagian C & Produksi Kode). |
| Aset kind `css-only` (tidak diekspor ke raster) | **2** | 0,6% | `A_bayangan-doll_VT.svg` (bayangan elips dinamis) dan `0_0-53_kertas-sobek-101.svg` (TornSection runtime). |
| Aset `reuse_of` (merujuk file yang sudah ada) | **1** | 0,3% | `8_amplop-surat_V0.webp` menggunakan kembali `world/0_0-26_amplop-surat_V0.webp`. |

---

## 2. Analisis Aset di Manifest Tanpa Baris Spesifikasi DV (143 Baris)

143 baris di `asset-manifest.csv` tidak memiliki nomor baris di kolom `bible_line_dv`. Rincian per pemilik prompt (`owner_prompt`):

| Owner Prompt | Kategori Aset | Jumlah | Alasan Tidak Ada Baris DV Langsung | Sumber Spesifikasi yang Digunakan |
|---|---|---|---|---|
| **P03** | Doll Rig, Wajah, Brad, Kostum K1–K17 | **56** | Tabel DV 4–7 menjelaskan model sheet doll secara naratif dan tabuler, namun nama file individual raster (`doll_00_master_*`, `face_*`, `brad_*`, `K1_*`) baru didefinisikan secara resmi di Bagian 1 PA (baris 4641–4772). | Deskripsi DV 4.1–4.11, DV 5, DV 6, DV 7, serta prompt PA 1.1–2. |
| **P05** | Dunia Bersama (Label Papan Nama, Walk Strip, Peta, HUD) | **50** | Didefinisikan di DV 9 (baris 4137–4208) dan PA 4 (baris 5111–5187). Beberapa item HUD/UI dan strip memakai nama file teknis yang tercatat di PA. | DV 9.1–9.4 dan PA 4.1–4.4. Kolom `spec_*` di manifest sudah terisi lengkap. |
| **P16** | Overlay Suvenir & Stiker Hiasan | **13** | Bagian DV 8.13 hanya mendaftar kartu utama O-01 s/d O-07. Sub-aset stiker dekoratif (`O-02b-1` s/d `O-02b-10`, `O-02c-1..2`, `O-04b`) tercantum di PA 3.13 (baris 5084–5109). | PA 3.13 dan DF 22.1–22.7. |
| **P11** | Chapter 4 Info Jenis Konten | **6** | Berkas `4_info-latar_V0`, `4_info-strip-*` (4 jenis konten), dan `4_info-kartu-hasil-credit` didefinisikan pada DF 17.2 dan PA 3.8, bukan di tabel DV 8.8. | DF 17.2 dan PA 3.8 (baris 5005–5011). |
| **P17** | Partikel Ambient Global | **6** | Aset `A_debu-kertas`, `A_serpihan-newsprint`, `A_confetti`, `A_bintang-dizzy`, `A_kupu-kupu-kertas`, `A_bayangan-doll` tercantum di PA 4.5 (baris 5187–5198). | DV 9.5 dan PA 4.5. |
| **P02** | Paper Kit Fondasi | **12** | Aset `KIT_*` (ubin tekstur kertas 512, grain 220, deckle mask, pita tepi, washi, favicon) dirumuskan dalam aturan revisi REV Paper Cut-Out (13 Oktober 2026). | Rule 10, Rule 30, dan REV Bagian C & Produksi Kode. |

**Keputusan Implementasi**: Seluruh 143 aset ini **sah dan memiliki spesifikasi lengkap** di kolom `spec_shape_size`, `spec_color_material`, `spec_detail`, dan `prompt_ref` pada `asset-manifest.csv`. Tidak ada aset yang hilang atau tanpa arahan desain.

---

## 3. Tabel yang Tidak Lengkap & Kolom Kosong pada Manifest

1. **Kolom `chapter` Kosong pada 6 Baris Aset Chapter 4**:
   - Berkas: `4_info-latar_V0.webp`, `4_info-strip-hardselling.webp`, `4_info-strip-entertainment.webp`, `4_info-strip-education.webp`, `4_info-strip-fun.webp`, `4_info-kartu-hasil-credit.webp`.
   - **Penyebab**: Baris di CSV tidak mengisi kolom `chapter`.
   - **Solusi**: Nilai yang benar adalah chapter `4`.
2. **Kolom `bible_line_dv` Kosong pada 143 Baris**:
   - Telah dianalisis pada Bagian 2 di atas. Nilai kosong tidak menghambat build karena `prompt_ref` dan spesifikasi visual lengkap sudah terdata di manifest.
3. **Kolom `bible_line_pa` Kosong pada 12 Baris Paper Kit (`KIT_*`)**:
   - Aset `KIT_*` berasal dari revisi Paper Cut-Out terbaru dan tidak memerlukan prompt AI pihak ketiga karena dibuat 100% via kode generator programatik (`sharp` + SVG filter).

---

## 4. Kontradiksi & Inkonsistensi Data Antar-Bagian Bible

| No | Topik | Teks / Data Bagian A | Teks / Data Bagian B | Analisis & Rekomendasi Solusi |
|---|---|---|---|---|
| 1 | **Tahun Kuliah PNJ** | Baris 2808 (DF 14.4 Kartu About): `2020--2024` | Baris 117 (ch1) & CV: `2021 - 2024; Gojek Scholarship Batch 2 (2021)` | **Kontradiksi tahun masuk.** Program Diploma III Publishing umumnya berdurasi 3 tahun (2021–2024), didukung oleh beasiswa Gojek Batch 2 tahun 2021. **Rekomendasi:** Pakai data CV: `2021 – 2024`. |
| 2 | **Periode Comic Club** | Baris 3593 (ch5 Participation): `2021--2022` | Baris 3925 & CV: `Jan 2022 -- Dec 2023` | **Kontradiksi rentang tahun.** Baris 3593 dan 3925 sendiri memberi catatan: *"Cek sertifikatnya sebelum frame final [cek]"*. **Rekomendasi:** Gunakan data CV (`Jan 2022 – Dec 2023`) sebagai acuan resmi. |
| 3 | **Jumlah Kostum** | PB 5.10 / DF 7.2: *"Inventaris kostum (15 kostum)"* | DV 7 / Katalog Kostum: Memuat **K1 sampai K17** | **Inkonsistensi terminologi.** K1–K15 adalah busana cerita penuh. K16 adalah varian utilitas filter sepia (strip 4 ke 5), dan K17 adalah ikon kepala mini (favicon/HUD). **Rekomendasi:** 15 kostum busana cerita + 2 varian teknis = 17 entri di kode. |
| 4 | **Judul Majalah Loker 2** | DF 13.6: *"tulisan VOGUE (bukan Belleza)"*, DV 0-22: *"Masthead VOGUE Bodoni 800"* | Draf lama & mockup: *Belleza* | **DF 13.6 secara eksplisit mengunci:** pakai *VOGUE* dengan font Bodoni 800, atau nama generik estetis. **Rekomendasi:** Gunakan *VOGUE*. |
| 5 | **Nama File Bumper Elsthetic** | DF 20.2 (baris 3754): `ELSTHETIC_BUMPER.mp4` | Catatan CMD baris 3754: `(di CMD tertulis Elsthetic_BUMPER)` | **Perbedaan kapitalisasi.** Windows case-insensitive tetapi sistem Vercel Linux case-sensitive. **Rekomendasi:** Standarkan nama file menjadi kapital `ELSTHETIC_BUMPER.mp4` seragam dengan bumper lainnya. |
| 6 | **Jumlah Karya Archive** | DF 20.2: Terdaftar tepat **34 karya unik** | CV memuat materi tambahan: bumper Aishi, bumper ELS, dan 2 flyer pelatihan | **Keputusan mengunci #10 di Rule 00:** Bumper AISHI/ELS dan flyer pelatihan **sengaja tidak dimasukkan** agar archive tetap 34 karya. **Rekomendasi:** Pertahankan tepat 34 karya sesuai tabel DF 20.2. |
| 7 | **Caption Kemenag** | Caption lama sertifikat Kemenag | Baris 3925: Usulan CV: *Public Relations Intern, Ministry of Religious Affairs of Indonesia (2023--2024)* | **Rekomendasi:** Pakai usulan CV resmi di baris 3925. |

---

## 5. Ambiguitas & Hal yang Memerlukan Standarisasi Teknis

1. **Satuan Loker `var(--px)` dan Nilai Konversi**:
   - Bible menyebut `doorWidth: 325 px`, `doorHeight: 975 px` (rasio 1:3), dan `var(--px) ≈ 0,301`.
   - **Solusi**: Di CSS/Tailwind, buat token tunggal `--px: clamp(0.2px, 0.301px, 0.45px)` atau hitung persentase terhadap kontainer loker sehingga 5 loker tampil utuh di 360 px hingga 1920 px tanpa terpotong.
2. **Dinding Chapter 3A, 3B, dan 3C**:
   - 3A dan 3C keduanya memiliki warna dominan logo hijau botol (`#066838`).
   - Bible DF 28.4 membedakannya: 3A memakai dinding hijau penuh + chair rail krem biji kopi + wainscot ubin subway; 3C memakai dinding hijau navy + pilaster vertikal emas + panel lengkung krem di gerbang keberangkatan; 3B memakai dinding **putih marble** (bukan hijau).
3. **Status Google Business Profile di Loker 5**:
   - Teks Loker 5 (DF 13.7 baris 2640) menulis: *"Google Business Profile dihapus kecuali memang kamu pakai [cek]"*.
   - **Solusi**: Dihapus dari daftar pill agar jumlah pill menjadi 13 platform yang 100% tervalidasi oleh CV.
4. **Metrik dan Microcopy "Numbers as of"**:
   - Tanggal kerja Lassiewear tertulis `Apr 2026 - Aug 2026`. Angka views 30K+ membutuhkan label bulan rilis.
   - **Solusi**: Sediakan environment variable `VITE_LAUNCH_MONTH` (default: `October 2026`).

---

## 6. Sisa Istilah Lama dan Penerapan Aturan REV-K

Berdasarkan pencarian kata kunci, ditemukan **61 kemunculan istilah lama** di naskah `docs/portfolio-bible.md` (garis buku tulis, garis margin, sticky note, wall notes, peek sign, garis ink, kontur tinta, tepi putih die-cut).

Sesuai **Rule 00** dan **Aturan REV-K** (Revisi Paper Cut-Out 13 Oktober 2026), seluruh istilah lama tersebut **wajib dibaca dan diimplementasikan** dengan kamus translasi berikut:

| Istilah Lama di Naskah Bible | Nomor Baris Bible Terpilih | Makna & Bentuk Resmi Paper Cut-Out (REV-K) | Spesifikasi Teknis Komponen |
|---|---|---|---|
| **Kertas buku tulis bergaris** / **garis buku tulis** / **garis biru** | L199, L276, L376, L388, L422, L689, L708, L778, L837, L4554, L5224 | **Kertas Handmade Polos Bertekstur (Rag/Cotton Paper)**. Dilarang keras merender garis biru horizontal atau pola buku tulis. | Ubin 512×512 netral (`kit_paper-tile-neutral_512.webp`) dengan serat pendek & bintik organik. |
| **Garis margin** (margin merah) | L201, L276, L424, L692, L760, L779, L796, L829, L837, L939, L5225 | **Pita Tepi (Edge Ribbon)**. Strip kertas vertikal tipis (6–10 px) di sambungan lembar kertas handmade. | Komponen `PitaTepi`, warna `#E5173F` opasitas 55% atau warna pita arsitektur chapter. |
| **Sticky note** (papan nama) | L203, L278, L282, L377, L390, L423, L470, L485, L486, L780, L5228, L5338, L5450, L5602, L5660 | **Label Kertas Gunting (Paper Cut Label)**. Potongan kertas bersudut membulat dengan dua paku kertas/brad di atas. | Komponen `PaperLabel`, rotasi tetap sesuai deret papan nama (−3, 4, −2, 5, dst.). |
| **Wall Notes** | L14, L783, L5231 | **Tag Kertas (Paper Tag)**. Tag kertas gunting dengan lubang dan tali rami/benang jahit, tepi deckle. | Komponen `PaperTag`. |
| **Peek Sign** | L14, L282, L785, L5233, L5338 | **Edge Tab**. Tab kertas gunting kecil (0,3 Hd) tanpa teks yang mengintip dari tepi layar kanan/bawah pada 20% scroll terakhir. | Komponen `EdgeTab`. |
| **Garis ink** / **kontur tinta hitam** | L691, L708, L786, L825, L843, L1127, L1526, L2734, L3066, L3198, L3622, L4193, L4601, L5234 | **Tepi Potongan Kertas (Tear / Cut Edge)**. Bentuk objek dibaca dari siluet potongan kertas dan bayangan bertingkat, **tanpa outline/stroke tinta hitam**. | Garis tepi 2–3 px, sorot 1 px di tepi atas, bayangan `filter: drop-shadow`. |
| **Tepi putih die-cut** | L827, L1229, L2822, L4852 | **Tepi Kertas Asli (Deckle / Cut Edge)**. Ketebalan fisik lembar kertas handmade (3 px). | Sisi bawah/kanan 12% lebih gelap, atas/kiri 8% lebih terang. |
| **Tali garis ink** | L787, L424 | **Tali Kertas Pilin / Benang Jahit Kertas**. | Tekstur tali rami `#D9B98C` atau benang katun. |
