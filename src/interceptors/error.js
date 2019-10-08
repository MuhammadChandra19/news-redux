import { notification } from 'antd'

export const errorInterceptor = (err) => {
    const { response } = err;
    const { data } = response
    if (response) {
        notification.error({
            message: data.code,
            description: data.message,
        });
    }

    return Promise.reject(err);
}