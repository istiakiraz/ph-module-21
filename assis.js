function calculateVAT(price) {
    if (typeof price !== 'number' || price < 0) {
        return "Invalid";
    }
    let VAT = price * 7.5 / 100;
    return VAT;
}


function validContact(contact) {
    
    if (contact.length == 11 && contact[0] == 0 && contact[1] == 1  && !isNaN(contact) ) {
        return true;
    }
    else if (contact.length !== 1 && contact !== true && contact !== false && typeof contact !== 'number') {
        return false;
    }

    return "Invalid"

}


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


function validProposal(person1, person2) {
    
    if (typeof person1 === "object" && typeof person2 === "object" && !Array.isArray(person1) && !Array.isArray(person2)) {

        if (person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7) {
            return true;
        }
        else {
            return false;
        }

    }
    else {
        return "Invalid"

    }
}

function calculateSleepTime(times) {
    if(!Array.isArray(times)){ 
        return "Invalid"
    }

    let sum = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid"
        }
        sum = sum + times[i]
    }
    const hours = Math.floor(sum / 3600);
    const minutes = Math.floor((sum - (hours * 3600)) / 60);
    const seconds = sum - (hours * 3600) - (minutes* 60);
    const object = {
        hour : hours,
        minute : minutes,
        second : seconds
    }
    return object;
}
