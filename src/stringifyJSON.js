// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
 
  if (Array.isArray(obj)) {
    var answer = [];
    for (var i = 0; i < obj.length; i++) {
      answer.push(stringifyJSON(obj[i]));
    }  
    return '[' + answer.join(',') + ']';
  }
 
  if (obj && typeof(obj) === 'object') {
    var answer2 = [];
    for (var k in obj) {
      if (obj[k] === undefined || typeof obj[k] === 'function') {
        continue;
      } 
      answer2.push(stringifyJSON(k) + ':' + stringifyJSON(obj[k]));
    }
    return '{' + answer2.join(',') + '}';
  }
 
  return '' + obj; 
};
