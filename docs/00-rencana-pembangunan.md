# 00 · Rencana pembangunan di Antigravity IDE

## 1. Prinsip
1. **Bible tetap utuh.** `docs/portfolio-bible.md` (499.525 byte, 381 judul) tidak disingkat. Agent bekerja lewat potongan (`docs/chapters/*`, `docs/part*`), bukan lewat ringkasan.
2. **Tiga jaring pengaman "tanpa ada yang terlewat":**
   - `asset-manifest.csv` — 355 berkas aset (343 dari tabel Prompt AI + 12 paper kit), tiap baris punya `owner_prompt`, spesifikasi bentuk/warna/sudut dari Design Bible, referensi visual, status.
   - `docs/03-coverage-matrix.csv` — 381 judul bagian bible → prompt pemilik → target kode → status → bukti.
   - `scripts/check-coverage.mjs --strict` — gagal bila ada aset placeholder/hilang atau bagian bible belum `done`.
3. **Aset lahir dari kode**, bukan dari gambar. Satu definisi deklaratif menghasilkan komponen runtime sekaligus berkas `public/assets/*`.
4. **Gerbang manusia**: tiga persetujuan pemilik (Style Test P02, doll P03, prototipe P09) sebelum produksi massal.

## 2. Keputusan teknis (dari bible; yang bertanda ★ adalah usulan yang boleh kamu ubah)
| Area | Keputusan |
| --- | --- |
| Dunia | DOM berlapis + CSS 3D (Opsi A), tanpa WebGL |
| Framework | Vite ★ + React 18 + TypeScript strict ★ + Tailwind 3 (warna dari token) |
| Scroll | Lenis; tanpa scroll-snap global |
| Animasi | CSS transform/opacity + hook `useScrollProgress` ★ (tanpa pustaka animasi tambahan) |
| Router | Hash router buatan sendiri (`#/…`) ★ |
| Font | Self-host, subset Latin; Fraunces dua instance statis ★ |
| Aset | SVG sumber + WebP 1×/2× via `sharp` ★ |
| Tes | Vitest (unit), Playwright + axe (e2e/a11y), Lighthouse |
| Hosting | Vercel (proyek yang sama dengan link CV), analitik Plausible |

## 3. Struktur folder final
```
jassinta-paper-doll/
├─ AGENTS.md                      aturan mutlak (dibaca otomatis oleh Antigravity)
├─ asset-manifest.csv             355 aset: owner_prompt, spesifikasi, status
├─ .agents/rules/                 00 sumber kebenaran · 10 visual · 20 teknik · 30 aset-kode
├─ .agents/workflows/             /analyze-bible /build-phase /gen-assets /audit-coverage
├─ docs/
│  ├─ portfolio-bible.md          bible lengkap (read-only)
│  ├─ design-bible-visual.md      Bagian 3: gaya, warna, tipografi, world, doll, TornEdge, teknis
│  ├─ journey-storyboard.md       Bagian 2: cerita, peta chapter, storyboard
│  ├─ prompts-aset.md             Bagian 7: nama file resmi + referensi visual
│  ├─ part1-konsep.md · part5-dunia-bersama-overlay.md · part6-produksi-qa.md · lampiran-riwayat-keputusan.md
│  ├─ chapters/ch0 … ch8          frame, aset, konten tiap chapter
│  ├─ 00-rencana · 01-playbook · 02-prompts · 03-coverage-matrix.csv · 04-asumsi · 05-data-review · 06-temuan
│  ├─ analysis/ · evidence/       keluaran agent dan bukti verifikasi
├─ reference/                     doll-55/ screenshots/ media-originals/ (hanya dibaca)
├─ public/
│  ├─ assets/ doll/ world/ ui/ strips/ map/ kit/     dibuat dengan kode
│  ├─ assets/ video/ img/ logo/ pdf/                  karya asli milikmu
│  └─ fonts/
├─ scripts/ csv.mjs · make-placeholders.mjs · check-coverage.mjs · generate-assets.mjs (dibuat di P04)
└─ src/
   ├─ tokens/ (colors brand fonts motion paper breakpoints)
   ├─ paperkit/ (prng noise jitter deckle texture torn shadow)       ← tambahan
   ├─ assets-def/ (doll ch0…ch8 overlay ui strips map kit)           ← tambahan
   ├─ components/ paper/ doll/ world/ hud/ overlay/ ambient/ eggs/
   ├─ chapters/ Opening EditorsDesk Newsroom CreatorTrilogy Boutique CampusLibrary RadioBooth ArchiveRoom Mailbox
   ├─ hooks/ lib/ (media.ts, analytics.ts) data/ (companies works chapters strings journey)
   └─ pages/ (Plain, 404, dev/*)
```
Penambahan terhadap struktur permintaanmu: `.agents/`, `reference/`, `kit/`, `1_*` di `world/`, `video/ img/ logo/ pdf/`, `paperkit/`, `assets-def/`, `lib/`, `pages/`.

## 4. Urutan prompt, gerbang, dan sebaran aset
| Urutan | Prompt | Isi | Aset | Gerbang |
| --- | --- | --- | --- | --- |
| 1 | P00 | Analisis bible, temuan, pertanyaan | 0 | Pertanyaan terjawab |
| 2 | P01 | Scaffold, token, data 34 karya/10 perusahaan, hook, media helper | 0 | `npm run check` hijau |
| 3 | P02 | Paper Kit, TornEdge, **Style Test** | 12 | **Persetujuan pemilik** |
| 4 | P03 | Doll rig, 17 kostum, 31+3 pose, 6 ekspresi | 56 | **Persetujuan pemilik** |
| 5 | P04 | Pabrik aset + contact sheet | 0 | Generator jalan |
| 6 | P05 | Mesin dunia, HUD, walk strip, papan nama, peta | 50 | Perjalanan kosong mulus |
| 7 | P09 | **Prototipe** lobi 3.0 + café 3A | 31 | **Uji di HP + persetujuan** |
| 8 | P06 | Chapter 0 loker | 39 | Loker utuh semua layar |
| 9 | P07 | Chapter 1 | 12 | Putih murni |
| 10 | P08 | Chapter 2 | 25 | Tiga dinding serasi |
| 11 | P10 | 3B, 3C, recap | 32 | Angka cocok |
| 12 | P11 | Chapter 4 + halaman jenis konten | 21 | 4 video sinkron |
| 13 | P12 | Chapter 5 | 14 | Flipbook 89 halaman |
| 14 | P13 | Chapter 6 | 14 | ON AIR sinkron |
| 15 | P14 | Chapter 7 + Archive | 12 | 34 karya tanpa crop |
| 16 | P15 | Chapter 8 | 11 | Kontak berfungsi |
| 17 | P16 | 7 overlay, INDEX, Quick Look, Plain page | 20 | Semua rute berfungsi |
| 18 | P17 | Ambient, 5 easter egg | 6 | FPS ≥40 |
| 19 | P18 | Responsif, performa, a11y, SEO, analitik | 0 | Daftar QA lulus |
| 20 | P19 | Audit akhir + peluncuran | 0 | `--strict` hijau + tanda tanganmu |

Prioritas bila waktu terbatas (PB): **wajib** Opening, Ch1–4, Contact, Quick Look, Plain page, a11y dasar, anggaran performa · **disarankan** Ch5–7, INDEX, kondisi gagal, SEO/OG · **bonus** easter egg, ambient lengkap, walk strip dua lapis. Karena permintaanmu "tidak ada yang tertinggal", semuanya tetap dikerjakan; urutan di atas sudah menaruh bonus paling akhir.

## 5. Risiko dan mitigasi
| Risiko | Mitigasi |
| --- | --- |
| Agent merangkum bible (±500 KB) dan kehilangan detail | Potongan per chapter, prompt menyebut bagian eksak, matriks cakupan, `/audit-coverage` |
| Aset "selesai" padahal masih placeholder | Placeholder bertanda `data-placeholder`, `check-coverage --strict` |
| Gaya melenceng (kertas bergaris, kontur tinta) | Rule 10, uji penerimaan visual, gerbang Style Test |
| Berat di HP kelas menengah | Lite mode, anggaran tiap chunk, Lighthouse tiap prompt |
| Konteks agent penuh di sesi panjang | Satu prompt per sesi, bukti ke `docs/evidence/`, status ke CSV |
| Data karangan/angka salah | `needsReview`, label *Numbers as of*, audit sumber di P19 |
| Menyalin gambar referensi | Rule 30, `reference/` terpisah dari `public/` |
