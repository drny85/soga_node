const express = require('express');

const router = express.Router();
const {
    check

} = require('express-validator/check');

const gameController = require("../controllers/Game");

router.post("/game/new-game", gameController.addGame);

module.exports = router;