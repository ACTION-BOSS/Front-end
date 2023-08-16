import { useNavigate, useParams } from 'react-router-dom';
import { deletePostedData } from '../../../../api';

export const useDeleteData = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleDeleteData = async () => {
    try {
      const data = await deletePostedData(postId);
      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDeleteData };
};
