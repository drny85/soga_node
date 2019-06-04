const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    players: {
        type: [Schema.Types.ObjectId],
        ref: 'Player'
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }
})

module.exports = mongoose.model('Team', teamSchema);