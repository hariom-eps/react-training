import { toast } from 'react-toastify';

export const notify = (type, message) => {
    switch (type) {
        case 'success':
            return toast.success(message);
        case 'error':
            return toast.error(message);
        case 'warning':
            return toast.warn(message);
        case 'info':
            return toast.info(message);
        default:
            return toast(type);
    }
}
