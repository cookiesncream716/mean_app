var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var lengthValidator = [
	validate({
		validator: 'isLength',
		arguments: [3, 50],
		message: 'Option must be 8-50 characters in lenght'
	})
]

var OptionSchema = new mongoose.Schema({
	_poll: [{type: Schema.Types.ObjectId, ref: 'Poll'}],
	option: {type: String, required: true, validate: lengthValidator},
	votes: {type: Number, default: 0},
	created_at: {type: Date, default: new Date}
})
mongoose.model('Option', OptionSchema);