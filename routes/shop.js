import express from 'express';

const router = express.Router();

router.get('/',(req, res, next) => {
	res.send('<h1>This is a home page!</h1>')
	console.log('In the middleware');
})

export default router;