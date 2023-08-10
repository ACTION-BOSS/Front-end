import { FC, memo } from 'react';
import { useSelect } from './useSelect';
import { SelectTrigger } from './SelectTrigger';
import { StSelectList, StSelectOption } from './SelectStyle';

type SelectBoxProps = {
  initialOptions: string[];
};

export const SelectBox: FC<SelectBoxProps> = memo(({ initialOptions }) => {
  const {
    isSelectOpen,
    selected,
    options,
    setIsSelectOpen,
    setSelected,
    setOptions,
  } = useSelect(initialOptions);

  return (
    <div style={{ position: 'relative' }}>
      <SelectTrigger
        options={options}
        setIsSelectOpen={setIsSelectOpen}
        selected={selected}
      />
      {isSelectOpen && (
        <StSelectList>
          {options.map((e, i) => (
            <StSelectOption key={i} onMouseDown={() => setSelected(i)}>
              {e}
            </StSelectOption>
          ))}
        </StSelectList>
      )}
    </div>
  );
});
