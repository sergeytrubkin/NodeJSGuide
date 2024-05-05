import { createServer } from 'node:http';

import { requestHandler } from './routes.mjs';

const hostname = 'localhost';
const port = '3001';

const server = createServer(requestHandler);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
