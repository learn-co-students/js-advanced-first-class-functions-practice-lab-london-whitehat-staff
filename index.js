// Code your solution in this file!
const logDriverNames = drivers => {
  for(const driver of drivers) {
    console.log(driver.name);
  }
}

const logDriversByHometown = (drivers, town) => {
  for(const driver of drivers) {
    if(driver.hometown === town) {
      console.log(driver.name);
    }
  }
}

const driversByRevenue = drivers => {
  return drivers.slice().sort((driver1, driver2) => {
    return driver1.revenue - driver2.revenue;
  });
}

const driversByName = drivers => {
  return drivers.slice().sort((driver1, driver2) => {
    return driver1.name.localeCompare(driver2.name);
  });
}

const totalRevenue = drivers => {
  return drivers.reduce((total, driver) => {
    return total + (driver.revenue);
  }, 0);
}

const averageRevenue = drivers => {
  return totalRevenue(drivers)/drivers.length;
}
