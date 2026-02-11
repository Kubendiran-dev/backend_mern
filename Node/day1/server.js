const http = require("http");

const app = http.createServer((req, res) => {
  res.write("Server running...");
  res.end();
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
