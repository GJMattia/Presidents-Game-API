const Score = require('../models/score');

module.exports = {
    addScore,
    getScores
}

async function addScore(req: Request, res: Response) {
    try {
        // const newScore = await Score.create({ user: userID });
        console.log('create score')
    } catch (error) {
        console.error('error creating score', error)
    }
};

async function getScores(req: Request, res: Response) {
    try {
        console.log('getting all the scroes for the leaderboard')
        // const scores = await Score.find({})
        // res.json(scores);
    } catch (error) {
        console.error('error getting all accounts', error)
    }
}
