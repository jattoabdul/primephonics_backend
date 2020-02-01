'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // NB: stream object schema
    // date: DATEONLY
    // user_id: INTEGER
    // product_type: STRING
    // fee: DECIMAL
    // origin: STRING
    // region: STRING
    // track_id: UUID
    // track_name: STRING
    // track_label: STRING
    // seconds: INTEGER
    // createdAt : new Date(),
    //   updatedAt : new Date(),
  
    const arrayOfStreams = [];
    // TODO: Manipulate data from streaming.csv, users.csv and https://primephonic-assignments.s3-eu-west-1.amazonaws.com/backend-task/tracks.json
    // push data in to arrayOfStreams

    return queryInterface.bulkInsert(
      'Users',
      arrayOfStreams,
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
