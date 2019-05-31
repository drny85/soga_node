const router = require('express').Router();
const {
    check,
    body
} = require('express-validator/check');

const playerController = require("../controllers/Player");

// adding a new player
router.post('/player/add-player', [
    check('name').isAlpha().withMessage('Invalid name, only letter').isLength({
        min: 3
    }).withMessage('Name must be at least 3 characters long'),
    check('lastName').isAlpha().withMessage('Invalid last name, only letter').isLength({
        min: 3
    }).withMessage('last name must be at least 3 characters long'),
    check('number').isLength({
        min: 1
    }).withMessage('a number is required'),
    check('size').isAlpha().withMessage('No numbers please').isLength({
        min: 1
    }).withMessage('size is required'),
    check('position').isLength({
        min: 1
    }).withMessage('position is required'),


], playerController.addPlayer);

//getting all players
router.get('/players', playerController.getPlayers);

router.get('/player/:id', playerController.getPlayerById);

//update player
router.put('/player/update/:id', [
    check('name').isAlpha().withMessage('Invalid name, only letter').isLength({
        min: 3
    }).withMessage('Name must be at least 3 characters long'),
    check('lastName').isAlpha().withMessage('Invalid last name, only letter').isLength({
        min: 3
    }).withMessage('last name must be at least 3 characters long'),
    check('number').isLength({
        min: 1
    }).withMessage('a number is required'),
    check('position').isLength({
        min: 1
    }).withMessage('a position is required')
], playerController.updatePlayer);


//delete player 
router.delete('/player/delete/:id', playerController.deletePlayer);


module.exports = router;