import { ToastPosition, toast } from 'react-toastify';

export const useToast = () => {
  const openToast = (content: string, position?: ToastPosition) => {
    toast.error(content, {
      position: position || 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return { openToast };
};
