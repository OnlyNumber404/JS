/**
 * Istilah “async-await” terdiri dari dua keyword 
 * JavaScript, yaitu async dan await. 
 * Kita perlu menggunakan mereka berdua 
 * secara bersamaan dan tidak bisa mencederai 
 * salah satunya. Hal yang perlu dicatat adalah 
 * fitur ini hanya bisa dipakai jika menggunakan 
 * function.
 */





function promiseExecutor(resolve,reject){
    setTimeout(() => {
       resolve('You Did it!'); 
    }, 2000);
}

function doSomething(){
    return new Promise(promiseExecutor);
}


async function promiseWithAsyncAwait(){
    try{
        console.log('Start');

        const result = await doSomething();
        console.log(result);

        console.log('End')
    } catch (error){
        console.log(error.massage);
    }
}

promiseWithAsyncAwait();