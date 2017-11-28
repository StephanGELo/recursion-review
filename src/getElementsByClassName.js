// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var ans = [];
  var test = function(ele) {
    if ((ele.classList !== undefined) && (ele.classList.contains(className))) {
      ans.push(ele);
    } 
    ele.childNodes.forEach(function(ele2) {
      test(ele2);
    }); 
  };
  
  test(document.body);
  return ans;
};