//inheritance --> pewarisan


//example
class  smartphone {
    constructor(color,brand,model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`Charging ${this.model}`);
    }
}

class IOS extends smartphone{
    airdorp(){
        console.log(`ios have a behavior AirDrop`);
    }
}

class Android extends smartphone {
    splitscreen(){
        console.log('Android have a Split Screen');
    }
}

const ios = new IOS('black','a','12 PRO MAX');
const android = new Android('white','B',"Galaxy S21");


ios.charging();
ios.airdorp();

android.charging();
android.splitscreen();


console.log(ios);
console.log(android);