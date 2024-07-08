function calculateDenda(tanggalKembali, tanggalPinjam, daftarBuku, tanggalBataskembali, dendaperHari) {
    const perHari = 24 * 60 * 60 * 1000; // Satu hari dalam milidetik

    // Menghitung selisih hari antara tanggal kembali dan tanggal pinjam
    const selisihHari = Math.round(Math.abs((tanggalKembali - tanggalPinjam) / perHari));

    // Inisialisasi array untuk menyimpan denda per buku
    const dendaPerBuku = [];

    // Iterasi melalui daftar buku yang dipinjam
    for (const buku of daftarBuku) {
        let denda = 0;

        // Jika buku dikembalikan setelah batas maksimum peminjaman
        if (selisihHari > tanggalBataskembali) {
            // Menghitung denda harian
            denda = (selisihHari - tanggalBataskembali) * dendaperHari;
        }

        // Menambahkan denda ke array dendaPerBuku
        dendaPerBuku.push(denda);
    }

    return dendaPerBuku;
}

// Contoh penggunaan:
const tanggalKembali = new Date('2024-06-22'); // Tanggal buku dikembalikan
const tanggalPinjam = new Date('2024-06-10'); // Tanggal buku dipinjam
const daftarBuku = ['Buku 1', 'Buku 2', 'Buku 3','Buku 4']; // Daftar buku yang dipinjam
const tanggalBataskembali = 7; // Batas maksimum peminjaman (dalam hari)
const dendaperHari = 1000; // Denda harian (Rp 1.000 per hari)

const dendaPerBuku = calculateDenda(tanggalKembali, tanggalPinjam, daftarBuku, tanggalBataskembali, dendaHarian);
console.log('Denda per buku:', dendaPerBuku);