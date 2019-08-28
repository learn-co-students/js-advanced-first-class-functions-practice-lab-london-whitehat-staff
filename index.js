// Code your solution in this file!
function logDriverNames(arrOfDrivers) {
  arrOfDrivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometownStr) {
  logDriverNames(drivers.filter(driver => driver.hometown === hometownStr))
}

function driversByRevenue(drivers) {
  return [... drivers].sort(({ revenue: firstRevenue }, { revenue: secondRevenue }) => (
    firstRevenue < secondRevenue
      ? -1
      : firstRevenue === secondRevenue
        ? 0
        : 1
  ))
}

function driversByName(drivers) {
  return [...drivers].sort(({ name: nameOne }, { name: nameTwo }) => (
    nameOne.localeCompare(nameTwo)
  ))
}

function totalRevenue(drivers) {
  return drivers.reduce((acc, { revenue }) => acc + revenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}