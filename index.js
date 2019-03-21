// Code your solution in this file!
const logDriverNames = drivers => {
    drivers.forEach(driver => console.log(driver.name))
}
const logDriversByHometown = (drivers, hometown) => {
    drivers.forEach(driver => {
        if (driver.hometown === hometown) {
            console.log(driver.name)
        }
    });
}
const driversByRevenue = drivers => {
    revenueCompare = (driverOne, driverTwo) => driverOne.revenue - driverTwo.revenue

    return drivers.slice().sort(revenueCompare)
}
const driversByName = drivers => {
    nameCompare = (driverOne, driverTwo) => driverOne.name.localeCompare(driverTwo.name)

    return drivers.slice().sort(nameCompare)
}
const totalRevenue = drivers => {
    return drivers.reduce((total, driver) => {
        return driver.revenue + total
    }, 0)
}
const averageRevenue = drivers => {
    return totalRevenue(drivers) / drivers.length
}

// # First-Class Functions Practice Lab

// ## Objectives
// 1. Practice using forEach
// 2. Practice using sort
// 3. Practice using reduce

// ## Instructions
// Be sure to run the tests to get a feel for the types of problems this lab is
// asking you to solve.

// You'll be writing six functions:
// * `totalRevenue()` — Receives an array of `driver` objects and returns the sum of the revenue earned by each driver.
// * `averageRevenue()` — Receives an array of `driver` objects and returns the average revenue earned by each driver.

// ## Resources
// - [MDN: forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
// - [MDN: Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// - [MDN: Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

// <p class='util--hide'>View <a href='https://learn.co/lessons/js-advanced-first-class-functions-practice-lab'>First-Class Functions Practice Lab</a> on Learn.co and start learning to code for free.</p>
