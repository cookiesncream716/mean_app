var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var Option = mongoose.model('Option');

module.exports= (function(){
	return{
		update: function(req, res){
			Option.update({_id: req.params.id}, {$inc: {votes: 1}}, function(err, results){
				if(err){
					console.log(err)
				} else{
					res.json(results)
				}
			})
		}
	}
})();