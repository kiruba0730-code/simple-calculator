const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "public", "index.html");

  if (req.url !== "/" && req.url !== "/index.html") {
    res.writeHead(404);
    res.end("Not Found");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
      return;
    }

    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Calculator running on port ${PORT}`);
});
