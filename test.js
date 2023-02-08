function arrayModify(array) {
  list = array.shift().split(" ");
  list.map(Number);
  for (command of array) {
    if (command == "end") {
      console.log(list);
      break;
    }
    newCommand = command.split(" ");
    newCommand[1] = Number(newCommand[1]);
    newCommand[2] = Number(newCommand[2]);
    switch (newCommand[0]) {
      case "swap":
        let temp = list[newCommand[1]];
        list[newCommand[1]] = list[newCommand[2]];
        list[newCommand[2]] = temp;
        break;

      case "multiply":
        list[newCommand[1]] = list[newCommand[1]] * list[newCommand[2]];
        break;

      case "decrease":
        list = list.map((x) => x - 1);
        break;
    }
  }
}

arrayModify([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
