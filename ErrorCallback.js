export function makecoffe(name,callback){
    const estimasi = 5000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimasi/1000);
    console.log(`Mohon menunggu selama ${inSecond} detik.`)

    setTimeout(()=>{
        //penentuan hasil dari proses asinkron
        const number = Math.random();
        if (number > 0.3){
            isSuccess = true;
        }
        if(!isSuccess){
            callback(new Error('Gagal membuat Kopi.'),null);
            return;
        }

        console.log('Prmausaji selesai membuat kopi.');
        callback(null,name);
    },estimasi);
}

export function secondCoffe(name,callback){
    const estimasi = 2000;
    let isSuccess = false;
    
    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() => {
        //penentuan hasil dari proses asinkron
        const number = Math.random();
        if (number > 0.3){
            isSuccess = true;
        }
        if (!isSuccess){
            callback(new Error('Gagal mengantarkan kopi'),null);
            return;
        }

        console.log('Pramusaji sudah sampai ke meja.');
        callback(null,name);
    }, estimasi);
}