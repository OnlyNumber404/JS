//encapsulation --> membungkus data di suatu wadah
//encapsulation adalah membuat data yang ada di class sebagai private.


//example --> nilai bisa di ubah namun cara ini tidak benar karena dapar mengakibatkan bug dan nilai yang di inginkan
//karena kita hanya menetapkan nilai getter saja tanpa setter
class coffemachine{
    constructor(waterammount){
        this.waterammount = waterammount;
        this.temperature = 90;
    }
    makecoffe(){
        console.log('Membuat kopi dengan suhu', this.temperature);
    }
}

const coffe = new coffemachine(100);
coffe.temperature = 60;

coffe.makecoffe();


//example yang benar

class jusmachine{
    constructor(banyakair){
        this.banyakair = banyakair;
        this._suhu = 90;
    }
    set suhu(suhu){
        console.log('you are not allowed to change the temperature');
    }

    get suhu(){
        return this._suhu;
    }

}

const jus = new jusmachine(10);
console.log('Sebelum di ubah: ', jus.suhu);
jus.suhu = 100;
console.log('Setelah di ubah: ',jus.suhu);


//example tidak bisa di ubah

class milkmachine{
    #panas = 90;

    constructor(air){
        this.air = air;
        this.#panas = this.#defaultTemperatur();
    }
    set panas(panas){
        console.log('You not allowed to change the temperature');
    }

    get panas(){
        return this.#panas;
    }

    #defaultTemperatur(){
        return 90;
    }
}

const milk = new milkmachine(12);
console.log('Sebelum di ubah: ',milk.panas);
milk.panas = 50;
console.log('Setelah di ubah: ',milk.panas);