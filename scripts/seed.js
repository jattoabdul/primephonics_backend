import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const rawStreams = [];
const rawUsers = [];
const trackUrl = 'https://primephonic-assignments.s3-eu-west-1.amazonaws.com/backend-task/tracks.json';
const settings = { method: 'Get' };

const writeToFile = (jsonContent, fileName = 'output.json') => {
    return fs.writeFile(
      `resources/${fileName}`,
      jsonContent,
      'utf8',
      (err) => {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log(`${fileName.toUpperCase()} file has been saved.`);
    });
}

// Fetch track data from trackUrl
fetch(trackUrl, settings)
  .then(res => res.json())
  .then((json) => {
    writeToFile(JSON.stringify(json), 'tracks.json')
  });

// Fetch stream data from stream.csv
fs.createReadStream(path.join(__dirname, '../resources/streaming.csv'))
.pipe(csv({
  separator: ';',
  mapHeaders: ({ header }) => header.replace(' ', '_')
}))
.on('data', (data) => rawStreams.push(data))
.on('end', async () => {
  writeToFile(JSON.stringify(rawStreams), 'streaming.json')
});

// Fetch users data from users.csv
fs.createReadStream(path.join(__dirname, '../resources/users.csv'))
    .pipe(csv({
      separator: ';',
      mapHeaders: ({ header }) => header.replace(' ', '_')
    }))
    .on('data', (data) => rawUsers.push(data))
    .on('end', () => {
      writeToFile(JSON.stringify(rawUsers), 'users.json')
    });