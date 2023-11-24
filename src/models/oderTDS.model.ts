import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { oderTDS } from "../interfaces/oderTDS.interfaces";

export const OderTDSModel = sequelize.define<oderTDS>
    ('history',
        {
            hid: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            uid:{
                type: DataTypes.STRING,
                allowNull: false
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
