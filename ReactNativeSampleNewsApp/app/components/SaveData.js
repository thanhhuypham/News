var xmldom = require('xmldom').DOMParser,
    fs = require('fs');
var path_xml = "../datas/data.xml";
var path_js = "../datas/data.js";
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

	var i = 0;
	while (i < length){
		titles = items[i].getElementsByTagName('title');
		links = items[i].getElementsByTagName('link');

		title = titles[0].childNodes[0].nodeValue;
		link = links[0].childNodes[0].nodeValue;

		NewsDatas.push({
			title: title,
			content: link
		});

		i++;
	}

	data = "const NewsDatas = " + JSON.stringify(NewsDatas) + "; module.exports = NewsDatas;";

	saveData(data);
	
});
function saveData(data){
	fs.writeFile(path_js, data, function (error){
		if (error) console.log('error');
		else console.log('success');
	});
}