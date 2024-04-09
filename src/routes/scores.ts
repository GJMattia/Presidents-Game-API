import express from 'express';
const router = express.Router();
const scoresCtrl = require('../controllers/scores');

router.get('/', scoresCtrl.getScores);

router.post('/', scoresCtrl.addScore);

module.exports = router;