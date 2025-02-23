//konversi eksplisit

//mengubah ke string


/**
 * untuk mengubah ke string memiliki 2 cara
 * 1. dengan menggunakan fungsi String() --> harus memasukan nilai yang mau di ubah
 * 2. dengan menggunakan method .toString() --> hanya beberapa tipe data contohnya boolean
 */

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); //output: "123"
console.log(strBoolean);// output: "true"


//mengubah ke number


/**
 * selain dengan fungsi Number() ada juga cara spesifik seperti:
 * - parseInt() --> digunakan untuk mengonversi string menjadi bilangan bulat(integer)
 * - parseFloat() --> digunakan untuk menonversi string menjadi angka desimal(floating-point number)
 */
const strAngka = '123';
const strFloat = '3.14';
const bool = true;


const numFromString = Number(strAngka);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(bool);


console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1


let cm = '20cm';
let px = '64px';

const inttFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(inttFromCM); //output: 20
console.log(intFromPX); //output: 64

cm = '20.55cm';
px = '64.23px';

const floatFromCM = parseFloat(cm);
const floatFromPX = parseFloat(px);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

// mengubah ke boolean

const hurf = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(hurf);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); //output: true
console.log(boolFromString); //output: true
console.log(boolFromNull); //output: false


//Konversi Implisit

const age = 20;
const message = 'Umurku: ' + age;

console.log(message); //output Umurku: 20

let result = strNumber * 2;
console.log(result); //output: 246

result = 1 + bool;
console.log(result); //output: 2