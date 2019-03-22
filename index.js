// Code your solution in this file!
const logDriverNames = (drivers) => {
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
};

const logDriversByHometown = (drivers, location) => {
  drivers.forEach(function(driver){
    if(driver.hometown === location) {
      console.log(driver.name);
    }
  })
};

const driversByRevenue = (drivers) => {
  const driversCopy = [...drivers];
  driversCopy.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return driversCopy;
};

const driversByName = (drivers) => {
  const driversCopy = [...drivers];
  driversCopy.sort(function (a, b) {
    return (a.name > b.name) ? 1 : -1;
  });
  console.log(driversCopy);
  return driversCopy;
};


const totalRevenue = (drivers) => {
  let initialValue = 0;
  let sum = drivers.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue.revenue;
  }, initialValue);
  return sum
};

const averageRevenue = (drivers) => {
  const total = totalRevenue(drivers);
  return (total / drivers.length)
};
