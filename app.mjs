import { createServer } from 'node:http';

const hostname = 'localhost';
const port = '3001';

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
