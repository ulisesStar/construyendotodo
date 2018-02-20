var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('heroku_2cf134b81f08a6b', 'b3a9fee3c94f1f', '265cfdb3', {
    host: 'us-cdbr-iron-east-05.cleardb.net',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.sync()
    .then(function() {
        console.log('Connecion realizada');
    })
    .catch(function(err) {
        console.log('No se puede conectar a la bd:', err);
    }
);

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

//Datos mysql heroku : squema : heroku_2cf134b81f08a6b /usuario: b3a9fee3c94f1f /contraseña: 265cfdb3 /host: us-cdbr-iron-east-05.cleardb.net
