## Chapter 1: The Editor’s Desk (Personal Brand)

### 14. Chapter 1: The Editor’s Desk (Personal Brand) (DF)

**Beat:** *First, the receipts. Where have I actually worked?* **Babak:** I · Felt. **Mode:** S. Tidak ada kertas sobek.

**Arah visual:** kanvas **putih murni** (wajib #FFFFFF) sebagai meja editorial, tanpa tekstur global. Grain hanya pada lembar dokumen. Papan nama label kertas datar polos tanpa grain. Kostum doll: blazer pink pastel, kalung ID, hijab putih gading, sepatu hitam.

#### 14.1 Spesifikasi komponen (DF)

| **Elemen** | **Spesifikasi** |
| --- | --- |
| **Giant typography** | *WHICH COMPANIES HAVE I WORKED FOR?* dalam lima baris: WHICH / COMPANIES / HAVE I / WORKED / FOR? Sans-serif ultra-bold berukuran raksasa (Anton, cherry-red, line-height 0,95), rata kiri di kiri layar, menyatu dengan artwork halaman |
| **Foto cut-out** | foto_jassinta_duduk.png, diletakkan di sisi kanan tulisan. **Ukuran asli 408 × 612 px, jangan diperbesar** agar tidak pecah. Keputusan: ganti dengan **file besar baru** (tinggi minimal sekitar 1.300 px, cukup untuk layar 2×). Placeholder foto dibuat **transparan, tanpa stroke, tanpa tulisan** |
| **10 logo** | logo_1 sampai logo_10, di bawah giant typography. Dibaca langsung dari file lokal dengan **fallback logo vektor minimalis yang presisi** |
| **Konsep lembar dokumen fisik** | Bukan card grid, bukan carousel. Ke-10 logo ditempatkan di atas **lembar kertas putih fisik** (placeholder kertas mengikuti ukuran logo 1980 × 1980). Kertas boleh ditinggikan lagi agar karakteristik unik atau tulisan asal bentuk logo lebih menonjol |
| **Karakter tiap lembar** | Background putih dengan garis batas tipis hitam (border border-black). Efek bayangan kertas fisik bertingkat (paper drop shadow) dan subtle paper texture. Rotasi dinamis bervariasi: -3°, 4°, -5°, 2°, 3°, -2°, 5°, -4°, 1°, -3°. Detail dokumen: penomoran 01 / 10 hingga 10 / 10, tag kategori (EDITORIAL, PRODUCTION, CAMPAIGN, dst.), label arsip REF-ARC, aksen **staple merah** di sudut kertas |
| **Paralaks mouse (desktop)** | Dokumen lapisan depan bergerak lebih dinamis. Dokumen lapisan belakang dan foto Jassinta bergerak dengan kedalaman medium. Giant typography bergerak perlahan di latar belakang, menciptakan ilusi 3D meja kerja editorial |
| **Hover** | Lembar terangkat halus (translateY(-8px)), bayangan kertas makin dalam, sudut rotasi bergeser sedikit, nomor dokumen dan tag aksen merah menyala. Label harga kertas memuat peran dan masa kerja |
| **Responsif HP** | Kolase dokumen otomatis ditata rapi dalam flow dua kolom tanpa horizontal scrollbar. Paralaks kursor dinonaktifkan di perangkat sentuh |
| **Struktur komponen** | PersonalBrand (induk, kanvas putih murni) → Hero (giant typography + foto cut-out) → DocumentCanvas (kolase dan paralaks) → Document (lembar interaktif) → Logo (penampil logo dengan fallback). data.ts: array 10 dokumen dengan koordinat, rotasi, bobot paralaks |

#### 14.2 Data dokumen (nama file dan angka persis dari briefmu) (DF)

| **id** | **File** | **Perusahaan** | **Tag** | **Ref** | **Rot** | **x** | **y** | **Depth** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | logo_1.png | Elsthetic | Beauty | REF-ARC-001 | -3 | 2 | 6 | 0,9 |
| 2 | logo_2.png | Elspresso | F&B | REF-ARC-002 | 4 | 17 | 24 | 0,5 |
| 3 | logo_3.png | Aishi Aesthetic Academy | Beauty Training | REF-ARC-003 | -5 | 33 | 4 | 1,0 |
| 4 | logo_4.png | Karamina Tour | Tour & Travel | REF-ARC-004 | 2 | 49 | 26 | 0,6 |
| 5 | logo_5.png | ELS Corp | Brand | REF-ARC-005 | 3 | 64 | 6 | 0,8 |
| 6 | logo_6.png | Aishi Beauty | Beauty | REF-ARC-006 | -2 | 79 | 28 | 0,5 |
| 7 | logo_7.png | Lassiewear | Fashion | REF-ARC-007 | 5 | 8 | 52 | 1,0 |
| 8 | logo_8.png | inNalar.com | Media | REF-ARC-008 | -4 | 26 | 62 | 0,7 |
| 9 | logo_9.png | Independen Media | Media | REF-ARC-009 | 1 | 46 | 56 | 0,9 |
| 10 | logo_10.png | Ikapunija Media | Campus Media | REF-ARC-010 | -3 | 66 | 60 | 0,6 |

#### 14.3 Peran, masa kerja, dan tombol tiap dokumen (DF)

| **Dokumen** | **Peran (EN)** | **Masa kerja** | **Label hover (EN)** | **Tombol menuju** |
| --- | --- | --- | --- | --- |
| Lassiewear | Social Media Specialist | Apr 2026 -- Aug 2026 (project based contract) | *Social Media Specialist · Apr 2026 -- Aug 2026* | Chapter 4 |
| Elsthetic | Digital Marketing | Jun 2025 -- Sep 2025 | *Digital Marketing · Jun 2025 -- Sep 2025* | 3B |
| Aishi Beauty | Digital Marketing | Jun 2025 -- Sep 2025 | *Digital Marketing · Jun 2025 -- Sep 2025* | 3B |
| Aishi Aesthetic Academy | Digital Marketing | Jun 2025 -- Sep 2025 (disamakan dengan Elsthetic dan Aishi Beauty) | *Digital Marketing · Jun 2025 -- Sep 2025* | Archive |
| Elspresso | Video Content Creator | Jun 2025 -- Sep 2025 | *Video Content Creator · Jun 2025 -- Sep 2025* | 3A |
| Karamina Tour | Video Content Creator | Jun 2025 -- Sep 2025 | *Video Content Creator · Jun 2025 -- Sep 2025* | 3C |
| ELS Corp | Parent company of Karamina Tour and Elspresso | Jun 2025 -- Sep 2025 (satu kontrak ELS Corp untuk tiga entitas) | *Parent company of Karamina Tour and Elspresso · Jun 2025 -- Sep 2025* | 3A dan 3C |
| Independen Media | Content Writer | Jan 2025 -- Apr 2025 | *Content Writer · Jan 2025 -- Apr 2025* | Chapter 2 |
| Ikapunija Media | Reporter (Inspira+ Magazine) | Nov 2024 -- May 2025 (part time) | *Reporter, Inspira+ Magazine · Nov 2024 -- May 2025* | Chapter 2 |
| inNalar.com | SEO Content Writer | Nov 2024 -- Jan 2025 | *SEO Content Writer · Nov 2024 -- Jan 2025* | Chapter 2 |

#### 14.4 Frame (DF)

| **Frame** | **Visual dan doll** | **Gerak dan interaksi** | **Copy (EN)** |
| --- | --- | --- | --- |
| 1.1 Masuk | Papan nama datar polos tanpa grain. Tipografi raksasa rata kiri menyatu dengan artwork. Foto cut-out di kanan (file besar baru). Doll berjalan masuk dari kiri bawah | Doll berjalan 1,2 detik, berhenti, menoleh ke foto. Gelembung muncul. Tipografi paling lambat saat paralaks | Papan: *CHAPTER 01 · THE EDITOR’S DESK* dan *Personal Brand*. Headline: *WHICH COMPANIES HAVE I WORKED FOR?* Gelembung: *That’s me. The non-paper version.* |
| 1.2 Sebar dokumen | Sepuluh lembar kertas putih fisik, garis tipis hitam, staples merah, nomor 01 / 10 sampai 10 / 10, tag kategori, label REF-ARC. Stiker toggle di dekat tipografi | Lembar jatuh bergantian (stagger 80 ms) dengan rotasi spesifikasi. Paralaks mouse. Perangkat sentuh: paralaks mati. Toggle mengatur ulang lembar dengan animasi meluncur 450 ms, default by category | Tag contoh: *Beauty*, *F**&**B*, *Tour **&** Travel*, *Fashion*, *Media*. Toggle: *Sort: by category / by year*. Gelembung: *Ten places. Hover to see my role.* |
| 1.3 Hover dokumen | Lembar terangkat 8 px, bayangan lebih dalam, rotasi bergeser sedikit, nomor dan tag merah menyala. Label harga kertas memuat peran dan masa kerja | Mikro-interaksi 200 ms. Tap pertama menampilkan label di HP | Lihat 14.3 (urutan kronologis terbaru dulu saat *by year*) |
| 1.4 Klik dokumen | Lembar membesar di tengah (tanpa crop, rasio 1:1), logo jelas, tombol tutup | Sticker pop 320 ms, fokus terkunci, Esc menutup | Tombol: *See the work →* (menuju chapter terkait) |
| 1.5 HP | Dokumen tertata dua kolom tanpa scroll horizontal. Foto lebih kecil di atas judul | Tap pertama menampilkan peran, tap kedua membuka | sama |
| 1.6 Keluar | Doll mengambil lembar Independen Media (pose reach), lembar membesar menjadi halaman koran | Lembar mengisi layar 700 ms, berubah menjadi newsprint Chapter 2 | tanpa teks |
| 1.7 Kartu pers About | Hover atau tap kalung ID di doll (atau stiker kecil *About me* di dekat foto) membuka kartu pers ringan | Sticker pop 320 ms, focus trap, Esc menutup | Lihat tabel di bawah |

**Isi kartu About 1.7:**

| **Bidang** | **Isi (EN)** |
| --- | --- |
| Tag | *ABOUT* |
| Nama | *Jassinta Roid Triniti* |
| Peran | *Digital Content Executive · Social Media Specialist · Content Planner · Videographer · Graphic Designer* |
| Bio **[cek]** | *Journalism-trained at Jakarta State Polytechnic, I now plan, write, shoot, edit, and design content for beauty, F**&**B, travel, and fashion brands. Then I read the numbers to see what actually moved people.* |
| Pendidikan | *Diploma III Publishing (Journalism), Jakarta State Polytechnic, 2020--2024. GPA 3.70 / 4.00* dan *Gojek Scholarship, Batch 2 (2021)* |
| Domisili | *Based in Depok, West Java, Indonesia* |
| Tombol | *Download CV (PDF)* dan *Say hello →* (menuju Chapter 8) |

Bahasa dan fakta kecil (opsional) **dilewati**, tidak ditampilkan.

**Benda penghubung ke Chapter 2:** lembar Independen Media yang berubah menjadi koran.

### 8.2 Chapter 1: The Editor's Desk (DV)

| **ID** | **Barang** | **Bentuk dan ukuran** | **Warna dan material** | **Sudut** | **Detail** |
| --- | --- | --- | --- | --- | --- |
| 1-01 | Kanvas | Bidang penuh | **#FFFFFF**, tanpa garis, lantai, skyline, grain | V0 | [KUNCI] |
| 1-02 | Tipografi raksasa | Lima baris rata kiri | Anton #E5173F, line-height 0,95 | V0 | Paralaks paling lambat |
| 1-03 | Foto cut-out Jassinta | Tinggi min 1.300 px, tepi putih die-cut 3% | Foto asli | V0 | Bayangan 0 14px 20px. Placeholder transparan tanpa stroke |
| 1-04 | Lembar dokumen (10) | Persegi 1:1, tampil 18 sampai 22% lebar layar | Kertas #FFFFFF, border 1 px ink, grain hanya pada lembar | V0 + rotasi 3.4 | Bayangan berlapis. Logo di tengah 62% lebar. Nomor 01/10 kiri atas, tag kategori kanan atas, REF-ARC bawah (DM Mono) |
| 1-05 | Staples merah | Batang U 14×4 px | #D7263D | Miring 45° di sudut kiri atas | Menyala saat hover |
| 1-06 | Klip kertas | Spiral ganda 0,18 Hd | Chrome #C9CCD5 | VH | Berayun |
| 1-07 | Stiker toggle Sort | Pill dua sisi (by category, by year) | Butter #FFF1A8, sisi aktif #FF2E93 | V0 miring 2° | Dekat tipografi |
| 1-08 | Kartu pers About | 0,6×0,4 Hd, tali kalung | Kartu #FFFDF9, pita atas #FF8DC7, kotak foto #BFE3F5 | V0 | Terbuka dari kalung ID |
| 1-09 | Stiker About me | Bulat 0,18 Hd | Butter #FFF1A8, tepi putih | V0 miring −3° | Dekat foto |
| 1-10 | Papan nama datar | Persegi 0,5 Hd | Putih #FFFFFF tanpa grain | V0 −3° | Satu-satunya label tanpa grain |
| 1-11 | Lembar koran (transisi) | Mengisi layar 700 ms | Newsprint #F3E3B8, kolom abu | V0 | Berasal dari lembar Independen Media |
| 1-12 | Edge Tab | Label 0,3 Hd | Krem newsprint #F3E3B8 | V0 | aria-hidden |

### K2. Blazer pink (Chapter 1) (DV)

- **Siluet:** persis potongan master: blazer satu kancing hem 51%, lapel bertakik, dua saku flap, manset putih, celana lurus hem 92%. Ramping.

- **Warna:** blazer #F7CAD0, dalam #FFFFFF, celana #F8F0DC, kancing emas #D4A64A.

- **Detail:** lapel dengan bayangan satu nada, saku flap 9%×3% H, belahan punggung pendek (terlihat di B bila dibuat).

- **Hijab:** pashmina melilit #F8F0DC.

- **Aksesori:** kalung ID seperti K1 (tali #FF8DC7).

- **Tampak dan pose:** walk W, idle F, reach W (mengambil lembar Independen Media).

### Kartu About (Chapter 1) (PB)

| **Bidang** | **Isi** |
| --- | --- |
| Bio | *Journalism-trained at Jakarta State Polytechnic, I now plan, write, shoot, edit, and design content for beauty, skincare, F**&**B, travel, fashion, and media brands. Then I read the numbers to see what actually moved people.* |
| Pendidikan | Diploma III Publishing (Journalism), Politeknik Negeri Jakarta (Jakarta State Polytechnic), 2021 - 2024; GPA 3.70 / 4.00; Gojek Scholarship Batch 2 (2021); Treasurer, Comic Club Executive Board |
| Domisili | Based in Depok, West Java, Indonesia |
| Tombol | *Download CV (PDF)* dan *Say hello →* (menuju Chapter 8) |

Bahasa dan fakta kecil lainnya tidak ditampilkan. Semua tahun dan peran di kartu ini mengikuti CV (Resume_Jassinta_Roid_Triniti.pdf); rincian lengkap ada di bagian 10.

### Masa kerja sepuluh dokumen (Chapter 1) (PB)

| **Perusahaan** | **Peran** | **Masa kerja** | **Menuju** |
| --- | --- | --- | --- |
| Lassiewear | Social Media Specialist | Apr 2026 - Aug 2026 (project based contract) | Chapter 4 |
| Elsthetic | Digital Marketing | Jun 2025 - Sep 2025 | 3B |
| Aishi Beauty | Digital Marketing | Jun 2025 - Sep 2025 | 3B |
| Aishi Aesthetic Academy | Digital Marketing | Jun 2025 - Sep 2025 | Archive |
| Elspresso | Video Content Creator | Jun 2025 - Sep 2025 | 3A |
| Karamina Tour | Video Content Creator | Jun 2025 - Sep 2025 | 3C |
| ELS Corp | Parent company of Karamina Tour, Elspresso, Elsthetic, and Aishi Beauty | Jun 2025 - Sep 2025 | 3A, 3B, dan 3C |
| Independen Media | Content Writer | Jan 2025 - Apr 2025 | Chapter 2 |
| Ikapunija Media | Reporter, Inspira+ Magazine | Nov 2024 - May 2025 (part time) | Chapter 2 |
| inNalar.com | SEO Content Writer | Nov 2024 - Jan 2025 | Chapter 2 |

### 10. CV dan Penyesuaian Portfolio (PB)

CV (Resume_Jassinta_Roid_Triniti.pdf) adalah sumber fakta tunggal untuk peran, tanggal, dan klaim. Tombol *Download CV (PDF)* memakai file ini, dan semua teks di situs mengikutinya.

#### Isi CV (PB)

**Jassinta Roid Triniti**, Digital Content Executive. Social Media Specialist · Content Planner · Videographer · Graphic Designer. +62 8191 9032 518 · jassintaroidt@gmail.com · Depok, Jawa Barat, Indonesia · Portfolio: jassinta-roid-triniti-eswy.vercel.app

**Profile.** Dynamic Content Creator, Writer, and Digital Marketer specialized in the beauty, skincare, fashion, media, and service sectors. Expertise spans social media strategy across Instagram, TikTok, and Facebook, promotional asset creation, and data analytics to elevate brand reach. Proven success in increasing website traffic and visibility through targeted content optimization and SEO.

#### Work Experience (PB)

| **Peran** | **Perusahaan** | **Jenis, lokasi, masa** | **Bukti utama di CV** |
| --- | --- | --- | --- |
| Social Media Specialist | Lassiewear | Project based contract, Jakarta, Apr 2026 - Aug 2026 | Rencana konten dan editorial berbasis riset; 4 video per hari untuk Instagram; analisis metrik; flyer promosi |
| Video Content Creator | ELS Corp, PT Karamina Lima Utama (Karamina Tour) | Contract, Depok, Jun 2025 - Sep 2025 | Kampanye video bulanan; publikasi Instagram, TikTok, Facebook; riset audiens; video bumper animasi; analisis metrik |
| Video Content Creator | ELS Corp, Elspresso | Contract, Depok, Jun 2025 - Sep 2025 | Kalender konten harian, mingguan, bulanan; kampanye video bulanan; publikasi multimedia; video bumper; analisis metrik |
| Digital Marketing | ELS Corp, PT Awindo Estetika Asia (Elsthetic dan Aishi Beauty) | Contract, Depok, Jun 2025 - Sep 2025 | Video harian; TikTok Live sekitar 1 jam per hari; aset promosi; video bumper; analisis metrik; operasional toko e-commerce di Tokopedia, Shopee, TikTok Shop |
| Penulis Konten (Content Writer) | PT Independen Media Network | Contract, Depok, Jan 2025 - Apr 2025 | Hingga 7 artikel per hari; konten SEO; kolaborasi redaksi dan CMS |
| Reporter | Ikapunija Media (Inspira+ Magazine) | Part time, Depok, Nov 2024 - May 2025 | Berita, laporan mendalam, feature; riset, wawancara, liputan lapangan |
| Penulis Konten SEO (SEO Content Writer) | inNalar.com | Contract, Depok, Nov 2024 - Jan 2025 | 7 artikel SEO per hari; alur publikasi CMS; konten masuk Top 10 most popular |

#### Internship, Education, Organization (PB)

| **Kategori** | **Entri** | **Masa** |
| --- | --- | --- |
| Internship | Producer, Kartini Radio: naskah podcast talk show *OTW (Obrolan Tentang Wanita)*, mengarahkan sesi rekaman | Mar 2025 - Aug 2025 |
| Internship | Public Relation Staff, Kementerian Agama Republik Indonesia: menyunting, mengkurasi, dan mengelola berita situs resmi | Nov 2023 - Jan 2024 |
| Education | Diploma III Publishing (Journalism), Politeknik Negeri Jakarta; GPA 3.70 / 4.00; Gojek Scholarship Batch 2 (2021); Treasurer, Comic Club Executive Board | 2021 - 2024 |
| Education | SMA Negeri 3 Depok | Dec 2017 - Dec 2021 |
| Organization | KSM Comic Club, General Treasurer: laporan keuangan dan administrasi; layout editorial majalah *Comic Rush* di KaryaKarsa; konten komik dan poster di Instagram @comicclubtgp | Jan 2022 - Dec 2023 |

#### Skill (PB)

| **Kelompok** | **Isi** |
| --- | --- |
| Digital Marketing and Content | Social Media Management (Instagram and TikTok), Digital Content Creation and Promotion, Content Planning and Editorial Strategy, Content Performance Analysis, Branding and Visual Content |
| Design and Editing | Canva, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe InDesign, CapCut |
| Support | SEO Content Writing and Copywriting, Teamwork and Coordination |

#### Penyesuaian bible terhadap CV (PB)

| **Area** | **Penyesuaian** |
| --- | --- |
| Struktur ELS Corp | ELS Corp adalah induk empat brand: Karamina Tour, Elspresso, Elsthetic, dan Aishi Beauty. Dokumen Chapter 1 ELS Corp memuat keempatnya; chapter 3A, 3B, 3C menampilkan masing-masing brand |
| Aishi Aesthetic Academy | Tidak muncul sebagai baris CV sendiri. Tetap tampil sebagai dokumen portfolio dengan masa kerja Jun 2025 - Sep 2025 di bawah kontrak Elsthetic dan Aishi Beauty |
| Locker 5 *Platform I Am Proficient in* | Diisi dari Skill CV: Canva, Photoshop, Illustrator, Premiere Pro, InDesign, CapCut, ditambah Instagram dan TikTok. Google Business Profile tidak ditampilkan |
| Kartu 3B | Blok *What I did* memuat TikTok Live sekitar 1 jam per hari dan pengelolaan toko di Tokopedia, Shopee, TikTok Shop |
| Kartu 3A dan 3C | Blok *What I did* memuat kalender konten, kampanye video bulanan, dan video bumper animasi |
| Chapter 6 Podcast | Peran ditampilkan sebagai *Producer (intern), Kartini Radio, Mar 2025 - Aug 2025*: menulis naskah dan mengarahkan sesi rekaman |
| Kemenag | Internship Public Relation Staff, Nov 2023 - Jan 2024, tampil di kartu About dan Plain page; tidak punya chapter sendiri |
| Comic Club | Periode di semua tempat (overlay Participation, Chapter 5, Archive) memakai Jan 2022 - Dec 2023 dan jabatan General Treasurer |
| Kartu About | Pendidikan memakai 2021 - 2024 dan Gojek Scholarship Batch 2 (2021) |
| Profile | Plain page memakai kalimat Profile CV apa adanya; bio kartu About memakai versi pendek di bagian 8 |
| Nama peran bahasa Indonesia | Ditampilkan dalam bahasa Inggris (Content Writer, SEO Content Writer) |

