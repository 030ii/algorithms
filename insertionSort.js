/* HW#1.C1
 * Insertion Sort 함수 
 * 		기     능 : 정수 배열이 주어지면 오름차순으로 정렬한다.
 * 		테스트 방법 : 개수 0개, 1개, 2개, 20개 / 순서 증가순, 감소순, 랜덤, 동일한 숫자
 *           	   isSorted() 함수를 만들어 오름차순으로 정렬되어 있으면 1을 return, 아니면 0을 return
 * Copyright (c) 2015 030ii HELLO.
 */


/* 테스트용 배열 */
var arr1 = [];    // 원소 0개
var arr2 = [1];   // 원소 1개
var arr3 = [4,2]; // 원소 2개
var arr4 = [10,19,4,9,11,2,17,5,12,18,8,1,20,13,7,15,14,6,3,16]; // 원소 20개, 랜덤순
var arr5 = [1,2,3,3,5]; // 증가순, 동일한 숫자 
var arr6 = [5,4,3,2,1]; // 감소순
var arr7 = [1,1,1,1,1]; // 동일한 숫자


test(arr1);
test(arr2);
test(arr3);
test(arr4);
test(arr5);
test(arr6);
test(arr7);

/* test하며 정렬의 성공/실패 여부를 확인하는 함수 */
function test(arr){
	console.log("정렬 전 : " + arr);
	insertionSort(arr);
	if(isSorted(arr) == 1){
		console.log("정렬 후 : " + arr);
		console.log("===========정렬 성공===========");
	} else {
		console.log("정렬 후 : " + arr);
		console.log("===========정렬 실패===========");
	}
}



/* 오름차순으로 정렬되어 있는지 확인하는 함수 */
function isSorted(arr) {
	for (var i = 0; i < arr.length-1; i++){
		if (arr[i] > arr[i+1]) {
			return 0; // 정렬되지 않음
		} 
	}
	return 1; // 정렬됨 
}



/* Insertion Sort (삽입 정렬) */
function insertionSort(arr) {
	if (!Array.isArray(arr)) {
		console.log("It is not array");
		return;
	}

	for(var i=1; i<arr.length; i++) {
    	var key = arr[i];

    	for(j=i-1; j>=0 && arr[j]>key; j--) {
    		arr[j+1] = arr[j];
    	}
    	arr[j+1] = key;
  	}
};




/* insertion sort 손코딩 */
// function insertionSortHandCoding(arr){
// 	var key, i, j;

// 	if (!Array.isArray(arr)) {
// 		console.log("It is not array");
// 		return;
// 	}

// 	for(i = 1; i < arr.length; i++){
// 		key = arr[i]; // 비교대상

// 		for(j = i-1; j >= 0; j--){
// 			if(arr[j] > key){
// 				arr[j+1] = arr[j]; // key값보다 큰 수를 만나면 한칸씩 뒤로 옮겨준다  
// 			}
// 			else {
// 				break;
// 			}
// 		}
// 		arr[j+1] = key;
// 	}
// }

// var arr = [3,6,2,4,1,7];
// insertionSortHandCoding(arr);

