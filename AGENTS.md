# AGENTS.md — Jassinta's Paper Doll Journey

Website portfolio satu halaman: perjalanan paper doll berhijab bernama Jassinta melintasi **Paper Town**, kota **Paper Cut-Out Art bertekstur** (kertas handmade), dari loker sekolah hingga kembali ke loker yang sama. Pemilik: Jassinta Roid Triniti (Digital Content Executive). Teks website berbahasa **Inggris**; dokumen, komentar kode, dan komunikasi dengan pemilik berbahasa **Indonesia**.

## Sumber kebenaran
Seluruh keputusan ada di `docs/portfolio-bible.md` (±500 KB, JANGAN diedit, JANGAN diringkas). Untuk bekerja, buka potongannya:
`docs/chapters/ch0..ch8-*.md` (frame, aset, konten per chapter) · `docs/journey-storyboard.md` · `docs/design-bible-visual.md` (gaya, warna, tipografi, world, doll, TornEdge, responsif, interaksi, teknis) · `docs/part5-dunia-bersama-overlay.md` · `docs/part6-produksi-qa.md` · `docs/prompts-aset.md` (nama file resmi + referensi visual) · `docs/lampiran-riwayat-keputusan.md` (hanya bacaan).

**Bila dua sumber bertentangan**: (1) bagian *Arah Visual Terbaru: Paper Cut-Out* dan *Produksi Paper Cut-Out dengan Kode* menang atas semua aturan visual lain; (2) bentuk/warna/sudut/ukuran → Design Bible Visual (DV) > Portfolio Bible 5.x dan DF 28 > DF lain; (3) konsep, copy, data karya, perilaku interaksi → Portfolio Bible (PB). Bila masih ambigu: **berhenti dan tanya pemilik**, jangan menebak.

## Aturan mutlak (rincian di `.agents/rules/`)
1. **Tidak ada yang boleh tertinggal.** Tiap judul bagian bible (381) ada di `docs/03-coverage-matrix.csv`; tiap berkas aset (355) ada di `asset-manifest.csv`. Tandai `done` hanya dengan bukti (path file, screenshot, hasil tes).
2. **Paper Cut-Out**: tanpa kertas bergaris, garis margin, kontur tinta hitam, sticky note, tulisan tangan di dinding. Semua dinding/lantai/benda/huruf/kartu = potongan kertas handmade berlapis (serat + bintik + tepi deckle/gunting, tebal 3 px, cahaya kiri-atas, 3 kedalaman bayangan via `filter: drop-shadow`).
3. **Chapter 1 putih murni** `#FFFFFF`: tanpa lantai, skyline, grain pada kanvas (grain hanya pada lembar dokumen).
4. Doll **selalu berhijab**, **sepatu selalu hitam**, brad selalu terlihat, **selalu berjalan** (tidak naik kendaraan; kendaraan hanya ambient).
5. **TornEdge hanya 6**: seed 101, 202, 303, 404, 505, 606; deterministik, tanpa `Math.random()` saat render, tanpa `clip-path`/zig-zag, bayangan via `drop-shadow` di wrapper luar.
6. **Opsi A**: 2.5D di DOM dengan CSS 3D. Tanpa WebGL. Loker dibuat ulang dengan CSS 3D berlapis; **dilarang menempel** gambar `loker_*.png`, `envelope.png`, dst.
7. Scroll lewat **Lenis**; tanpa scroll-snap global; `html, body { overflow-x: clip }`; `data-lenis-prevent` pada area scroll bersarang; Opening terkunci sampai OPEN.
8. **Tanpa audio otomatis.** Hanya `intro.mp4` (bersuara, WebVTT wajib) dan Spotify (hanya saat diklik). Video lain tanpa trek audio, ada tombol pause, maksimal 6 aktif.
9. **Aksesibilitas**: keyboard penuh, `:focus-visible` pink 3 px, overlay `role=dialog aria-modal`, focus trap, Esc, fokus kembali; Plain page (`#/plain`), Calm mode, `prefers-reduced-motion`, zoom tidak dikunci (**tanpa** `user-scalable=no`), target sentuh ≥44×44 px, kontras ≥4,5:1.
10. **Satuan & responsif**: `svh/dvh/lvh` (bukan `vh`), `env(safe-area-inset-*)`, `clamp()`, container query, hover hanya di `(hover:hover) and (pointer:fine)`, tanpa horizontal scroll halaman.
11. **Data tidak dikarang.** Angka, tanggal, link, credit hanya dari bible. Tanda `[cek]`/`[isi]` → simpan dengan `needsReview: true` dan catat di `docs/05-data-review.md`.
12. Semua media lewat `mediaUrl()` (`src/lib/media.ts`), `SafeImage`/`SafeVideo`; tidak menulis path media langsung.
13. Nama aset **persis** seperti `asset-manifest.csv` (`{chapter}_{id}_{nama}_{sudut}`); nama file di bible "sudah benar dan tidak boleh diubah".
14. Warna **hanya** token hex bible; hex baru hanya yang bertanda `[BARU]`. Barang di dinding tidak sewarna dinding; kostum tidak sewarna dinding.
15. Dilarang meniru karakter/komposisi/aset situs referensi Mr. Panda (aturan orisinalitas).

## Aset dibuat dengan kode
55 aset doll buatan pemilik **hanya referensi**. Semua aset akhir dibuat dari definisi deklaratif di `src/assets-def/` dengan `src/paperkit/` (PRNG seeded, jitter path, deckle, tekstur) dan diekspor oleh `scripts/generate-assets.mjs` ke `public/assets/{doll,world,ui,strips,map,kit}/` (SVG + WebP via sharp). Komponen runtime memakai definisi yang sama. `scripts/make-placeholders.mjs` hanya untuk menjaga build; placeholder (`data-placeholder="true"`) tidak dihitung selesai.

## Stack
Vite + React 18 + TypeScript (strict) + Tailwind 3 (warna dari token) + Lenis + Vitest + Playwright (+ axe). Router hash buatan sendiri (`src/hooks/useHashRoute.ts`). Font self-host di `public/fonts` (Fraunces: dua instance statis). Hosting Vercel (`vercel.json` rewrite `/plain`). Analitik Plausible (tanpa cookie).

## Alur kerja satu prompt
1. Baca potongan docs yang disebut prompt, plus baris manifest `owner_prompt` terkait.
2. Tulis rencana singkat (artifact Implementation Plan) → kerjakan → jalankan `npm run check`.
3. Verifikasi di browser pada 360, 768, 1440 px + Calm mode; simpan screenshot ke `docs/evidence/<prompt>/`.
4. `node scripts/check-coverage.mjs --owner <Pxx> --write`; update `status`/`bukti_verifikasi` di matriks.
5. Laporkan: apa selesai, apa belum, keputusan yang butuh pemilik. Jangan klaim selesai tanpa bukti.

## Perintah
`npm run dev` · `npm run check` (tsc + lint + vitest + `check-coverage`) · `npm run assets` (generate-assets) · `npm run e2e` · `node scripts/make-placeholders.mjs --owner P06` · `node scripts/check-coverage.mjs --strict`.
