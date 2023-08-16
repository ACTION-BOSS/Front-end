import { deletePostedData } from '../../../../api';

export const useDeleteData = () => {
  const handleDeleteData = async () => {
    try {
      const data = await deletePostedData();
      location.href = '/main';
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDeleteData };
};
