// FUNCTION VERSION
var sum = function(numbers) {

var total = 0

for (var i = 2; i < numbers.length; i++) {

	
	total += Number(numbers[i])
}
 return total
}

console.log(sum(process.argv))







//NON FUNCTION VERSION

var total = 0

for (var i = 2; i < process.argv.length; i++) {

	total += Number(process.argv[i])
}

console.log(total)


