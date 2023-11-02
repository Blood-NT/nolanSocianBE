import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface History extends Model<InferAttributes<History>, InferCreationAttributes<History>> {
    hid: string;
    note: string;
    noteTDS: string;
   
}