exports.render = function(req,res) {
        res.render('room',{
            'title':'Detail',
            'room':req.params.id
        })
    }