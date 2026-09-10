//konversi Implisit=konversi otomatis dari javascript.//
const age = 40 ;
const message = "Anda berumur:" + age;
const jumlah = "40" + 40;


console.log(message);
console.log(age);
console.log(jumlah);
console.log(Number(jumlah) + age);




const boolean = true;
const nomor = 10;
const result = boolean + nomor;


console.info('konversi implisit Boolean dan Number')
console.log(result);



const pertanyaan = jumlah + boolean;//semua dikonversi menjadi string hasilnya yaitu 4040true
console.info('konversi implisit boolean dan string')
console.log(pertanyaan);//4040true

const gabungan = jumlah + boolean + nomor;//4040true10 //semua dikonversi menjadi string
console.log(gabungan);
