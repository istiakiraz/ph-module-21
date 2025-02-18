function validContact(contact) {

    if(typeof contact === "string"){   
        
        console.log(contact.length);
        if (contact.length == 11 && contact[0] == 0 && contact[1] == 1  && !isNaN(contact) && !contact.includes(" ") ) {
        return true;
    }
    else if (contact.length !== 1 && typeof contact !== 'number') {
        return false;
    }
    }
    
  
    return "Invalid";

}


const nums = validContact("01845354545")
console.log(nums);
