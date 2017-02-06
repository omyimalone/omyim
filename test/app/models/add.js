module.exports.add = function(req,res) {
    var db = require('../models/db');
    req.body["record"] = new Date();
    db.query('INSERT INTO room_cost SET ?',req.body, function(err) {
        if (err) {
            throw err;
        }
    }); 
}