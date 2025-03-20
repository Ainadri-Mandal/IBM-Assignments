const fs = require('fs');
const path = require('path');

const logRequest = (req, res, next) => {
    const log = `[${new Date().toISOString()}] ${req.method}: ${req.url}\n`;
    fs.appendFileSync(path.join(__dirname, 'server.log'), log);
    next();
};

module.exports = logRequest;