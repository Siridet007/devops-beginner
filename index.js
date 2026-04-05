const http = require('http');
const PORT = process.env.PORT || 3000

http.createServer((req,res)=>{
    res.end('Hello DevOps CI/CD 🚀');
}).listen(PORT);

console.log('Server running on port '+PORT);