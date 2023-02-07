function solve(input, n) {

    let result = [];
    for(let i=0; i<input.length; i+=n)  {
        result.push(input[i]);
    }
    console.log(result);
}

solve([1,2,3,4,5],2);