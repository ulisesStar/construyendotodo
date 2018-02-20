var express = require('express');
var routeTag = express.Router();

var x = require("../controllers/controllerTag");

routeTag.route('/data/tag')
        .get(x.read)
        .post(x.create);

routeTag.route('/data/tag/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeTag;