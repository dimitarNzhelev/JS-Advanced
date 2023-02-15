const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.write("<html>");
  res.write("<head><title>Welcome</title><head>");
  res.write("<body><h1>Welcome User</h1></body>");
  res.write(
    '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>'
  );
  res.write("</html>");
  res.end();

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log(user);
    });
  }
});

server.listen(3000);
