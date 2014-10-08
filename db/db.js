var mysql = require('mysql');
var settings = require('../settings');
var pool = mysql.createPool(settings.dbOptions);

module.exports.exec = function(sql, callback){
    this.getConnection(function (err, connection){
        connection.query(sql, function (){
            callback.apply(connection, arguments);
            connection.release();
        });
    })
}.bind(pool);