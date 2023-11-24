import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { Money } from "../interfaces/money.interfaces";

export const moneyModel = sequelize.define<Money>
    ('money',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true

            },
            uid: {
                type: DataTypes.STRING,
                allowNull: false
            },
            money: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            timestamps: false,
            tableName: 'money'
        }
    )
