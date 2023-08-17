import { useCallback } from 'react';
import {
  useFormContext,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import { SignupModalFormData } from './SignupModalForm';
import { api } from '../../../../api';
import { EModalType, useModal } from '../../../../providers';

export const useSignupModalFormSubmit = () => {
  const { handleSubmit } = useFormContext<SignupModalFormData>();
  const { openModal, closeModal } = useModal();

  const onFormError: SubmitErrorHandler<SignupModalFormData> = useCallback(
    async (error) => {},
    [],
  );

  const onFormSubmit: SubmitHandler<SignupModalFormData> = useCallback(
    async (data) => {
      const { nickname, password, emailId, emailDomain, successKey } = data;
      try {
        const response = await api.post('auth/signup', {
          nickname,
          password,
          email: `${emailId}@${emailDomain}`,
          successKey,
        });

        if (response.status === 201) {
          closeModal();
          openModal(EModalType.SIGN_UP_SUCCESS);
        }
      } catch (error) {
        console.error('error', error);
      }
    },
    [],
  );

  const submit = () => {
    handleSubmit(onFormSubmit, onFormError)();
  };

  return { submit };
};
