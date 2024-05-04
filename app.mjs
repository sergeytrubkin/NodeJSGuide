import { createServer } from 'node:http';

const hostname = 'localhost';
const port = '3001';

const server = createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
