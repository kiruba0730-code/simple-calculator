const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
    let filePath;

    if (req.url === "/" || req.url === "/index.html") {
        filePath = path.join(__dirname, "public", "index.html");
    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page Not Found");
        return;
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            res.end("Internal Server Error");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(data);
    });
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Calculator application running on port ${PORT}`);
});
