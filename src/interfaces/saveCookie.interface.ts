import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

export interface saveCookie
  extends Model<
    InferAttributes<saveCookie>,
    InferCreationAttributes<saveCookie>
  > {
  id?: number;
  cookie: string;
}