'use strict';

module.exports = (input) => {
    let result = 0;
    let a = input.toString().split("");
    for(let i=0; i<a.length; i++) {
        if (a[i] == a[(i + 1) % a.length])
            result += parseInt(a[i]);
    }
    return result;
}