import express from 'express';

const router = express.Router();

router.route('/status').get((req, res) => {
	res.json({
		message: 'Working',
		timestamp: new Date().toISOString(),
		IP: req.ip,
		URL: req.originalUrl,
	});
});

router.use('/rent', rentRoute);

export default router;