/**
 * Spread, memiliki arti sesuai dengan namanya, 
 * yaitu menyebarkan. Spread operator digunakan 
 * untuk menyebarkan nilai yang ada pada object 
 * dan array. Spread operator yang ditandai 
 * dengan sintaks tiga titik  (...) adalah fitur 
 * yang menarik dan membantu dalam pengelolaan 
 * object dan array. Dengan menggunakan spread 
 * operator, nilai object dan array dapat 
 * di-iterable menjadi beberapa elemen
 */

//dapat di gunakan di objek dan array

const obj1 = {
    nama: 'orang',
    alamat: 'Kendung',
    nohp: '081+++'
};

const obj2 = {
    lastname: 'Budak',
    rumah: 1,
    anak: 3,
};

const newObj = {...obj1,...obj2};
console.log(newObj);


const originalobj = {
    hidup: 'mati',
    tujuh: 'tujuh'
};

const duplicateobj = {...originalobj};
console.log(duplicateobj);