'use strict';
/** @type {import('sequelize-cli').Migration} */
const { DataTypes } = require('sequelize');


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "user",
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        role: {
          type: DataTypes.NUMBER,
          allowNull: false
        },
        status: {

          type: DataTypes.BOOLEAN,
          allowNull: false
        }
      });

    await queryInterface.createTable(
      "history",
      {
        hid: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        note: {
          type: DataTypes.STRING,
          allowNull: false
        },
        noteTDS: {
          type: DataTypes.STRING,
          allowNull: false
        },

      });
    await queryInterface.createTable(
      "token",
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: DataTypes.STRING(50),
        uniqueString: DataTypes.STRING(50),
        createAt: DataTypes.DATE,
        effectiveSeconds: DataTypes.INTEGER,
      });
    await queryInterface.createTable(
      "role",
      {
        rid: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        rname: {
          type: DataTypes.STRING,
          allowNull: false
        },
        rstatus: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      });
    await queryInterface.createTable(
      "payMent",
      {
        payCode: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        payName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        payStatus: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      });
    await queryInterface.createTable(
      "moneyHistory",
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        moneyAdd: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        time: {
          type: DataTypes.DATE,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false
        }
      });
    await queryInterface.createTable(
      "money",
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        money: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
  },

};