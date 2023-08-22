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

// export const useToggleData = () => {
//   const { postId } = useParams();
//   const navigate = useNavigate();

//   const handleToggleData = async () => {
//     try {
//       const data = await toggleDoneData(postId);
//       navigate('/main');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return { handleToggleData };
// };
