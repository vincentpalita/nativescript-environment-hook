'use strict'

const path = require('path');
const fs = require('fs');

module.exports = function($projectData) {

  const appPath = $projectData.appDirectoryPath;
  const $options = $projectData.$options;

  const options = {
    NODE_ENV: process.env.NODE_ENV,
    environment: $options.argv.environment
  };

  const config = path.join(appPath, 'environment-info.json');

  return new Promise((resolve, reject) => {

    fs.writeFile(config, JSON.stringify(options, null, 2), err => {

      if (err) {
        return reject(err);
      }

      console.log('Successfully created:', config);

      resolve(config);
    });

  });

};
