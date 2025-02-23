//ini adalah contoh impure function

let value = 0;

function addwith(addwingValue){
    value+=addwingValue;
    console.log(`Current Value is ${value}`);
    return value;
}


const result1 = addwith(1);
const result2 = addwith(2);
const result3 = addwith(3);
const result4 = addwith(4);


//pure function

function add(value,addwingValue){
    return value + addwingValue;
}

const hasil1 = add(0,1);
console.log(`Result1 is ${hasil1}`);

const hasil2 = add(hasil1,1);
console.log(`Result2 is ${hasil2}`);

const hasil3 = add(hasil2,1);
console.log(`Result3 is ${hasil3}`);

console.log(`hasilnya dari 3 output ${hasil1} ${hasil2} ${hasil3}`);