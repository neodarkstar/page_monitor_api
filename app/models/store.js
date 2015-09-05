var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({
  {
    name: String
    active: Boolean
    id: String,
    api: String,
    notify : [String],
    results: String,
    selector: String,
    url: String,
    lastChecked: Date,
    lastAvailable: Date,
    available: Boolean
  }
});



// {
//   name: 'Target',
//   active: true,
//   id: '207-00-5039',
//   notify : [],
//   results: '',
//   selector: '',
//   url: 'http://www.target.com/p/nintendo-lucina-amiibo-figure/-/A-17318489'
// }

// {
// 		active: true,
// 		api: 'target',
// 		item: {
// 			name: 'Lucina',
// 			id: '17318489',
// 			dpci: '207-00-5039'
// 		},
// 		notify : ['John', 'Eddie', 'Raidel'],
// 		results: '',
// 		selector: '.butonblock',
// 		store: 'Target',
// 		url: 'http://www.target.com/p/nintendo-lucina-amiibo-figure/-/A-17318489'
// 	}
