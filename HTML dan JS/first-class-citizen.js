//first class citizen adalah function yang dapat ditulis dalam variabel, dapat di pass sebagai argumen, dan dapat di return dari funciton lain
//first class citizen => function bisa diletakkan di dalam parameter
//Benefit first class citizen => 1. Function bisa diletakkan didalam parameter, 2. Function layaknya variabel, 3. 
//first class citizen => function dapat mereturn function

const umurMultiply = function(umur) {
    return umur * 2;
}// function expression adalah function yang disimpan dalam sebuah variabel

function calculate(operator, umur){
    return operator(umur);// eksekusi sebuah function yang di pass sebagai argumen 
}

const result = calculate(umurMultiply, 20);// pas function sebagai argumen
console.log(result);//40

console.log(calculate(umurMultiply), 20);//error karena calculate tidak memiliki return value, sehingga tidak bisa di console.log

function calculateMultiply(funct, numA, numB){
    return funct(numA, numB);
}

console.info("Contoh Lain:")
function sapa(){
    return"hello world"
}

function sapaAlghazali(fungsi, nama){
    return fungsi() + nama;
}

console.log(sapaAlghazali(sapa, "Ghazali"));


function multiplier(x){
    return function (num){
        return x * num;
    }
}

const double = multiplier(2);
const triple = multiplier(3);
const resultDouble = double(10);


//PR, cari tahu: apakah bisa function yang mereturn function function dengan param yang berbeda ditulis didalam satu function expression atau variabel


console.log(double(10));//20
console.log(triple(10));//30

