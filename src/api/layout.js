import request from './request'
export const aside = () => request.get('sys/menu/nav')
export const userlist = () => request.get('sys/userInfo')