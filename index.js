// PREVIOUS CODE KEPT FOR STUDYING

// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
//     if (error) {
//         console.log("It didn't work!" , error);
//         return;
//     }

//     console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('24.141.241.185', (error, coords) => {
//     if (error) {
//         console.log("It didn't work!" , error);
//         return;
//     }

//     console.log('It worked! Returned Coordinates:' , coords);
// });

// const coordExample = { latitude: 43.6514, longitude: -79.9143 };

// fetchISSFlyOverTimes(coordExample, (error, passes) => {
//     if (error) {
//         console.log("It didn't work!" , error);
//         return;
//     }

//     console.log('It worked! Returned Fly Over Times:', passes);
// });

const { nextISSTimesForMyLocation } = require('./iss');

const passTimesList = function(passTime) {
    for (const pass of passTime) {
        const datetime = new Date(0);
        datetime.setUTCSeconds(pass.risetime);
        const duration = pass.duration;
        console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
};

nextISSTimesForMyLocation((error, passTime) => {
    if (error) {
        return console.log("It didn't work!", error);
    }
    passTimesList(passTime);
});