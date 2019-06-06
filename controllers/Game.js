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
};

exports.getGames = (req, res) => {
    Game.find()
        .then(games => {
            return res.json(games);
        })
        .catch(error => {
            return res.status(400).json({
                msg: "no games scheduled"
            });
        });

};

exports.getGameById = (req, res) => {
    console.log(req);
    const id = req.params.id;
    console.log(id);
    if (!id) return res.status(400).json({
        msg: "no game found"
    });

    Game.findOne({
            _id: id
        })
        .then(game => res.json(game))
        .catch(error => {
            return res.status(400).json({
                msg: "game not found"
            });
        })
};