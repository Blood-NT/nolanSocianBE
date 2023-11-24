import { PayMent } from "../interfaces/payMent.interfaces"
import { payMentModel } from "../models/payMent.model";

const createPaymentService = async (newPayment: PayMent) => {
    try {
        newPayment.payDate = new Date();
        const check = await payMentModel.create(newPayment);

        return check;
    } catch (error) {
        console.error('Lỗi khi tạo bản ghi:', error);
        return 201;
    }
};


const getAllPaymentByIdService = async (id: string) => {
    const check:PayMent[]|null = await payMentModel.findAll({ where: { payUser: id } });
    if(check==null){
        console.log("chưa mua dịch vụ nào -_-");
        return 201;
    }
    return check;

}
const getPaymentByIDAndTypeService = async (id: string,type:string) => {
    const check:PayMent|null = await payMentModel.findOne({ where: { payUser: id,paytype:type } });
    if(check==null){
        console.log("chưa mua dịch vụ nào -_-");
        return 201;
    }
    return check;

}
const getAllPaymentWithAdminService = async () => {
    const check:PayMent[]|null = await payMentModel.findAll();
    if(check==null){
        console.log("chưa mua dịch vụ nào -_-");
        return 201;
    }
    return check;

}


export {
    createPaymentService,
    getAllPaymentByIdService,
    getPaymentByIDAndTypeService,
    getAllPaymentWithAdminService,
    

}
