// var feed = require('feed-read-parser');
// // var NewsDatas = require('./data');
// var NewsDatas = [];
// feed("http://feeds.bbci.co.uk/vietnamese/rss.xml", function(err, articles) {
//   if (err) throw err;
//   // console.log(articles);
  
//   var i = 0;
//   while (i < articles.length){
//     NewsDatas.push({
//         title: articles[i].title,
//     });

//     i++;
//   }
// 	// console.log(NewsDatas);
// 	return NewsDatas;
    
// });

// console.log(NewsDatas);



// var parser = require('rss-parser');
// var data = [];
 
// parser.parseURL('http://feeds.bbci.co.uk/vietnamese/rss.xml', function(err, parsed) {
//   // console.log(parsed.feed.title);
//   parsed.feed.entries.forEach(function(entry) {
//   	// var i =0;
//   	// while(i < entry.length){
//   	// 	data.push({
//   	// 		title: entry.title
//   	// 	});
//   	// 	i++;
//   	// }
//   	data.push({
//   		title: entry.title
//   	});
//     // console.log(entry.title);
//   })
//   // console.log(data);
//   getData(data);
//   // console.log(data);
// })
// var source = [];
// function getData(dt){
// 	source = dt;

// 	console.log(dt);
// }

// getData(data);


// var fs = require("fs");
// var contents = fs.readFileSync("./data.txt", "utf8");
// // var jsonContent = JSON.parse(contents);
// var data = [];
// var it = contents.values();

// while(!(entry = it.next()).done()){
// 	console.log(entry.value);
// }

// console.log("User Name:", contents);

/*var http = require('http');
var fs = require('fs');
var file = fs.createWriteStream("data.xml");

var request = http.get("http://feeds.bbci.co.uk/vietnamese/rss.xml", function(response) {
	response.pipe(file);
});*/

/*var fs = require('fs');
var path = __dirname + "/data.xml";
var option = "utf8";
console.log(path);

fs.readFile(path, "utf8", function (err, data){
    if (err) {
    	console.log('error');
    }
    else {
    	console.log('readding');
    	console.log(data);
    }
});*/

var xmldom = require('xmldom').DOMParser,
    fs = require('fs');
var path_xml = __dirname + "/data.xml";
var path_js = __dirname + "/data.js";
var NewsDatas = [];
var data = null;

fs.readFile(path_xml, 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}

	var item,
		length;
	doc = new xmldom().parseFromString(data, 'application/xml');
	items = doc.getElementsByTagName('item');//[2].childNodes[0].nodeValue;
	length = doc.getElementsByTagName('item').length;

	// console.log(length);

	var i = 0;
	while (i < length){
		// titles = items[i].childNodes[0].nodeValue;// .getElementsByTagName('title');
		titles = items[i].getElementsByTagName('title');
		links = items[i].getElementsByTagName('link');

		title = titles[0].childNodes[0].nodeValue;
		link = links[0].childNodes[0].nodeValue;

		NewsDatas.push({
			title: title,
			content: link
		});
		// images = items[i].getElementsByTagName('media');
		// image = images[0].childNodes[0].nodeValue;

		// console.log(images[0].getAttribute('url'));

		// console.log(doc.getElementsByTagName('title')[i].childNodes[i].nodeValue);
		// console.log(items.getNamedItem);//.childNodes[i].firstChild);
		i++;
	}
	// console.log(NewsDatas);

	data = "const NewsDatas = " + JSON.stringify(NewsDatas) + "; module.exports = NewsDatas;";

	saveData(data);
	
});
function saveData(data){
	fs.writeFile(path_js, data, function (error){
		if (error) console.log('error');
		else console.log('success');
	});
}