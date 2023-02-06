/*
function repeat(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  console.log(array.join(" "));
}

repeat([1, 2, 3, 4, 2, 5, 6, 2]);
repeat([7, 1, 2, 3, 54, 7, 2, 2, 1]);
*/
function repeat(array) {
  newArr = [];
  for (el of array) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  console.log(newArr.join(" "));
}

repeat([1, 2, 3, 4, 2, 5, 6, 2]);
repeat([7, 1, 2, 3, 54, 7, 2, 2, 1, 2, 2]);
