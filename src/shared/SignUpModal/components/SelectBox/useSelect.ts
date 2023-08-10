import { useState } from 'react';

export const useSelect = (initialOptions: string[]) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(-1);
  const [options, setOptions] = useState(initialOptions);

  return {
    isSelectOpen,
    selected,
    options,
    setIsSelectOpen,
    setSelected,
    setOptions,
  };
};
