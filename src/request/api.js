import instance from './index';
//登录
export const loginApi = (data) => instance.post('/v1/bm/Sign/login', data);

//修改密码
export const changePasswordApi = (data) => instance.post('v1/bm/Sign/passwordSave', data);

//获取菜单列表
export const getMenuList = (data) => instance.post('v1/bm/Menu/menuList', data);

//添加菜单列表
export const addMenuList = (data) => instance.post('v1/bm/Menu/menuAddOrEdit', data);
