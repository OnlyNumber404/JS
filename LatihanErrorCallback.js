import { makecoffe,secondCoffe } from "./ErrorCallback.js";

const order = "Kopi Espresso";

console.log(`Saya membuat ${order} di kafe.`);

makecoffe(order,(makeCoffeError,makeCoffeData)=> {
    if(makeCoffeError){
        //DO Something with error
        console.error(makeCoffeError);
        return;
    }
    secondCoffe(makeCoffeData,(sendCoffeeError,sendCoffeData)=>{
        if(sendCoffeeError){
            //Do Something with error
            console.log(sendCoffeeError);
            return;
        }

        console.log(`Pramusaji memberikan ${sendCoffeData} pesanan`);
        console.log(`Saya mendapatkan ${sendCoffeData} dan menghabiskannya.`)
    });
});
