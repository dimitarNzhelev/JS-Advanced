function solve(input, input2) {
  let storedProducts = {};

  while (input.length > 0) {
    let name = input.shift();
    let quantity = input.shift();
    storedProducts[name] = Number(quantity);
  }

  while (input2.length > 0) {
    let name = input2.shift();
    let quantity = input2.shift();
    if (!storedProducts[name]) {
      storedProducts[name] = Number(quantity);
    } else {
      storedProducts[name] += quantity;
    }
  }

  console.log(storedProducts);
}
solve(
  ["Chips", 12, "Bananna", 4, "Apples", 11],
  ["Bread", 5, "Pasta", 8, "Chips", 2]
);
