import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface Money extends Model<InferAttributes<Money>, InferCreationAttributes<Money>> {
    id: string;
    uid: string;
    money: number;
    type: string;
}