/**
 * Promise bekerja dengan tiga buah state atau kondisi.
 * Pending: kondisi awal sebuah proses berjalan. Belum ada hasil yang diharapkan.
 * Fulfilled: kondisi keberhasilan proses dan akan mengembalikan nilai positif. Misalnya mengembalikan isi berkas jika pembacaannya sukses.
 * Rejected: operasi terjadi kegagalan dan membawa alasan atau data mengenai masalah ini. Biasanya, data kegagalan berupa instance dari class Error.
 */


//example 2 dengan dara callback namun menggunakan promise
function promiseExecutor(resolve,reject){
    setTimeout(() => {
        console.log('DO Something before promise has compleated')

        //penentuan hasil dari promise asinkron
        const number = Math.random();

        //Nilai Fulltime dari Promise
        if (number > 0.5){
            resolve('You did it!');
        }

        //Niali dari rejection dari promise

        else{
            reject(new Error('Sorry, something went wrong'));
        }
    }, 2000);
}


function doSomething(){
    return new Promise(promiseExecutor);
}

function onFulfilled(doSomething){
    //Do your jobs when 'Fulfilled' happens..
    console.log(doSomething);
}


function onrejected(doSomethingError){
    //Do your jobs when 'rejected' happens..
    console.log(doSomethingError);
}

doSomething().then(onFulfilled,onrejected);
