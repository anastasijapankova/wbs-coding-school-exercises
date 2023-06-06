// https://www.youtube.com/watch?v=48ko-s_ePbc

const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 8;
            break;
        case "tuesday":
            return 7;
            break;
        case "wednesday":
            return 8;
            break;
        case "thursday":
            return 6;
            break;
        case "friday":
            return 7;
            break;
        case "saturday":
            return 9;
            break;
        case "sunday":
            return 9;
            break;

        default:
            return "Error!";
    }
};


const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

console.log(getActualSleepHours()); // total sleep hours that you actually slept

const getIdealSleepHours = () => {
    const idealHours = 10;
    return idealHours * 7;
}

console.log(getIdealSleepHours()); // the ideal sleep hours that you prefer

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You have the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You have more sleep than needed!');
    } else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s). You should get some rest!');
    }
}

console.log(calculateSleepDebt());





