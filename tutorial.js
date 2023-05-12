function addTwoNumber(a,b){
    var c = a + b;
    console.log(c);
}

addTwoNumber(2,7);

class Car{
    constructor(color, speed){
        this.color = color
        this.speed = speed
    }
    turboOn(){
        console.log("Hello world!")
    }
}

const car1 = new Car("Blue", 250)

car1.turboOn()
console.log(`${car1.color}`)

