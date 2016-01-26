var radixSort = (function () {

var getDigit = function (number, lsdOffset) {
  var size = number.toString().length;
  var digit;
  if (lsdOffset >= 0 && lsdOffset < size) {
    digit = number.toString()[size - 1 - lsdOffset];
  }
  return digit;
};

return function (array) {
  var size = array.length;
  var R = 10;   
  var count;
  var digit;
  var i;
  var j;
  var maxKeySize = (array[0] || '').toString().length;
  for (i = 1; i < size; i += 1) {
    var numStr = array[i].toString();
    if (numStr.length > maxKeySize) {
      maxKeySize = numStr.length;
    }
  }
  for (i = 0; i < maxKeySize; i += 1) {
    count = [];
    
    for (j = 0; j < R; j += 1) {
      count[j] = 0;
    }
    
    for (j = 0; j < size; j += 1) {
      digit = getDigit(array[j], i) || 0;
      count[digit] += 1;
    }
    
    for (j = 1; j < R; j += 1) {
      count[j] += count[j - 1];
    }
    
    var aux = [];
    for (j = size - 1; j >= 0; j -= 1) {
      digit = getDigit(array[j], i) || 0;
      count[digit] -= 1;
      aux[count[digit]] = array[j];
    }
    
    for (j = 0; j < size; j += 1) {
      array[j] = aux[j];
    }
  }
  return array;
};
})();


var sort = radixSort;
console.log(sort([2, 5, 1, 3, 4])); // [ 1, 2, 3, 4, 5 ]
