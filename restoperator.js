//rest operator

//fungsinya adalah memberikan parameter tanpa batas untuk menerima argument dalam bentuk array.
//example 1
function myFunc(...manymoreArgs){
    console.log(manymoreArgs.length);
    console.log('manymoreArgs',manymoreArgs);
};

myFunc('one','two','tree');


//example 2

function Func(number,...manynumbers){
    console.log('number',number);
    console.log('manynumber',manynumbers);
};

Func(1,2,3,4,5,6,7)


//example 3

const favorites = ['nasi goreng','ayam goreng','tahu tempe','bebek goreng']

const [first,second,...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);