function login(input) {
  let user = input[0];
  let userRev = user.split("");
  userRev = userRev.reverse();
  userRev = userRev.join("");

  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (count == 3) {
      console.log(`User ${user} blocked`);
      break;
    }

    if (userRev == input[i]) {
      console.log(`User ${user} logged in.`);
      break;
    }
    count++;
  }
}

login(["Acer", "login", "let me in", "go", "recA"]);
