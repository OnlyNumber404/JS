//menstruktur data dengan map
/**
 * Map adalah tipe data yang mirip 
 * dengan object yaitu menyimpan data 
 * dengan key-value. Kalau sama seperti object, 
 * lalu apa fungsinya map? Map berfungsi untuk 
 * menutupi kekurangan dari object. 
 * Map dapat menggunakan key dengan tipe data 
 * apa pun, tidak seperti object yang hanya 
 * menerima string. Jadi perbedaan mendasarnya 
 * terletak pada key yang digunakan.
 */

//membuat map 

const map = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans',250]
]);

console.log(map);

//menyimpan nilai di map

map.set('t-shirt',450);
console.log(map);

//mengakses nilai map

console.log(map.get('shoes'));
map.delete('jeans');
console.log(map);