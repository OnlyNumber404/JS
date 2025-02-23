//funcctional programing or FP --> adalah paradigma pemrograman yang didasarkan pada fungsi matematika murni, yakni fungsi harus menghindari perubahan data sehingga selalu menghasilkan nilai sama ketika diberikan argumen sama.
/**
 * Konsep utama dalam FP meliputi pure function, 
 * high-order function, recursion, dan 
 * immutability.
 */
//example

const names =['harry','ron','jeff','thomas'];

const newNamesWitgExcMark = [];

for(let i = 0; i < names.length; i++){
    newNamesWitgExcMark.push(`${names[i]}!`);
}


console.log(newNamesWitgExcMark);


//example dengan gaya deklaratif
//dengan(map)
const newNamesWithtag = names.map((name) => `${name}#`);
console.log(newNamesWithtag); 