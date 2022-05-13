import { message } from 'antd';

export const showError = (messageError: string) => message.error(messageError);

export const showSuccess = (messageSuccess: string) => message.success(messageSuccess);

export const showWarning = (messageWarning: string) => message.warning(messageWarning);
