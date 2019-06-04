const express = require('express');

const router = express.Router();
const {
    check

} = require('express-validator/check');
const teamControllers = require('../controllers/Team');

// add a team
router.post('/team/add-team', [
    check('name').isLength({
        min: 3
    }).withMessage('Name must be at least 3 characters long'),
], teamControllers.addTeam);

// get all teams
router.get('/teams', teamControllers.getTeams);

module.exports = router;