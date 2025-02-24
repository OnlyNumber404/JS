//function coffe

export function makecoffe(callback){
    //note: 1000 mili/second = 1 second
    const estimasi = 5000;

    const inSecond = Math.ceil(estimasi/1000);
    console.log('Mohon menunggu. Pramusaji sedang membuat kopi anda')

    setTimeout(()=>{
        //do some task to make a coffe....
        console.log('Pramusaji selesai membuat kopi.')
        //+ callback 
        //Callback adalah sebuah function yang dijadikan sebagai parameter bagi function yang lain.
        callback();
    },estimasi);
}

export function sendCoffe(callback){
    const estimasi = 2000;
    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(()=>{
        //do something
        console.log('Pramusaji sudah sampai ke meja');
        callback()
    },estimasi);
}