import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { SignupModalFormData } from '../../container';

export const useSelect = (initialOptions: string[]) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(-1);
  const { control } = useFormContext<SignupModalFormData>();
  const {
    field: { value: emailDomainValue, onChange: onChangeEmailDomain },
  } = useController({
    control: control,
    name: 'emailDomain',
  });

  useEffect(() => {
    if (selected === 0) {
      onChangeEmailDomain('');
    } else {
      onChangeEmailDomain(initialOptions[selected]);
    }
  }, [selected]);

  return {
    isSelectOpen,
    selected,
    setIsSelectOpen,
    setSelected,
    emailDomainValue,
  };
};
