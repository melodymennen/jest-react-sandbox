
module.exports = {
    myOtherFunc: (inc, val) => {
        if (isNaN(inc) || isNaN(val)){
            throw 'numbers only!'
        } else {
            return val + inc
        }
    }
}