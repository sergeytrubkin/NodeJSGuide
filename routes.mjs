import { writeFile } from 'node:fs';
const requestHandler = (req, res) => {
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
		let body = [];

		req.on('data', (chunk) => {
			body.push(chunk);
		})
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
			
			writeFile('message.txt', message, (err) => {
				if (err) throw err;
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});
		})
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
}

export { requestHandler };