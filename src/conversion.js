const conversion = (x, y) => {

    const exchangeRate = 20;

    if (x === null) {
        return {
            error: {
                message: "the currency can't be null"
            }
        }
    }

    if (x === undefined || y === undefined) {
        return {
            error: {
                message: "Params are required"
            }
        }
    }

    if (typeof y !== 'string') {
        return {
            error: {
                message: "the target currency should be a string"
            }
        }
    }

    if (y !== 'mxn' && y !== 'usd') {
        return {
            error: {
                message: "the target currency should be equals to mxn or usd"
            }
        }
    }

    if (typeof x === 'function') {
        return {
            error: {
                message: "the currency can't be a function"
            }
        }
    }

    if (typeof x === 'object') {
        return {
            error: {
                message: "the currency can't be an object"
            }
        }
    }

    if (isNaN(x)) {
        return {
            error: {
                message: "the currency can't be string"
            }
        }
    }

    if (x < 0) {
        return {
            error: {
                message: "the currency can't be negative"
            }
        }
    }


    if( y === 'usd' ){
        return x/exchangeRate;
    }

    return x*exchangeRate;
}

export default conversion;