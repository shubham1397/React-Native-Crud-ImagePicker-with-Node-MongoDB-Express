var mongoose = require('mongoose');
var schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);


let Data = new schema({

	name:{
		type:String
	},
	designation:{
		type:String
	},
	path:{
		type:String
	},

},{
	collection:'datas'
})



module.exports = mongoose.model('data',Data)