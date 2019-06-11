const express = require('express');

const router = express.Router();
const {
    check

} = require('express-validator/check');

const gameController = require("../controllers/Game");

router.post("/game/new-game", gameController.addGame);

router.get("/game/detail/:id", gameController.getGameById);

router.get("/game/games", gameController.getGames);



module.exports = router;