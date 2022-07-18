
let testing = require('./functions')

test('return fwo', () => {
    expect(testing.returnTwo()).toEqual(2)
})

describe('greeting', () => {
    test('greeting james', () => {
        expect(testing.greeting('James')).toEqual("Hello, James")
    })
    test('greeting jill', ()=> {
        expect(testing.greeting('Jill')).toEqual('Hello, Jill')
    })
})

describe('math functions', () => {

    test('add', () => {
        expect(testing.add(1,2)).toEqual(3)
    })
    test('subtract', () => {
        expect(testing.subtract(2,1)).toEqual(1)
    })
    test('multiply', () => {
        expect(testing.multiply(2,3)).toEqual(6)
    })
    test('divide', () => {
        expect(testing.divide(6,3)).toEqual(2)
    })
})