module.exports = function check(str, config) {
  var newConfig = [];
  config.forEach(function(elem) {
    newConfig.push(elem.join(''));
  });

  var search= 1, l;

  while(search ) {
    search = 0;
    newConfig.forEach(function(elem) {
      l = str.length;
      str = str.replace(elem, '' );
       if( l > str.length) search++;
    });
  }

  return str.length == 0;
}


