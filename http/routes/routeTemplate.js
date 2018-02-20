var express = require('express');
var routeTemplate = express.Router();

var x = require("../controllers/controllerTemplate");

routeTemplate.route('/data/template')
        .get(x.read)
        .post(x.create);

routeTemplate.route('/data/unirConConcepto/:idTemplate/:idConcepto')
        .post(x.unir);

routeTemplate.route('/data/obtenerConConcepto/:idTemplate')
        .get(x.obtenerConConcepto);

routeTemplate.route('/data/unirAConcepto/:idConcepto/:idTemplate')
		.post(x.unirAConcepto)
		.delete(x.eliminarUnionConcepto);

routeTemplate.route('/data/template/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);
        
module.exports = routeTemplate;