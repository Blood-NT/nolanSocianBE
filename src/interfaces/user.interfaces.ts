import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface User 
extends Model <InferAttributes<User>,InferCreationAttributes<User>>{
    id: string;
    password: string;
    email: string;
    token: string;
    role: number;
    status: Boolean;
    money: number;
    }