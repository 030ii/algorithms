function counting(arr, result,max){ 
	if (!Array.isArray(arr) || !Array.isArray(result)) {
		console.log("It is not array");
		return;
	}

	// max = maxValue를 뜻함 
	var count = new Array(max);
	for(var i = 0; i < count.length; i++){
		count[i]=0;
	}

	for(var i = 0; i< arr.length; i++){
		count[arr[i]]++;
	}
	for(var i =1; i<count.length;i++){
		count[i]+=count[i-1];
	}
	for(var i = arr.length-1;i>=0;i--){
		result[count[arr[i]]-1]=arr[i];
		count[arr[i]]--;
	}
	return result;
}