import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import express from 'express';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

const hostname = 'localhost';
const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(port, hostname, () => {
	console.log(`Server running at \x1b[36mhttp://${hostname}:${port}/\x1b[0m`);
});