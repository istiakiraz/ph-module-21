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
const times = [100, 3800, "90" ] 
const time = calculateSleepTime(times);
console.log(time);