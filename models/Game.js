const mongoose = require('mongoose');
const Team = require("../models/Team");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    gameDate: {
        type: Date,
        required: true
    },
    location: String,
    players: {
        type: [Schema.Types.ObjectId],
        ref: "Player"
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: "Team"
    }],

    winner: {
        type: Schema.Types.ObjectId,
        ref: "Team"
    },
    start: String,
    end: String,

});

module.exports = mongoose.model('Game', gameSchema);