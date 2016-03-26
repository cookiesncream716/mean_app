var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var Option = mongoose.model('Option');

module.exports= (function(){
	return{
		create: function(req, res){
			var poll = new Poll({name: req.body.name, question: req.body.question});
			poll.save(function(err, results){
				if(err){
					console.log('error saving poll')
				} else{
					Poll.findOne({_id: poll._id}, function(err, poll){
						var option1 = new Option({_poll: poll._id, option: req.body.option1});
						poll.options.push(option1);
						var option2 = new Option({_poll: poll._id, option: req.body.option2});
						poll.options.push(option2);
						var option3 = new Option({_poll: poll._id, option: req.body.option3});
						poll.options.push(option3);
						var option4 = new Option({_poll: poll._id, option: req.body.option4});
						poll.options.push(option4);
						option1.save(function(err){
							if(err){
								console.log(err);
							} else{
								console.log('saved')
							}
						})
						option2.save(function(err){
							if(err){
								console.log(err);
							} else{
								console.log('saved')
							}
						})
						option3.save(function(err){
							if(err){
								console.log(err);
							} else{
								console.log('saved')
							}
						})
						option4.save(function(err){
							if(err){
								console.log(err);
							} else{
								console.log('saved')
								poll.save(function(err, results){
									if(err){
										console.log(err)
									}else{
										console.log('final save')
										res.json(results)
									}
								})
							}
						})
					})
				}
			})
		},
		index: function(req, res){
			// console.log('finding polls')
			Poll.find({}, function(err, results){
				if(err){
					console.log(err)
				} else{
					res.json(results);
				}
			})
		},
		show: function(req, res){
			Poll.findOne({_id: req.params.id}).populate('options').exec(function(err, results){
				if(err){
					console.log(err)
				} else{
					res.json(results)
				}
			})
		},
		delete: function(req, res){
			Poll.remove({_id: req.params.id}, function(err,results){
				if(err){
					console.log(err)
				} else{
					res.json(results)
				}
			})
		}
	}
})();