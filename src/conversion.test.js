
import conversion from './conversion'

test('it should return conversion', () => {
    const resultado = conversion(20,'usd')
    expect(resultado).toBe(1)
})

test('it should return error message when value is negative', () => {
    const resultado = conversion(-1, 'usd')
    expect(resultado.error.message).toBe("the currency can't be negative")
})

test('it should return error message when currency is a string', () => {
    const resultado = conversion('x','usd')
    expect(resultado.error.message).toBe("the currency can't be string")
})

test('it should return error message when currency is null', () => {
    const resultado = conversion(null,'usd')
    expect(resultado.error.message).toBe("the currency can't be null")
})

test('it should return error message when parameters are empty', () => {
    const resultado = conversion()
    expect(resultado.error.message).toBe("Params are required")
})

test('it should return error message when currency is an object', () => {
    const resultado = conversion({},'usd')
    expect(resultado.error.message).toBe("the currency can't be an object")
})

test('it should return error message when currency is a function', () => {
    const resultado = conversion(() => {}, 'usd')
    expect(resultado.error.message).toBe("the currency can't be a function")
})

test('it should return error message when currency is a string', () => {
    const resultado = conversion(4, 6)
    expect(resultado.error.message).toBe("the target currency should be a string")
})

test('it should return error message when target currency is different than mxn or usd', () => {
    const resultado = conversion(4, 'yen')
    expect(resultado.error.message).toBe("the target currency should be equals to mxn or usd")
})