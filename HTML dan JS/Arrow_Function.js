//Function expression benar" bisa mengubah cara kita membuat function.
//Function biasa
function doubleThree(number){
    return number * 3 * 2;
}

function doubleFour(number){
    return function(x){
        return number * x * 4;
    }
}
//First class citizen = function yang dipertahankan layaknya sebuah nilai.
const functionBiasa = doubleFour(2);
const functionBiasaLanjutan = functionBiasa(2);



// const functionBiasa = doubleThree();
console.info("Function Biasa");
console.log(doubleFour(2));
console.log(functionBiasa(2));


//expression function
const sayZubair = function (){
    return "Hello Zubair";
};

//Coba hoisting
//Privillage hoisting hanya milik 
// console.log(sayMaul("Maulana"));


//Function diganti dengan =>
//sayMaul adalah intifier
//Parameter dan lainnya sama

//arrow function
const sayMaul = (nama) => {
    return "Hallo " + nama;
};
//Sintax lebih singkat
//Syaratnya misalkan parameternya cuman satu
const sayMaulDua = nama => "Hallo " + nama;

//Coba panggilan biasa 
console.log(sayMaul("Maulana"));
console.log(sayMaulDua("Ghazali"));

//Challange: Buat satu arrow function bernama hitungNilai dengan 3 parameter yaitu (nama, nilaiUjian, nilaiTugas).
//ketentuan sebagai berikut:
//1. Nilai tugas memiliki bobot 40%
//2. Nilai ujian memilki bobot 60%
//3. Hitung dulu nilai akhirnya menggunakan operasi Aritmatika
//Kondisi => jika nilai akhir >= dari 75, maka return tertulis "Selamat anda Lulus dengan nilai akhir".
//jika nilai akhirnya <= 75, maka returnya "Mohon maaf anda tidak lulus dengan nilai Akhir".


const hitungNilai = (nama, nilaiTugas, nilaiUjian,) => {
    const nilaiAkhir = (nilaiTugas * 0.04) + (nilaiUjian * 0.06);

    if (nilaiAkhir >= 75){
        return `Selamat ${nama} lulus dengan  ${nilaiAkhir}`;
    } else if (nilaiAkhir < 75){
        return `Mohon maaf ${nama} tidak lulus dengan  ${nilaiAkhir}`;
    }
}
console.log(hitungNilai("Athallah", 90, 90));

//Ternary Operator
// return nilaiAkhir >= 75 
// ? console.log(`Selamat ${nama} Lulus dengan nilai ${nilaiAkhir}`)
// : console.log(
//     `Mohon maaf ${nama} Tidak lulus dengan nilai ${nilaiAkhir}`
// );

