import { toast } from 'react-hot-toast';

const useNotify = () => {
  const notifySuccess = (message: string) => {
    toast.success(message);
  };

  const notifyError = (message: string) => {
    toast.error(message);
  };

  return { notifySuccess, notifyError };
};

export default useNotify;
