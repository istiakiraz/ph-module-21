function validContact(contact) {
    
    if (contact.length == 11 && contact[0] == 0 && contact[1] == 1  && !isNaN(contact) ) {
        return true;
    }
    else if (contact.length !== 1 && contact !== true && contact !== false && typeof contact !== 'number') {
        return false;
    }

    return "Invalid"


}

const nums = validContact("01819234567" )
console.log(nums);
