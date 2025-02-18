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

const bor1 = { name: "bjoy", gender: "male", age: 32 }
const bow2 = { name: "toya", gender: "female", age: 24 }

const output = validProposal(bor1, bow2)
console.log(output);