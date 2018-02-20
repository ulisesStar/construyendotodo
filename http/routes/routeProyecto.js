var express = require('express');
var routeProyecto = express.Router();

var x = require("../controllers/controllerProyecto");

routeProyecto.route('/data/proyecto')
        .get(x.read)
        .post(x.create);

routeProyecto.route('/data/unirConServicio/:idProyecto/:idServicio')
		.post(x.unir);

routeProyecto.route('/data/obtenerConServicio/:idProyecto')
		.get(x.obtenerConServicio);

routeProyecto.route('/data/obtenerConCliente/:idProyecto')
		.get(x.obtenerConCliente);


routeProyecto.route('/data/obtenerConTemplate/:idProyecto')
		.get(x.obtenerConTemplate);

routeProyecto.route('/data/unirATemplate/:idTemplate/:idProyecto')
		.post(x.unirATemplate)
		.delete(x.eliminarUnionTemplate);


routeProyecto.route('/data/clientes')
		.put(x.agregarcliente);


routeProyecto.route('/data/proyecto/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);
        

module.exports = routeProyecto;
