import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-product', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

router.post('/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
})

export default router;