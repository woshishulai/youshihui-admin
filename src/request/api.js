import instance from "./index";
//登录
export const loginApi = (data) => instance.post("/v1/bm/Sign/sendMsm", data);

//修改密码
export const changePasswordApi = (data) =>
  instance.post("v1/bm/Sign/passwordSave", data);
