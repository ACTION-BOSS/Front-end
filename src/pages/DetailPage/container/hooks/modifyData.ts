import { useNavigate, useParams } from 'react-router-dom';
import { deletePostedData, toggleDoneData } from '../../../../api';

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

export const useToggleData = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleToggleData = async () => {
    try {
      const data = await toggleDoneData(postId);
      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };

  return { handleToggleData };
};
