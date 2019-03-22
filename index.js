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
  let newDrivers = [...drivers];
  newDrivers.sort((a, b) => (a.revenue > b.revenue) ? 1: -1)
  return newDrivers;
}

function driversByName(drivers) {
  let newDrivers = [...drivers];
  newDrivers.sort((a, b) => (a.name > b.name) ? 1: -1)
  return newDrivers;
}

//this compares each entry with the preceeding entry and does this until it has gone through the assigned data. the 1's is about position swapping.

function logDriversByHometown(drivers) {
  drivers.forEach(element => {
    if(element.hometown == 'Pittsburgh') {
      console.log(element.name)
    }
  });
}

function totalRevenue(drivers) {
  const newDrivers = [...drivers];
  const result = newDrivers.reduce((sum, { revenue }) => sum + revenue, 0)
  return result;
}

function averageRevenue(drivers) {
  const newDrivers = [...drivers];
  const result = newDrivers.reduce((sum, { revenue }) => sum + revenue, 0)
  const avrResult = result/newDrivers.length
  return avrResult;
}

//spreading drivers, grabs revenue, sum is the first instance of the array which is being added to avrResults



