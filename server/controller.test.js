const controller = require('./controller')

test('adds 2 + 2', () => {
    expect(controller.myOtherFunc(2,2)).toBe(4)
})

test('adds 2 + 4', () => {
    expect(controller.myOtherFunc(2,4)).toBe(6)
})

// test('adds two to four', () => {
//     expect(controller.myOtherFunc('two','four')).toThrow('numbers only!')
// })

// test('adds incrementor to a value', () => {
//     expect(controller.myOtherFunc(2,2)).toBe(4)
// })