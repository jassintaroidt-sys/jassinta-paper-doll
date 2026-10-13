# Rule 50 — Setiap komponen visual punya ukuran yang diuji

- Kalimat seperti "terlihat bagus", "mirip", atau "natural" bukan kriteria selesai. Setiap komponen yang punya angka di bible (tinggi TornEdge `clamp(36px, 6vw, 90px)`, doll 22–28% viewport maks 320 px, gelembung ≤9 kata, target sentuh ≥44 px, kontras ≥4,5:1, dst.) wajib diuji dengan tes unit atau `getBoundingClientRect` di Playwright pada 360, 768, 1440 px.
- Halaman uji (`#/dev/*`) menampilkan panel **PASS/FAIL** per cek. Agent tidak boleh melapor selesai bila ada FAIL, dan harus melampirkan screenshot panel itu.
- Sebelum melapor, agent meninjau screenshot-nya sendiri dengan daftar `docs/08-style-test-checklist.md`: isi adegan terpotong? lantai terlihat? doll utuh? bentuk primitif? gelembung memakai bahan kertas?
- TornEdge: amplitudo kontur tidak pernah melewati kotak wrapper; isi section berhenti di atas wrapper; hanya di enam section.
- Elemen alat uji (bilah atas, tombol dev) bukan bagian desain dan tidak dinilai.
