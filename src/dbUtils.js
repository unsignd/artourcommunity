const fs = require('fs');
const path = require('path');

const readDb = (dbPath) => {
  const targetPath = path.join(__dirname, dbPath);
  const data = fs.readFileSync(targetPath);
  return JSON.parse(data);
};

const writeDb = (data, dbPath) => {
  const targetPath = path.join(__dirname, dbPath);
  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
};

module.exports = { readDb, writeDb };