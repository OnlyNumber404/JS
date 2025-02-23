// export dalam js

//default export 1
export default function defFunc(){
    console.log('This is is default functiom');
}

//named export 2

export function nameFunc(){
    console.log('My name is fiki');
}

//example 3 export
const name = 'denny';
const email = 'denny@gmail.com';
const age = 25;

export {name,email,age}

// example 4 export
const password = '123141';
const id = '1231214';
const code = '13151414';

export {password,id,code};