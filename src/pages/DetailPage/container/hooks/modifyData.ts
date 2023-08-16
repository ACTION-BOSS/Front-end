import { useParams } from 'react-router-dom';
import { deletePostedData } from '../../../../api';

export const useDeleteData = () => {
  const { postId } = useParams();

  const handleDeleteData = async () => {
    try {
      const data = await deletePostedData(postId);
      location.href = '/main';
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDeleteData };
};
