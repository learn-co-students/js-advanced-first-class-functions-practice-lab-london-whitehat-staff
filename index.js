// Code your solution in this file!
function logDriverNames(drivers) {
drivers.forEach(driver => {
    console.log(driver.name)
});
}

function logDriversByHometown(drivers, townName) {
    const results = drivers.filter( 
        driver => driver.hometown === townName);
    results.forEach(result => {
        console.log(result.name)
    });
}

function driversByRevenue(drivers) {
    let sortedDrivers = [...drivers].sort(function(a,b) {
        return a.revenue - b.revenue;
    })
    return sortedDrivers
}

function driversByName(drivers) {
    let sortedDrivers = [...drivers].sort(function(a,b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });  
    return sortedDrivers
}

function totalRevenue(drivers) {
    const reducer = function (sum, driver) {
        return sum + driver.revenue;
      };  
        return drivers.reduce(reducer,0)
}

function averageRevenue(drivers) {
    const reducer = function (sum, driver) {
        return sum + driver.revenue;
      };  
        let total = drivers.reduce(reducer,0)
        return total/drivers.length
}