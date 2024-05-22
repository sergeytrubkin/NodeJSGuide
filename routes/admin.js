import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-product', (req, res, next) => {
	res.send('<form action="/product" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
})

router.post('/product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
})

export default router;