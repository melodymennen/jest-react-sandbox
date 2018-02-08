const controller = require('./controller')


console.log('myOtherFunc(2, 2) expect 4:', controller.myOtherFunc(2, 2))
console.log('myOtherFunc(2, 4) expect 6:', controller.myOtherFunc(2, 4))
console.log('myOtherFunc(two, four) expect error:', controller.myOtherFunc('two', 'four'))
console.log('myOtherFunc(two, four) expect fourtwo:', controller.myOtherFunc('2', 4))

