const request = require('request');

const fetchMyIP = function(callback) {

    const url = `https://api.ipify.org?format=json`

    request(url, (error, response, body) => {
        if (error) {
            callback(error, null)
        }
        if (response.statusCode !== 200) {
            callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
            return;
        }
        const ip = JSON.parse(body).ip;
        if (ip) {
            callback(null, ip)

        }
    });
}

const fetchCoordsByIP = function(ip, callback) {

    request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }
        if (response.statusCode !== 200) {
            callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
            return;
        }
        const { latitude, longitude } = JSON.parse(body);

        callback(null, { latitude, longitude });
    });
}

const fetchISSFlyOverTimes = function(coords, callback) {
    const url = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

    request(url, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }

        if (response.statusCode !== 200) {
            callback(Error(`Status Code ${response.statusCode} when fetching Fly Over Times with Coordinates: ${body}`), null);
            return;
        }

        const passOver = JSON.parse(body).response;

        callback(null, passOver);
    });
}

module.exports = {
    fetchMyIP,
    fetchCoordsByIP,
    fetchISSFlyOverTimes
};