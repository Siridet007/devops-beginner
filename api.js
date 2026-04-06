const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/hello") {
    return res.end(JSON.stringify({
      message: "Hello from API 🚀",
      time: new Date()
    }));
  }

  res.end(JSON.stringify({ message: "Not Found" }));
});

server.listen(PORT, () => {
  console.log("API running on port " + PORT);
});