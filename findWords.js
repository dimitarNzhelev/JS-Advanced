function findCount(input) {
  dict = {};
  let words = input.shift().split(" ");
  for (word of words) {
    let count = 0;
    for (let el of input) {
      if (word == el) {
        count += 1;
      }
    }
    dict[word] = count;
  }
  let result = Object.entries(dict);
  result.sort((a, b) => b[1] - a[1]);
  for (let [key, value] of result) {
    console.log(`${key} -> ${value}`);
  }
}

findCount(["this sentence", "I", "hate", "this", "sentence", "this"]);
