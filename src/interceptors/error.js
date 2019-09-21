import { message } from 'antd'

export const errorInterceptor = (err) => {
    const { response } = err;
    if (response) {
        message.error('Something wrong');
    }

    return Promise.reject(err);
}