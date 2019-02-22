// https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61
// TODO: To find out how to update individual db elements
// START mongodb first: brew services start mongodb
// then do node server; then do mongod --port PORT_NUM
// Finally node server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const characteristicsRoutes = express.Router();
const PORT = 5000;

var characteristics = require('./characteristics.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/characteristics', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// DEFINE ROUTES

characteristicsRoutes.route('/').get(
    (req, res) => {
        characteristics.find((err, characteristicsAll) => {
            if (err) {
                console.log(err);
            } else {
                res.json(characteristicsAll);
            }
        })
    }
);

characteristicsRoutes.route('/increase').post((req, res) => {
    let characteristicsAll = new characteristics(req.body);
    characteristicsAll.save()
        .then(characteristicsAll => {
            res.status(200).json({'characteristics': 'characteristics added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new characteristics failed');
        });
});

characteristicsRoutes.route('/deleteAll').delete((req, res) => {
    characteristics.deleteMany({}, () => {
        res.status(200).json({'characteristics': 'deleted all entries!'})
    })
});

characteristicsRoutes.route('/updateOne').patch((req, res) => {
    let updateTrait = req.body;  
    let id = req.params.id;
    console.log(req.body)
    characteristics.updateOne(
            {"characteristics_type": req.body.characteristics_type},
            {$set: updateTrait}
        )
        .then(characteristics => {
            res.status(200).json(req.body)
        })
        .catch(err => {
            res.status(400).send('updating one field failed')
        })
});

app.use('/characteristics', characteristicsRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


