function calculateVAT(price) {
    if (typeof price !== 'number' || price < 0) {
        return "Invalid";
    }
    let VAT = price * 7.5 / 100;
    return VAT;
}

const result = calculateVAT(999 );
console.log(result);
