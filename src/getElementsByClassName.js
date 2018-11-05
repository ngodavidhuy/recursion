// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  let result = [];
  let body = document.body;
  
  const helper = function (element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    
    if (element.childNodes) {
      for (let i = 0; i < element.childNodes.length; i++) {
        helper(element.childNodes[i]);
      }
    }
  };

  // for (let i = 0; i < body.childNodes.length; i++) {
    
  // }
  
  helper(body);
  
  return result;
};
