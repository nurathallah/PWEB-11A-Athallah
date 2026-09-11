// Buat satu variable baru, dengan nama dataSuhu, elemen 1 sampai 2 adalah number
// kemudian elemen ke 3 dan 4 adalah function
// elemen 3 adalah function yang konversi elemen 1 dari celcius ke fahrenheit
// elemen ke 4 adalah function yang konversi elemen 2 dari fahrenheit ke celcius

const dataSuhu = [
  30, // elemen 1
  86, // elemen 2
  (celcius) => (celcius * 9) / 5 + 32, // elemen 3
  (fahrenheit) => ((fahrenheit - 32) * 5) / 9, // elemen 4
];
const [celcius, fahrenheit, celciusToFahrenheit, fahrenheitToCelcius] = dataSuhu;

console.log(`Konversi ${celcius}°C ke Fahrenheit adalah ${celciusToFahrenheit(celcius)}°F`);
console.log(`Konversi ${fahrenheit}°F ke Celcius adalah ${fahrenheitToCelcius(fahrenheit)}°C`);