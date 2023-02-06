function schuedle(input) {
  let dict = {};

  while (input.length > 0) {
    let temp = input.shift();
    temp = temp.split(" ");
    if (!dict.hasOwnProperty(temp[0])) {
      dict[temp[0]] = temp[1];
      console.log(`Schueduled for ${temp[0]}`);
    } else {
      console.log(`Conflict on ${temp[0]}!`);
    }
  }
  console.log(dict);
}

schuedle(["Monday Peter", "Wednesday Ivan", "Monday Mitko"]);
