const http = require('http');

http.createServer((req,res)=>{
    res.end('Hello DevOps CI/CD 🚀');
}).listen(3000);

console.log('Server running on port 3000');