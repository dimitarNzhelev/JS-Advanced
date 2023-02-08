function solve(input) {
let result = {};
let carriage = {};
let engine = {};
result.model = input.model;

if(input.power<=90) {
    engine.power = 90;
    engine.volume = 1800;
}else if(input.power <=120){
    engine.power = 120;
    engine.volume = 2400;
}else {
    engine.power = 200;
    engine.volume = 3500;
}
result.engine = engine;
carriage.type = input.carriage;
carriage.color = input.color;
result.carriage = carriage;

if(input.wheelsize %2 === 0) {
    input.wheelsize-=1;
}

result.wheelsize = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

console.log(result);


}

solve({
    model: 'Golf 2',
    power: 110,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 15
})