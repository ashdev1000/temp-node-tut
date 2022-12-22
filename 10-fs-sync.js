const {readFileSync,writeFileSync} = require('fs');//destructuring
console.log('start')
// the above code can be written as

// const fs = require('fs')
// fs.readFileSync
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second)

writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag:'a'})

console.log('Done with this task')
console.log('starting the next one')