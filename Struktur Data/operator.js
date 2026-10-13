//3 Jenis Operator:
// Unary operator => Operator yang memiliki satu operan

typeof "Dicoding";

//Binary Operator => Operator yang memiliki dua operan
4+5
10/2
5*4

//Ternary Operator => Operator yang memiliki 3 operan
let ageAhamd =34;
let maxAge = 18;
//cara menggunakan percabangan 
if(ageAhamd <= maxAge){
    console.log("Maaf anda belum layak nonton ini");
} else{
    console.log("Silahkan nonton sepuasnya!!");
}

//Menggunakan Ternary operator
// (inputAge <= max Age) ? "Maaf anda belum layak nonton" : "Selamat Menonton sepuasnya";

//Assigment operator '=': menginisiasi nilai selain menginisiasi nilai dia juga untuk memperbaharui nilai
console.info('operator assignment');
var variabel = 90;
console.log(variabel);//90
variabel = 40;
console.log(variabel)//40

//Operator aritmatika 
//Increment (++)
var x = 50;
console.info("Operator Aritmatika Increment");//Untuk menambah 1 nilai dari variabel
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);

//Increment(--)
var z = 100;
console.info("Operator Artimatika: Decrement");
console.log(z--);//100
console.log(z--);//99

console.log(--z);//97
console.log(--z);//96

//exponensial (**)
var c = 4;
console.info("Operator Aritmetika: Exponensial(Pangkat)");
console.log(c ** 2);//16
console.log(c ** c);

//Comparison operator/operasi perbandingan => Membandingkan 2 nilai dan mengembalikan 2 nilai (True dan False)
console.info("Comparison Operator");
//Operator Sama(==) => Untuk membandingkan ke 2 operator, apakah nilainya sama tanpa membandingkan tipe datanya.
console.info('Operator sama(==)');
let a = 10;
let b = '10';
let isAEqualB = a == b;// true or false
console.log(isAEqualB);

//Tidak sama (!=) =>Untuk membandingkan ke 2 operand apakah nilainya sama dan juga tipe datanya.
console.info("Operator Tidak sama(!=)")
let isANotEqualB = a != b;
console.log(isANotEqualB);// false or true

// RUMUS OPERASI PERBANDINGAN
console.info("RUMUS OPERASI PERBANDINGAN");
console.info('SAMA(==)');
console.log(false == true);
console.log(true == true);

console.info('TIDAK SAMA (!=)');
console.log(false != false);
console.log(true != false);





//Identik (===) => untuk membandingkan ke 2 operan apakah nilainya sama dan juga tipe datanya.
console.info("Operator Identik(===)");
let d = 10;
let e = "10";
let isDequalE = d === e;
console.log(isDequalE);





