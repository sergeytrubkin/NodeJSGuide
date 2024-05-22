import express from 'express';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(port, hostname, () => {
	console.log(`Server running at \x1b[36mhttp://${hostname}:${port}/\x1b[0m`);
});