var arr = [1,3,455,45,32,23,345,43,2,23,234,34];
quickSort(arr,0,arr.length);


function quickSort(arr,p,r){
	if (!Array.isArray(arr) || p>r) {return;};

	if(p<r){
		var q = partition(arr,p,r-1);
		quickSort(arr,p,q-1);
		quickSort(arr,q+1,r);
	}
}

function partition(arr,start,end){
	if (!Array.isArray(arr) || start>end) {return -1;};

	var pivot = arr[end];
	var endOfLow = start - 1;
	var checkPos, temp;

	for(checkPos = start; checkPos<end; checkPos++){
		if(arr[checkPos]<=pivot){
			endOfLow++;
			temp = arr[endOfLow];
			arr[endOfLow] = arr[checkPos];
			arr[checkPos] = temp;
		}
	}
	temp = arr[end];
	arr[end] = arr[endOfLow+1];
	arr[endOfLow+1] = temp;

	return endOfLow+1;
}
