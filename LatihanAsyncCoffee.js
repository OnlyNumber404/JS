//coontoh penerapan

import { makecoffe,sendCoffe } from "./coffe.js";
console.log('Saya memesan kopi di kafe');

makecoffe(()=> {
    sendCoffe(()=>{
        console.log('Pramusaji memberikan kopi pesanan');
        console.log('Saya mendapatkan kopi dan menghabiskannya')
    })
});
