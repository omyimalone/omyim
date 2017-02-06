module.exports = function(app) {

    var home = require('../ctrls/home');
    app.get('/',home.render);

    var add = require('../ctrls/add');
    app.get('/add',add.render);

    var list = require('../ctrls/list');
    app.get('/list',list.render);

    var details = require('../ctrls/detail');
    app.get('/detail/:id',details.render);
    
    var add_item = require('../models/add');
    app.post('/add_item',add_item.add);
    
    var list_room = require('../models/room');
    app.post('/list_room',list_room.show);

    var detail = require('../models/detail');
    app.post('/detail',detail);

}