function solve(input) {
  let products = [];

  while (input.length > 0) {
    let [town, product, price] = input.shift().split(" | ");
    
    if (products.filter((a) => a.product == product).length > 0) {
      let obj = products.filter((a) => a.product == product);
      if (obj.price > Number(price)) {
        obj.price = Number(price);
        obj.town = town;
      }
    } else {
      let obj = {
        product,
         town,
        price: Number(price),
      };
      products.push(obj);
    }
  }
  for(let product of products){
      console.log(`${product.town}-${product.product}-${product.price}`)
}
}

solve(["Sample Town | Sample Product | 1000", 
        "Sample Town | Orange | 2",
        "Sample Town | Peach | 1",
        "Sofia | Orange | 3",
        "Sofia | Peach | 2",
        "Paris | Sample Product | 99",
        "Paris | Burger | 1000"]);
