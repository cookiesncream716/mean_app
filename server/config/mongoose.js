var mongoose = require('mongoose');
var fs = require('fs');

// replace DB_NAME with database name for project
// mongoose.connect('mongodb://localhost/DB_NAME');

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('js') > 0){
		require(models_path + '/' + file);
	};
});