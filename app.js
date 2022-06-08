const express = require("express");
const move = require("./controllers/movement");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());
app.set('view engine', 'ejs');

app.get('/', (req, res, next) =>{
    res.render('index.ejs', {position: -1, xcoordinate: -1, ycoordinate: -1, rotation: -1});
});

app.post('/move', (req, res, next) =>{
    let grid_position = move(req.body.movement);
    let position_array = grid_position.split(':');
    res.render('index.ejs', {position: move(req.body.movement), xcoordinate: position_array[0], ycoordinate: position_array[1], rotation: position_array[2]});
})

app.listen(process.env.PORT || 3000);