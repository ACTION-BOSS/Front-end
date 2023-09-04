import { FC, memo, useEffect } from 'react';
import { useSelect } from './useSelect';
import {
  StPlaceholderText,
  StSelectList,
  StSelectOption,
  StSelectTriggerWrapper,
  StWrapper,
} from './SelectStyle';
import { ToggleIcon } from '../../../../assets';

type SelectBoxProps = {
  initialOptions: string[];
  setToSelfTypeMode: () => void;
  $isError: boolean | null;
  myPage?: boolean;
};

export const SelectBox: FC<SelectBoxProps> = memo(
  ({ initialOptions, setToSelfTypeMode, $isError = false, myPage = false }) => {
    const {
      isSelectOpen,
      selectedOptionIndex,
      setIsSelectOpen,
      setSelectedOptionIndex,
      emailDomainValue,
    } = useSelect(initialOptions);

    useEffect(() => {
      if (selectedOptionIndex === 0) {
        setToSelfTypeMode();
      }
    }, [selectedOptionIndex]);

    return (
      <StWrapper>
        <StSelectTriggerWrapper
          onBlur={() => setIsSelectOpen(false)}
          onClick={() => setIsSelectOpen((prev: boolean) => !prev)}
          $isError={$isError}
          $myPage={myPage}
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
              <StSelectOption
                key={i}
                onMouseDown={() => setSelectedOptionIndex(i)}
              >
                {e}
              </StSelectOption>
            ))}
          </StSelectList>
        )}
      </StWrapper>
    );
  },
);
