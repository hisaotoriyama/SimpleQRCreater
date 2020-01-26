'use strict';
module.exports = (sequelize, DataTypes) => {
  const allstatusdata = sequelize.define('allstatusdata', {
    nkkkno: DataTypes.STRING,
    groupno: DataTypes.STRING,
    tempno: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    underscored: true,
  });
  allstatusdata.associate = function(models) {
    // associations can be defined here
  };
  return allstatusdata;
};