function threeSum(arr, target) {
// write your code here
	arr.sort();

	let diff = Number.MAX_SAFE_INTEGER;

	let ans = 0;
	let n= arr.length();
	for(let i = 0;i<arr.length()-2;i++){

		let  j = i+1;
		let k = n-1;

		while(j< k && k< n){
			let sum = arr[i] + arr[j] + arr[k];
			if(sum === target)
			{
				return sum;
			}
			else if(Math.abs(sum - target) < diff)
			{
				diff = Math.abs(sum - target);
				ans = sum;
			}
			else if(sum < target){
				j++;
			}
			else{
				k--;
			}
		}
	}

	return ans;
  
}

module.exports = threeSum;
