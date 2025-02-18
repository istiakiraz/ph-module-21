function willSuccess(marks) {
    if(!Array.isArray(marks)){
        return "Invalid"
    }

    let pass = 0;
    let fail = 0;


    for (const number of marks){
        if (number >=50 ){ pass++
        }
        else {
            fail++
        }
    }

    return pass > fail;

}

const num =85
const numbs = willSuccess(num);
console.log(numbs);