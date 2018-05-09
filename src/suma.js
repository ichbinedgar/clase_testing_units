const suma = (x, y) => {

    if (x === null || y === null) {
        return {
            error: {
                message: "It can´t sum null values"
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

    if (typeof x === 'function' || typeof y === 'function') {
        return {
            error: {
                message: "It can´t sum functions"
            }
        }
    }

    if (typeof x === 'object' || typeof y === 'object') {
        return {
            error: {
                message: "It can´t sum objects"
            }
        }
    }

    if(x < 0 || y < 0){
        return {
            error: {
                message: "It can´t add negative numbers"
            }
        }
    }

    if (isNaN(x) || isNaN(y)) {
        return {
            error: {
                message: "It can´t sum strings"
            }
        }
    }

    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return {
            error: {
                message: "It can´t sum float numbers"
            }
        }
    }

    return x+y;
}

module.exports = suma;