import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface oderTDS extends Model<InferAttributes<oderTDS>, InferCreationAttributes<oderTDS>> {
    hid: string;
    uid: string;
    note: string;
    noteTDS: string;
   
}