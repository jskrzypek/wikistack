var urlify = function urlify (url_name) {
	var url_name_arr = [];

  for (var i = 0; i < url_name.length; i++) {
    var charToAdd = url_name[i].toString();
    // if (i === 0) charToAdd = charToAdd.toUppercase();
    url_name_arr.push(
      (/[0-9A-Za-z]/.test(charToAdd)) 
        ? charToAdd 
        : ("%" + charToAdd.charCodeAt(0).toString(16))
        );
  };
  return url_name_arr.join('');
};

module.exports = urlify;