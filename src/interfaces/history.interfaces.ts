import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface History extends Model<InferAttributes<History>, InferCreationAttributes<History>> {
    hid: string;
    uid: string;
    note: string;
    noteTDS: string;
   
}