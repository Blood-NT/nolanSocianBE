import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface MoneyHistory extends Model<InferAttributes<MoneyHistory>, InferCreationAttributes<MoneyHistory>> {
    id: string;
    moneyAdd: number;
    type: string;
    time: Date;
    status: string;
}