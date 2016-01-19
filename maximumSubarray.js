/* HW#1.C3
 * Maximum Subarray 함수 
 * 		- O(n^2) 알고리즘 구현
 *      - O(n log n) 알고리즘 구현
 *      - 위 두개의 결과가 같은지 확인하는 함수 구현
 * Copyright (c) 2015 030ii HELLO.
 */

/* O(n^2) */
 function findMaxSubarray_N2(array){
     if(!Array.isArray(array))	return;
     
     var max = array[0];
     for (var i = 0; i < array.length; i++){
         var currentMax=0;
         
         for (var j = i; j < array.length; j++){
             currentMax += array[j];
             
             if (currentMax > max){
             	max = currentMax;
         	}
         }
     }
     return max;
 }


 /* O(n log n) */
 function findMaxSubarray(array, left, right) {
   if(!Array.isArray(array) || left > right)	return;

   if (right - left <= 1)	return array[left];
   
   var middle = Math.floor((left + right) / 2);
   var leftSum = findMaxSubarray(array, left, middle);
   var rightSum = findMaxSubarray(array, middle + 1, right);
   var crossSum = findMaxCrossSubarray(array, left, middle, right);
   
   return Math.max(crossSum, leftSum, rightSum);
 }

/* cross 함수 */
 function findMaxCrossSubarray(array, left, middle, right) {
   var leftSum = -Infinity;
   var rightSum = -Infinity;
   var sum = 0;
   var i;

   for (i = middle; i >= left; i --) {
     sum += array[i];
     if (sum > leftSum) {
       leftSum = sum;
     } 
   }

   sum = 0;
   for (i = middle + 1; i <= right; i ++) {
     sum += array[i];
     if (sum > rightSum) {
       rightSum = sum;
     }
   }

   return leftSum + rightSum;
 }



 /* 테스트용 배열 */
 var arr1 = [];  // 원소 0개 // undefined
 var arr2 = [3]; // 원소 1개 // 3
 var arr3 = [4,-2]; // 원소 2개 // 4
 var arr4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4, 10, 3, -2, 5, 3, 6,-4, 0, 7, 2, -1];  //원소 20개 //6

 test(arr1);
 test(arr2);
 test(arr3);
 test(arr4);

 /* test하며 정렬의 성공/실패 여부를 확인하는 함수 */
 function test(array){
 	var result_n2 = findMaxSubarray_N2(array);
 	var result_nlogN = findMaxSubarray(array, 0, array.length - 1);

 	console.log("결과 : "+ result_n2 + "와 " + result_nlogN + "입니다.");
 	console.log(result_n2 == result_nlogN ? "결과가 같습니다" : "결과가 다릅니다");
 }
