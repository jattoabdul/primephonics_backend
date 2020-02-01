module.exports = (sequelize, DataTypes) => {
  const Stream = sequelize.define('Stream', {
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    product_type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    fee: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
    },
    origin: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    region: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    track_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    track_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    track_label: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    seconds: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  return Stream;
};