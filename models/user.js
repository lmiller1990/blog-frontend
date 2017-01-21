'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
    instanceMethods: {
      sayHi: function(models) {
        console.log('Hi, my name is', this.username)
        return this.username
      }
    }
  });
  return User;
};

