//for looping

//for(variabel;statment;increment)

for(let i = 0; i < 5; i++){
    console.log(`i sekrangan adalah ${i}`);
}


const person = {
    nama: 'Fulan',
    asal: 'bandung',
    birthYear: 2024,
}

// for in
for(const loop in person){
    console.log(`${loop} bernilai ${person[loop]}`);
}

const arry = [1,2,3,4,5,6,7,8,9];

for(const a in arry){
    console.log(a);
}

// for of 
const names = ['bebek','ayam','macam','burung'];

for(const b of names){
    console.log(b);
}


//while loop

let z = 0;

while (z < 5){
    console.log(`z sekarang menjadi ${z}`);
    z++;
}


//do-while

let f = 0;

do {
    console.log(`f sekranga adalah ${f}`);
    f++
} while(f<5);


//control statement

//break

let sleep = 0
const thing = true
while (thing){
    console.log('im thinking');
    sleep++
    if (sleep === 5){
        break;
    }
}

for(let i = 0;i < 10;i++){
    if (i === 5){
        continue;
    }
    console.log(i);
}