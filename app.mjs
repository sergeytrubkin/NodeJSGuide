import { createServer } from 'node:http';

const hostname = 'localhost';
const port = '3001';

const server = createServer((req, res) => {
	const { url } = req;
	res.setHeader('Content-Type', 'text/html');
	res.write('<!DOCTYPE html>\n');
	res.write('<html>\n');

	if (url === '/') {
		res.write('<head>\n');
		res.write('<title>Main Page</title>\n');
		res.write('</head>\n');
		res.write('<body>\n');
		res.write('<h1>Main Page</h1>\n<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
	} else {
		res.write('<head>\n');
		res.write('<title>Message Page</title>\n');
		res.write('</head>\n');
		res.write('<body>\n');
		res.write('<h1>This is a Message Page!</h1>\n');
	}
	
	res.write('</body>\n');
	res.write('</html>\n');
	res.end();
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
