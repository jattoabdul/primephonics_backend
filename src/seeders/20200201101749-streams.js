const path = require('path');
const rawStreams = require('../../resources/streaming.json')
const rawUsers = require('../../resources/users.json')
const rawTracks = require('../../resources/tracks.json')

const calculateFee = (fee, origin) => {
  let newFee = Number(String(fee).replace(',', '.'));
  if (origin === 'app_store') {
    newFee = newFee * 0.7;
  } else if (origin === 'web') {
    newFee = newFee * 0.9;
  }
  return parseFloat((Math.round((newFee + Number.EPSILON) * 100) / 100).toFixed(2));
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let arrayOfDbStreams = [];

    for(let index=0; index<rawStreams.length; index++) {
      let currentStream = rawStreams[index];
      currentStream.seconds = Number(currentStream.seconds)
      let currentUser = rawUsers.find((eachUser) => eachUser.user_id === currentStream.user_id);
      currentUser.fee = calculateFee(
        currentUser.fee, currentUser.origin
        );
      let currentTrack = rawTracks.find((eachTrack) => eachTrack.track_id === currentStream.track_id);

      arrayOfDbStreams.push({
        ...currentStream,
        ...currentUser,
        ...currentTrack
      });
    };

  arrayOfDbStreams = arrayOfDbStreams.map((eachStream) => {
    eachStream.user_id = Number(eachStream.user_id);
    eachStream.track_name = eachStream['track name 1'];
    eachStream.track_label = eachStream['label 1'];
    eachStream.createdAt = new Date();
    eachStream.updatedAt = new Date();
    delete eachStream['track name 1'];
    delete eachStream['label 1'];

    return eachStream;
  });

    // insert data in streams DB as the last action
    return queryInterface.bulkInsert(
      'Streams',
      arrayOfDbStreams,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Streams',
      null,
      {}
    );
  }
};
