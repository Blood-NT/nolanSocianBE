import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface Money extends Model<InferAttributes<Money>, InferCreationAttributes<Money>> {
    id: string;
    money: number;
}