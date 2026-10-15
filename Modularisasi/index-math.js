import math from "./math.js";

//Menggunakan dot notation (.)
console.log(math().tambah(5, 3)); // Output: 8
//Menggunakan square bracket ([])
console.log(math()['kurang'](10, 4)); // Output: 6
//Menggunakan object destructuring
const { kali, bagi } = math();
console.log(kali(5, 3)); // Output: 15
console.log(bagi(10, 2)); // Output: 5 