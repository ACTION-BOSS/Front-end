import { useNavigate } from 'react-router-dom';
import { deletePostedData } from '../../../../api';

export const useDeleteData = () => {
  const navigate = useNavigate();

  const handleDeleteData = async () => {
    try {
      const data = await deletePostedData();
      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDeleteData };
};
