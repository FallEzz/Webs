const CONFIG = {
nama: "FallZx Store Infinity", // Nama Store
profil: "https://files.catbox.moe/noz0xh.jpg", // Url Profil
banner: "https://img1.pixhost.to/images/8503/638080415_lily.jpg", // Url Banner 
tentang: "🌌 FallZx || Fall’Zx Store hadir sebagai solusi digital lengkap untukmu! Kami menyediakan Panel Pterodactyl premium untuk game server, bot hosting, hingga web/app hosting dengan performa cepat dan stabil, Jasa design kreatif seperti logo, banner, hingga UI/UX agar bisnismu lebih profesional, serta Script Bot WhatsApp full fitur dengan menu otomatis, AI chat, downloader, payment, dan fitur premium lainnya. Dengan Harga terjangkau, Support 24/7, dan Layanan berkualitas, FallZx || Fall’Zx Store adalah pilihan terbaik untuk kebutuhan digitalmu! 🚀✨",
alamat: "Jl. Soekarno, Jakarta, Indonesia",
sosial_media: {
  email: "fallzxcoderid@gmail.com", // Email
  youtube: "@fallzx-features", // YouTube Username 
  tiktok: "@siapa_2020", // Tiktok Username 
  whatsapp: "6285813708397", // WhatsApp Number 
  telegram: "@fallxd671" // Telegram Username
},
payment: {
  dana: "085813708397", // Payment Dana
  gopay: "085813708397", // Payment Gopay 
  ovo: "085813708397", // Payment Ovo 
  qris: "https://img1.pixhost.to/images/8502/638078243_lily.jpg", // Url Qris
  seabank: "901579014313"
},
telegram_api: {
  bot: "7922145490:AAGoL-B9sGf3VfmK_yVsXf8AbJYALF0pltk", // Token bot father
  chatid: "6118311111" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting Dan Kebutuhan Bot WhatsApp": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 2000 },
                  { "name": "2GB RAM", "price": 3000 },
                  { "name": "3GB RAM", "price": 4000 },
                  { "name": "4GB RAM", "price": 5000 },
                  { "name": "5GB RAM", "price": 6000 },
                  { "name": "6GB RAM", "price": 7000 },
                  { "name": "7GB RAM", "price": 8000 },
                  { "name": "8GB RAM", "price": 9000 },
                  { "name": "9GB RAM", "price": 10000 },
                  { "name": "11GB RAM", "price": 11000 },
                  { "name": "Unlimited RAM", "price": 13000 },
                  { "name": "Reseller Panel", "price": 16000 },
                  { "name": "Admin Panel", "price": 18000 }
                ]
              },
              {
                "id": 2,
                "name": "Jasa Pembuatan Fitur",
                "icon": "fas fa-microchip",
                "description": "Kami menyediakan layanan pembuatan fitur khusus untuk bot WhatsApp sesuai kebutuhan Anda. Setiap fitur dirancang agar bot lebih interaktif, otomatis, dan efisien dalam membantu aktivitas harian atau bisnis Anda. Cocok untuk personal use maupun kebutuhan komersial.",
                "variants": [
                  { "name": "Add & Fix / Fitur WhatsApp Bot", "price": 5000 },
                  { "name": "Add Fitur Auto React Status", "price": 15000 },
                  { "name": "Add Fitur Security IP ", "price": 25000 },
                  { "name": "Add Fitur Security Username + Password", "price": 15000 },
                  { "name": "Add Fitur Autojoin Saluran WhatsApp", "price": 10000 },
                  { "name": "Add Fitur Auto Show JKT48 ( Showroom + IDN ) Otomatis", "price": 55000 }
                   
                ]
              },
              {
                "id": 3,
                "name": "Sewa Bot & Jadibot",
                "icon": "fas fa-hdd",
                "description": "Layanan Sewabot atau Jadibot WhatsApp memungkinkan Anda memiliki bot siap pakai tanpa perlu repot menjalankan server sendiri. Anda cukup menyambungkan akun WhatsApp Anda, dan bot akan aktif 24 jam penuh dengan berbagai fitur menarik yang bisa digunakan langsung.",
                "variants": [
                  { "name": "2 Minggu / 14 Day", "price": 10000 },
                  { "name": "1 Bulan / 30 Day", "price": 20000 },
                  { "name": "Permanen / LifeTime", "price": 30000 }
                ]
              },
              {
                "id": 4,
                "name": "Sell Script Lily Generation 2",
                "icon": "fas fa-database",
                "description": "Kami juga menjual Script Lily Generation 2, versi terbaru dari bot WhatsApp yang sudah dilengkapi fitur modern, performa cepat, dan sistem auto-update. Script ini cocok untuk developer maupun pengguna yang ingin memiliki bot profesional dan mudah dikembangkan.",
                "variants": [
                  { "name": "Total Features 600 + Auto React Sw + Auto Show JKT48 ( NO UPDATE )", "price": 30000 },
                  { "name": "Total Features 600 + Auto React Sw + Auto Show JKT48 ( FREE 1x UPDATE )", "price": 35000 },
                  { "name": "Total Features 600 + Auto React Sw + Auto Show JKT48 ( FREE 2x UPDATE )", "price": 45000 }
                ]
              },
              {
                "id": 5,
                "name": "Jasa Rename Script Bot Whatsapp",
                "icon": "fas fa-database",
                "description": "Jasa rename script bot WhatsApp untuk kamu yang ingin script terlihat original dan memiliki brand sendiri, tersedia pilihan rename mulai dari 30% hingga full rename 100% total sehingga nama bot, owner, command, menu, variabel, watermark, dan identitas internal script dapat diubah sesuai keinginan tanpa merusak fungsi bot, cocok untuk rebranding ringan sampai menjadikan script sepenuhnya milik kamu sendiri, aman, rapi, dan siap langsung dipakai atau dijual ulang dengan harga terjangkau mulai dari Rp5.000 sampai Rp20.000 sesuai paket yang dipilih.",
                "variants": [
                  { "name": "Rename 30% + Ganti Namabot + Ganti Footer/Watermark + Beberapa Foto Menu Utama ( Dapat Custom Semua Script )", "price": 7000 },
                  { "name": "Rename 60% + Ganti NamaBot + NamaOwner + InfoBot + Watermark + Foto Menu + Beberapa Command & Varibel & String ( Dapat Custom Semua Script )", "price": 12000 },
                  { "name": "Rename 80% + Ganti NamaBot + NamaOwner + InfoBot + Watermark + Foto Menu + Beberapa Command & Varibel & String + Struktur Menu + Command utama & alias ( Dapat Custom Script )", "price": 15000 },
                  { "name": "Rename 100% Full + Ganti NamaBot + NamaOwner + InfoBot + Watermark + Foto Menu + Beberapa Command & Varibel & String + Struktur Menu + Command utama & alias + Response + Rombak Total + Semua Jadi Milik Kamu + Dapat Licensi Full Hak Milik ( Dapat Custom Script )", "price": 20000 }
                ]
              },
              {
                "id": 6,
                "name": "Domain & Hosting 1 Tahun",
                "icon": "fas fa-globe",
                "description": "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
                "variants": [
                  { "name": "Domain myid 1 Tahun", "price": 8000 },
                  { "name": "Domain bizid 1 Tahun", "price": 8000 },
                  { "name": "Domain xyz 1 Tahun", "price": 75000 },
                  { "name": "Domain xyz 1 Tahun + Hosting", "price": 550000 }
                ]
              }
            ],
             "Jasa Script Bot WhatsApp": [
            {
              "id": 7,
              "name": "Bot Multi Device",
              "icon": "fab fa-whatsapp",
              "description": "Script bot WhatsApp Multi Device dengan fitur modern, stabil, dan cocok untuk kebutuhan personal maupun bisnis.",
              "variants": [
              { "name": "Bot MD Basic", "price": 35000 },
              { "name": "Bot MD Premium", "price": 75000 },
              { "name": "Custom Request", "price": "Harga sesuai request" }
                ]
            },
            {
              "id": 8,
              "name": "Bot RPG",
              "icon": "fas fa-gamepad",
              "description": "Script bot WhatsApp RPG dengan sistem game, inventory, leveling, dan fitur seru lainnya.",
              "variants": [
              { "name": "Bot RPG Basic", "price": 45000 },
              { "name": "Bot RPG Full Fitur", "price": 85000 },
              { "name": "Custom Request", "price": "Harga sesuai request" }
                ]
            },
            {
              "id": 9,
              "name": "Bot Jaga Group & Pushkontak",
              "icon": "fas fa-users-cog",
              "description": "Script bot untuk keamanan grup, welcome, anti-link, auto respon, dan push kontak.",
              "variants": [
              { "name": "Jaga Group Basic", "price": 30000 },
              { "name": "Jaga Group + Pushkontak", "price": 70000 },
              { "name": "Custom Request", "price": "Harga sesuai request" }
                ]
            },
            {
              "id": 10,
              "name": "Bot Convert Downloader Sticker",
              "icon": "fas fa-download",
              "description": "Bot dengan fitur convert media, downloader sosial media, dan pembuat sticker otomatis.",
              "variants": [
              { "name": "Downloader Basic", "price": 40000 },
              { "name": "Convert + Sticker Full", "price": 80000 },
              { "name": "Custom Request", "price": "Harga sesuai request" }
                ]
            },
            {
              "id": 11,
              "name": "Bot Auto AI",
              "icon": "fas fa-robot",
              "description": "Bot WhatsApp AI otomatis untuk chat pintar, tanya jawab, dan asisten virtual.",
              "variants": [
              { "name": "AI Basic", "price": 50000 },
              { "name": "AI Premium Full", "price": 95000 },
              { "name": "Custom Request", "price": "Harga sesuai request" }
                ]
            },
            {
              "id": 12,
              "name": "Bot Auto Order Payment Gateway",
              "icon": "fas fa-credit-card",
              "description": "Bot WhatsApp auto order dengan sistem pembayaran otomatis menggunakan payment gateway.",
              "variants": [
              { "name": "Auto Order Basic", "price": 55000 },
              { "name": "Auto Order Premium", "price": 99000 },
              { "name": "Custom Request", "price": "Harga sesuai request" }
                ]
            }
          ],
            "Creative Design": [
                {
                    id: 13,
                    name: "Desain Logo Personal Brand",
                    icon: "fas fa-pen-nib",
                    description: "Jasa pembuatan logo profesional untuk brand, usaha, komunitas, dan kebutuhan personal.",
                    variants: [
                    { name: "Logo UMKM Simple", price: 25000 },
                    { name: "Logo Brand Profesional", price: 45000 },
                    { name: "Logo Modern Kreatif", price: 60000 },
                    { name: "Logo Luxury Elegan", price: 85000 },
                    { name: "Logo Perusahaan Premium", price: 120000 },
                    { name: "Custom Request", price: "Harga sesuai request" }             
                    ]
                },
                {
                    id: 14,
                    name: "Desain Banner",
                    icon: "fas fa-image",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Banner Sosmed", price: 15000 },
                        { name: "Banner Event", price: 25000 },
                        { name: "Banner Promosi", price: 30000 }
                    ]
                },
                {
                    id: 15,
                    name: "Desain Poster",
                    icon: "fas fa-scroll",
                    description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
                    variants: [
                        { name: "Poster A4", price: 20000 },
                        { name: "Poster A3", price: 35000 }
                    ]
                },
                {
                    id: 16,
                    name: "UI/UX Design",
                    icon: "fas fa-laptop-code",
                    description: "Jasa desain UI/UX untuk website atau aplikasi dengan tampilan modern dan user-friendly.",
                    variants: [
                        { name: "Landing Page", price: 75000 },
                        { name: "Full Website", price: 250000 },
                        { name: "Mobile App UI", price: 300000 },
                        { name: "Design UX By Figma Mobile App", price: 450000 }
                    ]
                },
                {
                    id: 17,
                    name: "Desain Kartu Nama",
                    icon: "fas fa-id-card",
                    description: "Jasa desain kartu nama profesional untuk bisnis atau personal branding.",
                    variants: [
                        { name: "Basic", price: 10000 },
                        { name: "Premium", price: 20000 }
                    ]
                }
            ],
            "Produk Digital": [
                {
                    id: 18,
                    name: "E-Book",
                    icon: "fas fa-book",
                    description: "Koleksi e-book digital dengan berbagai topik menarik, mulai dari bisnis, programming, hingga hobi.",
                    variants: [
                        { name: "E-Book Bisnis", price: 15000 },
                        { name: "E-Book Programming", price: 20000 },
                        { name: "E-Book Random Pack", price: 10000 }
                    ]
                },
                {
                    id: 19,
                    name: "Software & Tools",
                    icon: "fas fa-cogs",
                    description: "Software dan tools digital untuk menunjang pekerjaan maupun kebutuhan kreatif.",
                    variants: [
                        { name: "Software Editing", price: 30000 },
                        { name: "Software Utility", price: 25000 },
                        { name: "Tools Random Pack", price: 20000 },
                        { name: "Obfuscate Encript Hard JavaScript", price: 10000 }
                    ]
                },
                {
                    id: 20,
                    name: "Lisensi & Key",
                    icon: "fas fa-key",
                    description: "Produk lisensi resmi dan serial key untuk software pilihan.",
                    variants: [
                        { name: "Windows Key", price: 50000 },
                        { name: "Office Key", price: 60000 },
                        { name: "Antivirus Key", price: 40000 }
                    ]
                },
                {
                    id: 21,
                    name: "Template Digital",
                    icon: "fas fa-file-alt",
                    description: "Template digital untuk desain, presentasi, website, dan media sosial.",
                    variants: [
                        { name: "Template PowerPoint", price: 10000 },
                        { name: "Template Website", price: 30000 },
                        { name: "Template Sosmed", price: 15000 }
                    ]
                },
                {
                    id: 22,
                    name: "Akun Premium",
                    icon: "fas fa-user-circle",
                    description: "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                    variants: [
                        { name: "Netflix Premium (1 Bulan)", price: 35000 },
                        { name: "Spotify Premium (1 Bulan)", price: 25000 },
                        { name: "Canva Pro (1 Bulan)", price: 20000 }
                    ]
                }
            ],
            "Dokumen Karier": [
              {
                id: 23,
                name: "Pembuatan CV",
                icon: "fas fa-file-alt",
                description: "Jasa pembuatan CV profesional, rapi, dan menarik untuk kebutuhan kerja, magang, dan karier.",
                variants: [
                { name: "CV Simple ATS Friendly", price: 25000 },
                { name: "CV Profesional Modern", price: 45000 },
                { name: "CV Kreatif Premium", price: 60000 },
                { name: "CV Fresh Graduate", price: 85000 },
                { name: "CV Executive Exclusive", price: 120000 },
                { name: "Custom Request", price: "Harga sesuai request" }
                  ]
    },
    {
        id: 24,
        name: "Pembuatan Portfolio",
        icon: "fas fa-briefcase",
        description: "Jasa pembuatan portfolio profesional untuk personal branding, freelance, dan melamar kerja.",
        variants: [
            { name: "Portfolio Simple Clean", price: 30000 },
            { name: "Portfolio Profesional Modern", price: 50000 },
            { name: "Portfolio Kreatif Premium", price: 70000 },
            { name: "Portfolio Visual Eksklusif", price: 90000 },
            { name: "Portfolio Executive Luxury", price: 125000 },
            { name: "Custom Request", price: "Harga sesuai request" }
        ]
    },
    {
        id: 25,
        name: "Pembuatan Resume",
        icon: "fas fa-file-lines",
        description: "Jasa pembuatan resume profesional, singkat, padat, dan ATS friendly.",
        variants: [
            { name: "Resume Simple ATS Friendly", price: 25000 },
            { name: "Resume Profesional Modern", price: 45000 },
            { name: "Resume Premium Clean", price: 60000 },
            { name: "Resume International Style", price: 85000 },
            { name: "Resume Executive Exclusive", price: 120000 },
            { name: "Custom Request", price: "Harga sesuai request" }
        ]
    }
],
            "Jasa Joki Tugas Sekolah": [
                {
                    id: 26,
                    name: "Makalah",
                    icon: "fas fa-id-card",
                    description: `Butuh makalah cepat, rapi, dan sesuai format kampus?
Kami menyediakan jasa pembuatan makalah profesional dengan bahasa formal, argumen terstruktur, dan referensi yang valid. Cocok untuk tugas kuliah, sekolah, hingga persentasi.`,
                    variants: [
                        { name: "Makalah Pendek (3–5 halaman)", price: 35000 },
                        { name: "Makalah Standar (6–10 halaman)", price: 60000 },
                        { name: "Makalah Lengkap (11–20 halaman + daftar pustaka)", price: 120000 }
                    ]
                },
                {
                    id: 27,
                    name: "Pembuatan Laporan PKL",
                    icon: "fas fa-address-book",
                    description: `Laporan PKL terlalu ribet? Bab banyak? Data berantakan?
Serahkan pada kami!\nKami menerima pembuatan laporan PKL lengkap dari Bab 1–5, termasuk cover, daftar isi otomatis, lampiran, serta penyusunan data biar terlihat profesional.`,
                    variants: [
                        { name: "Laporan Bab 1–3 (Dasar)", price:   120000 },
                        { name: "Laporan Full Bab 1–5 (Lengkap)", price: 215000 },
                        { name: "Makalah Lengkap (11–20 halaman + daftar pustaka)", price: 257000 },
                    ]
                }
              ]
        };
