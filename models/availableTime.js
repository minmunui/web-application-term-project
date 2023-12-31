const { Model, DataTypes } = require("sequelize");

// AvailableTime 모델
class AvailableTime extends Model {
  static initiate(sequelize) {
    AvailableTime.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        groupId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        availableTime: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "AvailableTime",
        tableName: "available_times",
        paranoid: false,
      },
    );
  }

  static associate(db) {
    AvailableTime.belongsTo(db.User, { foreignKey: "userId", as: "user" });
    AvailableTime.belongsTo(db.Group, { foreignKey: "groupId", as: "group" });
  }
}

module.exports = AvailableTime;
