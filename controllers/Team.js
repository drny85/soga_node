const Team = require('../models/Team');
const {
    validationResult
} = require('express-validator/check');


exports.addTeam = async (req, res) => {
    const {
        name,
        manager
    } = req.body;
    try {

        const team = await Team.findOne({
            name
        });
        if (team) return res.status(400).json({
            msg: 'team name already taken'
        });

        const newTeam = new Team({
            name,
            manager
        })

        const teamSaved = await newTeam.save();
        res.json(teamSaved);

    } catch (error) {
        return res.status(400).json({
            msg: 'no team found'
        });
    }
};

// get all teams
//end point /api/teams                                         
exports.getTeams = async (req, res) => {
    try {
        const teams = await Team.find().populate('manager', 'name lastName');
        if (!teams) return res.status(400).json({
            msg: 'no teams found'
        });

        res.json(teams);
    } catch (error) {
        return res.status(400).json({
            msg: 'no team found'
        });
    }
};