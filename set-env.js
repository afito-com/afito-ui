const fs = require('fs');
const targetPath = './config.js';
require('dotenv').config();

const envConfigFile = `module.exports = {
  mapsKey: '${process.env.MAPS_KEY}',
  base_url: '${process.env.BASE_URL}'
};
`;

fs.writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Config file generated correctly at ${targetPath} \n`);
  }
});
