import instance from "../admin/index";
//聊天后台免密码登录
export const loginAdmin = (data) => instance.post("/login/check_nopass", data);
