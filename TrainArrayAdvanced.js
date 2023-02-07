function wagon(array) {
  let passangers = array.shift().split(" ").map(Number);
  let max = Number(array.shift());

  for (let command of array) {
    command = command.split(" ");
    if (command[0] == "Add") {
      passangers.push(Number(command[1]));
    } else {
      for (let i = 0; i < passangers.length; i++) {
        if (passangers[i] + Number(command[0]) <= max) {
          passangers[i] = passangers[i] + Number(command[0]);
          break;
        }
      }
    }
  }
  console.log(passangers.join(" "));
}

wagon(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
