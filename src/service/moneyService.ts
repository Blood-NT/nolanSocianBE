import { Money } from "../interfaces/money.interfaces";
import { moneyModel } from "../models/money.model";


// tạo mới tài khoản money
const createMoneyService = async (moneyadd:Money) => {
   
    const newMoney: Money | null = await moneyModel.create(moneyadd);
    if (!newMoney) {
        return 201; // lỗi không xác định
    }
    return 200;
}
const getAllAddMoneyService = async (uid: string) => {
    const money: Money[] = await moneyModel.findAll({ where: { uid: uid, type: "add" } });
    if (!money) {
        return 201; // lỗi không xác định
    }
    return money;
}
const getAllSubMoneyService = async (uid: string) => {
    const money: Money[] = await moneyModel.findAll({ where: { uid: uid, type: "sub" } });
    if (!money) {
        return 201; // lỗi không xác định
    }
    return money;
}
export {
    createMoneyService,
    getAllAddMoneyService,
    getAllSubMoneyService
}
