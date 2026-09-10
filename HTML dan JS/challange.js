//SISTEM PENENTUAN GAJI KARYAWAN
//WAJIB PAKAI ARRAOW FUNCTION
//Buat 1 function dengan nama hitungGaj yang memiliki 3 parameter (nama, gajiPokok, jumlahJamLembur)
//Ketentuan => :
//1. Setiap jam lembur perjam mendapatkan tambahan Rp.25.000
//2. Hitung total uang lembur(jumlahJamLembur * Rp.25.000)
//3. Hitung gaji pokok sebelum mendapatkan bonus (gaji pokok + uangLembur)
//4. Karyawan mendapatkan bonus berdasarkan gaji sebelum bonus dengan ketentuan: Jika gaji biasanya itu >= Rp.5.000.000 -> maka dia dapat bonus 10%, 
//Jika gajinya >= Rp.3.000.000 -> 5%,
//jika <= Rp.3.000.000 -> Tidak mendapatkan bonus.
//5. Hitunggaji akhir (gajiSebelumBonus + bonus)
//6. Gunakan ternary operator untuk menentukan status: kalau misalkan gaji akhir >= 5.000.000 maka bilang "Gaji Lumayan Tinggi",
//gaji akhir selain itu maka bilang "Gaji (nama) standar"
//Return value functionnya harus string
//contoh output yang diharapkan: "(nama) mendapatkan gaji (totalGaji) dengan status Gaji sesuai dengan (status)"

const hitungGaji = (nama, gajiPokok, jumlahJamLembur) => {
    const gajiSetiapJamLembur = 25000;
    const totalUangLembur = gajiSetiapJamLembur * jumlahJamLembur;
    const gajiPokokSebelumBonus = gajiPokok + totalUangLembur;

    let bonus = 0;
    if (gajiPokokSebelumBonus >= 5000000){``
        Bonus = gajiPokokSebelumBonus * 0.1;
    } else if (gajiPokokSebelumBonus >=3000000){``
        Bonus = gajiPokokSebelumBonus * 0.05;
    } else {``
        Bonus = 0;
    }

const gajiAkhir = gajiPokokSebelumBonus + totalUangLembur;
const status = gajiAkhir >= 5000000
? `gaji ${nama} lumayan tinggi`
:`gaji ${nama} standar`;

return `${nama} mendapatkan gaji ${gajiAkhir} dengan status Gaji sesuai dengan ${status}`;
}   
console.log(hitungGaji("Athallah", 9, 9) )
