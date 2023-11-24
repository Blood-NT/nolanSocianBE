import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { User } from "../interfaces/user.interfaces";


export const userModel = sequelize.define<User>
    ('user', {
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {

            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        money: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
        {
            timestamps: false,
            tableName: 'user'
        }
    )