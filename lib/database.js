var mongoose = require('mongoose');
var config = require('./config');

module.exports.connect = function(){
    mongoose.connect(`mongodb://${config.mongo.username}:${config.mongo.password}@${config.mongo.host}:27017/${config.mongo.database}`, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('connected', function(){
      console.log("connected to db")
    })
}