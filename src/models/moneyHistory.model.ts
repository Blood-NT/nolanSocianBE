import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { MoneyHistory } from "../interfaces/moneyHistory.interfaces";

export const moneyOderTDSModel = sequelize.define<MoneyHistory>
    ('moneyHistory',
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
        },
        {
            timestamps: false,
            tableName: 'moneyHistory'
        }
    )
