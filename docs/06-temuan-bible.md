# 06 · Temuan awal bible (diisi dan diperluas oleh agent di P00)

Temuan yang sudah terlihat saat dokumen dianalisis; agent menambah nomor baris dan keputusan pemilik.

| # | Temuan | Perlakuan sementara |
| --- | --- | --- |
| 1 | Tidak ada gambar/foto yang ikut terunggah bersama dokumen (master doll, tiga tangkapan layar, 55 aset). Bible hanya memuat bacaan teksnya (DV bagian 1). | Letakkan gambar di `reference/` sebelum P03; agent mencatat selisih |
| 2 | PB 5.10 menyebut "Kostum (15)" sedangkan DV memuat K1 sampai K17 | K16 (varian sepia, tanpa gambar baru) dan K17 (ikon kepala) diperlakukan sebagai varian utilitas; 15 kostum + 2 |
| 3 | Struktur folder permintaan awal tidak memuat awalan `1_` (Chapter 1) dan folder media/kit | Ditambah: `world/1_*`, `kit/`, `video/ img/ logo/ pdf/ fonts/` |
| 4 | Nama DV memakai "garis ink", "kontur", "sticky note" yang dicabut revisi Paper Cut-Out | Dibaca lewat REV-K (tepi potongan kertas, label kertas gunting) |
| 5 | Ukuran loker tertulis `var(--px)`; konversi `--px`≈0,301 | Jadikan token tunggal; uji di 360–1920 px |
| 6 | Periode Comic Club di caption Participation (2021–2022) berbeda dengan CV (Jan 2022–Dec 2023) | `needsReview`; tunggu pemilik |
| 7 | Logo empat brand beresolusi rendah | Dipakai kecil sampai vektor tersedia |
| 8 | `A_bayangan-doll_VT.svg` dan `0_0-53_kertas-sobek-101.svg` "tidak digenerate" | Komponen CSS/SVG runtime (kind=`css-only`) |
| 9 | Baris `4_info-*` di PA tidak punya ID DV | ID cadangan = nama berkas; spesifikasi dari prompt PA dan DF 17.2 |
| 10 | Chapter 3B dan 3A sama-sama berdinding hijau/putih dekat 3C hijau | Dibedakan lewat panel/pita (DF 28.4); uji satu warna |
