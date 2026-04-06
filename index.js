const http = require('http');
const PORT = process.env.PORT || 3000

http.createServer((req,res)=>{
    console.log("Request received:",req.url);

    res.end('Loging Working 🚀');
}).listen(PORT);

console.log('Server running on port '+PORT);