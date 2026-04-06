const http = require('http');
const PORT = process.env.PORT || 3000

let count = 0;

http.createServer((req,res)=>{
    count++;
    console.log("Request received:",req.url);
    console.log(`Request #${count}: ${req.url}`);

    res.end('Loging Working 🚀');
}).listen(PORT);

console.log('Server running on port '+PORT);