//example

const estimationTime = 10_000;
//format setTimeout((callback,delay))
setTimeout(() =>{
    console.log('Hello,World!')
},estimationTime);

//example 2
console.log('Satart');

setTimeout(()=>{
    console.log('hello after 5 second')
},5000);
console.log('End');