//variabel dan penamaan

/** aturan penamaan variabel dalam js 
 * 1. Tidak boleh memberikan nama yang sama dalam cakupan yang sama
 * - nama variabel haruslah unik dalam cakupannya tidak bisa menggunakan nama yang sama dengan variabel yang sudah terdefinisi sebelumnnya
 * 2. Nama Variabel hanya terdiri dari karakter tertentu
 * - nama variabel tidak boleh mengandung karakter selain huruf, angka,garis bawah(underscore) dan tanda dolar
 * 3. Nama Variabel tidak boleh di awali dengan angka
 * - walau angka boleh di gunakan dalam penamaan variabel, tetapi jika nama variabel diawali dengan angka, nama tersebut akan di anggap salah
*/

//const artinya konstanta dimana data tidak bisa di ubah
const age = 10;
const nama = "Denny";
console.log(`Nama Ku ${nama}, aku berumur ${age} tahun`);
const number1 = 4;
const number2 = 5;
const hasil = number1 + number2
console.log(hasil);

//let artinya merupakan variabel yang bisa di ubah ubah
const id = 123;
let username = 'Dicoding';

console.log(id);
console.log(username);

// contoh penerapan let

let username1 = 'Dava';

console.log(`Sebelum di ubah ${username1}`);

username1 = 'Denny';

console.log(`Setelah di ubah ${username1}`);

//tipe data dalam JS

//string

const currentYear = new Date().getFullYear();
// tanda `` disebut backticks atau di sebut juga sebagai template literlas
const text = `Sekarang adalah tahun ${currentYear}.`;
console.log(text)

//number
//selaian angka normal, tipe data number juga memiliki nilai spesial, yaitu infinity dan NaN.

//contoh infinity

const result = 50/0;
console.log(`Ini adalah contoh infinity ${result}`);

// contoh NaN atau Not-a-Number
const nilai = Number('Dicoding');
console.log(`ini adalah contoh NaN ${nilai}`);


//bool atau boolean

const completed = true;
const passed = false;

console.log(completed,passed);//output: true false

const isGreater = 5>2;
console.log(isGreater); //output: true (5 lebih besar dari 2)

//null
//sebuah nilai yang tidak ada

let message = null;
console.log(message);

//undefined
//sebuah nilai implisit ketika kita mendeklarasikan variabel tanpa menginisialisasi dengan nilai apa pun

let surat;
console.log(surat); // output undefined