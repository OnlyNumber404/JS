class Smartphone {
    constructor(color,brand,model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`Charging ${this.model}`);
    }
}


class Android extends Smartphone{
    constructor(color,brand,model,device){
        super(color,brand,model);
        this.device = device;
    }
    charging(){
        super.charging();
        console.log(`Charging ${this.model} with fast charger`);
    }

    splitscreen(){
        console.log('Android have a split screen');
    }
}


const android = new Android('Gray','Samsung','S21','Andorid');
android.charging();