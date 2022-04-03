const fs = require('fs').promises;
const path = require('path');

const pathData = path.resolve(__dirname, 'db.json');

async function saveData(object) {
    try {
        fs.writeFile(pathData, JSON.stringify(object, null, 4), 'utf8');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { saveData };
