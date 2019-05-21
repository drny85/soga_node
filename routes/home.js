const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("<h3>Home</h3");
});



module.exports = router;