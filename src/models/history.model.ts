import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { History } from "../interfaces/history.interfaces";

export const historyModel = sequelize.define<History>
    ('history',
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
           
        },
        {
            timestamps: false,
            tableName: 'history'
        }
    )
