import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

export interface account
    extends Model<
        InferAttributes<account>,
        InferCreationAttributes<account>
    > {
    aid?: number;
    username: string;
    password: string;
}