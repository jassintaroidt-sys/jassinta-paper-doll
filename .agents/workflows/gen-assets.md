---
description: Buat aset dengan kode untuk satu pemilik prompt (contoh /gen-assets P06)
---
Baca `.agents/rules/30-assets-by-code.md` dan baris manifest dengan `owner_prompt` yang diminta. Tulis/lengkapi definisi di `src/assets-def/`, jalankan `npm run assets -- --owner <Pxx>`, bandingkan hasil dengan tabel DV dan prompt referensi di `docs/prompts-aset.md`, lalu `node scripts/check-coverage.mjs --owner <Pxx> --write`. Tampilkan contact sheet semua aset batch itu di browser sebagai screenshot.
