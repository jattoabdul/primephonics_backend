// https://primephonic-assignments.s3-eu-west-1.amazonaws.com/backend-task/tracks.json

import { readFileSync } from 'fs';
import { join as pathJoin } from 'path';

const streamingRaw = readFileSync(pathJoin(__dirname, '../resources/streaming.csv'));

console.log(streamingRaw);
