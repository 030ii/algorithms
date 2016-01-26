/*
 * 2015.11.24.화요일 수업시간.
 * 2번째 ppt 104쪽
 * <순위 추출 Problem>
 * - 입력
 * 		- N명 학생들의 점수(0점~100점)를 저장한 정수 배열
 * - 출력
 * 		- O(n)에 각 학생의 등수를 계산
 * - 예제
 * 		- 입력 배열: 10, 90, 80, 85 (점수) 
 * 		- 출력 배열: 4, 1, 3, 2 (순위)
 * - 손코딩 (C-style API)
 * 		- int calculateRanks (int *score, int *rank, int totalNum);
 */

var rank = [];
var score = [ 10, 90, 80, 85];
var totalNum = score.length;

calculateRanks(score, rank, totalNum);
console.log(rank);

function calculateRanks(score, rank, totalNum){
	/* 방어 코드 */ 
	if(score === undefined || rank === undefined || totalNum === undefined) return;


	/* 점수를 counting할 배열 선언 및 초기화 */
	var countScore = [];
	countScore.length = 101;
	for(var i = 0; i < countScore.length; i++){
		countScore[i] = 0;
	}

	/* 누적 변수 */
	var rankSum = 1;

	/* 임시로 저장할 변수 */
	var temp;

	/* countScore 배열에서 각 점수마다 카운트 1증가  (같은 점수에 몇명이 있는지) */
	for(var i = 0; i < totalNum; i++){
		countScore[score[i]]++;
	}

	/* countScore 배열에서 각 점수마다 누적수로 바꿈 */
	for(var i = 100; i >= 0; i--){
		if(countScore[i] > 0){
			temp = countScore[i];
			countScore[i] = rankSum;
			rankSum += temp;
		}
	}

	/* rank배열 대입 */
	for(var i = 0; i < totalNum; i++){
		rank[i] = countScore[score[i]];
	}
}