// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';
  
  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'undefined' || obj === null) {
    result += obj;
  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } 
  
  if (Array.isArray(obj)) {
    if (obj.length < 1) {
      result += '[]';
    } else {
      result += '[';
      for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] === 'function') {
          result += null;
        } else {
          result += stringifyJSON(obj[i]);
        }
        if (obj.length > 1 && i !== obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
    }
  }
  
  if (!Array.isArray(obj) && typeof obj === 'object' && obj !== null) {
    let keys = Object.keys(obj);
    result += '{';
    for (let i = 0; i < keys.length; i++) {
      if (typeof obj[keys[i]] !== 'function' && typeof obj[keys[i]] !== 'undefined') {
        if (keys.length > 1 && i !== keys.length - 1) {
          result += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',';
        } else {
          result += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
        }
      }

    }
    result += '}';
  }
    
  return result;
  
  
  
};
