const fs = require('fs');
const targetPath = './config.js';
require('dotenv').config();

const envConfigFile = `module.exports = {
  mapsKey: '${process.env.MAPS_KEY}',
  base_url: '${process.env.BASE_URL}',
  photoBucketUrl: '${process.env.S3_BUCKET}',
  stripe_key: '${process.env.STRIPE_KEY}'
};
`;

fs.writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Config file generated correctly at ${targetPath} \n`);
  }
});
