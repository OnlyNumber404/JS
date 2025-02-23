
//data
const user = {
    nama: 'dicoding',
    lastname: 'Indonesia',
    age: 9,
};


console.log(user);

//acces data dengan dot
console.log(user.nama)

//acces data dengan square bracket
console.log(user["lastname"]);

//acces data dengan object destructuring

const {nama,lastname} = user;
console.log(nama,lastname);

const {isMale = false} = user;
console.log(isMale);

//mengubah nilai di properti object 

const account = {
    balance: 1000,
    debt: 10,
    biaya: 1000,
};

account.balance = 2000;
console.log(account.balance);

//menghapus nilai di object
delete account.debt;
console.log(account);
