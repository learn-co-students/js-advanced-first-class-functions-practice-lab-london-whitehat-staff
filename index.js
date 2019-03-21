// Code your solution in this file!
function logDriverNames(driver){
    driver.forEach(driver => {
        console.log(driver.name)
    });
}

function logDriversByHometown(driver, location){
    driver.forEach(driver => {
        if(driver.hometown === location){
            console.log(driver.name)
        }
    })
}

function driversByRevenue(driver){
    return driver.slice().sort(function (driverOne, driverTwo) {
      return driverOne.revenue - driverTwo.revenue;
    });
}


  
function driversByName(drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.name.localeCompare(driverTwo.name);
    });
  };
  
  function totalRevenue(driver) {
    return driver.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };

  
function averageRevenue(driver) {
    return totalRevenue(driver) / driver.length;
  };