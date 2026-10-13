## Chapter 8: The Mailbox (Contact)

### 21. Chapter 8: The Mailbox (Contact) (DF)

**Beat:** *I would love to hear your story.* **Babak:** III · Remembered. **Mode:** D (walk strip 7→8) lalu S. **Tidak ada kertas sobek.**

**Arah visual:** kembali ke koridor loker dari Chapter 0, kini dengan satu loker bergaya kotak surat dan Paper School terlihat dari jalan pulang. Palet: blush, lilac, cotton-candy gradient, pearl. Kostum doll: kembali ke seragam santai pastel, hijab krem, sepatu hitam, sama seperti saat memulai perjalanan.

**Layout (mengikuti Aset 7.png):** kanan atas daftar isi (INDEX). Bagian tengah bawah tiga kolom rata. Tulisan **Email** dan **WA/Phone** memakai Gloock (bold), tulisan **Social Media** memakai Fraunces Light Italic (bold italic); ukuran ketiga judul **66 px**. Nilai kontak memakai Fraunces Italic **24,9 px**.

#### 21.1 Frame (DF)

| **Frame** | **Visual dan doll** | **Gerak dan interaksi** | **Copy (EN)** |
| --- | --- | --- | --- |
| 8.1 Masuk | **Walk strip 7→8:** jalan melengkung pulang, Paper School terlihat, **jejak sepatu hitam dari 0.7 masih ada di jalan**. Papan nama. Doll berjalan ke loker yang menempel label washi di pintunya | Doll berjalan menyusuri jejak lamanya. Doll berganti kostum kembali 450 ms | Papan: *CHAPTER 08 · THE MAILBOX* dan *Contact*. *Reserved for: your story*. Gelembung: *One more thing: your story goes here.* |
| 8.2 Surat | Doll memasukkan amplop ke celah loker, amplop sama dengan barang My Message | Amplop meluncur 600 ms. Hover amplop: label *My Message*, klik membuka #/my-message | tanpa teks |
| 8.2b Kind words | **Tidak dibuat** (testimoni ditiadakan, belum ada). Bila nanti ada: papan gabus kecil dengan maksimal tiga label kertas berlabel *Kind words*, jangan tampilkan papan kosong | n/a | n/a |
| 8.3 Tiga kolom | Tiga kolom rata: **Email** (Gloock), ***Social Media*** (Fraunces Light Italic), **WA/Phone** (Gloock), semuanya 66 px. Nilai di bawahnya Fraunces Italic 24,9 px | Muncul bergantian 150 ms. Hover: garis bawah pink. Klik menjalankan aksi | *Email*, *Social Media*, *WA/Phone* |
| 8.4 Nilai kontak | Teks kontak dalam kartu kertas. mailto dan wa.me **disusun lewat JavaScript saat halaman dimuat**, bukan teks statis di HTML (anti spam) | Email membuka mailto: dengan subjek dan isi awal terisi. Instagram membuka profil di tab baru. WhatsApp membuka wa.me/6281919032518 dengan pesan awal terisi. Tombol kecil *Copy* dengan toast *Copied!* | *jassintaroidt@gmail.com*, *Instagram: @jassinta.roid*, ***+62 8191 9032 518*** (gaya CV). Subjek email: *Hello Jassinta, let’s talk about [your project]*. Pesan WhatsApp: *Hi Jassinta, I saw your portfolio and would love to talk about...* |
| 8.4b Info tambahan | Tiga baris kecil di bawah tiga kolom kontak | Statis. Chip *Open to...* **tidak ditampilkan** di versi pertama | *Best for: brand content strategy · short video and motion · SEO and news writing · podcast scripts*. *I reply Monday to Friday, during working hours (WIB).* Tombol: *Download CV (PDF)* |
| 8.5 Penutup | Kalimat besar di atas doll yang melambai | Fade 500 ms, doll melambai | *I would love to hear your story.* lalu *Let’s create something worth remembering.* |
| 8.6 Footer | Teks DM Mono huruf besar | Statis | *2026* (kiri), *JASSINTA ROID TRINITI* (tengah), *CONTENTS* (kanan) |
| 8.7 Ulang | Tombol stiker di dekat loker | Gulir halus ke atas. Loker tidak kembali terkunci karena sudah dibuka sekali | *Back to the locker* |
| 8.8 HP | Tiga kolom menjadi satu kolom bertumpuk | Tombol sentuh minimal 44 × 44 px | sama |

**Aksesibilitas:** tiap tautan punya aria-label (misalnya *Send an email to Jassinta*), fokus pink 3 px, dan tampil jelas tanpa animasi saat reduced motion. Format nomor telepon CV: +62 8191 9032 518 (di brief awal +62 81919 0325 18, digitnya sama). Tautan portofolio di CV menuju jassinta-roid-triniti-eswy.vercel.app, jadi deploy situs baru ke proyek Vercel yang sama agar link CV tetap berfungsi (lihat 24.2).

### 8.12 Chapter 8: The Mailbox (kembali ke Paper School) (DV)

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| 8-01 | Dinding | Bidang cotton-candy handmade | Gradient #FFD6E8, #E3D4FA, #CDEBF8, pita tepi #E5173F | V0 | Gradient sah |
| 8-02 | Lantai dan jalur | Seperti 0-43 dan 0-44 | #B7D9A8, #FFD6E8 | VT | Jejak lama masih ada |
| 8-03 | Loker kotak surat | 0,9×2,2 Hd, slot horizontal 0,3×0,03 Hd dengan flap chrome | Pintu lavender #BFA8E5, flap #C9CCD5 | V3 | Label washi #FFB3D9 70%: Reserved for: your story |
| 8-04 | Amplop | Seperti 0-26 | #FFFDF9 | V0 | Meluncur ke slot 600 ms |
| 8-05 | Bintang kertas | Bintang lima titik 0,08 Hd | #FFF1A8 | V0 | Wajah ramah, berkelip |
| 8-06 | Matahari kecil | Bundar 0,4 Hd, delapan sinar segitiga | Isi #FFF1A8, sinar #FFB38A | V0 | Wajah ramah |
| 8-07 | Skyline Paper School | Fasad 0-51 dari jauh | T5 | V0 |  |
| 8-08 | Kartu kontak (3) | 0,6×0,5 Hd | #FFFDF9, tepi putih | V0 | Nilai kontak Fraunces Italic |
| 8-09 | Amplop melayang (3) | 0,1 Hd | #FFFDF9 | V0 | Ambient |
| 8-10 | Tombol Back to the locker | Stiker pill | #FF2E93, teks #FFFFFF | V0 |  |
| 8-11 | Toast Copied! | Pill 0,35×0,08 Hd | #1B1017, teks #FFFDF9 | V0 |  |

### Kontak (PB)

Email jassintaroidt@gmail.com, Instagram @jassinta.roid, WhatsApp +62 8191 9032 518. Tautan mailto dan wa.me disusun lewat JavaScript saat halaman dimuat agar tidak mudah dipanen spam, dengan tombol Copy dan toast *Copied!*. Baris info kecil: *Best for: brand content strategy · short video and motion · SEO and news writing · podcast scripts. I reply Monday to Friday, during working hours (WIB).* Chip *Open to...* tidak ditampilkan di versi pertama.

