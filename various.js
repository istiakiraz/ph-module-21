// module 21.07---->

function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0){
        // console.log("even");
        return true;
    }
    else{
        // console.log("odd");
        return false;
    }
    
}

console.log(evenSizeString("dhaka"));
console.log(evenSizeString("Faka"));

//  boolean parameter use --->

function doubleOrTriple(num , doDouble){
    if(doDouble === true){
        const result = num * 2;
        return result;
    }
    else{
        const result = num * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));
console.log(doubleOrTriple(5, "go"));
