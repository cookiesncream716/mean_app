var polls = require('./../controllers/polls.js');
var options = require('./../controllers/options.js');
// var comments = require('./../controllers/comments.js')

module.exports = function(app){
	app.post('/polls', function(req, res){
		polls.create(req, res)
	});
	app.get('/polls', function(req, res){
		polls.index(req, res)
	});
	app.post('/polls/:id', function(req, res){
		polls.show(req, res)
	});
	app.delete('/polls/:id', function(req, res){
		polls.delete(req, res)
	})
	app.post('/options/:id', function(req, res){
		options.update(req, res)
	});
}