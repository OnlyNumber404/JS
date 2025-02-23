//error handling

//Sebaik apa pun kita menulis program, suatu saat akan terjadi error. Error yang terjadi bisa berasal dari expected error (error yang terduga) dan unexpected error (error yang tidak terduga). 

//throwing error

//sintaks = throw<object eror>

//example
const error = new Error('Terjadi error');
console.error(error)

const price = 100;
const paid = 80;


if(paid < price){
    throw new Error('Pembayaran Kurang');
}

//catching error

//try-catch

//example
//contoh tanpa eror
try{
    console.log('Memulai program');
    console.log('Mengakhiri program');
} catch (error){
    console.log('Karena tidak ada eror, blok ini akan diabaikan');
}
// dengan error
try{
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
} catch (error){
    console.log('Karena ada eror, blok ini akan dieksekusi');
}

//finally
// blokc yang ada dalam finally akan selalu di eksekusi baik ada eror atau tidak
//example
try {
    console.log('Ini try block');
} catch (err) {
    console.log('Ini catch block');
} finally {
    console.log('Ini finally block');
}


