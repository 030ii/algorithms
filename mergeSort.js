/* HW#1.C2
 * Merge Sort 함수 
 *      기     능 : 정수 배열이 주어지면 오름차순으로 정렬한다.
 *      테스트 방법 : 개수 0개, 1개, 2개, 20개 / 순서 증가순, 감소순, 랜덤, 동일한 숫자
 *                 isSorted() 함수를 만들어 오름차순으로 정렬되어 있으면 1을 return, 아니면 0을 return
 * 
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
    var result = mergeSort(arr);
    if(isSorted(result) == 1){
        console.log("정렬 후 : " + result);
        console.log("===========정렬 성공===========");
    } else {
        console.log("정렬 후 : " + result);
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


 /* Merge Sort (병합 정렬) */
function mergeSort (arr) {    
    if (arr.length < 2) return arr;
    
    var mid = Math.floor(arr.length /2);       // 현재의 배열 길이를 반으로 분할하는 과정
    var subLeft = mergeSort(arr.slice(0,mid)); // 왼쪽 배열을 재귀적으로 반복하며 분할 
    var subRight = mergeSort(arr.slice(mid));  // 오른쪽 배열을 재귀적으로 반복하며 분할  
    
    return merge(subLeft, subRight);
}

/* merge 함수 */
function merge (left,right) {
    var result = [];
    while (left.length >0 && right.length >0){ 
        result.push(left[0] < right[0]? left.shift() : right.shift());
    }
    return result.concat(left.length? left : right); 
}

/*
 * merge 함수 작동 방식 
 *      입력 : 정렬된 2개의 배열(left배열과 right배열)
 *      출력 : 정렬된 새로운 결과 배열 생성 
 *      -> 정렬된 2개의 배열 각각의 맨 앞에 있는 원소끼리 비교하여 더 작은 원소를 결과 배열에 저장 
 *      -> 위 작업을 2개의 배열의 모든 원소들을 결과 배열에 저장할 때까지 반복 
 */

/*
 * merge 함수 코드 설명
 *
 * 삼항 연산자의 조건식 : 맨 앞에 있는 요소끼리 비교함. 
 *      - 조건식이 참일 경우, left배열에서 맨 앞 원소를 제거하고, 동시에 제거하고자 하는 원소를 반환함.
 *      - 조건식이 거짓일 경우, right배열에서 ~~~(생략)~~~.
 *      삼항 연산자의 결과로 반환된 원소는 result배열에 push된다.
 *
 * JS 문법 참고 :
 *      - push()는 배열의 끝에 요소를 추가하는 함수
 *      - shift()는 배열의 앞에 요소를 제거하는 함수(제거와 동시에 나머지 요소들은 알아서 앞으로 한칸씩 이동됨), 동시에 제거하고자 하는 원소를 반환 
 *      - concat()은 뒤에 합쳐주는 함수 ex. [1,2].concat([3,4]);  -> [1,2,3,4]가 됨 
 */