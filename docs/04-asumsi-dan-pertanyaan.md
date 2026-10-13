# 04 · Asumsi yang kupakai dan pertanyaan terbuka

Aku tidak menunggu jawaban untuk menyusun paket ini; semua asumsi memakai pilihan yang paling aman terhadap bible. Ubah bila perlu, lalu perbarui `AGENTS.md`.

| # | Pertanyaan | Pilihan | Asumsi saat ini |
| --- | --- | --- | --- |
| 1 | Stack aplikasi | A. Vite + React + TS + Tailwind · B. Next.js · C. Lainnya | **A** (bible menyebut `VITE_MEDIA_BASE_URL`, `vite-env.d.ts`, Tailwind) |
| 2 | Format aset hasil kode | A. SVG sumber + WebP 1×/2× · B. hanya SVG · C. hanya render runtime | **A** (nama berkas bible berakhiran .webp) |
| 3 | Pustaka animasi | A. CSS + rAF hook · B. GSAP · C. Motion | **A** (anggaran JS ±200 KB) |
| 4 | Penyimpanan media karya | A. satu origin (`public/assets`) · B. CDN (`VITE_MEDIA_BASE_URL`) | **A** dulu, B bila video terlalu berat untuk Vercel |
| 5 | Mode otonomi agent | A. Review tiap rencana (P00–P05) lalu Agent Decides · B. Selalu proses | **A** |
| 6 | Cabang git | A. satu cabang per prompt · B. satu cabang utama | **A** |
| 7 | Bulan peluncuran (`VITE_LAUNCH_MONTH`) | isi bulan | belum diisi |
| 8 | Siapa meninjau siluet Ka’bah | nama/kontak Karamina Tour | belum ada |
