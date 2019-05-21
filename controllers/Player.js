const Player = require("../models/Player");
const {
    validationResult
} = require('express-validator/check');

exports.addPlayer = async (req, res) => {
    const {
        name,
        lastName,
        number,
        position
    } = req.body;
    //check for input errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    try {

        const query = await Player.findOne({
            name,
            lastName,
            number
        });
        if (query) return res.status(400).json({
            msg: "player already exits"
        });

        // check if number already is taken
        const numberQuery = await Player.findOne({
            number
        });
        if (numberQuery) return res.status(400).json({
            msg: `The number ${number} is already taken`
        });
        // create a new player after all validation have been checked
        const newPlayer = new Player({
            name,
            lastName,
            position,
            number
        });
        //save the player and return it
        const data = await newPlayer.save();
        if (data) return res.json(data);



    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'error has occured'
        })
    }
}

// get all players
exports.getPlayers = async (req, res) => {


    try {
        const players = await Player.find();
        if (players) res.json(players);
    } catch (error) {
        return res.status(400).json({
            msg: "no players found"
        });
    }
};

// get player by Id
exports.getPlayerById = async (req, res) => {
    try {
        // get the id from param
        const id = req.params.id;
        // check if id was sent
        if (id) {
            const player = await Player.findOne({
                _id: id
            })
            // check if player was found
            if (!player) return res.status(400).json({
                msg: 'no player found'
            })
            //return player
            res.json(player);
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'no player found'
        })
    }
};

exports.updatePlayer = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    try {
        const id = req.params.id;
        // check fr the jersey number first
        const found = await Player.findOne({
            number: req.body.number
        });
        if (found) return res.status(400).json({
            msg: `the number ${req.body.number} is already taken`
        });
        //continue if number is not taken
        if (id) {
            const player = await Player.findOneAndUpdate({
                _id: id
            }, req.body, {
                new: true
            });
            res.json(player);
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json('no player found');
    }
};

//delete player
exports.deletePlayer = async (req, res) => {
    try {
        const _id = req.params.id;
        const player = await Player.findOneAndDelete({
            _id
        });
        if (!player) return res.status(400).json({
            msg: 'no player found'
        });
        res.json({
            msg: 'player detele'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'no player found'
        });
    }
};