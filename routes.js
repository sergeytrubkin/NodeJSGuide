export const requestHandler = (req, res) => {
	const { url, method } = req;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Enter User Name</title></head>');
		res.write('<body>');
		res.write('<h1>Hello! Welcome to my page!</h1>');
		res.write('<form action="/create-user" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	}

	if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body>');
		res.write('<ul>');
		res.write('<li>User 1</li>');
		res.write('<li>User 2</li>');
		res.write('<li>User 3</li>');
		res.write('</ul>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	}

	if (url === '/create-user' && method === 'POST') {
		const body = [];

		req.on('data', (chunk) => {
			body.push(chunk);
		})

		return req.on('end', () => {
			const formatData = Buffer.concat(body);
			const username = formatData.toString().split('=')[1]

			console.log(username);

			res.statusCode = 302;
			res.setHeader('Location', '/');
			return res.end();
		})
	}
};