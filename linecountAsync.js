var fs = require('fs')

var notesText = fs.readFile(process.argv[2] , 'utf-8', function(err,data){

var lines = data.split('\n')

console.log(lines.length)

})


