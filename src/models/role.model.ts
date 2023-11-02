import sequelize from "../config/connectDB";
import { DataTypes } from "sequelize";
import { Role } from "../interfaces/role.interfaces";

export const roleModel = sequelize.define<Role>
    ('role',
        {
            rid: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            rname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            rstatus: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
           
        },
        {
            timestamps: false,
            tableName: 'role'
        }
    )