function solve(input) {
  let parking = new Set();
  for (let line of input) {
    [command, car] = line.split(", ");
    if (command == "OUT") {
      parking.delete(car);
    } else {
      parking.add(car);
    }
  }
  if (!parking.size > 0) {
    console.log("Empty");
  } else {
    for (el of parking) {
      console.log(el);
    }
  }
}

solve(["IN, CA41241", "IN, C654645", "IN, CA44244", "OUT, CA44244"]);
