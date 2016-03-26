var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var lengthValidator = [
	validate({
		validator: 'isLength',
		arguments: [8, 100],
		message: 'Question must be 8-100 characters in lenght'
	})
]

var PollSchema = new mongoose.Schema({
	name: String,
	question: {type: String, required: true, validate: lengthValidator},
	options: [{type: Schema.Types.ObjectId, ref: 'Option'}],
	created_at: {type: Date, default: new Date}
});
mongoose.model('Poll', PollSchema);