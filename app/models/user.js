var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var UserSchema = new Schema({

  name: String,
  email: String,
  text: String

});

module.exports = mongoose.model('User', UserSchema);

// {
// 		name: 'Eddie',
// 		email: '',
// 		text: '7864594881@vtext.com'
// 	}
