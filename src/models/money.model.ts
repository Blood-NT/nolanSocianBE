import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { Money } from "../interfaces/money.interfaces";

export const moneyModel = sequelize.define<Money>
    ('money',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            money: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false,
            tableName: 'money'
        }
    )
