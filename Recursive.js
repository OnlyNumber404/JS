//recursive
//Rekursi adalah teknik sebuah 
//fungsi memanggil dirinya sendiri sehingga 
//operasi dalam fungsi tersebut terus berulang sampai mencapai kondisi 
//tertentu untuk ia keluar dari perulangannya.


//contoh dengan FP atau For and While
function generatearry(n){
    const result = [];
    for(let counter = 0; counter <= n; counter++){
        result.push(counter);
    }

    return result;
}

console.log(`ini dengan FP [${generatearry(5)}]`);

//contoh dengan rekrusi

function generateArry(n){
    if (n<0){
        return [];
    }
    return [...generateArry(n-1),n];
}

console.log(`Ini dengan rekrusi [${generateArry(5)}]`);