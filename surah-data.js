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
    jenis: "Makkiyah",
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
    jenis: "Makkiyah",
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
    status: "rencana",
    keterangan: "Surah ke-78, awal Juz Amma"
  },
  {
    nomor: 79,
    nomorStr: "079",
    namaLatin: "An-Nazi'at",
    namaArab: "النازعات",
    arti: "Malaikat yang Mencabut",
    jumlahAyat: 46,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 80,
    nomorStr: "080",
    namaLatin: "'Abasa",
    namaArab: "عبس",
    arti: "Ia Bermuka Masam",
    jumlahAyat: 42,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 81,
    nomorStr: "081",
    namaLatin: "At-Takwir",
    namaArab: "التكوير",
    arti: "Penggulungan",
    jumlahAyat: 29,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 82,
    nomorStr: "082",
    namaLatin: "Al-Infithar",
    namaArab: "الانفطار",
    arti: "Terbelah",
    jumlahAyat: 19,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 83,
    nomorStr: "083",
    namaLatin: "Al-Muthaffifin",
    namaArab: "المطففين",
    arti: "Orang yang Curang",
    jumlahAyat: 36,
    jenis: "Makkiyah",
    status: "rencana",
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
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 85,
    nomorStr: "085",
    namaLatin: "Al-Buruj",
    namaArab: "البروج",
    arti: "Gugusan Bintang",
    jumlahAyat: 22,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 86,
    nomorStr: "086",
    namaLatin: "Ath-Thariq",
    namaArab: "الطارق",
    arti: "Bintang Malam",
    jumlahAyat: 17,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 87,
    nomorStr: "087",
    namaLatin: "Al-A'la",
    namaArab: "الأعلى",
    arti: "Yang Maha Tinggi",
    jumlahAyat: 19,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 88,
    nomorStr: "088",
    namaLatin: "Al-Ghasyiyah",
    namaArab: "الغاشية",
    arti: "Hari Pembalasan",
    jumlahAyat: 26,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 89,
    nomorStr: "089",
    namaLatin: "Al-Fajr",
    namaArab: "الفجر",
    arti: "Fajar",
    jumlahAyat: 30,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 90,
    nomorStr: "090",
    namaLatin: "Al-Balad",
    namaArab: "البلد",
    arti: "Negeri",
    jumlahAyat: 20,
    jenis: "Makkiyah",
    status: "rencana",
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
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 92,
    nomorStr: "092",
    namaLatin: "Al-Lail",
    namaArab: "الليل",
    arti: "Malam",
    jumlahAyat: 21,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 93,
    nomorStr: "093",
    namaLatin: "Adh-Dhuha",
    namaArab: "الضحى",
    arti: "Waktu Dhuha",
    jumlahAyat: 11,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 94,
    nomorStr: "094",
    namaLatin: "Al-Insyirah",
    namaArab: "الانشراح",
    arti: "Kelapangan",
    jumlahAyat: 8,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 95,
    nomorStr: "095",
    namaLatin: "At-Tin",
    namaArab: "التين",
    arti: "Buah Tin",
    jumlahAyat: 8,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 96,
    nomorStr: "096",
    namaLatin: "Al-'Alaq",
    namaArab: "العلق",
    arti: "Segumpal Darah",
    jumlahAyat: 19,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: "Ayat pertama yang diturunkan"
  },
  {
    nomor: 97,
    nomorStr: "097",
    namaLatin: "Al-Qadr",
    namaArab: "القدر",
    arti: "Kemuliaan",
    jumlahAyat: 5,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 98,
    nomorStr: "098",
    namaLatin: "Al-Bayyinah",
    namaArab: "البينة",
    arti: "Bukti Nyata",
    jumlahAyat: 8,
    jenis: "Madaniyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 99,
    nomorStr: "099",
    namaLatin: "Az-Zalzalah",
    namaArab: "الزلزلة",
    arti: "Kegoncangan",
    jumlahAyat: 8,
    jenis: "Madaniyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 100,
    nomorStr: "100",
    namaLatin: "Al-'Adiyat",
    namaArab: "العاديات",
    arti: "Kuda Perang",
    jumlahAyat: 11,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 101,
    nomorStr: "101",
    namaLatin: "Al-Qari'ah",
    namaArab: "القارعة",
    arti: "Hari Kiamat",
    jumlahAyat: 11,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 102,
    nomorStr: "102",
    namaLatin: "At-Takatsur",
    namaArab: "التكاثر",
    arti: "Bermegah-megahan",
    jumlahAyat: 8,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 103,
    nomorStr: "103",
    namaLatin: "Al-'Ashr",
    namaArab: "العصر",
    arti: "Masa",
    jumlahAyat: 3,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 104,
    nomorStr: "104",
    namaLatin: "Al-Humazah",
    namaArab: "الهمزة",
    arti: "Pengumpat",
    jumlahAyat: 9,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
  },
  {
    nomor: 105,
    nomorStr: "105",
    namaLatin: "Al-Fil",
    namaArab: "الفيل",
    arti: "Gajah",
    jumlahAyat: 5,
    jenis: "Makkiyah",
    status: "rencana",
    keterangan: ""
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
    keterangan: "Surah ke-106, satu-satunya surah yang dibuka dengan jar-majrur (ta'lil) yang bersandar pada perintah di ayat 3"
  },
  {
    nomor: 107,
    nomorStr: "107",
    namaLatin: "Al-Ma'un",
    namaArab: "الماعون",
    arti: "Barang yang Berguna",
    jumlahAyat: 7,
    jenis: "Makkiyah + Madaniyah",
    status: "tersedia",
    keterangan: "Surah ke-107, dua unit: ayat 1–3 Makkiyyah (المُكَذِّب بِالدِّين) + ayat 4–7 Madaniyyah (المُنَافِقُون)"
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
