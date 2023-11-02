import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
    rid: string;
    rname: string;
    rstatus: number;
   
}