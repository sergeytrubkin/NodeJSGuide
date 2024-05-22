import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import express from 'express';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/',(req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
	console.log('In the middleware');
})

export default router;