//RETURN VALUE
function jumlah(a, b){
    const result = a + b;
    return result;
    // return untuk mengembalikan hasi dari function.
}



function sapaAkuBang(){
    return "Halo bang";// return sudah dieksekusi sehingga kode dibawahnya tidak akan pernah  di eksekusi
    console.log("Halo juga bang");// Tidak pernah di eksekusi
    
}


function luasPersegi(sisi) {
    const result = sisi * sisi;
    return result;

}

function sapaByzona(waktu){
    let result = "";
    if (waktu == "pagi"){
        result = "Selamat pagi"
    }else if (waktu === "siang"){
        result = "Selamat siang"
    }else if (waktu === "sore"){
        result = "selamat sore"
    }else if (waktu === "Malam"){
        result = "Selamat malam"
    }else {
        result = "Waktu tidak valid"
    }
    return result;
}

function sapaByZonaRingkas(waktu){
    return "Selamat " +  waktu;   
    // return 'Selamat ${waktu}';

}



console.info("ZONA DENGAN KONDISI");
console.log(sapaByzona("Malam"));
console.log(sapaByzona("Tengah Malam"));


console.info("ZONA TANPA KONDISI");
console.log(sapaByZonaRingkas("Malam"));
console.log(sapaByZonaRingkas("Tengah Malam"));

const isTwoFunctionSame = sapaByzona("Malam") === sapaByZonaRingkas("Malam");
const isSentenceSame = "Selamat Malam" === "Selamat Malam";
console.info("APAKAH KEDUA FUNGSI SAMA");
console.log(isTwoFunctionSame);
console.log(isSentenceSame);





console.log("2 + 8: " , jumlah(2, 8));
luasPersegi(19);
console.log(luasPersegi(19));
