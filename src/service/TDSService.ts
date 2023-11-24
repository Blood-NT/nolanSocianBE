import axios from 'axios';
import FormData from 'form-data';
import { getInforService, subMoneyService } from './userService';
import { createPaymentService } from './paymentService';



const deleteCookie = async (id: number) => {
    // xóa cokie theo id
    console.log(id);
}
const getCookie = async () => {
    return"";
}
const getinfoTDS = async () => {

    // lấy cokie từ bảng bằng finfOne, nếu cokie lỗi thì lấy cái thứu 2, xóa cái đầu tiên, đăng nhập thêm 1 cái
    // trong cokieee có cột id để lấy và sắp xếp theo id ( id tự động tăng)
    // lấy id nhỏ nhất
    let dataTDSReturn: any;
    let dataTDS: any = await getCookie()
    // while (true) {
        const res2 = await axios.get("https://traodoisub.com/scr/user.php", {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Cookie': dataTDS
            },
        });
    //     console.log("dataTDS", res2.data);
    //     if (res2.data.xu > 100000) {
            dataTDSReturn.xu = res2.data.xu;
            dataTDSReturn.cookie = dataTDS;
    //         break;
    //     }
    //     deleteCookie(1)// thay bằng id lấy ra từ dataTDS
    //     dataTDS = await loginTDS()
    //     console.log("run");
    //     break
    // }
    return dataTDSReturn;
}

const loginTDS = async () => {
    let formData = new FormData();
    // Thêm dữ liệu vào formData
    formData.append('username', '81nta41');
    formData.append('password', "NNw5");
    const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    if (res1.data.success === true) {
        console.log("done login", res1.headers['set-cookie']);
        return res1.headers['set-cookie'];
    }
    else {
        console.log("login fail");
        return false;
    }
}
const buyTDSService = async (buyData: any, typehandle: string) => {

    let formData = new FormData();
    let checkDone = false;
    let price = 0;
    // Thêm dữ liệu vào formData
    const infoTDS = await getinfoTDS();
    // set tamj gias = 1000
    let url: string = "";
    formData.append('id', buyData.id);
    formData.append('dateTime', buyData.dateTime);
    // switch case trong typescript
    let newPayment: any = {
        payCode: "code",
        paytype: typehandle,
        payQuantity: buyData.sl,
        payUser: buyData.uid,
        payLink: buyData.id,
        payNote: buyData.note,
        payDate: new Date(),
    }
    console.log("2");
    switch (typehandle) {
        case "fbCmt":
            {
                price = 1000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/comment/themid.php"
                formData.append('sl', buyData.sl);
                formData.append('noidung', buyData.noidung);
                break;
                console.log("3");
            }
        case "fbFollow":
            {
                price = 2000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/follow/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        case "fbLike":
            {
                price = 3000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/like/themid.php"
                formData.append('sl', buyData.sl);
                formData.append('is_album', buyData.is_album);
                formData.append('speed', buyData.speed);
                break;
            }
        case "fbLikePage":

            {
                price = 4000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/fanpage/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        case "fbLikeTym":
            {
                price = 5000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/reaction/themid.php"
                formData.append('sl', buyData.sl);
                formData.append('speed', buyData.speed);
                formData.append('loaicx', buyData.loaicx);
                break;
            }
        case "fbLikeTymCmt":
            {
                price = 6000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/reactioncmt/themid.php"
                formData.append('sl', buyData.sl);
                formData.append('loaicx', buyData.loaicx);
                break;
            }
        case "fbLikeVip":
            {
                price = 7000;
                newPayment.payValue = buyData.server * buyData.time_pack * buyData.packet * buyData.post * price
                url = "https://traodoisub.com/mua/viplike/themid.php"
                formData.append('server', buyData.server);
                formData.append('time_pack', buyData.time_pack);
                formData.append('packet', buyData.packet);
                formData.append('post', buyData.post);
                break;
            }
        case "fbShareFake":
            {
                price = 8000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/shareao/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        case "fbShareReal":
            {
                price = 9000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/share/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        case "fbViewStory":
            {
                price = 10000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/viewstr/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        default:
            break;
    }

    console.log("4");

    // kiểm tra tiền trong tk
    const checkPrice = await getInforService(buyData.uid);
        console.log("7",checkPrice);
        console.log("6",buyData.uid);

    if (checkPrice == 201) {
        //user không tồn tại
        console.log("5",buyData.uid);
        return;
    }
    else if (checkPrice.money < newPayment.payValue) {
        // số tiền không đủ
        return
    }

    console.log("6");

    // gọi API mua hàng
    // const res1 = await axios.post(url, formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'Cookie': infoTDS.cookie
    //     },
    // });
    // checkDone = res1.data.success;
    console.log("check API", url);
    console.log("check API", formData);
    console.log("check API", infoTDS.cookie);
    checkDone = true;



    // gọi API payment// lưu mua bán đồ đồ
    const check = await createPaymentService(newPayment);
    if (check == 201) {
        checkDone = false;
        //  res.status(201).send("lỗi hệ thống, thông báo admin");
        return
    }
    // trừ tiền
    const submoneyy = await subMoneyService(buyData.uid, newPayment.payValue, `sub_${newPayment.paytype}`);


    if (submoneyy == 201) {
        checkDone = false;
        return
    }
    if (submoneyy == 200) {
        checkDone = true;
        return
    }

    if (checkDone === true) {
        console.log("done buy");
        return 200;
    }
    else {
        console.log("buy fail");
        // gửi mail thông báo lỗi cho admin
        return 201;
    }
}

const buyTiktokServicer = async (buyData: any, typehandle: string) => {

    let formData = new FormData();
    let checkDone = false;
    let price = 0;
    // Thêm dữ liệu vào formData
    const infoTDS = await getinfoTDS();
    // set tamj gias = 1000
    let url: string = "";
    formData.append('id', buyData.id);
    formData.append('dateTime', buyData.dateTime);
    // switch case trong typescript
    let newPayment: any = {
        payCode: "code",
        paytype: typehandle,
        payQuantity: buyData.sl,
        payUser: buyData.uid,
        payLink: buyData.id,
        payNote: buyData.note,
        payDate: new Date(),
    }
    switch (typehandle) {
        case "tiktokCmt":
            {
                price = 1000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/tiktok_comment/themid.php"
                formData.append('sl', buyData.sl);
                formData.append('noidung', buyData.noidung);
                break;
            }
        case "tiktokFollow":
            {
                price = 2000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/tiktok_follow/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        case "tiktokLikeVip":
            {
                price = 3000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/tiktok_viplike/themid.php"
                formData.append('sl', buyData.sl);
                formData.append('sever', buyData.sever);
                formData.append('time_pack', buyData.time_pack);
                formData.append('packet_min', buyData.packet_min);
                formData.append('packet_max', buyData.packet_max);
                formData.append('post', buyData.post);
                break;
            }
        case "tiktokShare":

            {
                price = 4000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/tiktok_share/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        case "tiktokTymVideo":
            {
                price = 6000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/reactioncmt/themid.php"
                formData.append('sl', buyData.sl);
                formData.append('loaicx', buyData.loaicx);
                break;
            }
        default:
            break;
    }
    // gọi API mua hàng
    const res1 = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Cookie': infoTDS.cookie
        },
    });
    checkDone = res1.data.success;
    // gọi API payment// lưu mua bán đồ đồ
    const check = await createPaymentService(newPayment);
    if (check == 201) {
        checkDone = false;
        //  res.status(201).send("lỗi hệ thống, thông báo admin");
        return
    }
    // trừ tiền
    const submoneyy = await subMoneyService(buyData.uid, newPayment.payValue, `sub_${newPayment.paytype}`);


    if (submoneyy == 201) {
        checkDone = false;
        return
    }
    if (submoneyy == 200) {
        checkDone = true;
        return
    }

    if (checkDone === true) {
        console.log("done buy");
        return 200;
    }
    else {
        console.log("buy fail");
        // gửi mail thông báo lỗi cho admin
        return 201;
    }
}
const buyINSServicer = async (buyData: any, typehandle: string) => {

    let formData = new FormData();
    let checkDone = false;
    let price = 0;
    // Thêm dữ liệu vào formData
    const infoTDS = await getinfoTDS();
    // set tamj gias = 1000
    let url: string = "";
    formData.append('id', buyData.id);
    formData.append('dateTime', buyData.dateTime);
    // switch case trong typescript
    let newPayment: any = {
        payCode: "code",
        paytype: typehandle,
        payQuantity: buyData.sl,
        payUser: buyData.uid,
        payLink: buyData.id,
        payNote: buyData.note,
        payDate: new Date(),
    }
    switch (typehandle) {
        case "insCmt":
            {
                price = 1000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/instagram_comment/themid.php"
                formData.append('sl', buyData.sl);
                formData.append('noidung', buyData.noidung);
                break;
            }
        case "insFollow":
            {
                price = 2000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/instagram_follow/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        case "insLike":
            {
                price = 3000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/instagram_like/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }
        case "insLikeCmt":
            {
                price = 4000;
                newPayment.payValue = buyData.sl * price
                url = "https://traodoisub.com/mua/instagram_likecmt/themid.php"
                formData.append('sl', buyData.sl);
                break;
            }

        default:
            break;
    }
    // gọi API mua hàng
    const res1 = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Cookie': infoTDS.cookie
        },
    });
    checkDone = res1.data.success;
    // gọi API payment// lưu mua bán đồ đồ
    const check = await createPaymentService(newPayment);
    if (check == 201) {
        checkDone = false;
        //  res.status(201).send("lỗi hệ thống, thông báo admin");
        return
    }
    // trừ tiền
    const submoneyy = await subMoneyService(buyData.uid, newPayment.payValue, `sub_${newPayment.paytype}`);
    if (submoneyy == 201) {
        checkDone = false;
        return
    }
    if (submoneyy == 200) {
        checkDone = true;
        return
    }
    if (checkDone === true) {
        console.log("done buy");
        return 200;
    }
    else {
        console.log("buy fail");
        // gửi mail thông báo lỗi cho admin
        return 201;
    }
}


export {
    loginTDS,
    getinfoTDS,
    buyTDSService,
    deleteCookie,
    getCookie,
    buyTiktokServicer,
    buyINSServicer
}