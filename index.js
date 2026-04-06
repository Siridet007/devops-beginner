const http = require('http');
const PORT = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME;

let count = 0;

http.createServer((req,res)=>{
    count++;
    console.log("Request received:",req.url);
    console.log(`Request #${count}: ${req.url}`);
    console.log("Request from:",HOSTNAME);

    res.writeHead(200,{
        "Content-Type":"text/plain; charset=utf-8",
    });

    res.end(`Version 2 from : ${HOSTNAME} 🚀`);
}).listen(PORT);

console.log('Server running on port '+PORT);