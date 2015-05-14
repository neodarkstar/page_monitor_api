var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ItemSchema   = new Schema({
    active: Boolean,
    api: String,
    item: {
      name: String,
      id: String,
      dpci: String
    },
    notify: [String],
    results: String,
    selector: String,
    store: String,
    url: String,
    lastChecked: Date,
    available: Boolean
});

module.exports = mongoose.model('Item', ItemSchema);

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
