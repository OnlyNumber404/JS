//menstruktur data dengan set

/**
 * Terakhir, struktur data yang kita 
 * bahas adalah set. Set adalah struktur data 
 * yang spesial dibandingkan dengan map, array, 
 * dan object. Kenapa dikatakan spesial?

 * Jawabannya adalah karena set tidak 
 * memiliki key dan indeks ketika menyimpan data. 
 * Selain itu, data yang disimpan di dalam set 
 * akan bernilai unik artinya tidak akan ada data 
 * yang duplikat. Spesial, bukan?
 */


const set = new Set([1,2,3]);
console.log(set);

//menyimpan nilai di set
set.add(5);
set.add(4);

console.log(set);


//cara akses nilai set dengan for loop
for (const number of set){
    console.log(number);
}

//menghapus nilai di set

set.delete(1);
console.log(set);