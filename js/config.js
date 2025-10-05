const CONFIG = {
nama: "FallZx Store X Lily", // Nama Store
profil: "https://img1.pixhost.to/images/8569/638846565_lily.jpg", // Url Profil
banner: "https://img1.pixhost.to/images/8503/638080415_lily.jpg", // Url Banner 
tentang: "🌌 FallZx || Lily’s Store hadir sebagai solusi digital lengkap untukmu! Kami menyediakan Panel Pterodactyl premium untuk game server, bot hosting, hingga web/app hosting dengan performa cepat dan stabil, Jasa design kreatif seperti logo, banner, hingga UI/UX agar bisnismu lebih profesional, serta Script Bot WhatsApp full fitur dengan menu otomatis, AI chat, downloader, payment, dan fitur premium lainnya. Dengan Harga terjangkau, Support 24/7, dan Layanan berkualitas, FallZx || Lily’s Store adalah pilihan terbaik untuk kebutuhan digitalmu! 🚀✨",
alamat: "Jl. Soekarno, Jakarta, Indonesia",
sosial_media: {
  email: "fallzxcoderid@gmail.com", // Email
  youtube: "@fallzx-features", // YouTube Username 
  tiktok: "@siapa_2020", // Tiktok Username 
  whatsapp: "6285119732048", // WhatsApp Number 
  telegram: "@fallxd671" // Telegram Username
},
payment: {
  dana: "085813708397", // Payment Dana
  gopay: "085813708397", // Payment Gopay 
  ovo: "085813708397", // Payment Ovo 
  qris: "https://img1.pixhost.to/images/8502/638078243_lily.jpg" // Url Qris
},
telegram_api: {
  bot: "62828278:7678blablabla", // Token bot father
  chatid: "6118311111" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 1000 },
                  { "name": "2GB RAM", "price": 2000 },
                  { "name": "3GB RAM", "price": 3000 },
                  { "name": "4GB RAM", "price": 4000 },
                  { "name": "5GB RAM", "price": 5000 },
                  { "name": "6GB RAM", "price": 6000 },
                  { "name": "7GB RAM", "price": 7000 },
                  { "name": "8GB RAM", "price": 8000 },
                  { "name": "9GB RAM", "price": 9000 },
                  { "name": "10GB RAM", "price": 10000 },
                  { "name": "Unlimited RAM", "price": 12000 },
                  { "name": "Admin Panel", "price": 17000 }
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
                  { "name": "1 Minggu / 7 Day", "price": 5000 },
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
                "name": "Domain & Hosting 1 Tahun",
                "icon": "fas fa-globe",
                "description": "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
                "variants": [
                  { "name": "Domain myid 1 Tahun", "price": 8000 },
                  { "name": "Domain bizid 1 Tahun", "price": 8000 },
                  { "name": "Domain xyz 1 Tahun", "price": 75000 }
                  { "name": "Domain xyz 1 Tahun + Hosting", "price": 550000 }
                ]
              }
            ],
            "Desain": [
                {
                    id: 6,
                    name: "Desain Logo",
                    icon: "fas fa-pen-nib",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Logo Minimalis", price: 2000 },
                        { name: "Logo Typography", price: 2500 },
                        { name: "Logo Mascot", price: 3000 },
                        { name: "Logo Vintage", price: 4000 },
                        { name: "Logo Modern", price: 5000 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 7,
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
                    id: 8,
                    name: "Desain Poster",
                    icon: "fas fa-scroll",
                    description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
                    variants: [
                        { name: "Poster A4", price: 20000 },
                        { name: "Poster A3", price: 35000 }
                    ]
                },
                {
                    id: 9,
                    name: "UI/UX Design",
                    icon: "fas fa-laptop-code",
                    description: "Jasa desain UI/UX untuk website atau aplikasi dengan tampilan modern dan user-friendly.",
                    variants: [
                        { name: "Landing Page", price: 75000 },
                        { name: "Full Website", price: 250000 },
                        { name: "Mobile App UI", price: 300000 }
                    ]
                },
                {
                    id: 10,
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
                    id: 11,
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
                    id: 12,
                    name: "Software & Tools",
                    icon: "fas fa-cogs",
                    description: "Software dan tools digital untuk menunjang pekerjaan maupun kebutuhan kreatif.",
                    variants: [
                        { name: "Software Editing", price: 30000 },
                        { name: "Software Utility", price: 25000 },
                        { name: "Tools Random Pack", price: 20000 }
                    ]
                },
                {
                    id: 13,
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
                    id: 14,
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
                    id: 15,
                    name: "Akun Premium",
                    icon: "fas fa-user-circle",
                    description: "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                    variants: [
                        { name: "Netflix Premium (1 Bulan)", price: 35000 },
                        { name: "Spotify Premium (1 Bulan)", price: 25000 },
                        { name: "Canva Pro (1 Bulan)", price: 20000 }
                    ]
                }
            ]
        };
