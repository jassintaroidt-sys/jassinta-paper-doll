# 08 · Cara menilai Style Test: yang diabaikan, yang serius, dan ukurannya

## 1. Screenshot café hijau (23:33): serius atau abaikan?
**Boleh diabaikan** (itu alat uji, bukan situs): bilah atas *P02 STYLE TEST · TAHAP 0*, tombol *Calm Mode*, tombol *Test Overlay*.
**Serius, jangan setujui P02**:
| # | Masalah di screenshot | Standar bible |
| --- | --- | --- |
| 1 | Tepi robek setinggi ±600 px dan memakan separuh adegan; lantai kayu hanya tersisa seujung kecil di lembah | `height: clamp(36px, 6vw, 90px)` (DF 11.5): di layar 1920 px maksimum **90 px**. Robekan hanya di tepi bawah, bukan mengiris isi adegan |
| 2 | Adegan 3A tidak punya lantai, konter, dan tiga props yang diminta Style Test | Prompt P02 butir (a): dinding hijau + chair rail krem + lantai kayu cocoa + 3 props |
| 3 | Kaki doll terpotong di tepi robekan | Doll utuh, sepatu terlihat, berdiri di lantai |
| 4 | Doll masih bentuk primitif (lengan seperti tongkat putih, kepala oval polos) | Rule 40: harus hasil P02b dan lulus `compare-doll` |
| 5 | Gelembung doll berupa kartu UI putih bergaya web, 11 kata, huruf Poppins | `PaperBubble` dari kertas bertekstur, Shantell Sans, **maksimal 9 kata** (7.5) |
| 6 | Robekan dipasang di 3A | TornEdge hanya di enam section (Opening, Cassette, Content Marketing, Video Reveal, Project Campus, Archive). Di Style Test boleh sebagai contoh, tetapi tetap wajib patuh ukurannya |
Yang sudah benar: serat dan bintik kertas terlihat di dinding, Pita Tepi di kanan, tab tepi krem.

## 2. Kenapa bisa lolos dan cara mencegahnya
Penyebabnya: tidak ada ukuran tertulis yang diuji, hanya kalimat "terlihat bagus". Sekarang ada **ukuran yang diuji otomatis** (rule 50) dan **panel PASS/FAIL di halaman Style Test**. Aturan mainnya: agent tidak boleh melapor selesai bila ada satu pun baris FAIL, dan kamu tidak perlu menilai dengan mata untuk hal-hal ini.

### Ukuran yang diuji (diukur lewat `getBoundingClientRect` dan tes unit)
| Cek | Batas | Sumber |
| --- | --- | --- |
| Tinggi wrapper TornEdge di layar ≥1440 | 36 sampai 90 px (di 360 px: 36 px) | DF 11.5 |
| Semua titik kontur robekan | berada di dalam kotak wrapper (tes unit: `0 ≤ y ≤ height`) | tes unit |
| Lebar TornEdge | `calc(100% + 4px)`, `margin-left: -2px`, tanpa celah kiri/kanan | DF 11.5 |
| Isi adegan di bawah robekan | tidak ada elemen (doll, props, teks) yang overlap kotak robekan | DF 11.9 |
| Seed | hanya 101/202/303/404/505/606; seed sama → path sama; tanpa `Math.random()` | DF 11 |
| Lantai terlihat | ≥ 15% tinggi adegan **[usulan, bukan angka bible]** | P02 butir (a) |
| Doll utuh | kotak doll sepenuhnya di dalam adegan; sepatu di atas garis lantai | 7.4 |
| Tinggi doll | 22–28% tinggi viewport, maksimum 320 px di ≥1440 | 7.4 |
| Gelembung | ≤ 9 kata, font Shantell Sans, bahan kertas (bukan kartu UI putih) | 7.5 |
| Props | tiga props (konter, mesin kopi, tanaman atau sesuai tabel DV 8.5) terlihat | P02 (a) |
| Dinding | tidak ada garis buku tulis, tidak ada kontur tinta, serat dan bintik terlihat di zoom 100% | REV |
| Layar | tidak ada scroll horizontal di 360, 768, 1440 px | DF 12 |

## 3. Prompt P02c (tempel ke Antigravity sekarang)
> Baca `AGENTS.md`, rule 10, 40, 50, dan `docs/08-style-test-checklist.md`. Style Test belum lulus: robekan di adegan hijau setinggi ±600 px dan memotong lantai serta kaki doll, adegan tidak punya lantai/konter/tiga props, gelembung doll adalah kartu UI putih 11 kata. Kerjakan: (1) perbaiki `TornSection` agar tinggi wrapper memakai `clamp(36px, 6vw, 90px)`, amplitudo kontur dibatasi di dalam kotak itu, lebar `calc(100% + 4px)`, `pointer-events:none`, bayangan `drop-shadow` di wrapper luar; tambahkan tes unit yang gagal bila ada titik kontur di luar kotak; (2) beri adegan 3A tinggi minimum yang cukup dan susun ulang: dinding + chair rail krem + lantai kayu cocoa + konter + tiga props, dengan robekan hanya di tepi bawah adegan dan konten berhenti di atasnya; (3) ganti gelembung dengan `PaperBubble` (kertas bertekstur, Shantell Sans, ≤9 kata); (4) tambahkan panel **PASS/FAIL** di `#/dev/style-test` yang menjalankan semua cek di tabel bagian 2 dokumen 08 pada layar saat ini, dan tes Playwright yang sama di 360, 768, 1440 px; (5) kirim screenshot tiga lebar dan hasil panel. Jangan melapor selesai bila ada baris FAIL. Doll tetap menunggu hasil P02b.
