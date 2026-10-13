---
description: Audit apakah semua isi bible sudah terlaksana
---
Jalankan `node scripts/check-coverage.mjs`. Untuk setiap baris matriks berstatus `todo` atau `done` tanpa bukti, buka bagian bible terkait (nomor baris ada di kolom `baris_bible`) dan cocokkan dengan kode/halaman. Laporkan celah dalam tabel: bagian, yang kurang, file yang harus diubah. Jangan menandai `done` tanpa bukti.
