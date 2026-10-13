# 01 · Playbook: tata cara membangun di Antigravity IDE

Label menu Antigravity bisa berbeda antar versi; bila ada yang tidak cocok, cari padanannya di Settings atau Customizations.

## A. Persiapan (sekali)
1. Pasang Node.js 20+ dan Git. Pasang Antigravity IDE dan masuk dengan akunmu.
2. Ekstrak paket ini ke folder `jassinta-paper-doll/`, lalu di terminal: `git init && git add -A && git commit -m "bible dan perencanaan"`.
3. Kunci bible agar tidak terubah: `chmod a-w docs/portfolio-bible.md` (Windows: properti file → Read-only).
4. Salin 55 aset doll buatanmu ke `reference/doll-55/`, gambar master dan tiga tangkapan layar referensi ke `reference/screenshots/`, karya asli ke `public/assets/video|img|logo|pdf` (daftar di `docs/05-data-review.md` bagian C). Isi `.env` dari `.env.example` setelah P01.
5. Buka folder itu sebagai workspace (File → Open Folder).

## B. Pengaturan Antigravity
- **Aturan.** `AGENTS.md` di root dibaca otomatis pada versi IDE terbaru (sekitar v1.20.5 ke atas); `.agents/rules/*.md` adalah Rules workspace dan `.agents/workflows/*.md` muncul sebagai perintah `/`. Batas ±12.000 karakter per berkas; semua berkas di paket ini di bawah batas itu. Verifikasi: buka sesi baru dan tanya "sebutkan 15 aturan mutlak proyek ini"; jawabannya harus cocok dengan `AGENTS.md`. Bila tidak terbaca, tambahkan manual lewat panel Customizations → Rules (Workspace).
- **Model.** Pilih model terkuat yang tersedia untuk P00 sampai P05 (perencanaan dan arsitektur), model yang lebih cepat boleh untuk batch aset yang repetitif.
- **Otonomi.** P00–P05: mode yang meminta review rencana ("Request review"/setara). Setelah gerbang P05 lulus: "Agent Decides". Hindari "Always proceed" untuk perintah terminal.
- **Browser agent.** Aktifkan agar agent bisa membuka `npm run dev`, mengambil screenshot 360/768/1440 px dan merekam uji.

## C. Siklus kerja tiap prompt
1. Buat cabang: `git switch -c P06-chapter0`.
2. Mulai sesi baru (satu prompt = satu sesi; ini menjaga konteks tetap bersih). Tempel **kalimat pembuka standar** + prompt dari `docs/02-prompts-antigravity.md`, atau jalankan `/build-phase P06`.
3. Pada **Implementation Plan**: periksa bahwa semua butir prompt dan semua frame/ID aset muncul. Komentari bila ada yang hilang, baru setujui.
4. Saat bekerja, pantau Task List. Bila agent mulai "meringkas" bible atau melewati butir, hentikan dan kirim: *"Buka docs/chapters/… bagian … dan implementasikan semuanya satu per satu. Jangan merangkum."*
5. Pada **Walkthrough**: periksa screenshot di tiga lebar, uji Calm mode, uji keyboard (Tab/Enter/Esc), dan hasil `npm run check`.
6. Jalankan `/audit-coverage` (atau `node scripts/check-coverage.mjs --owner P06`). Tidak boleh ada aset `placeholder` untuk prompt itu.
7. Commit dan gabung: `git commit -am "P06 done"` lalu merge. Tandai kemajuan di `docs/03-coverage-matrix.csv`.

## D. Paralel dengan Agent Manager
Setelah P05 dan P09 lulus, chapter yang saling lepas boleh paralel: {P06, P07, P08} lalu {P10, P11} lalu {P12, P13, P14, P15}. Setiap agent memakai cabang atau git worktree sendiri; **jangan** biarkan dua agent mengubah `src/data/*`, `src/tokens/*`, atau `asset-manifest.csv` bersamaan (gabungkan manual). P16 sampai P19 berjalan satu per satu.

## E. Gerbang pemilik (kamu yang memutuskan)
| Gerbang | Yang kamu periksa |
| --- | --- |
| P02 Style Test | Serat/bintik terlihat, tepi deckle, tanpa garis buku tulis, doll terbaca di tiga warna, "ini dia" |
| P03 Doll | Sama dengan master: hijab, wajah, brad, sepatu hitam, 15 kostum |
| P09 Prototipe | Lancar di HP-mu sendiri, 3A hangat dan jujur, angka benar |
| P19 | Semua `[cek]` di `docs/05-data-review.md` terjawab; izin brand/talent; siluet Ka'bah |

## F. Masalah umum
| Gejala | Tindakan |
| --- | --- |
| Agent menaruh kertas bergaris/kontur tinta | Kirim kutipan REV-K dan Rule 10, minta ulang komponen terkait |
| Aset hanya placeholder | `node scripts/check-coverage.mjs --owner Pxx`; jalankan `/gen-assets Pxx` |
| Gambar referensi tersalin ke `public/` | Hapus, ulangi dari definisi kode (Rule 30) |
| Loker terpotong di HP | Uji 360×640, landscape, 768×1024; ukur memakai `svh` dan `--px` |
| Lighthouse <70 | Aktifkan Lite mode di uji, cek chunk, video `preload=none`, filter SVG hidup |
| Konteks agent penuh | Akhiri sesi, mulai sesi baru dengan prompt yang sama; status ada di CSV dan `docs/evidence/` |
| Data tampak karangan | Cari di bible nomor barisnya; bila tidak ada, ganti `needsReview` dan tanya |

## G. Penutupan
Jalankan P18 dan P19, `node scripts/check-coverage.mjs --strict`, uji tautan, lalu deploy ke Vercel (proyek yang sama dengan link CV), perbarui CV bila domain berubah.
