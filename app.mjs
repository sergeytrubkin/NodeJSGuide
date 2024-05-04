import { createServer } from 'node:http';

const hostname = 'localhost';
const port = '3001';

const server = createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	res.setHeader('Content-Type', 'text/html');
	res.write('<!DOCTYPE html>\n');
	res.write('<html>\n');
	res.write('<head>\n');
	res.write('<title>First Page</title>\n');
	res.write('</head>\n');
	res.write('<body>\n');
	res.write('<h1>Hello, World!</h1>\n');
	res.write('</body>\n');
	res.write('</html>\n');
	res.end();
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
