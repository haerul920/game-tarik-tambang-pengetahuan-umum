const questions = [
  {
    question: "Apa ibukota dari provinsi Jawa Barat?",
    options: ["Bandung", "Semarang", "Surabaya", "Serang", "Yogyakarta"],
    answer: "Bandung",
  },
  {
    question: "Sungai terpanjang di Indonesia adalah...",
    options: [
      "Sungai Musi",
      "Sungai Kapuas",
      "Sungai Mahakam",
      "Sungai Bengawan Solo",
      "Sungai Barito",
    ],
    answer: "Sungai Kapuas",
  },
  {
    question: "Negara manakah yang memiliki julukan 'Negeri Gajah Putih'?",
    options: ["Vietnam", "Laos", "Myanmar", "Kamboja", "Thailand"],
    answer: "Thailand",
  },
  {
    question: "Benua terbesar di dunia adalah...",
    options: ["Afrika", "Amerika Utara", "Eropa", "Asia", "Australia"],
    answer: "Asia",
  },
  {
    question: "Ibukota negara Amerika Serikat adalah...",
    options: [
      "New York",
      "Los Angeles",
      "Washington, D.C.",
      "Chicago",
      "Las Vegas",
    ],
    answer: "Washington, D.C.",
  },
  {
    question: "Danau Toba terletak di provinsi...",
    options: ["Sumatera Barat", "Sumatera Utara", "Aceh", "Riau", "Jambi"],
    answer: "Sumatera Utara",
  },
  {
    question: "Negara yang terkenal dengan menara Eiffel adalah...",
    options: ["Italia", "Jerman", "Inggris", "Perancis", "Spanyol"],
    answer: "Perancis",
  },
  {
    question: "Pulau terbesar di Indonesia adalah...",
    options: ["Jawa", "Sumatera", "Kalimantan", "Sulawesi", "Papua"],
    answer: "Papua",
  },
  {
    question: "Gurun terluas di dunia adalah...",
    options: [
      "Gurun Sahara",
      "Gurun Gobi",
      "Gurun Kalahari",
      "Gurun Antartika",
      "Gurun Arabia",
    ],
    answer: "Gurun Antartika",
  },
  {
    question: "Laut yang memisahkan pulau Jawa dan Sumatera adalah...",
    options: [
      "Selat Sunda",
      "Selat Bali",
      "Selat Malaka",
      "Selat Makassar",
      "Laut Jawa",
    ],
    answer: "Selat Sunda",
  },

  {
    question: "Kapan Indonesia memproklamasikan kemerdekaannya?",
    options: [
      "17 Agustus 1944",
      "17 Agustus 1945",
      "17 Agustus 1946",
      "18 Agustus 1945",
      "16 Agustus 1945",
    ],
    answer: "17 Agustus 1945",
  },
  {
    question:
      "Siapakah pahlawan nasional yang dijuluki 'Ayam Jantan dari Timur'?",
    options: [
      "Pattimura",
      "Sultan Hasanuddin",
      "Pangeran Diponegoro",
      "Tuanku Imam Bonjol",
      "Teuku Umar",
    ],
    answer: "Sultan Hasanuddin",
  },
  {
    question: "Kerajaan Hindu tertua di Indonesia adalah...",
    options: ["Majapahit", "Singasari", "Kutai", "Tarumanegara", "Sriwijaya"],
    answer: "Kutai",
  },
  {
    question: "Perang Dunia II berakhir pada tahun...",
    options: ["1942", "1944", "1945", "1948", "1950"],
    answer: "1945",
  },
  {
    question: "Siapakah penjahit bendera Merah Putih pertama kali?",
    options: [
      "R.A. Kartini",
      "Cut Nyak Dien",
      "Fatmawati",
      "Megawati",
      "Dewi Sartika",
    ],
    answer: "Fatmawati",
  },
  {
    question: "Peristiwa Rengasdengklok terjadi karena...",
    options: [
      "Perbedaan pendapat golongan tua dan muda",
      "Serangan sekutu",
      "Kedatangan Jepang",
      "Pemberontakan PKI",
      "Agresi Militer Belanda",
    ],
    answer: "Perbedaan pendapat golongan tua dan muda",
  },
  {
    question: "Siapakah presiden ketiga Republik Indonesia?",
    options: [
      "Soekarno",
      "Soeharto",
      "B.J. Habibie",
      "Abdurrahman Wahid",
      "Megawati",
    ],
    answer: "B.J. Habibie",
  },
  {
    question: "Bangunan keajaiban dunia Candi Borobudur bercorak agama...",
    options: ["Hindu", "Buddha", "Islam", "Kristen", "Konghucu"],
    answer: "Buddha",
  },
  {
    question: "Hari Pendidikan Nasional diperingati setiap tanggal...",
    options: ["20 Mei", "2 Mei", "1 Juni", "17 Agustus", "21 April"],
    answer: "2 Mei",
  },
  {
    question: "Sumpah Pemuda diikrarkan pada tanggal...",
    options: [
      "28 Oktober 1908",
      "28 Oktober 1928",
      "10 November 1945",
      "1 Juni 1945",
      "17 Agustus 1945",
    ],
    answer: "28 Oktober 1928",
  },

  {
    question: "Hewan yang memakan daging disebut...",
    options: ["Herbivora", "Karnivora", "Omnivora", "Insektivora", "Frugivora"],
    answer: "Karnivora",
  },
  {
    question:
      "Bagian tumbuhan yang berfungsi menyerap air dan zat hara adalah...",
    options: ["Daun", "Batang", "Akar", "Bunga", "Buah"],
    answer: "Akar",
  },
  {
    question: "Rumus kimia air adalah...",
    options: ["CO2", "H2O", "O2", "NaCl", "H2SO4"],
    answer: "H2O",
  },
  {
    question:
      "Reptil yang mampu mengubah warna kulitnya sesuai lingkungan adalah...",
    options: ["Komodo", "Cicak", "Bunglon", "Ular", "Kura-kura"],
    answer: "Bunglon",
  },
  {
    question: "Satuan untuk mengukur tegangan listrik adalah...",
    options: ["Ampere", "Watt", "Volt", "Joule", "Ohm"],
    answer: "Volt",
  },
  {
    question:
      "Proses tumbuhan membuat makanan sendiri dengan bantuan cahaya matahari disebut...",
    options: [
      "Respirasi",
      "Fotosintesis",
      "Adaptasi",
      "Reproduksi",
      "Transpirasi",
    ],
    answer: "Fotosintesis",
  },
  {
    question: "Planet yang dijuluki 'Planet Merah' adalah...",
    options: ["Venus", "Mars", "Jupiter", "Saturnus", "Merkurius"],
    answer: "Mars",
  },
  {
    question: "Gas yang kita hirup saat bernapas adalah...",
    options: ["Karbondioksida", "Oksigen", "Nitrogen", "Hidrogen", "Helium"],
    answer: "Oksigen",
  },
  {
    question: "Hewan mamalia yang bisa terbang adalah...",
    options: ["Burung Elang", "Kelelawar", "Ayam", "Penguin", "Capung"],
    answer: "Kelelawar",
  },
  {
    question: "Pusat tata surya kita adalah...",
    options: ["Bumi", "Bulan", "Matahari", "Bintang", "Galaksi Bima Sakti"],
    answer: "Matahari",
  },

  {
    question: "Siapakah pendiri perusahaan Microsoft?",
    options: [
      "Steve Jobs",
      "Mark Zuckerberg",
      "Bill Gates",
      "Elon Musk",
      "Jeff Bezos",
    ],
    answer: "Bill Gates",
  },
  {
    question:
      "Aplikasi pesan instan yang sangat populer dengan logo berwarna hijau adalah...",
    options: ["Telegram", "Line", "WhatsApp", "Signal", "WeChat"],
    answer: "WhatsApp",
  },
  {
    question: "Istilah 'WWW' dalam alamat website singkatan dari...",
    options: [
      "World Wide Web",
      "World Web Wide",
      "Wide World Web",
      "Web World Wide",
      "World Wide Wart",
    ],
    answer: "World Wide Web",
  },
  {
    question:
      "Alat untuk menyimpan data komputer yang bersifat portable (bisa dibawa-bawa) adalah...",
    options: ["Harddisk Internal", "RAM", "Flashdisk", "VGA", "Processor"],
    answer: "Flashdisk",
  },
  {
    question:
      "Media sosial yang identik dengan logo burung biru (sebelum diganti X) adalah...",
    options: ["Facebook", "Instagram", "Twitter", "TikTok", "LinkedIn"],
    answer: "Twitter",
  },
  {
    question: "Apa kepanjangan dari 'CPU'?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Center Processing Unit",
      "Control Processing Unit",
      "Computer Personal Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Siapakah pendiri Facebook?",
    options: [
      "Jack Ma",
      "Mark Zuckerberg",
      "Larry Page",
      "Sergey Brin",
      "Tim Cook",
    ],
    answer: "Mark Zuckerberg",
  },
  {
    question: "Negara asal produsen HP 'Samsung' adalah...",
    options: ["Jepang", "China", "Korea Selatan", "Amerika Serikat", "Taiwan"],
    answer: "Korea Selatan",
  },
  {
    question: "Kendaraan listrik 'Tesla' dipimpin oleh...",
    options: [
      "Elon Musk",
      "Henry Ford",
      "Nikola Tesla",
      "Thomas Edison",
      "Warren Buffett",
    ],
    answer: "Elon Musk",
  },
  {
    question:
      "Sistem operasi yang dikembangkan oleh Google untuk smartphone adalah...",
    options: ["iOS", "Windows", "Android", "Linux", "Symbian"],
    answer: "Android",
  },

  {
    question: "Alat musik tradisional Angklung berasal dari daerah...",
    options: [
      "Jawa Tengah",
      "Jawa Timur",
      "Jawa Barat",
      "Bali",
      "Sumatera Barat",
    ],
    answer: "Jawa Barat",
  },
  {
    question: "Tari Kecak adalah tarian khas dari...",
    options: ["Lombok", "Bali", "Jawa", "Kalimantan", "Papua"],
    answer: "Bali",
  },
  {
    question: "Rumah adat provinsi Sumatera Barat disebut...",
    options: [
      "Rumah Gadang",
      "Rumah Joglo",
      "Rumah Honai",
      "Rumah Tongkonan",
      "Rumah Limas",
    ],
    answer: "Rumah Gadang",
  },
  {
    question: "Alat musik Sasando berasal dari...",
    options: [
      "Maluku",
      "Papua",
      "Nusa Tenggara Timur",
      "Sulawesi Utara",
      "Kalimantan Timur",
    ],
    answer: "Nusa Tenggara Timur",
  },
  {
    question: "Batik diakui UNESCO sebagai warisan budaya dari negara...",
    options: ["Malaysia", "Indonesia", "Thailand", "Filipina", "Brunei"],
    answer: "Indonesia",
  },
  {
    question: "Lagu 'Gundul-Gundul Pacul' berasal dari daerah...",
    options: ["Jawa Barat", "Jawa Tengah", "Madura", "Betawi", "Sunda"],
    answer: "Jawa Tengah",
  },
  {
    question: "Senjata tradisional khas Jawa Barat adalah...",
    options: ["Keris", "Rencong", "Kujang", "Celurit", "Mandau"],
    answer: "Kujang",
  },
  {
    question:
      "Makanan khas Palembang yang terbuat dari ikan dan sagu adalah...",
    options: ["Gudeg", "Rendang", "Pempek", "Rawon", "Soto"],
    answer: "Pempek",
  },
  {
    question: "Upacara pembakaran mayat di Bali disebut...",
    options: ["Ngaben", "Sekaten", "Kasada", "Galungan", "Nyepi"],
    answer: "Ngaben",
  },
  {
    question: "Monumen Nasional (Monas) terletak di kota...",
    options: ["Bandung", "Surabaya", "Jakarta", "Medan", "Semarang"],
    answer: "Jakarta",
  },

  {
    question: "Induk organisasi sepak bola dunia adalah...",
    options: ["NBA", "FIBA", "FIFA", "IAAF", "BWF"],
    answer: "FIFA",
  },
  {
    question: "Jumlah pemain dalam satu tim sepak bola adalah...",
    options: ["9", "10", "11", "12", "6"],
    answer: "11",
  },
  {
    question: "Piala dunia sepak bola diadakan setiap berapa tahun sekali?",
    options: ["2 tahun", "3 tahun", "4 tahun", "5 tahun", "1 tahun"],
    answer: "4 tahun",
  },
  {
    question: "Olahraga bulu tangkis disebut juga dengan istilah...",
    options: ["Tennis", "Badminton", "Volley", "Basket", "Pingpong"],
    answer: "Badminton",
  },
  {
    question:
      "Ukuran panjang lapangan sepak bola standar internasional kira-kira...",
    options: ["50-60 m", "100-110 m", "200-300 m", "10-20 m", "500 m"],
    answer: "100-110 m",
  },
  {
    question: "Negara yang menjadi juara Piala Dunia 2022 adalah...",
    options: ["Perancis", "Kroasia", "Brazil", "Argentina", "Jerman"],
    answer: "Argentina",
  },
  {
    question: "Legenda basket dunia dengan nomor punggung 23 adalah...",
    options: [
      "Kobe Bryant",
      "Michael Jordan",
      "LeBron James",
      "Shaquille O'Neal",
      "Stephen Curry",
    ],
    answer: "Michael Jordan",
  },
  {
    question: "Lari jarak pendek disebut juga...",
    options: ["Marathon", "Jogging", "Sprint", "Estafet", "Hurdles"],
    answer: "Sprint",
  },
  {
    question:
      "Dalam permainan catur, bidak yang bisa bergerak menyilang (diagonal) adalah...",
    options: [
      "Benteng (Rook)",
      "Kuda (Knight)",
      "Gajah (Bishop)",
      "Raja (King)",
      "Pion (Pawn)",
    ],
    answer: "Gajah (Bishop)",
  },
  {
    question: "Sea Games adalah pesta olahraga untuk kawasan...",
    options: ["Asia", "Asia Tenggara", "Dunia", "Eropa", "Amerika"],
    answer: "Asia Tenggara",
  },

  {
    question: "Mata uang negara Malaysia adalah...",
    options: ["Rupiah", "Dollar", "Ringgit", "Baht", "Peso"],
    answer: "Ringgit",
  },
  {
    question: "Siapakah penulis novel 'Laskar Pelangi'?",
    options: [
      "Tere Liye",
      "Andrea Hirata",
      "Raditya Dika",
      "Dee Lestari",
      "Habiburrahman El Shirazy",
    ],
    answer: "Andrea Hirata",
  },
  {
    question: "Bahan utama pembuatan kaca adalah...",
    options: ["Tanah Liat", "Batu Kapur", "Pasir Silika", "Biji Besi", "Kayu"],
    answer: "Pasir Silika",
  },
  {
    question: "Manusia memiliki berapa pasang kromosom normal?",
    options: ["20", "22", "23", "24", "46"],
    answer: "23",
  },
  {
    question: "PBB (Perserikatan Bangsa-Bangsa) bermarkas di...",
    options: ["Jenewa", "New York", "Paris", "London", "Tokyo"],
    answer: "New York",
  },
  {
    question: "Binatang tercepat di darat adalah...",
    options: ["Singa", "Kuda", "Cheetah", "Rusa", "Macan Tutul"],
    answer: "Cheetah",
  },
  {
    question: "Siapakah penemu telepon?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "James Watt",
      "Wright Brothers",
    ],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Negara kincir angin adalah julukan untuk...",
    options: ["Belgia", "Jerman", "Belanda", "Swiss", "Austria"],
    answer: "Belanda",
  },
  {
    question: "Candi Prambanan merupakan candi peninggalan agama...",
    options: ["Buddha", "Hindu", "Islam", "Kristen", "Konghucu"],
    answer: "Hindu",
  },
  {
    question: "Makanan pokok masyarakat Papua adalah...",
    options: ["Nasi", "Jagung", "Sagu", "Gandum", "Ubi"],
    answer: "Sagu",
  },

  {
    question: "Pasar yang memperjualbelikan saham disebut...",
    options: [
      "Pasar Swalayan",
      "Bursa Efek",
      "Pasar Malam",
      "Pasar Grosir",
      "Pasar Monopoli",
    ],
    answer: "Bursa Efek",
  },
  {
    question: "Kegiatan mengirim barang ke luar negeri disebut...",
    options: ["Impor", "Ekspor", "Barter", "Distribusi", "Konsumsi"],
    answer: "Ekspor",
  },
  {
    question: "Orang yang memakai barang atau jasa disebut...",
    options: ["Produsen", "Distributor", "Konsumen", "Agen", "Sales"],
    answer: "Konsumen",
  },
  {
    question: "Badan usaha milik negara disebut...",
    options: ["BUMS", "BUMN", "Koperasi", "PT", "CV"],
    answer: "BUMN",
  },
  {
    question: "Pajak yang dikenakan atas penghasilan seseorang disebut...",
    options: ["PPN", "PBB", "PPh", "Pujasera", "Bea Cukai"],
    answer: "PPh",
  },
  {
    question:
      "Menteri Keuangan Indonesia yang menjabat lama di era Jokowi adalah...",
    options: [
      "Susi Pudjiastuti",
      "Sri Mulyani",
      "Retno Marsudi",
      "Erick Thohir",
      "Nadiem Makarim",
    ],
    answer: "Sri Mulyani",
  },
  {
    question: "Organisasi perdagangan dunia disebut...",
    options: ["WHO", "WTO", "ILO", "IMF", "UNESCO"],
    answer: "WTO",
  },
  {
    question: "Inflasi adalah kondisi di mana...",
    options: [
      "Harga barang turun terus menerus",
      "Harga barang naik secara umum dan terus menerus",
      "Nilai mata uang naik",
      "Pengangguran berkurang",
      "Ekonomi stabil",
    ],
    answer: "Harga barang naik secara umum dan terus menerus",
  },
  {
    question: "Koperasi yang melayani simpan pinjam disebut...",
    options: [
      "Koperasi Konsumsi",
      "Koperasi Produksi",
      "Koperasi Simpan Pinjam",
      "Koperasi Serba Usaha",
      "Koperasi Sekolah",
    ],
    answer: "Koperasi Simpan Pinjam",
  },
  {
    question: "Mata uang bersama negara-negara Eropa adalah...",
    options: ["Poundsterling", "Franc", "Euro", "Deutsche Mark", "Lira"],
    answer: "Euro",
  },

  {
    question: "Hewan apa yang tidur dengan mata terbuka?",
    options: ["Kuda", "Ikan", "Kucing", "Kelelawar", "Burung Hantu"],
    answer: "Ikan",
  },
  {
    question: "Berapa jumlah detik dalam satu jam?",
    options: ["60", "360", "3600", "6000", "120"],
    answer: "3600",
  },
  {
    question: "Warna primer terdiri dari...",
    options: [
      "Merah, Kuning, Hijau",
      "Merah, Kuning, Biru",
      "Merah, Putih, Hitam",
      "Biru, Hijau, Kuning",
      "Hitam, Putih, Abu",
    ],
    answer: "Merah, Kuning, Biru",
  },
  {
    question: "Bulan apa yang memiliki jumlah hari paling sedikit?",
    options: ["Januari", "Februari", "Maret", "April", "Desember"],
    answer: "Februari",
  },
  {
    question: "Indra penciuman ular terletak pada...",
    options: ["Hidung", "Kulit", "Lidah", "Mata", "Ekor"],
    answer: "Lidah",
  },
  {
    question:
      "Tokoh kartun spons berwarna kuning yang tinggal di nanas adalah...",
    options: [
      "Patrick Star",
      "Squidward",
      "SpongeBob SquarePants",
      "Mr. Krabs",
      "Plankton",
    ],
    answer: "SpongeBob SquarePants",
  },
  {
    question: "Tahun kabisat terjadi setiap...",
    options: ["2 tahun", "3 tahun", "4 tahun", "5 tahun", "8 tahun"],
    answer: "4 tahun",
  },
  {
    question: "Siapa nama penemu gravitasi yang kejatuhan apel?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Charles Darwin",
      "Stephen Hawking",
    ],
    answer: "Isaac Newton",
  },
  {
    question: "Zat hijau daun disebut...",
    options: ["Stomata", "Klorofil", "Xilem", "Floem", "Kambium"],
    answer: "Klorofil",
  },
  {
    question: "Apa nama samudra terluas di dunia?",
    options: [
      "Samudra Hindia",
      "Samudra Atlantik",
      "Samudra Pasifik",
      "Samudra Arktik",
      "Samudra Antartika",
    ],
    answer: "Samudra Pasifik",
  },

  {
    question: "Hasil dari 15 + 27 adalah...",
    options: ["32", "42", "52", "35", "45"],
    answer: "42",
  },
  {
    question: "Hasil perkalian 8 x 7 adalah...",
    options: ["54", "56", "58", "64", "48"],
    answer: "56",
  },
  {
    question: "Jika 3x = 15, berapakah nilai x?",
    options: ["3", "4", "5", "6", "12"],
    answer: "5",
  },
  {
    question: "Berapakah hasil dari 100 dibagi 4?",
    options: ["20", "25", "30", "15", "24"],
    answer: "25",
  },
  {
    question: "Bangun datar yang memiliki 3 sisi disebut...",
    options: [
      "Persegi",
      "Persegi Panjang",
      "Segitiga",
      "Lingkaran",
      "Trapesium",
    ],
    answer: "Segitiga",
  },
  {
    question: "Hasil dari 50 - (10 x 2) adalah...",
    options: ["80", "40", "30", "20", "10"],
    answer: "30",
  },
  {
    question: "Nilai dari 5 kuadrat (5^2) adalah...",
    options: ["10", "15", "20", "25", "50"],
    answer: "25",
  },
  {
    question: "Sudut siku-siku besarnya adalah...",
    options: [
      "45 derajat",
      "90 derajat",
      "180 derajat",
      "360 derajat",
      "60 derajat",
    ],
    answer: "90 derajat",
  },
  {
    question: "Berapakah keliling persegi jika panjang sisinya 5 cm?",
    options: ["10 cm", "15 cm", "20 cm", "25 cm", "30 cm"],
    answer: "20 cm",
  },
  {
    question: "Angka romawi 'X' melambangkan angka...",
    options: ["5", "10", "50", "100", "1000"],
    answer: "10",
  },
];
