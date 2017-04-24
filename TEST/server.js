var xmldom = require('xmldom').DOMParser,
    fs = require('fs');
var path = __dirname + "/books.xml";

fs.readFile(path, 'utf-8', function (err, data) {
  if (err) {
    throw err;
  }
  var genreno,
      thisgenreobject,
      thisgenre,
      doc,
      genres;
  doc = new xmldom().parseFromString(data, 'application/xml');
  genres = doc.getElementsByTagName('genre');
  for (genreno in genres) {
    thisgenreobject = genres[genreno];
    if (thisgenreobject.firstChild) {
      thisgenre = thisgenreobject.firstChild.nodeValue;
      if (thisgenre === 'Computer') {
        console.log(thisgenreobject.parentNode.getElementsByTagName('title')[0].firstChild.nodeValue);
      }
    }
  }
});