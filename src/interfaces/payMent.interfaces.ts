import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface PayMent extends Model<InferAttributes<PayMent>, InferCreationAttributes<PayMent>> {
    payID: number;//id giao dịch tuwj ddoongj tawng
    payCode: string;// tự động tăng
    paytype: number;//mã dịch vụ
    payValue:number;//số tiền
    payQuantity:number;//số lượng
    payUser:string;//id user
    payLink:string;//id mua
    paynote:string;//ghi chú
    payDate:Date;//ngày tạo

   
}