const { nextISSTimesForMyLocation } = require('./issPromised');
const { fetchISSFlyOverTimes } = require('./issPromised');
const { fetchCoordsByIP } = require('./issPromised');
const { fetchMyIP } = require('./issPromised');

const passTimesList = function(passTime) {
  for (const pass of passTime) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTime) => {
    passTimesList(passTime);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));