import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { PayMent } from "../interfaces/payMent.interfaces";

export const payMentModel = sequelize.define<PayMent>
    ('payMent',
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
        },
        {
            timestamps: false,
            tableName: 'payMent'
        }
    )
