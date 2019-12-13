const uuid = require("uuid/v4");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );

  User.beforeValidate(user => {
    user.id = uuid();
  });

  // User.associate = function(models) {
  //   // associations can be defined here
  // };

  return User;
};
