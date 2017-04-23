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

var http = require('http');
var fs = require('fs');
var file = fs.createWriteStream("data.xml");

var request = http.get("http://feeds.bbci.co.uk/vietnamese/rss.xml", function(response) {
	response.pipe(file);
});

fs.readFile('data.xml', (err, data) => {
    if (!err) {
    	console.log('readding file');
	    console.log(data);
    }
    else {
    	throw err;
    }
});