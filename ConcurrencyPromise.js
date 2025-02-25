/**
 *  Promise memiliki beberapa static method, 
 * seperti Promise.all dan Promise.allSettled. 
 * Keduanya memiliki kemiripan. Hal yang 
 * membedakan adalah Promise.all akan memasuki 
 * kondisi rejected jika salah satu Promise saja 
 * terjadi kegagalan. Namun, ini tidak berlaku 
 * dengan Promise.allSettled.
 */

//example 1 dengan output Failed UPS!
const promise1 = new Promise((resolve)=> setTimeout(()=> resolve(1),100));
const promise2 = new Promise((resolve,reject)=> setTimeout(()=> reject(new Error('UPS!'))));
const promise3 = new Promise((resolve)=> setTimeout(()=> resolve(3),3000));


//contoh dengan Promise.all
Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log('Success');
    console.log(values);
})
.catch((error)=>{
    console.log('Failed');
    console.log(error.message);
})


//contoh dengan Promise.allSettled --> Semua Promise akan dikembalikan meskipun ada yang gagal.

Promise.allSettled([promise1,promise2,promise3])
.then((values)=>{
    console.log('Success');
    console.log(values);
})
.catch((error)=>{
    console.log('Failed');
    console.log(error.message);
})

//example 2 dengan output Success [1,2,3] mengapa arry karena hasil dari Promise.all selalu berbentuk array
// const promise1 = new Promise((resolve)=> setTimeout(()=> resolve(1),100));
// const promise2 = new Promise((resolve,reject)=> setTimeout(()=> reject(new Error('UPS!'))));
// const promise3 = new Promise((resolve)=> setTimeout(()=> resolve(3),3000));

// Promise.all([promise1,promise2,promise3])
// .then((values)=>{
//     console.log('Success');
//     console.log(values);
// })
// .catch((error)=>{
//     console.log('Failed');
//     console.log(error.message);
// })

//Note : Hal yang perlu kita tahu adalah tipe parameter static method, yaitu array berisi sejumlah Promise. Oleh karena itu, static method Promise dapat menjalankan banyak Promise.