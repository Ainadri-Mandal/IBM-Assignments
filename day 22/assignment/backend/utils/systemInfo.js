const os = require('os');

const displaySystemInfo = () => {
    console.log(`Hostname: ${os.hostname()}`);
    console.log(`OS Type: ${os.type()}`);
    console.log(`Total Memory: ${os.totalmem()}`);
};

module.exports = { displaySystemInfo };