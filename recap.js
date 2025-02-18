// module 21.06---->

function add(price1, price2) {
    const total = price1 + price2;
    return total;
}

const bill = add(55, 80);
console.log(bill);

// only return use-->

function add2(price1, price2) {
    return price1 + price2;

}

const bill2 = add2(56, 4);
console.log(bill2);

// ------->

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multi = sum * diff;
    const result = multi / 2;
    return result;
}

const output = doMath(10, 5)
console.log(output);

// ------->

function isOdd(num) {
    if (num % 2 === 1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isOdd(45));
console.log(isOdd(22));