import { useFormContext } from 'react-hook-form';
import { MyPageFormData } from './MyPageForm';
import { useEffect } from 'react';
import { useMyPageFormController } from './MyPageFormController';

export const useGetUserData = () => {
  const { setValue } = useFormContext<MyPageFormData>();
  const {
    nicknameValue,
    onChangeNickname,
    emailIdValue,
    onChangeEmailId,
    onChangeEmailDomain,
    emailDomainValue,
  } = useMyPageFormController();

  const originalEmail = 'asdasd@naver.com';
  const originalPassword = 'asdf1234';
  const originalNickname = 'haru';

  console.log('hello');

  useEffect(() => {
    if (originalNickname) {
      setValue('nickname', originalNickname);
    }

    if (originalEmail !== null) {
      const [id, domain] = originalEmail.split('@');
      setValue('emailId', id);
      setValue('emailDomain', domain);
    }
  }, [originalEmail, originalNickname, setValue]);

  return {
    originalEmail,
    originalPassword,
    originalNickname,
    nicknameValue,
    onChangeNickname,
    emailIdValue,
    onChangeEmailId,
    onChangeEmailDomain,
    emailDomainValue,
  };
};
