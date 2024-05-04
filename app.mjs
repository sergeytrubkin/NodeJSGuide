import { createServer } from 'node:http';
import { writeFile } from 'node:fs/promises';

const hostname = 'localhost';
const port = '3001';

const server = createServer((req, res) => {
	const { url } = req;
	res.setHeader('Content-Type', 'text/html');


	if (url === '/') {
		res.write('<!DOCTYPE html>\n');
		res.write('<html>\n');
		res.write('<head>\n');
		res.write('<title>Main Page</title>\n');
		res.write('</head>\n');
		res.write('<body>\n');
		res.write('<h1>Main Page</h1>\n<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
		res.write('</body>\n');
		res.write('</html>\n');
		return res.end();
	} 
	if (url === '/message' && req.method === 'POST') {
		console.log(req);
		writeFile('message.txt', 'message');
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}

	res.write('<!DOCTYPE html>\n');
	res.write('<html>\n');
	res.write('<head>\n');
	res.write('<title>Message Page</title>\n');
	res.write('</head>\n');
	res.write('<body>\n');
	res.write('<h1>This is a Message Page!</h1>\n');
	res.write('</body>\n');
	res.write('</html>\n');
	res.end();
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
