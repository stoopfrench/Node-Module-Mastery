
var fs = require('fs')

var notesText = fs.readFileSync(process.argv[2] , 'utf-8')

var lines = notesText.split('\n')

console.log(lines.length)

