const fs = require('fs');
const path = require('path');

const readProducts = () => {
    const data = fs.readFileSync(path.join(__dirname, '../products.json'));
    return JSON.parse(data);
};

const writeProducts = (products) => {
    fs.writeFileSync(
        path.join(__dirname, '../products.json'),
        JSON.stringify(products, null, 2)
    );
};

module.exports = { readProducts, writeProducts };