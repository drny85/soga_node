const Game = require("../models/Game");


exports.addGame = async (req, res) => {
    const {
        gameDate,
        location,
        away,
        home
    } = req.body;

    const newGame = new Game({
        gameDate,
        location,
        teams: []

    })


    newGame.teams.push(away);
    newGame.teams.push(home);
    const game = await newGame.save();
    res.json(game);
};

exports.getGames = (req, res) => {
    Game.find()
        .populate('teams')
        .exec(function (err, games) {
            if (err) return res.status(400).json({
                msg: "error"
            });

            res.json(games);
        });



};

exports.getGameById = (req, res) => {

    const id = req.params.id;

    if (!id) return res.status(400).json({
        msg: "no game found"
    });

    Game.findOne({
            _id: id
        })
        .populate('teams')
        .then(game => {

            res.json(game);
        })
        .catch(error => {
            return res.status(400).json({
                msg: "game not found"
            });
        })
};