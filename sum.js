var sum = function(numbers) {

var total = 0

for (var i = 2; i < numbers.length; i++) {

	
	total += Number(numbers[i])
}
 return total
}

console.log(sum(process.argv))


