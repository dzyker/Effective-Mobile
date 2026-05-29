const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("Hello from Effective Mobile!");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found");
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер запущен и слушает порт ${PORT}`);
});
