import { FC, memo, useEffect } from 'react';
import { useSelect } from './useSelect';
import {
  StPlaceholderText,
  StSelectList,
  StSelectOption,
  StSelectTriggerWrapper,
} from './SelectStyle';
import { ToggleIcon } from '../../../../assets';

type SelectBoxProps = {
  initialOptions: string[];
  setToSelfTypeMode: () => void;
  $isError: boolean | null;
};

export const SelectBox: FC<SelectBoxProps> = memo(
  ({ initialOptions, setToSelfTypeMode, $isError = false }) => {
    const {
      isSelectOpen,
      selected,
      setIsSelectOpen,
      setSelected,
      emailDomainValue,
    } = useSelect(initialOptions);

    useEffect(() => {
      if (selected === 0) {
        setToSelfTypeMode();
      }
    }, [selected]);

    return (
      <div style={{ position: 'relative' }}>
        <StSelectTriggerWrapper
          onBlur={() => setIsSelectOpen(false)}
          onClick={() => setIsSelectOpen((prev: boolean) => !prev)}
          $isError={$isError}
        >
          {!emailDomainValue && (
            <StPlaceholderText>선택해주세요</StPlaceholderText>
          )}
          <div>{emailDomainValue}</div>
          <div style={{ width: '10px' }}>
            <ToggleIcon size={10} />
          </div>
        </StSelectTriggerWrapper>
        {isSelectOpen && (
          <StSelectList>
            {initialOptions.map((e, i) => (
              <StSelectOption key={i} onMouseDown={() => setSelected(i)}>
                {e}
              </StSelectOption>
            ))}
          </StSelectList>
        )}
      </div>
    );
  },
);
