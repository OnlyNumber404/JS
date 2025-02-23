// if else statement

const gajian = false;
console.log('Berjalan-jalan di mal');
if (gajian){
    console.log('Makan di resrtorant mal');
}

console.log('pulang ke rumah');


const score = 91;

if (score > 90){
    console.log('Selamat, Anda mendapatkan nilai A!')
} else if (score > 80){
    console.log('Selamat, Anda lulus ujian!');
} else{
    console.log('Maaf anda belum lulus ujian');
}

//ternary operator
/**
 * Ternary operator membutuhkan tiga operan dengan urutan seperti berikut:
 * Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
 * Ekspresi yang dieksekusi jika kondisinya benar.
 * Ekspresi yang dieksekusi jika kondisi salah.
 */


//example
const price = 100000;
const isMember = false;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount*price}`);



//Switch statment

const fruit = 'nigga';

switch (fruit){
    case 'banana':
        console.log('I am a banana.');
        break;
    case 'apple':
        console.log('I am an apple.');
        break;
    case 'duren':
        console.log('I am a duren');
        break;
}