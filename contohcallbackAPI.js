//contoh dengan readFile

//readFile adalah modul yang bernama fs dan iniIni adalah salah satu built-in module (module bawaan) dari Node.js untuk membaca berkas-berkas dalam sistem operasi.
/**
 * Hal yang menjadi titik bahasan adalah 
 * method readFile memanfaatkan callback 
 * untuk menangani proses asinkron. 
 * Jika pembacaan berkas berhasil, kita dapat 
 * melihat isi dari sample.txt pada console.
 */

import {readFile} from 'fs';
readFile('./sample.txt',(error,data)=>{
    if (error){
        console.log(error);
        return;
    }

    const greeting = data.toString()
    .replace('%name%','Dicoding')
    .replace('%your_name%','Denny');

console.log(greeting);
});
