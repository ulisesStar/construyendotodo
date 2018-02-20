var express = require('express');
var routeConcepto = express.Router();

var x = require("../controllers/controllerConcepto");

routeConcepto.route('/data/concepto')
        .get(x.read)
        .post(x.create);

routeConcepto.route('/data/concepto/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeConcepto;