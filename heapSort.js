var heapSort = (function () {
 
  function maxHeapify(arr, i, heapSize) {
    if (!Array.isArray(arr)) {
      console.log("It is not array");
      return;
    }

    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;
    if (left < heapSize && arr[left] > arr[i]) {
      largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      var temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      maxHeapify(arr, largest, heapSize);
    }
  }
  
  function buildMaxHeap(arr) {
    for (var i = Math.floor(arr.length / 2); i >= 0; i -= 1) {
      maxHeapify(arr, i, arr.length);
    }
    return arr;
  }
  
  return function (arr) {
    var size = arr.length;
    var temp;
    buildMaxHeap(arr);
    for (var i = arr.length - 1; i > 0; i -= 1) {
      temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      size -= 1;
      maxHeapify(arr, 0, size);
    }
    return arr;
  };
}());

//test
console.log(heapSort([])); // []
console.log(heapSort([2,1])); // [1, 2]
console.log(heapSort([1, 9, -3, 2, 7])); // [ -3, 1, 2, 7, 9 ]
console.log(heapSort([1, 9, -3, 2, 7, -5, 0, 4, 8, -1])); // [ -5, -3, -1, 0, 1, 2, 4, 7, 8, 9 ]