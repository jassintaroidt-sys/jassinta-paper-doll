# Rule 40 — Doll harus mirip 55 aset pemilik

- Bentuk, proporsi, warna, dan detail doll **mengikuti 55 berkas di `reference/doll-55/`**. Hasil terukur (`docs/07-doll-fidelity.md`) mengalahkan hex Design Bible bila berbeda; catat selisih di `docs/06-temuan-bible.md`.
- Doll **mempertahankan garis tepi tipis (T1) dan tepi putih die-cut** seperti referensi; ini satu-satunya pengecualian dari larangan kontur pada Rule 10. Hijab, sepatu hitam, brad selalu ada.
- Dilarang membuat doll dari bentuk primitif asal-asalan (kotak, oval, garis lurus) atau menyalin raster referensi ke `public/`. Geometri **boleh ditelusuri dengan kode** (`scripts/trace-reference.mjs`) dan disimpan sebagai definisi di `src/assets-def/doll/traced/`.
- Sebelum membuat satu pun doll: buka gambar referensinya dengan alat lihat gambar, bandingkan, baru tulis kode.
- **Gerbang**: `node scripts/compare-doll.mjs --strict` (IoU ≥ 0,93, ΔE ≤ 7, rasio ≤ 4%) harus hijau untuk semua berkas sebelum prompt doll ditandai `done`. Placeholder dan primitif dihitung gagal. Setelah tiap batch, buat sheet dan sampaikan ke pemilik.
- Doll placeholder hanya boleh muncul sebagai `data-placeholder="true"` dan tidak pernah dipakai pada halaman uji persetujuan pemilik.
