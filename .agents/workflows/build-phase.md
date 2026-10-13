---
description: Kerjakan satu prompt fase (contoh /build-phase P06)
---
1. Buka `docs/02-prompts-antigravity.md`, temukan prompt `nama prompt yang disebut pengguna setelah perintah (mis. P06)` (mis. P06) dan baca semua berkas yang disebut.
2. Susun Implementation Plan (artifact) dan tunggu bila ada keputusan untuk pemilik.
3. Kerjakan semua butir prompt; jangan melewatkan satu pun frame, aset, atau teks.
4. Jalankan `npm run check`, uji 360/768/1440 px + Calm mode di browser, simpan bukti ke `docs/evidence/<Pxx>/`.
5. `node scripts/check-coverage.mjs --owner <Pxx> --write`, perbarui `docs/03-coverage-matrix.csv`.
6. Tulis Walkthrough: selesai / belum / butuh keputusan.
