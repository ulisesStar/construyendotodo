var db = require('../relations');
var categoria = db.categoria;


var ex = module.exports = {};

//crear
ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    categoria.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

//eliminar
ex.delete = function(req, res, next) {

    var id = req.params.id;

    categoria.findById(id).then(function(categoria) {
        categoria.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

//actualizar
ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    categoria.update({nombre: data.nombre, id_servicio: data.id_servicio}, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};


ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        categoria.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        categoria.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
