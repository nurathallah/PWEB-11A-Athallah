const siswa = {
    nama: "Ahmad",
    kelas: "11A",
    nilai: [75, 80, 65, 90, 70]
};

function prosesNilai(siswa) {

    // 1. Tampilkan Identitas
    console.log("===== HASIL PENILAIAN =====");
    console.log("");
    console.log("Nama       :", siswa.nama);
    console.log("Kelas      :", siswa.kelas);
    console.log("");

    // 2. Update Nilai berdasarkan index
    siswa.nilai[2] = 70; // UTS
    siswa.nilai[4] = 85; // Project

    // 3. Hitung Total Nilai tanpa looping
    const total =
        siswa.nilai[0] +
        siswa.nilai[1] +
        siswa.nilai[2] +
        siswa.nilai[3] +
        siswa.nilai[4];

    // 4. Hitung Rata-Rata
    const rataRata = total / siswa.nilai.length;

    // 5. Tentukan Predikat
    let predikat;

    if (rataRata >= 90) {
        predikat = "A";
    } else if (rataRata >= 80) {
        predikat = "B";
    } else if (rataRata >= 70) {
        predikat = "C";
    } else if (rataRata >= 60) {
        predikat = "D";
    } else {
        predikat = "E";
    }

    // 6. Tentukan Status
    let status;

    if (
        rataRata >= 75 &&
        siswa.nilai[2] >= 60 &&
        siswa.nilai[3] >= 60
    ) {
        status = "LULUS";
    } else {
        status = "TIDAK LULUS";
    }

    // 7. Tentukan Keterangan
    let keterangan;

    if (predikat === "A") {
        keterangan = "Sangat Baik";
    } else if (predikat === "B") {
        keterangan = "Baik";
    } else if (predikat === "C") {
        keterangan = "Cukup";
    } else {
        keterangan = "Perlu Perbaikan";
    }

    // 8. Tampilkan Hasil Akhir
    console.log("Tugas      :", siswa.nilai[0]);
    console.log("Quiz       :", siswa.nilai[1]);
    console.log("UTS        :", siswa.nilai[2]);
    console.log("UAS        :", siswa.nilai[3]);
    console.log("Project    :", siswa.nilai[4]);
    console.log("");

    console.log("Total      :", total);
    console.log("Rata-rata  :", rataRata);
    console.log("Predikat   :", predikat);
    console.log("Status     :", status);
    console.log("Keterangan :", keterangan);
}

// Jalankan function
prosesNilai(siswa);