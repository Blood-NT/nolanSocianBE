import { DataTypes } from "sequelize";
import sequelize from "../config/connectDB";
import { saveCookie } from "../interfaces/saveCookie.interface";

export const SaveCookieModel = sequelize.define<saveCookie>(
  "savecookie",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cookie: DataTypes.STRING(300),
  },
  {
    timestamps: false,
    tableName: "savecookie",
  }
);
