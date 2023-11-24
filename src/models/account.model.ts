import { DataTypes } from "sequelize";
import sequelize from "../config/connectDB";
import { account } from "src/interfaces/account.interface";

export const accountModel = sequelize.define<account>(
  "account",
  {
    aid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING(50),
    password: DataTypes.STRING(300),
  },
  {
    timestamps: false,
    tableName: "account",
  }
);
