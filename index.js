// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(element => {
        console.log(element.name)
    });
}

function logDriversByHometown(drivers) {
    drivers.forEach(element => {
        if(element.hometown == 'Pittsburgh') {
        console.log(element.name)
        }
    });
}

function driversByRevenue(drivers) {
    driversCopy = [...drivers]
    driversCopy.sort((a, b) => (a.revenue > b.revenue) ? 1: -1)
    return driversCopy
}

function driversByName(drivers) {
    driversCopy = [...drivers]
    driversCopy.sort((a, b) => (a.name > b.name) ? 1: -1)
    return driversCopy
}

function totalRevenue(drivers) {
    driversCopy = [...drivers]
    driversCopy.reduce((a, b) => (a.revenue > b.revenue) ? 1: -1)
    return driversCopy
}

function totalRevenue(drivers) {
    const newDrivers = [...drivers];
    const result = newDrivers.reduce((sum, { revenue }) => sum + revenue, 0)
    return result;
}

function averageRevenue(drivers) {
    const newDrivers = [...drivers];
    const result = newDrivers.reduce((sum, { revenue }) => sum + revenue, 0)
    const averageResult = result/newDrivers.length
    return averageResult;
}