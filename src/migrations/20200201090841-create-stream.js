module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Streams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      product_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      fee: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      origin: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      region: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      track_id: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      track_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      track_label: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      seconds: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Streams');
  }
};