module.exports.show = function(req,res) {
    var db = require('../models/db');
        db.query('SELECT DISTINCT room FROM room', function(err, rows) {
            if (err) {
                throw err;
            }
            res.send(rows);
        }); 
}