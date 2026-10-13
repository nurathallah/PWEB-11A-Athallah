//Apa itu funtion? => untuk menghindari hal-hal pekerjaan yang redundan atau repotitif (Berulang).
//Deklarasi function =>  nama function dengan kata lain disebut IDENTIFIER.

//Kelas XA sepakat pakai camel case disetiap function yang dibuat.

//{} curly braces => isi dari fungsi yang akan berjalan.
//() parentes => menyimpan parameter/arguments.
// return => untuk mengembalikkan atau memberikan output dari fungsinya.


function greetWorld(){
    console.log("Hello world");
    
}

function convertCelciusToFahrenheit(temperatur){
    const temperaturInFahrenheit = 9 / 5 * temperatur + 32;
    console.log("Hasik konversi Celcius Ke Fahrenheit adalah:" + temperaturInFahrenheit);
    
}

convertCelciusToFahrenheit(20);//contoh enggunakan ekspresi langsung = 68
convertCelciusToFahrenheit(10);//--hasilnya = 50

const temperatureInCelcius = 50;
convertCelciusToFahrenheit(temperatureInCelcius);// contoh menggunakan varibel di parameter = 122

console.log(convertCelciusToFahrenheit(30));

// salah satu kelebihan JavaScript => Hoisting yakni memungkinkan kita menulis kode panggilan sebelum kode pendeklarasian function.

duobleTwo(4); // 8
fullName("Ahmad", "Irsyad");
duobleTwo(); //2 * 2 = 4
fullName(); // undefined undefined
kaliTiga();
kaliTiga(3);

function duobleTwo (number = 2){
    console.log(number * 2);
    
}

//contoh tidak pakai default parameter, bingung untuk menentukan hasil dari parameter.
function kaliTiga(number) {
    if(number != NaN || number != undefined) {
        console.log( number * 3);
        
    }else {
        console.log("Not A Numbers");
        
    }
}

function fullName(namaPertama, namaKedua){
    console.log(namaPertama + " " + namaKedua);
    
}

// Argument adalah => nilai yg diberikan didalam parentes atau dalam tanda () saat pemanggilan function.
// Parameter => Menentukan nilai saat membuat function.