# Berkas sumber naskah Al-Qur'an — grammar-quran.com

Berkas `quran-uthmani.xml` di folder ini adalah **satu-satunya sumber nash
Al-Qur'an** untuk situs ini: halaman ayat (grammar-quran.com) maupun sub-situs
morfologi (/sharf/). Tidak ada nash yang boleh diketik tangan.

## Identitas berkas

| Butir | Keterangan |
|---|---|
| Sumber | Tanzil Quran Text (Uthmani) **v1.1** — https://tanzil.net/download/ |
| Riwayat | Hafsh 'an 'Ashim |
| Isi | 114 surah · 6236 ayat |
| MD5 (berkas mentah) | `38b460b2d885d16f008906838ce175d7` |
| Ukuran | 1,541,342 bytes |
| Pilihan unduh | tanda waqaf **disertakan** · tatweel **disertakan** · tanda sajdah **tidak** · rub'ul hizb **tidak** |
| Lisensi | Creative Commons Attribution 3.0 — lihat `TANZIL-LICENSE.txt` |
| Rujukan akhir | Mushaf Madinah cetak |
| Tanggal unduh | 20 September 2026 |

Varian **tanpa tatweel** (MD5 `600bed8b09bb0023cb051da613ce94ef`) sudah diuji
tampilan dan **ditolak**: alif khanjariyah menumpuk ke atas tanpa penopang.
Varian itu pun masih memuat 812 tatweel penopang hamzah, jadi bukan benar-benar
"tanpa tatweel".

## Isi berkas — angka yang sudah diverifikasi

- Tanda waqaf: **4359** — U+06D6 (1682) · U+06D7 (603) ·
  U+06D8 waqaf lazim (22) · U+06D9 (68) · U+06DA (1972) · U+06DB (12).
  Setiap tanda berdiri sebagai **kata tersendiri** yang diapit spasi.
- Saktah U+06DC sebagai kata tersendiri: **5** — 18:1 · 36:52 · 69:28 · 75:27 · 83:14.
  (U+06DC yang menempel di dalam kata, mis. 2:245, adalah sin kecil — bukan saktah.)
- Tatweel U+0640: **6736**, seluruhnya di tengah kata, nol di awal/akhir kata.
- Mim iqlab: U+06E2 **510** · U+06ED **99**.
- Normalisasi: berkas mentah **BUKAN NFC** — syaddah ditulis mendahului
  harakat. Ayat yang sudah NFC apa adanya: 488 dari 6236.

## Cara memakainya (V18.0)

Tiga langkah, dijalankan skrip, tidak diketik:

1. Ambil atribut `text` dari `<aya>` sesuai surah:ayat.
2. Normalisasi Unicode **NFC**.
3. Buang **U+06E2** dan **U+06ED** (mim iqlab) — tanpa penggantian apa pun.

Selain tiga langkah itu, nash dipakai **apa adanya**: ٱ, ى, alif khanjariyah,
wawu kecil, ya' kecil, maddah, sifir, tatweel, tanda waqaf, dan saktah semuanya
dipertahankan.

**Jangan ikut membuang U+06D8.** Bentuknya mim juga, tetapi ia tanda waqaf
lazim (mim bentuk awal, berdiri sendiri diapit spasi), bukan iqlab.

**Pada nun sukun**, mim iqlab menggantikan sukun. Setelah dibuang, nun
dibiarkan polos: مِنۢ → مِن. Tidak ditambahi sukun.

## Jangan diubah

Berkas ini disimpan **apa adanya** seperti diunduh. Pengolahan dilakukan di
dalam skrip, bukan dengan menyunting berkas. Bila MD5 tidak lagi cocok dengan
yang tercatat di atas, berarti berkas sudah tersentuh dan harus diunduh ulang.

Verifikasi:

```bash
md5sum data/quran-uthmani.xml
# harus: 38b460b2d885d16f008906838ce175d7
```

## Atribusi

Syarat lisensi CC BY 3.0 dipenuhi dengan tiga hal:

1. Berkas `TANZIL-LICENSE.txt` di folder ini.
2. Baris footer di setiap halaman situs:
   `Teks Al-Qur'an: Tanzil Quran Text (Uthmani, v1.1) — © Tanzil Project · CC BY 3.0 · tanzil.net`
3. Blok hak cipta Tanzil sebagai komentar HTML di `<head>` tiap halaman ayat.

Catatan: Tanzil menulis *"CHANGING IT IS NOT ALLOWED"*. Pembuangan mim iqlab
adalah perubahan, dan hal itu dinyatakan terus terang di halaman `sumber.html`.
Perlu dicek ke ketentuan tanzil.net apakah penyesuaian semacam ini diterima.
