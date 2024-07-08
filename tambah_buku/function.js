// Function untuk menghitung denda
function hitungDenda(tanggalKembali, tanggalPinjam, daftarBuku, batasMaxPinjaman, dendaHarian) {
    // Menghitung selisih hari antara tanggal kembali dan tanggal pinjam
    function hitungSelisihHari(tanggal1, tanggal2) {
        const satuHari = 24 * 60 * 60 * 1000; // Satu hari dalam milidetik
        return Math.round(Math.abs((tanggal1 - tanggal2) / satuHari));
    }

    // Function untuk menghitung denda per buku
    function hitungDendaPerBuku(tanggalKembali, tanggalPinjam) {
        const selisihHari = hitungSelisihHari(tanggalKembali, tanggalPinjam);

        if (selisihHari <= batasMaxPinjaman) {
            return 0; // Tidak ada denda jika kembali tepat waktu atau sebelum batas maksimum
        } else {
            const hariTerlambat = selisihHari - batasMaxPinjaman;
            const denda = hariTerlambat * dendaHarian;
            return denda;
        }
    }

    // Array untuk menyimpan denda per buku
    const dendaPerBuku = [];

    // Iterasi untuk setiap buku dalam daftarBuku
    for (let buku of daftarBuku) {
        const denda = hitungDendaPerBuku(new Date(tanggalKembali), new Date(tanggalPinjam));
        dendaPerBuku.push({
            judul: buku.judul,
            denda: denda
        });
    }

    return dendaPerBuku;
}

// Contoh penggunaan fungsi
const tanggalKembali = new Date('2024-07-08');
const tanggalPinjam = new Date('2024-06-25');
const daftarBuku = [
    { judul: 'Filosofi Kopi' },
    { judul: 'Naruto Shippuden' }
];
const batasMaxPinjaman = 14; // Inisialisasi batas maks pinjam 14 hari
const dendaHarian = 1000; // jumlah denda Rp 1.000 per hari

const denda = hitungDenda(tanggalKembali, tanggalPinjam, daftarBuku, batasMaxPinjaman, dendaHarian);
console.log(denda);
