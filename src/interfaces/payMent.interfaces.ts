import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface PayMent extends Model<InferAttributes<PayMent>, InferCreationAttributes<PayMent>> {
    payCode: string;
    payName: string;
    payStatus: number;
   
}