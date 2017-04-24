var http = require('http');
var fs = require('fs');
var file = fs.createWriteStream("../datas/data.xml");

var request = http.get("http://feeds.bbci.co.uk/vietnamese/rss.xml", function(response) {
	response.pipe(file);
});