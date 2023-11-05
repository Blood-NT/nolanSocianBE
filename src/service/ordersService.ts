
import { History } from "../interfaces/history.interfaces";
import { historyModel } from "../models/history.model";


const addHistoryService = async (newHistory: History) => {
    const add = await historyModel.create(newHistory);
    console.log("check add data", add);
    return add;
}

const getHistoryByUserService = async (id: string): Promise<History[]> => {
    const check: History[] = await historyModel.findAll({ where: { uid: id } });
    console.log("check get data", check);
    return check;
}

const getAllHistoryService = async (): Promise<History[]> => {
    const check: History[] = await historyModel.findAll();
    console.log("check get all data", check);
    return check;
}



export default {
    addHistoryService,
    getHistoryByUserService,
    getAllHistoryService
}

