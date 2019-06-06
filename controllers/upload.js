const path = require('path');
const Player = require("../models/Player");

exports.uploadPicture = async (req, res) => {

    const userId = req.headers.userid;

    if (req.files === null) {
        return res.status(400).json({
            msg: 'No file uploaded'
        });
    }

    const file = req.files.file;
    //cjeck for ,i,etype or image type
    const mimetypes = ['image/png', 'image/jpg', 'image/jpeg'];
    if (!mimetypes.includes(file.mimetype)) {
        return res.status(400).json({
            msg: "invalid image"
        });
    }

    //image past validation
    file.mv("./public/images/" + String(file.name).toLowerCase(), err => {

        if (err) {
            console.error(err);
            return res.status(500).send(err)
        }

        Player.findOneAndUpdate({
                _id: userId
            }, {
                picture: `/images/${String(file.name).toLowerCase()}`
            }, {
                new: true
            })
            .then(player => {

                res.json(player);
            })
            .catch(error => {
                return res.status(400).json({
                    msg: 'something went wrong'
                });
            })

    })


};