import cekStatusClass from "./Kelas.mjs";
import helloWorld from "./Kelas.mjs";

cekStatusClass('10A');
cekStatusClass('10C');
helloWorld();

//Named import untuk variabel
import { name, age, isMarried } from "./importUniversal.mjs";
//Named import untuk variabel dengan alias
import * as Variabel from "./importUniversal.mjs";

//Panggil secara langsung
console.log(name, age, isMarried);

//Panggil secara alias
console.log(Variabel.name);
console.log(Variabel.age);
console.log(Variabel.isMarried);