/**
 * Operator dibagi menjadi 3 jenis:
 * 1. Unary
 * - Membutuhkan 1 bilangan
 * 2. Binary
 * - Membutuhkan 2 bilangan
 * 3. Ternary
 * - Membutuhkan 3 bilangan
 */

//example

// let age = 25;

// //unary operator
// typeof age;

// //binary operator

// 5 + 4;
// 10 / 2;
// age = 30

// //Ternary operator (Conditional Operator)
// (age < 18) ? 'You are too young' : 'Welcome onboard';


//Assignment Operator

const name = 'Dicoding';
let location = 'Bandung';

location = 'Jakarta';

//Arithmetic Operator

/**
 * Modulus(%)
 * - Binary Operator yang mengembalikan sisa hasil bagi operan kanan dan operan kiri
 */
12 % 5;

/**
 * Increment(++)
 * unary operator yang di gunakan untuk menabhakan satu nilai terhadap operan yang diberikan, namun operan harus berupa variabel yang dapat diubah nilainnya
 */
let x = 3;
//Jika x adalah 3, x++ operasi mengembalikan 3. Setelah itu, mengubah x menjadi 4.
x++
console.log(x);

//Jika x adalah 3, ++x mengubah x menjadi 4 dan operasi mengembalikan 4.
++x
console.log(x);


/**
 * Decrement(-)
 * Sama dengan increment tetapi megurangi bilangan
 */

let z = 4;
//Jika x adalah 3, --x mengubah x menjadi 2 dan operasi mengembalikan 2.
--z;
console.log(z);
//Jika x adalah 3, x-- operasi mengembalikan 3. Setelah itu, mengubah x menjadi 2.
z--;
console.log(z);

/**
 * Eksponensial / pangkat
 * Binary Operator yang menghitung x(basis) dangan pangkat y(eksponen). Bentuk matemarika : x^y
 */

let w = 2;
const pangkat = w**3
console.log(pangkat);

/**
 * 6 + 5; // mengembalikan 11
 * 7 - 2; // mengembalikan 5
 * 8 * 5; // mengembalikan 40
 * 10 / 3; // mengembalikan 3.33
 * 10 % 2; // mengembalikan 0
 * 2  (10 + 2); // mengembalikan 24
 */

//Comparison Operator

// sama(==) --> Membandingkan dua operan, tanpa memperhatikan tipe data. Jika nilai kedua operan dianggap sama, operasi akan mengembalikan true, sebaliknya false.
// Tidak Sama (!=) --> Membandingkan dua operan, tanpa memperhatikan tipe data. Jika nilai kedua operan dianggap tidak sama, operasi akan mengembalikan true, sebaliknya false. 
// identik(===) --> Membandingkan dua operan beserta tipe datanya. Jika kedua operan identik, operasi akan mengembalikan true, sebaliknya false.
// Tidak Identik(!==) --> Membandingkan dua operan beserta tipe datanya. Jika kedua operan tidak identik, operasi akan mengembalikan true, sebaliknya false.
// lebih dari (>) --> Membandingkan dua operan, apakah operan pertama lebih dari operan kedua? Jika pernyataan benar, mengembalikan true, sebaliknya false.
// lebih dari atau sama dengan(>=) --> Membandingkan dua operan, apakah operan pertama lebih dari atau sama dengan operan kedua? Jika pernyataan benar, mengembalikan true, sebaliknya false.
// Kurang Dari (<) --> Membandingkan dua operan, apakah operan pertama kurang dari operan kedua? Jika pernyataan benar, mengembalikan true, sebaliknya false.
// Kurang dari atau sama dengan (<=) --> Membandingkan dua operan, apakah operan pertama kurang dari atau sama dengan operan kedua? Jika pernyataan benar, mengembalikan true, sebaliknya false.

//example

const a = 10;
const b = 12;
console.log(a<b);//output: true
console.log(a>b);//output: false


/**
 * Logical Operator
 * Fungsingnya untuk menetapkan logika dari dua nilai operan boolean.
 */

/**
 * AND (&&)
 * Binary operator yang menghasilkan nilai true apabila kedua operan bernilai true (atau truthy). Jika salah satu operan bernilai false (atau falsy), operasi akan mengembalikan false.
 */

/**
 * OR(||)
 * Binary operator yang menghasilkan nilai true apabila salah satu operan bernilai true (atau truthy). Jika kedua operan bernilai false (atau falsy), operasi akan mengembalikan false.
 */

/**
 * NOT(!)
 * Unary operator yang mengubah operan bernilai true menjadi false dan false menjadi true.
 */

//example

//AND

console.log(true&&true); // true
console.log(false&&true); // false
console.log(true&&false); // false
console.log(false&&false); // false
console.log((5 == 5) && (3 < 5));//true


//OR
console.log(true||true); // true
console.log(false||true); // true
console.log(true||false); // true
console.log(false||false); // false
console.log((5 == 5) || (3 > 5));//true

//NOT
console.log(!true); //false
console.log(!false); //true

//String Operator
// Operator string adalah operator yang digunakan untuk menggabungkan dua nilai string. Operator ini menggunakan simbol + dan termasuk dalam kategori binary operator.


const first = 'bekerja';
const second = 'sama';
const merged = first + second;
console.log(merged);//Output: bekerjasama