console.log (isPrime(0));
function isPrime(num){
	let del = 0;
	for (let i=0; i<=Math.floor(num/2); i++){
		if (num%i==0) del++;
		if (del>1) return false;
	}
	if (del!=1) return false;
	return true;
};
