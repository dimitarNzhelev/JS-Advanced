/*function callrotation(array, num) {
  if (array.length == num) return array;
  else {
    while (num > 0) {
      array = rotation(array);
      num--;
    }
    return array;
  }
}

function rotation(array) {
  let i = 0;
  let temp = array[i];

  while (i < array.length - 1) {
    array[i] = array[i + 1];
    i++;
  }
  array[array.length - 1] = temp;
  return array;
}

console.log(callrotation([1, 2, 3, 4, 5, 6], 3));
*/

function rotation(array, number) {
  for (let i = 0; i < number; i++) {
    let temp = array.shift();
    array.push(temp);
  }
  console.log(array);
}

rotation([295, 618, 319, -125, 4006], 3);
