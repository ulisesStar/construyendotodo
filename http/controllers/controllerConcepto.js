var db = require('../relations');
var { concepto , descripcion, limite, medida} = db;


var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    concepto.create(data).then(function(result) {
        descripcion.create({id_concepto:result.id}).then(function(result){
            res.status(200).jsonp(result);
        })
        res.status(200).jsonp(result);
    });

};


ex.delete = function(req, res, next) {

    var id = req.params.id;

    concepto.findById(id).then(function(concepto) {
        concepto.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    concepto.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });

    descripcion.update({descripcion: data.descripcion.descripcion},{
        where: {
            id_concepto : id
        }
    }).then(function(result){
        console.log(result);
    })
};


ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        concepto.findById(id,{
            include: [
                {
                    model: descripcion
                }
            ]
        }).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        concepto.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }

};
