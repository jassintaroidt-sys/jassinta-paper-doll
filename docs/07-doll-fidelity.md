# 07 · Kemiripan doll dengan 55 aset buatanmu

## 1. Kenapa Style Test P02 tidak mirip
Doll di Style Test adalah **placeholder primitif** (kotak dan oval) karena doll sebenarnya baru dikerjakan di P03. Prompt P02 yang kubuat mengizinkan placeholder itu tanpa ukuran kemiripan apa pun. Itu kekurangannya, dan sudah diperbaiki di sini: ada **prompt P02b**, **aturan 40**, **gerbang angka** (`scripts/compare-doll.mjs`), dan P03 tidak boleh lulus tanpa gerbang itu.

## 2. Hasil ukur dari `doll_01_seragam_F_wave.webp` (kanvas 1023×1537)
Hanya satu gambar ini yang sampai ke aku; 54 lainnya harus diukur ulang oleh agent dengan cara yang sama.
| Ukuran | Nilai |
| --- | --- |
| Figur termasuk garis tepi | 552×1236 px (lebar/tinggi 0,447); batas putih die-cut ±22 px (1,8% tinggi) |
| Garis tepi | gelap, ±2 px di kanvas ini (±0,16% tinggi), menerus mengikuti bentuk |
| Letak (persen dari tinggi, dari atas) | dagu 19,7 · bahu 23,0 · siku kiri 33,9 · ujung rompi 48,9 · brad lutut 73,1 · ujung rok 92,6 · dasar 100 |
| Lebar (persen tinggi) | hijab/kepala 18,1 · bahu dan lengan 33,9 · pinggang 27,0 · lutut 25,2 · ujung rok 19,8 · sepatu 19,2 |
| Warna terukur | hijab #F6E7C2 · kulit #FCCFB2 · blush #F6B79D · rompi #ACE1CF · lengan dan dalaman #F6F6F5 · rok #B9E1F6 · sepatu #323231 · kaos kaki #F7F7F7 · brad #C6C9C9 (cincin #97B7C9) · kartu ID pink #F792C2 dan putih #F6E6EE · mata #22201F |
| Ciri yang wajib ada | hijab krem berlipatan lembut dengan drape di leher; wajah oval, dua mata hitam dengan bulu mata kecil, alis tipis, blush bulat, senyum kecil; rompi rajut kepang dengan leher V; lengan putih panjang berkerah manset; kalung ID pink-marun dengan kartu; rok A-line dengan lipit vertikal; dua brad lutut (lingkaran abu di atas oval bayangan) dan dua brad ujung rok; kaos kaki putih dan flat shoes hitam; tangan dengan garis jari |

**Konflik yang kuputuskan, boleh kamu balik:** hex doll di Design Bible (kulit #E8B795, blush #E9A39B) berbeda dari hasil ukur gambarmu (#FCCFB2, #F6B79D). Aku menetapkan **gambarmu menang** untuk doll. Revisi Paper Cut-Out melarang kontur tinta pada benda, tetapi gambarmu memakai garis tepi tipis; karena kamu minta "benar-benar mirip", doll **mempertahankan garis tepi tipis T1** dan tepi putih die-cut sebagai tepi kertas. Dunia dan benda lain tetap tanpa kontur tinta.

## 3. Cara membuat mirip dengan kode (tiga tahap)
1. **Telusur (trace)**: `scripts/trace-reference.mjs` mengubah tiap berkas di `reference/doll-55` menjadi SVG berlapis dengan kode (kuantisasi warna dikunci ke palet terukur, jalur garis tepi terpisah, penyederhanaan jalur). Yang dipakai adalah **geometri hasil telusur**, bukan salinan raster, dan disimpan di `src/assets-def/doll/traced/`.
2. **Rig**: master F/W/B dipotong menjadi enam lapisan di garis potong (persen tinggi di tabel), pivot di brad. Pose yang gambarnya memang unik (misal melambai) memakai hasil telusurnya langsung; pose turunan diputar di brad lalu dicocokkan ke referensinya.
3. **Finishing kertas**: tekstur, deckle, bayangan tiga lapis dari P02 dipasang di atas hasil telusur; bentuk dan warna tidak berubah.

## 4. Gerbang angka dan cara kamu mereview tanpa mengunggah 55 gambar
- Salin 55 aset ke `reference/doll-55/` dengan **nama berkas sama persis** dengan manifest. Cek: `node scripts/compare-doll.mjs --inventory`.
- Jalankan `node scripts/compare-doll.mjs`. Ambang: IoU siluet ≥ 0,93, selisih warna ΔE ≤ 7, selisih rasio ≤ 4%. Tiap kegagalan menyebut nama berkas.
- Skrip membuat `docs/evidence/doll-compare/sheet-01.png` dan seterusnya: kolom **referensi | hasil | selisih** (merah = hanya ada di referensi, biru = hanya ada di hasil), 16 pasang per lembar, jadi 55 aset cukup **4 gambar**. Unggah lembar itu ke sini bila mau kutinjau.
- Uji skrip (sudah kujalankan): referensi dibandingkan dengan dirinya sendiri → lulus (IoU 1,00); doll kasar mirip Style Test → gagal (IoU 0,38).
- `P03` baru boleh `done` bila `node scripts/compare-doll.mjs --strict` hijau **dan** kamu menyetujui satu lembar pembanding visual.

## 5. Prompt P02b (tempel sekarang ke Antigravity)
> Baca AGENTS.md, .agents/rules/* (termasuk rule 40), dan docs/07-doll-fidelity.md. Style Test P02 belum lulus karena doll-nya tidak mirip referensi. Kerjakan: (1) buka dengan alat lihat gambar semua berkas di reference/doll-55/ (jangan hanya membaca nama) dan ukur doll_01_seragam_F_wave sesuai tabel di dokumen 07 untuk memastikan angkanya; (2) bangun scripts/trace-reference.mjs dan alirkan hanya doll_01_seragam_F_wave menjadi SVG berlapis di src/assets-def/doll/traced/, dengan palet terukur, garis tepi tipis, dan tepi putih die-cut; (3) ganti doll placeholder di #/dev/style-test dengan hasil telusur itu (lalu finishing kertas P02); (4) jalankan node scripts/compare-doll.mjs --only doll_01_seragam_F_wave --strict dan ulangi sampai lulus; (5) tampilkan screenshot Style Test di 360, 768, 1440 px dan sheet pembanding. Jangan menyalin raster referensi ke public/. Jangan mengerjakan doll lain sebelum aku menyetujui hasil ini.