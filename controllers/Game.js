const Game = require("../models/Game");


exports.addGame = async (req, res) => {
    const {
        gameDate,
        location
    } = req.body;

    const newGame = new Game({
        gameDate,
        location
    })

    const game = await newGame.save();
    res.json(game);
}