import { useFormContext } from 'react-hook-form';
import { MyPageFormData } from './MyPageForm';

import { useModal } from '../../../../../providers';

export const useMyPageFormSubmit = () => {
  const { handleSubmit } = useFormContext<MyPageFormData>();

  const { closeModal, openModal } = useModal();

  return {};
};
