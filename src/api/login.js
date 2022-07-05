import request from './request'
export const Verification = () => request.get('captcha')
export const login = (string) => request.post('login?' + string)