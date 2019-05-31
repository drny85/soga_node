const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    position: {
        type: String

    },
    phone: String,
    email: {
        type: String,
        lowercase: true
    },
    size: String,
    number: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    single: {
        type: Number,
        default: 0
    },
    double: {
        type: Number,
        default: 0
    },
    triple: {
        type: Number,
        default: 0
    },
    rbi: {
        type: Number,
        default: 0
    },
    avg: {
        type: Number,
        default: 0
    },
    strikeOut: {
        type: Number,
        default: 0
    },
    hidp: {
        type: Number,
        default: 0
    },
    hr: {
        type: Number,
        default: 0
    },
    flyOut: {
        type: Number,
        default: 0
    },
    forceOut: {
        type: Number,
        default: 0
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
})


module.exports = mongoose.model("Player", playerSchema);