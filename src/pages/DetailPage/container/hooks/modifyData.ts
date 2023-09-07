import { useNavigate, useParams } from 'react-router-dom';
import { deletePostedData } from '../../../../api';
import { useModal } from '../../../../providers';

export const useDeleteData = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const deleteData = async () => {
    try {
      await deletePostedData(postId);
      closeModal();
      navigate('/main');
    } catch (error) {
      console.log(error);
    }
  };

  return { deleteData };
};
