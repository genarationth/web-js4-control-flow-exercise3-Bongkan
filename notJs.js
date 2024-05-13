let dayNumber = 2;

if (dayNumber === 6 || dayNumber === 0) {
    if (dayNumber === 0) console.log("Sunday");
    else console.log("Saturday");
    console.log("It is the weekend!");
} else if (isNaN(dayNumber)) {
    console.log("Invalid day number");
} else {
    if (dayNumber === 1) console.log("Monday");
    else if (dayNumber === 2) console.log("Tuesday");
    else if (dayNumber === 3) console.log("Wednesday");
    else if (dayNumber === 4) console.log("Thursday");
    else if (dayNumber === 5) console.log("Friday");
    console.log("It is a weekday!");
}