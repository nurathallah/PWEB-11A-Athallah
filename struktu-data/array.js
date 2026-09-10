//Array adalah struktur data spesial yang dapat menyimpan kumpulan data yang terurut.
//Letak perbedaan array dengan object adalah data yang disimpan didalam array terurut, sedangkan di object tidak terurut.

//Cara mendaklarasikan array pada javascript itu ada 3 cara, yaitu:

//1. Menggunakan object constuctor Array()
const arrayConstuctor = new Array(1, 2, 3, 4);
const arrayKosong = new Array();
console.info("MENGGUNAKAN OBJECT CONSTUCTOR ARRAY()");
console.log(arrayConstuctor);
console.log(arrayKosong);

//2. Menggunakan sintaks Array.from()
const splitBuah = Array.from("PISANG");// Membuat array baru.
const splitNama = Array.from("Atha");
console.info("MENGGUNAKAN SINTAKS ARRAY.FROM()");
console.log(splitNama);
console.log(splitBuah);

//Case andaikan ingin membuat array baru dengan value yang sama.
const arrayLama = new Array('satu, dua, tiga, empat');
const arrayBaru = Array.from(arrayLama);
const isArrayLamaIdentikArrayBaru = arrayLama === arrayBaru;

console.info("INGIN MEMBUAT ARRAY BARU DENGAN VALUE YANG SAMA");
console.log(isArrayLamaIdentikArrayBaru ? "Ya sama bro" : "Sory bro beda");
console.log(arrayBaru);
console.log(arrayLama);


//3. Menggunakan Array literal []
const arrayLiteral = ['Ayam', 'Bebek', 10, true, { ayam: "Hidup", cicak:"mati"},//Object
["Cicak", "Bebek"],//Array.
];//Per elemen bisa berbeda tipe datanya.
//Untuk mengaksesnya kita bisa gunakan tanda [] dengan nomor indeksnya.
//Indeks dimulai dari 0.

const objectArrayLiteral = arrayLiteral[4];
const { ayam } = objectArrayLiteral;//Mengakses object yang ada didalam arrayLiteral dengan destucturi.
console.log(objectArrayLiteral);
console.log(ayam);//hidup.
console.log(ayam === "hidup" ? "Yes Bener Bro" : "Salah LOh Ya!");

const arrayArrayLiteral = arrayLiteral[5];// Mengakses array yang ada didalam arrayLiteral.
console.log(arrayArrayLiteral[0]);//Cicak.
console.log(arrayArrayLiteral[1]);//Bebek.

const booleanArrayLiteral = arrayLiteral[3];
console.log(booleanArrayLiteral);

const stringArrayLiteral = arrayLiteral[0];
console.log(stringArrayLiteral);

console.log(arrayLiteral);
arrayLiteral[4]['ayam'] = "mati";
console.log(arrayLiteral);




