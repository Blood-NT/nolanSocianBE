
import { oderTDS } from "../interfaces/oderTDS.interfaces";
import { OderTDSModel } from "../models/oderTDS.model";


const addOderTDSService = async (newHistory: oderTDS) => {
    const add = await OderTDSModel.create(newHistory);
    console.log("check add data", add);
    return add;
}

const getOderTDSByUserService = async (id: string): Promise<oderTDS[]> => {
    const check: oderTDS[] = await OderTDSModel.findAll({ where: { uid: id } });
    console.log("check get data", check);
    return check;
}
export default {
    addOderTDSService,
    getOderTDSByUserService
}

