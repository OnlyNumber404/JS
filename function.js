//function


//function statment
const celcius = 90

function convert(suhu){
    const rumus = 9/5 * suhu + 32;
    console.log(rumus)
}

convert(celcius);


function sumNumbers(a,b){
    const result = a + b;
    return result
}

const result = sumNumbers(5,6);
console.log(result);


function convertCelciusToFahrenheite(temperature){
    const hasil = 9/5 * temperature + 32;
    return hasil;
}

const temperatureInFahrenheit = convertCelciusToFahrenheite(90);
console.log(`Hasil konversi: ${temperatureInFahrenheit}`);


//function expression

const convertCelciusToReamur = function(temperature){
    const jadi = 4/5 * temperature;
    return jadi;
}

const temperatureInReamur = convertCelciusToReamur(50);
console.log(`Hasil Konversi ${temperatureInReamur}`);

// function yang di perlakukan layaknya variabel (first-class citizen)

function multiply(a,b){
    return a * b;
}

function calcuate(operation, numA, numB){
    return operation(numA,numB);
}

const akhir = calcuate(multiply,2,4);
console.log(akhir);


function multipiler(x){
    return function(num){
        return x * num;
    };
}

const double = multipiler(2);
const tripel = multipiler(3);

console.log(double(10));
console.log(tripel(11));

/**
 * Keuntungan function sebagai first-class citizen:
 * -Dapat disimpan sebagai nilai dalam variabel.
 * -Dapat dikembalikan dari suatu function.
 * -Dapat dikirimkan sebagai parameter bagi function lain.
 * -Dapat disimpan dalam elemen array dan object literal.
 * -Dapat memiliki method dan properties sendiri.
 */

let temperatureInKelvin = null;

//deklarasi function dengan arrow function

const convertCelciusToKelvinUsingArrowFunction = (temperature) => {
    const end = 237 + temperature;
    return end
}

temperatureInKelvin = convertCelciusToKelvinUsingArrowFunction(90)
console.log(temperatureInKelvin)


//arrow function versi ringkas

const convertCelciusToKelvinInConciseSyntax = (temperature) => 237 + temperature;

temperatureInKelvin = convertCelciusToKelvinInConciseSyntax(91);
console.log(temperatureInKelvin);
