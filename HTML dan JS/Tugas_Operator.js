//Assignmment operator:menginisiasi nilai dan memperbarui nilai
console.info("Assignment operator");
const variabel = 70;
console.log(variabel);//70
Variabel = 60;
console.log(Variabel);//60

//aritmetic operator:operator yg digunakan untuk melakukan operasi matematika
 //Operator Jumlah(+)
var a = 25;
var b = 10;
var jumlah = a + b;
console.info("Operator Aritmetika");
console.log(jumlah);//45

//Operator Kurang(-)
var kurang = a - b;
console.log(kurang);

//Operator Kali(*)
var kali = a * b;
console.log(kali);

//Operator Bagi(/)
var bagi = a / b;
console.log(bagi);

//Operator Modulus(%)
var a = 25;
var b = 4;
var modulus = a % b;
console.log(modulus);

//Comparison Operator / Operasi perbandingan
//Operator Lebih Besar Dari(>)
var A = 50;
var B = 44;
console.info("Comparison Operator");
console.log(A > B);
//Operator Lebih Kecil Dari(<)
var A = 5;
var B = 15;
console.log(A < B);
//Operator Lebih Besar Sama Dengan(>=)
var A = 10;
var B = 10;
console.log(A >= B);
//Operator Lebih Kecil Sama Dengan(<=)
var A = 10;
var B = 20;
console.log(A <= B);
//Operator Identik(===)
var A = 10;
var B = "10";
console.log(A === B);
//Operator Tidak Identik(!==)
var A = 10;
var B = "10";
console.log(A !== B);


//Operator Logika: operator yg digunakan untuk menggabungkan dua atau lebih kondisi

//Operator AND(&&)
var A = 10;
var B = 20;
console.info("Logical Operator");
console.log(A > 5 && B < 30);

//Operator OR()
var A = 10;
var B = 20;
console.log(A > 5 || B < 30);

//Operator NOT(!)
var A = 10;
console.log(!(A > 5));

//Operator String: operator yg digunakan untuk menggabungkan dua atau lebih string
var A = "Nama saya";
var B = "Ardiansyah";
var C = A + B;
console.info("Operator String");
console.log(C);

//Increment and Decrement Operator: operator yg digunakan untuk mengingatkan atau mengurangi nilai variabel

//Operator Increment(++)
var C = 10;
console.info("Operator  aritmetika: Increment");//untuk menambah 1 nilai dari variabel / ekspresi
console.log(C--);
console.log(C--);


//Operator Decrement(--)
var A = 100;
console.info("Operator  aritmetika: Decrement");//untuk mengurangi 1 nilai dari variabel
console.log(A--);
console.log(A--);