import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { SignupModalFormData } from '../../container';

import { useRecoilState } from 'recoil';
import { $selectedOptionIndex } from '../../state';

export const useSelect = (initialOptions: string[]) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [selectedOptionIndex, setSelectedOptionIndex] =
    useRecoilState($selectedOptionIndex);
  const { control } = useFormContext<SignupModalFormData>();
  const {
    field: { value: emailDomainValue, onChange: onChangeEmailDomain },
  } = useController({
    control: control,
    name: 'emailDomain',
  });

  useEffect(() => {
    if (selectedOptionIndex === 0) {
      onChangeEmailDomain('');
    } else {
      onChangeEmailDomain(initialOptions[selectedOptionIndex]);
    }
  }, [selectedOptionIndex]);

  return {
    isSelectOpen,
    selectedOptionIndex,
    setIsSelectOpen,
    setSelectedOptionIndex,
    emailDomainValue,
  };
};
