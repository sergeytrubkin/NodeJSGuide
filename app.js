import { createServer } from 'node:http';
import { requestHandler } from './routes.js';

const hostname = 'localhost';
const port = 3000;

const server = createServer(requestHandler);

server.listen(port, hostname, () => {
	console.log(`Server running at \x1b[36mhttp://${hostname}:${port}/\x1b[0m`);
});