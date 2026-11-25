/**
 * surah-data.js
 * ============================================================
 * PUSAT DATA SURAH — Tahlil Nahwi Al-Qur'an
 * ============================================================
 * Cara penggunaan:
 *   - Untuk tambah surah baru: tambah 1 entri baru di array SURAH_DATA
 *   - Semua halaman HTML akan otomatis mengambil data dari file ini
 *   - Jangan hardcode data surah di file HTML manapun
 *
 * Status surah:
 *   "tersedia"  → file HTML ayat sudah ada, bisa dikunjungi
 *   "rencana"   → belum dikerjakan, ditampilkan sebagai "segera hadir"
 *
 * Format path file ayat:
 *   /surah/[nomor 3 digit]/ayat-[nomor ayat].html
 *   Contoh: /surah/001/ayat-1.html
 *
 * ============================================================
 */

const SURAH_DATA = [

  // ── SURAH TERSEDIA ─────────────────────────────────────────

  {
    nomor: 1,
    nomorStr: "001",
    namaLatin: "Al-Fatihah",
    namaArab: "الفاتحة",
    arti: "Pembuka",
    jumlahAyat: 7,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah pertama dan pembuka Al-Qur'an"
  },
  {
    nomor: 113,
    nomorStr: "113",
    namaLatin: "Al-Falaq",
    namaArab: "الفلق",
    arti: "Waktu Subuh",
    jumlahAyat: 5,
    jenis: "Madaniyah",
    status: "tersedia",
    keterangan: "Surah ke-113, salah satu Al-Mu'awwidzatain"
  },
  {
    nomor: 114,
    nomorStr: "114",
    namaLatin: "An-Naas",
    namaArab: "الناس",
    arti: "Manusia",
    jumlahAyat: 6,
    jenis: "Madaniyah",
    status: "tersedia",
    keterangan: "Surah terakhir Al-Qur'an, salah satu Al-Mu'awwidzatain"
  },

  // ── JUZ AMMA (78–112) — STATUS RENCANA ────────────────────

  {
    nomor: 78,
    nomorStr: "078",
    namaLatin: "An-Naba'",
    namaArab: "النبأ",
    arti: "Berita Besar",
    jumlahAyat: 40,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Berita besar yang mereka perselisihkan: hari kebangkitan. Sembilan bukti kekuasaan Allah dalam penciptaan, hari keputusan, neraka bagi yang melampaui batas, kemenangan bagi yang bertakwa, dan hari ketika ruh dan para malaikat berdiri bershaf. Dibuka dengan pertanyaan, ditutup dengan orang kafir yang berangan-angan menjadi tanah."
  },
  {
    nomor: 79,
    nomorStr: "079",
    namaLatin: "An-Nazi'at",
    namaArab: "النازعات",
    arti: "Malaikat yang Mencabut",
    jumlahAyat: 46,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Sumpah demi para malaikat pencabut nyawa, guncangan hari kiamat, kisah Musa dan Fir'aun, hujjah penciptaan langit dan bumi, serta dua golongan pada hari malapetaka terbesar. Dibuka dengan pencabutan nyawa, ditutup dengan dunia yang terasa hanya sepetang atau sedhuha."
  },
  {
    nomor: 80,
    nomorStr: "080",
    namaLatin: "'Abasa",
    namaArab: "عبس",
    arti: "Ia Bermuka Masam",
    jumlahAyat: 42,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Siapa yang layak didahulukan dalam dakwah, hakikat manusia, dan hari ketika setiap orang sendirian bersama amalnya. Dibuka dengan satu wajah yang bermuka masam, ditutup dengan wajah-wajah pada hari kiamat."
  },
  {
    nomor: 81,
    nomorStr: "081",
    namaLatin: "At-Takwir",
    namaArab: "التكوير",
    arti: "Penggulungan",
    jumlahAyat: 29,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Kepastian Hari Kiamat dan kebenaran sumber Al-Qur'an. Dibuka dengan runtuhnya seluruh tatanan alam, ditutup dengan nama Pemelihara alam itu sendiri."
  },
  {
    nomor: 82,
    nomorStr: "082",
    namaLatin: "Al-Infithar",
    namaArab: "الانفطار",
    arti: "Terbelah",
    jumlahAyat: 19,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Segala perbuatan dihadapkan kepada pemiliknya pada Hari Pembalasan. Dibuka dengan runtuhnya tatanan alam, ditutup dengan nama Pemilik tatanan itu."
  },
  {
    nomor: 83,
    nomorStr: "083",
    namaLatin: "Al-Muthaffifin",
    namaArab: "المطففين",
    arti: "Orang yang Curang",
    jumlahAyat: 36,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: ""
  },
  {
    nomor: 84,
    nomorStr: "084",
    namaLatin: "Al-Insyiqaq",
    namaArab: "الانشقاق",
    arti: "Terbelah",
    jumlahAyat: 25,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Langit terbelah dan bumi diratakan pada Hari Kiamat, keduanya tunduk kepada Rabb-nya tanpa membantah; manusia berjalan menuju Rabb-nya dengan susah payah lalu dibagi dua golongan menurut cara ia menerima kitab amalnya \u2014 dari kanan dengan hisab yang mudah, atau dari belakang punggung dengan seruan kebinasaan; sumpah demi mega senja, malam, dan bulan purnama bahwa manusia pasti menempuh tingkat demi tingkat; ditutup celaan bagi yang tidak beriman, tidak sujud, dan mendustakan, serta janji pahala tanpa putus bagi yang beriman dan beramal saleh."
  },
  {
    nomor: 85,
    nomorStr: "085",
    namaLatin: "Al-Buruj",
    namaArab: "البروج",
    arti: "Gugusan Bintang",
    jumlahAyat: 22,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Sumpah demi langit bergugus bintang & hari yang dijanjikan, kisah Ashabul Ukhdud yang membakar kaum mukmin semata karena iman, balasan azab pembakaran bagi penindas & surga bagi mukmin, untaian sifat Allah yang keras siksa-Nya sekaligus Maha Pengampun & Maha Pengasih, hingga penutup: Al-Qur'an yang mulia, terjaga di Lauh Mahfuzh."
  },
  {
    nomor: 86,
    nomorStr: "086",
    namaLatin: "Ath-Thariq",
    namaArab: "الطارق",
    arti: "Bintang Malam",
    jumlahAyat: 17,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Sumpah demi langit & bintang penembus malam, tiap jiwa ada penjaganya, dalil penciptaan manusia atas kuasa kebangkitan, keagungan Al-Qur'an sebagai firman pemisah, & makar kaum kafir yang dibalas."
  },
  {
    nomor: 87,
    nomorStr: "087",
    namaLatin: "Al-A'la",
    namaArab: "الأعلى",
    arti: "Yang Maha Tinggi",
    jumlahAyat: 19,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Tasbih menyucikan nama Rabb Yang Maha Tinggi, rangkaian sifat fi'liyyah-Nya, penjagaan wahyu, tazkiyah, & keutamaan akhirat atas dunia."
  },
  {
    nomor: 88,
    nomorStr: "088",
    namaLatin: "Al-Ghasyiyah",
    namaArab: "الغاشية",
    arti: "Hari Pembalasan",
    jumlahAyat: 26,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Hari Kiamat yang meliputi: dua golongan manusia (sengsara & berbahagia), seruan bertafakkur atas ciptaan Allah (unta, langit, gunung, bumi), perintah berdakwah, serta penegasan ma'ad dan hisab di tangan Allah."
  },
  {
    nomor: 89,
    nomorStr: "089",
    namaLatin: "Al-Fajr",
    namaArab: "الفجر",
    arti: "Fajar",
    jumlahAyat: 30,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Sumpah atas fajar & malam, nasib kaum pendurhaka ('Ad, Tsamud, Fir'aun), watak manusia, adegan Kiamat, dan kabar gembira bagi an-nafs al-muthma'innah."
  },
  {
    nomor: 90,
    nomorStr: "090",
    namaLatin: "Al-Balad",
    namaArab: "البلد",
    arti: "Negeri",
    jumlahAyat: 20,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: ""
  },
  {
    nomor: 91,
    nomorStr: "091",
    namaLatin: "Asy-Syams",
    namaArab: "الشمس",
    arti: "Matahari",
    jumlahAyat: 15,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-91, tazkiyatun nafs — tujuh sumpah keagungan, prinsip jiwa antara takwa dan fujur, kisah Tsamud sebagai pembuktian, dan penegasan tauhid rububiyyah"
  },
  {
    nomor: 92,
    nomorStr: "092",
    namaLatin: "Al-Lail",
    namaArab: "الليل",
    arti: "Malam",
    jumlahAyat: 21,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-92, sumpah pembuka demi malam dan siang — dua jalan hidup manusia, peringatan neraka bagi al-asyqa, dan keikhlasan al-atqa yang berbuah keridhaan"
  },
  {
    nomor: 93,
    nomorStr: "093",
    namaLatin: "Adh-Dhuha",
    namaArab: "الضحى",
    arti: "Waktu Dhuha",
    jumlahAyat: 11,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-93, tasliyah untuk Nabi ﷺ — sumpah dan penghiburan, tiga nikmat masa lampau, dan tiga perintah syukur"
  },
  {
    nomor: 94,
    nomorStr: "094",
    namaLatin: "Al-Insyirah",
    namaArab: "الانشراح",
    arti: "Kelapangan",
    jumlahAyat: 8,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-94, tasliyah untuk Nabi ﷺ — janji kemudahan dan perintah amal+niat"
  },
  {
    nomor: 95,
    nomorStr: "095",
    namaLatin: "At-Tin",
    namaArab: "التين",
    arti: "Buah Tin",
    jumlahAyat: 8,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-95 · 8 ayat · sumpah dengan tin, zaitun, Bukit Sinai, dan negeri yang aman (1–3) + manusia diciptakan dalam bentuk terbaik lalu dikembalikan ke tempat terendah (4–5) + pengecualian bagi orang yang beriman dan beramal shalih (6) + teguran bagi yang mendustakan hari pembalasan dan penetapan bahwa Allah hakim yang paling adil (7–8) · konsep: rangkaian muqsam bih, makna al-amin, lam dan qad pada jawab qasam, kedudukan asfala safilin, istitsna' muttashil dan munqathi', laisa dan ba' za'idah pada khabarnya"
  },
  {
    nomor: 96,
    nomorStr: "096",
    namaLatin: "Al-'Alaq",
    namaArab: "العلق",
    arti: "Segumpal Darah",
    jumlahAyat: 19,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-96 · 19 ayat · wahyu pertama: perintah membaca dengan nama Rabb Pencipta dan Pengajar (1–5) + manusia melampaui batas karena merasa cukup (6–8) + orang yang melarang hamba shalat: tiga pertanyaan a-ra'aita dan teguran bahwa Allah melihat (9–14) + ancaman dan perintah sujud (15–19) · konsep: ragam makna ba', maf'ul yang dibuang, badal fi'il, isim tafdhil dengan al, maf'ul li-ajlih, fa'il dan maf'ul satu orang pada fi'il qalbi, in syarthiyyah dan jawab yang dibuang, aw, badal nakirah dari ma'rifah, la nahiyah"
  },
  {
    nomor: 97,
    nomorStr: "097",
    namaLatin: "Al-Qadr",
    namaArab: "القدر",
    arti: "Kemuliaan",
    jumlahAyat: 5,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-97 · 5 ayat · Al-Qur'an diturunkan pada Lailatul Qadr dan pengagungan malam itu (1–2) + tiga keutamaannya: lebih baik daripada seribu bulan, turunnya para malaikat dan Jibril dengan izin Rabb mereka, keselamatan sampai terbit fajar (3–5) · konsep: inna dan naa, dhamir yang kembali kepada yang belum disebut, wa ma adraka dan ta'liq, isim tafdhil khair dengan min, dua ta' di awal mudhari', idhafah bertingkat, kull, khabar didahulukan untuk pengkhususan, hatta sebelum isim, masdar mimi"
  },
  {
    nomor: 98,
    nomorStr: "098",
    namaLatin: "Al-Bayyinah",
    namaArab: "البينة",
    arti: "Bukti Nyata",
    jumlahAyat: 8,
    jenis: "Madaniyah",
    status: "tersedia",
    keterangan: "Surah ke-98 · 8 ayat · bukti yang nyata: Rasul yang membacakan lembaran-lembaran yang disucikan (1–3) + ahli kitab berpecah sesudah bukti datang, padahal perintahnya satu: ikhlas, shalat, dan zakat (4–5) + balasan dua golongan: seburuk-buruk dan sebaik-baik makhluk, ridha dua arah, dan khasyyah (6–8) · konsep: lam dan kana naqish yang majzum, hal berupa jar-majrur, hatta dan an yang tersembunyi, badal, kalimat sifat, khabar yang wajib didahulukan, hashr dengan nafy dan illa, ma mashdariyyah, wawu haliyyah, lam ta'lil, dua hal, idhafah kepada sifat, inna dengan khabar jar-majrur, dhamir fashl, isim tafdhil khair dan syarr, man maushul"
  },
  {
    nomor: 99,
    nomorStr: "099",
    namaLatin: "Az-Zalzalah",
    namaArab: "الزلزلة",
    arti: "Kegoncangan",
    jumlahAyat: 8,
    jenis: "Madaniyah",
    status: "tersedia",
    keterangan: "Surah ke-99 · 8 ayat · guncangan bumi pada hari kiamat dan kesaksiannya atas perintah Rabb-nya (1–5) + manusia keluar berkelompok-kelompok untuk diperlihatkan amalnya (6) + pasangan al-jāmi'ah al-fādzdzah: kebaikan dan keburukan seberat dzarrah (7–8) · konsep: idza syarthiyyah dengan tiga syarat dan satu jawab, fi'il majhul ruba'i, maf'ul muthlaq yang di-idhafah-kan, ma istifham dengan khabar jar-majrur, maqul al-qaul, yauma'idzin sebagai badal dan tanwin 'iwadh, ba' sababiyyah dan masdar mu'awwal dari anna, hal, lam ta'lil dan an yang tersembunyi, man isim syarat jazim, tamyiz"
  },
  {
    nomor: 100,
    nomorStr: "100",
    namaLatin: "Al-'Adiyat",
    namaArab: "العاديات",
    arti: "Kuda Perang",
    jumlahAyat: 11,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-100 · 11 ayat · lima sumpah Allah ﷻ dengan kuda-kuda perang (1–5) + jawab sumpah: manusia sangat ingkar kepada Rabb-nya, menyaksikan keingkarannya, dan sangat cinta harta (6–8) + peringatan tentang kebangkitan dan Rabb Yang Maha Teliti (9–11) · konsep: wawu qasam, masdar sebagai hal (maf'ul muthlaq dengan fi'il dibuang), fa' 'athaf berantai, 'athaf fi'il kepada isim fa'il ber-al, inna dan lam muzahlaqah, jar-majrur didahulukan untuk penekanan, shighah mubalaghah fa'ul, hamzah istifham sebelum fa', idza dengan 'amil dibuang, shilah jar-majrur, yauma'idzin"
  },
  {
    nomor: 101,
    nomorStr: "101",
    namaLatin: "Al-Qari'ah",
    namaArab: "القارعة",
    arti: "Hari Kiamat",
    jumlahAyat: 11,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-101 · 11 ayat · nama dan pengagungan hari kiamat (1–3) + gambaran manusia dan gunung-gunung pada hari itu (4–5) + timbangan amal: kehidupan yang memuaskan atau Hawiyah, api yang sangat panas (6–11) · konsep: rabith pengulangan lafazh mubtada', wa ma adraka, zharaf yang di-idhafah-kan kepada kalimat, kana dengan khabar jar-majrur, amma syarthiyyah tafshiliyyah, isim maushul man sebagai mubtada', fa' rabithah, ha' saktah, mubtada' yang dibuang"
  },
  {
    nomor: 102,
    nomorStr: "102",
    namaLatin: "At-Takatsur",
    namaArab: "التكاثر",
    arti: "Bermegah-megahan",
    jumlahAyat: 8,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-102 · 8 ayat · celaan atas bermegah-megahan sampai masuk kubur (1–2) + tiga hardikan kalla (3–5) + tiga jawab sumpah: melihat Jahim, melihatnya dengan mata yakin, ditanya tentang kenikmatan (6–8) · konsep: maf'ul bih didahulukan atas fa'il, hatta, sawfa, tsumma, law dan jawab yang dibuang, nun taukid pada al-af'al al-khamsah, maf'ul muthlaq, yauma'idzin dan tanwin 'iwadh"
  },
  {
    nomor: 103,
    nomorStr: "103",
    namaLatin: "Al-'Ashr",
    namaArab: "العصر",
    arti: "Masa",
    jumlahAyat: 3,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-103 · 3 ayat · sumpah dengan masa (1) + jawabnya: manusia dalam kerugian (2) + pengecualian empat sifat (3) · konsep: wawu qasam, lam muzahlaqah, istitsna' tam mutsbat, jamak mu'annats salim, wazan tafa'ala"
  },
  {
    nomor: 104,
    nomorStr: "104",
    namaLatin: "Al-Humazah",
    namaArab: "الهمزة",
    arti: "Pengumpat",
    jumlahAyat: 9,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-104 · 9 ayat · dua unit: ayat 1–3 deskripsi pelaku + ayat 4–9 deskripsi azab al-Ḥuṭamah · kesepadanan wazan فُعَلَة (هُمَزَة · لُمَزَة · الْحُطَمَة)"
  },
  {
    nomor: 105,
    nomorStr: "105",
    namaLatin: "Al-Fil",
    namaArab: "الفيل",
    arti: "Gajah",
    jumlahAyat: 5,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-105, kisah pasukan gajah Abrahah — 5 ayat, struktur naratif lengkap"
  },
  {
    nomor: 106,
    nomorStr: "106",
    namaLatin: "Al-Quraisy",
    namaArab: "قريش",
    arti: "Suku Quraisy",
    jumlahAyat: 4,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-106 — nikmat perjalanan dagang yang aman, dan perintah menyembah Rabb Ka'bah"
  },
  {
    nomor: 107,
    nomorStr: "107",
    namaLatin: "Al-Ma'un",
    namaArab: "الماعون",
    arti: "Barang yang Berguna",
    jumlahAyat: 7,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-107 — pendusta hari pembalasan dan orang shalat yang lalai"
  },
  {
    nomor: 108,
    nomorStr: "108",
    namaLatin: "Al-Kawtsar",
    namaArab: "الكوثر",
    arti: "Nikmat yang Banyak",
    jumlahAyat: 3,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-108, surah terpendek Al-Qur'an — karunia, kewajiban, dan vonis"
  },
  {
    nomor: 109,
    nomorStr: "109",
    namaLatin: "Al-Kafirun",
    namaArab: "الكافرون",
    arti: "Orang-orang Kafir",
    jumlahAyat: 6,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-109, deklarasi bara'ah (berlepas diri) dari syirik"
  },
  {
    nomor: 110,
    nomorStr: "110",
    namaLatin: "An-Nashr",
    namaArab: "النصر",
    arti: "Pertolongan",
    jumlahAyat: 3,
    jenis: "Madaniyah",
    status: "tersedia",
    keterangan: "Surah ke-110, isyarat selesainya tugas Nabi ﷺ"
  },
  {
    nomor: 111,
    nomorStr: "111",
    namaLatin: "Al-Masad",
    namaArab: "المسد",
    arti: "Sabut",
    jumlahAyat: 5,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-111, tentang Abu Lahab musuh Islam"
  },
  {
    nomor: 112,
    nomorStr: "112",
    namaLatin: "Al-Ikhlas",
    namaArab: "الإخلاص",
    arti: "Kemurnian Tauhid",
    jumlahAyat: 4,
    jenis: "Makkiyah",
    status: "tersedia",
    keterangan: "Surah ke-112, setara sepertiga Al-Qur'an"
  }

];

// ============================================================
// FUNGSI HELPER — digunakan oleh semua halaman HTML
// ============================================================

/**
 * Kembalikan semua surah yang statusnya "tersedia"
 */
function getSurahTersedia() {
  return SURAH_DATA.filter(s => s.status === "tersedia")
    .sort((a, b) => a.nomor - b.nomor);
}

/**
 * Kembalikan semua surah yang statusnya "rencana"
 */
function getSurahRencana() {
  return SURAH_DATA.filter(s => s.status === "rencana")
    .sort((a, b) => a.nomor - b.nomor);
}

/**
 * Kembalikan data satu surah berdasarkan nomor
 * @param {number} nomor - nomor surah (1-114)
 */
function getSurahByNomor(nomor) {
  return SURAH_DATA.find(s => s.nomor === nomor) || null;
}

/**
 * Kembalikan path file HTML untuk ayat tertentu
 * Format: /001-01.html, /113-05.html, /114-06.html
 * — konsisten dengan naming convention project (sort ascending rapi)
 * @param {string} nomorStr - nomor surah 3 digit (mis. "001")
 * @param {number} ayat - nomor ayat
 */
function getPathAyat(nomorStr, ayat) {
  const ayatStr = String(ayat).padStart(2, '0');
  return `${nomorStr}-${ayatStr}.html`;
}

/**
 * Hitung statistik progress keseluruhan
 */
function getStatistik() {
  const tersedia = getSurahTersedia();
  const totalAyatQuran = 6236;

  const ayatSelesai = tersedia.reduce((sum, s) => sum + s.jumlahAyat, 0);
  const surahSelesai = tersedia.length;
  const totalSurah = SURAH_DATA.length;
  const persentase = ((ayatSelesai / totalAyatQuran) * 100).toFixed(2);

  return {
    ayatSelesai,
    surahSelesai,
    totalSurah,
    totalAyatQuran,
    persentase: parseFloat(persentase)
  };
}

/**
 * Bangun daftar opsi dropdown surah (hanya yang tersedia)
 * Mengembalikan array of { value, label }
 */
function getOpsiDropdownSurah() {
  return getSurahTersedia().map(s => ({
    value: s.nomorStr,
    label: s.nomorStr + '  ' + s.namaLatin + ' \u2014 ' + s.jumlahAyat + ' Ayat',
    data: s
  }));
}

/**
 * Bangun daftar opsi dropdown ayat untuk surah tertentu
 * @param {number} nomor - nomor surah
 */
function getOpsiDropdownAyat(nomor) {
  const surah = getSurahByNomor(nomor);
  if (!surah) return [];

  const opsi = [];
  for (let i = 1; i <= surah.jumlahAyat; i++) {
    opsi.push({
      value: i,
      label: `Ayat ${i}`,
      path: getPathAyat(surah.nomorStr, i)
    });
  }
  return opsi;
}
