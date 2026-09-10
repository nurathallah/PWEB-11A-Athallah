//Object adalah kumpulan pasangan key-value dan bukan merupakan tipe data yang bukan primitif.Objek dapat menyimpan berbagai tipe data, termasuk tipe data primitif dan tipe data non-primitif

//Tipe data primitif => yang memilki nilai tunggal dan tidak dapat diubah setelah dibuat.
//contoh tipe data primitf => adalah string, number, boolean, null, undefined, dan symbol.


//contoh object literal => {}
const objectLiteral = {};// didalam tanda kurung disebut dengan property, property terdiri dari key dan value
const products = {
    name:"Laptop", //name adalah key dan laptop adalah value
    price: 4500000, //price adalah key dan 4500000 adalah value
    category: "Electronics", //category adalah key dan Elecronics adalah value
    "stok": 10, //stok adalah key dan 10 adalah value
    "isAvailable": true, // isAvailable adalah key dan true adalah value
};

// Cara mengakses property pada object
//1. menggunakan dot notation (.)
console.info("1. MENGAKSES PROPERTY PADA OBJECT MENGGUNAKAN DOT NOTATION")
console.log(products.name);
console.log(products.isAvailable);
console.log(products.price);

//Kekurangan dari dot notation adalah nama key yang ingin di akses harus valid; tidak boleh mengandung spasi; tidak boleh mengandung angka; dan tidak boleh mengandung spesial karakter;

//2. Mengakses menggunakan square bracket
console.info("2. MENGAKSES PROPERTY PADA OBJECT MENGGUNAKAN SQUARE BRACKET")
const isProdukAvailable = products['isAvailable']; //Menyimpan property didalam variabel lain
const namaProduk = products['name'];
console.log(namaProduk);
console.log(isProdukAvailable);

//3. Mengakses menggunakan object destructuring
console.info("3. -MENGAKSES PROPERTY PADA OBJECT MENGGUNAKAN OBJECT DESTRUCTURING")
const kelas = {
    "totalMeja": 21,
    totalSiswa: 20,
    isClean: true
};

const {isClean, totalSiswa} = kelas;
console.log(isClean);
console.log(totalSiswa);

//Destructuring dalam java script merupakan sintaks yang dapat mengeluarkan nilai dari properti object kedalam satuan yang lebih kecil(variabel).


//Destructuring object yang key nya tidak ada akan menampilkan nilai undefined.
//Oleh karena itu, kita bisa memanfaatkan dafault value ketika destructuring object seperti berikut ini agar nilainya tidak undefined.=>
console.info(" -MENGAKSES PROPERTY PADA OBJECT MENGGUNAKAN OBJECT DESTRUCTURING YANG KEY-NYA TIDAK ADA")
const { isTvMerdeka} = kelas;
const { totalSiswaHasLaptop = 18 } = kelas;// kita kasih default value pada key yang tidak ada didalam properti object.

console.log(isTvMerdeka);
console.log(totalSiswaHasLaptop);

//Contoh lain
const user = {
    id: 26,
    email:'Athallah@gmail.com',
    name: 'Athallah',
    nickname: 'Atha',
    username: "athamosaja",
    password: 'atha123',
};

//sangat memudahkan untuk mengambil beberapa properti dari object sekaligus, tanpa harus menulisnya satu per satu.
const {name, nickname} = user;

console.log(user);


//4. Mengubah value properti pada object
const account = {
    username:'athamosaja',
    password:'secret',
    isActive: true,
    isBanned: false
};

account.isBanned = true;//Mengubah value properti isBanned menjadi true
console.info("4. MENGUBAH VALUE PROPERTI PADA OBJECT")
console.log(account.isBanned);





//Untuk menghapus properti pada object 
delete account.isBanned;
console.log(account);

//Menambahkan properti pada object
account.category = "Education";
console.info("MENAMBAHKAN PROPERTY PADA OBJECT");
console.log(account.category);//Education
console.log(account);//Menampilkan object account setelah ditambahkan property category

account['role'] = "Admin";
console.log(account.role);//Admin
console.log(account);//Menampilkan object account setelah ditambah property role.
delete account['role'];







