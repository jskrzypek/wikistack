// Setting custom filters on Swig



module.exports = function(swig) {
  // var page_link = function (doc) {
  //   var link_name;
  //   if (typeof doc.url_name !== "undefined" && doc.url_name !== "") {
  //     link_name = doc.url_name;
  //   } else {
  //     link_name = "Untitled Page";
  //   }
  //   return "<a href='/wiki/"+doc.url_name+"'>"+link_name+"</a>";
  // };
  // page_link.safe = true;

  var marked = require('marked');
  // Async highlighting with pygmentize-bundled
  // marked.setOptions({
  //   highlight: function (code, lang, callback) {
  //     require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
  //       callback(err, result.toString());
  //     });
  //   }
  // });
  var markedFilter = function (body) {
    return marked(body);
  };
  markedFilter.safe = true;

  swig.setFilter('marked', markedFilter);
  // swig.setFilter('page_link', page_link);
};