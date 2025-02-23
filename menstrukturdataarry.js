//menstruktur data dengan arry

//membuat arry

//1. menggunakan object constructor

const users = new Array();
const numbers = new Array(5);

console.log(users);
console.log(numbers);

//2. menggunakan sintaks Arry.from

const foo = Array.from('foo');

console.log(foo);

// menyalin array

const user = new Array('jhon','linda','jane');
const customer = Array.from(user);
console.log(customer);


//3. menggunakan arry literal

const array = [];
const fruit = ['apple','banana','cherry'];
console.log(fruit);

//mengakses element arry dengan index
//index          0  1   2
const myarray = [43,44,54];
console.log(myarray[1]);//output == 44


//manipulasi nilai array
//1. menggunakan indexing

// index         0 1 2 3 4 5
const myArray = [1,2,3,4,5,6];
myArray[2] = 10;
console.log(myArray);// output = [1,2,10,4,5,6]


//menggunkan push --> nilai yang di tambakan akan berada di element terakhir
myArray.push(3);
console.log(myArray); // output [1,2,10,4,5,6,3]


// menghapus elemnt dan data array

//dengan delete --> mengahpus data tidak dengan element nya
//index             0            1         2
const Myarry = ['andorid','data science','web'];
delete Myarry[2];
console.log(Myarry)


//dengan splice --> mengapus data dan element nya

Myarry.push('web');
console.log(Myarry);
//splice(index,element)
Myarry.splice(2,2);
console.log(Myarry);

//Terakhir, ada cara lainnya yaitu menggunakan method shift dan pop. Kekurangan dari kedua method ini adalah tidak sefleksibel delete dan splice karena shift hanya menghapus element pertama dan pop menghapus element terakhir.

//contoh dengan pop

const arrypop = [1,2,3,4,5,6];
arrypop.pop();
console.log(arrypop)


//contoh dengan shift

const arryshift = ['app','apps','appd'];
arryshift.shift();
console.log(arryshift);


//arry destructuring

const arrydes = ['ikan','babi'];
const [hewan1, hewan2] = arrydes;
console.log(hewan1);//output ikan


//arry method

//reverse
const arryrev = ['one','two','tree'];
arryrev.reverse();
console.log(arryrev);

//sort
const arrysort = [5,14,15,1,4,6];
arrysort.sort();
console.log(arrysort);