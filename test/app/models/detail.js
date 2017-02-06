module.exports = function(req,res) {
    var db = require('../models/db');
        db.query('SELECT * FROM room_cost WHERE room_id=' + req.body.room, function(err, rows) {
            if (err) {
                throw err;
            }
            res.send(rows);
        }); 
}