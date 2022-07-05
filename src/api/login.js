import request from './request'
export const Verification = () => request.get('captcha')