import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { PayMent } from "../interfaces/payMent.interfaces";

export const payMentModel = sequelize.define<PayMent>
    ('payment',
        {
           payID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            payCode: {
                type: DataTypes.STRING,
                allowNull: false
            },
            paytype: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            payValue: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            payQuantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            payUser: {
                type: DataTypes.STRING,
                allowNull: false
            },
            payLink: {
                type: DataTypes.STRING,
                allowNull: false
            },
            payDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            paynote: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            timestamps: false,
            tableName: 'payment'
        }
    )
