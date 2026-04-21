// ============================================================
// surah-data.js — Master database surah Al-Qur'an
// Proyek: Analisis Gramatikal Al-Qur'an
// Website: grammar-quran.com
// Last updated: 21 April 2026 (setelah Al-Qari'ah 101 selesai)
// ============================================================

const SURAH_DATA = [
  { nomor: 1,   nama: "Al-Fatihah",      jumlahAyat: 7,   status: "tersedia" },
  { nomor: 2,   nama: "Al-Baqarah",      jumlahAyat: 286, status: "rencana" },
  { nomor: 3,   nama: "Ali 'Imran",      jumlahAyat: 200, status: "rencana" },
  // ... (surah 4-98 status rencana) ...
  { nomor: 99,  nama: "Az-Zalzalah",     jumlahAyat: 8,   status: "rencana" },
  { nomor: 100, nama: "Al-'Adiyat",      jumlahAyat: 11,  status: "rencana" },
  { nomor: 101, nama: "Al-Qari'ah",      jumlahAyat: 11,  status: "tersedia" }, // ← 21 April 2026
  { nomor: 102, nama: "At-Takatsur",     jumlahAyat: 8,   status: "tersedia" },
  { nomor: 103, nama: "Al-'Asr",         jumlahAyat: 3,   status: "tersedia" },
  { nomor: 104, nama: "Al-Humazah",      jumlahAyat: 9,   status: "tersedia" },
  { nomor: 105, nama: "Al-Fil",          jumlahAyat: 5,   status: "tersedia" },
  { nomor: 106, nama: "Quraisy",         jumlahAyat: 4,   status: "tersedia" },
  { nomor: 107, nama: "Al-Ma'un",        jumlahAyat: 7,   status: "tersedia" },
  { nomor: 108, nama: "Al-Kautsar",      jumlahAyat: 3,   status: "tersedia" },
  { nomor: 109, nama: "Al-Kafirun",      jumlahAyat: 6,   status: "tersedia" },
  { nomor: 110, nama: "An-Nashr",        jumlahAyat: 3,   status: "tersedia" },
  { nomor: 111, nama: "Al-Masad",        jumlahAyat: 5,   status: "tersedia" },
  { nomor: 112, nama: "Al-Ikhlas",       jumlahAyat: 4,   status: "tersedia" },
  { nomor: 113, nama: "Al-Falaq",        jumlahAyat: 5,   status: "tersedia" },
  { nomor: 114, nama: "An-Naas",         jumlahAyat: 6,   status: "tersedia" }
];

// Helper: format nomor surah dengan leading zero (untuk path file)
function getPathAyat(nomorSurah, nomorAyat) {
  const surahPadded = String(nomorSurah).padStart(3, '0');
  const ayatPadded = String(nomorAyat).padStart(2, '0');
  return `${surahPadded}-${ayatPadded}.html`;
}

// Helper: cari data surah berdasarkan nomor
function getSurah(nomor) {
  return SURAH_DATA.find(s => s.nomor === nomor);
}

// Helper: hitung total ayat yang sudah tersedia
function getTotalAyatTersedia() {
  return SURAH_DATA
    .filter(s => s.status === "tersedia")
    .reduce((sum, s) => sum + s.jumlahAyat, 0);
}

// ============================================================
// CATATAN: File ini HANYA sebagai template/referensi sturktur.
// File surah-data.js asli di repo grammar-quran memiliki semua
// 114 surah dengan status lengkap. Update ini hanya perlu
// mengubah baris surah 101 dari "rencana" menjadi "tersedia".
//
// Total progress setelah surah 101 selesai:
//   Surah tersedia: 15 surah (001 + 101 + 102-114)
//   Total ayat: ~94 ayat · ~1.5% Al-Qur'an
// ============================================================
