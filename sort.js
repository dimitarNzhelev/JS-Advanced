function solve(input) {

    input = input.sort((a,b) =>  a-b)

    for(let i =1; i<input.length; i+=2){
        input.splice(i,0,input.pop()); }
    console.log(input);
}

solve([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);