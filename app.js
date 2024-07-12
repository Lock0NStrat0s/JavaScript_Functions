window.onload = function() {
    // Exercise 1
    printOdds(14)

    // Exercise 2
    checkAge("blob", 22)

    // Exercise 3
    console.log(triangleType(3, 4, 2))

    // Exercise 4
    DataPlanStatus(100,15,56)
}


console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) console.log(i)
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
    let aboveSixteen = `Congrats ${name}, you can drive!`
    let belowSixteen = `Sorry ${name}, but you need to wait until you're 16.`
    if (age < 16) console.log(belowSixteen)
    else console.log(aboveSixteen)
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function triangleType(s1, s2, s3) {
    if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
        if (s1 == s2 && s1 == s3) return "Equilateral"
        else if (s1 == s2 || s1 == s3 || s2 == s3) return "Isosceles"
        else return "Scalene"
    }
    else return "Invalid Triangle"
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function DataPlanStatus(planLimit, days, usage) {
    let daysLeft = 30 - days
    console.log(`${days} days used, ${daysLeft} days remaining`)

    let avgDailyUsage = planLimit / 30
    console.log(`Average Daily Use: ${avgDailyUsage} GB/day`)

    let actualDailyUsage = usage / days;
    let ifUsageContinuesLimit = actualDailyUsage * 30 - planLimit
    let useNoMoreThanRate = (planLimit - usage) / daysLeft
    if (actualDailyUsage > avgDailyUsage) {
        console.log(`You are EXCEEDING your average daily use (${actualDailyUsage} GB/day), continuing this high usage, you'll exceed your data plan by ${ifUsageContinuesLimit} GB.\nTo stay below your data plan, use no more than ${useNoMoreThanRate} GB/day.`)
    }
    else {
        console.log("You are under your daily limit of data usage.")
    }
}