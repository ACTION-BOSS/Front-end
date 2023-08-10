import { Dispatch, FC } from 'react';
import { TOGGLE } from '../../../../assets';
import { StSelectTriggerWrapper } from './SelectStyle';
import styled from 'styled-components';
import { Theme } from '../../../../styles';

type SelectTriggerProps = {
  options: string[];
  setIsSelectOpen: Dispatch<React.SetStateAction<boolean>>;
  selected: number;
};

export const SelectTrigger: FC<SelectTriggerProps> = ({
  options,
  setIsSelectOpen,
  selected,
}) => {
  let selectedItem = options[selected];

  return (
    <StSelectTriggerWrapper
      onBlur={() => setIsSelectOpen(false)}
      onClick={() => setIsSelectOpen((prev: boolean) => !prev)}
    >
      {!selectedItem && <StPlaceholderText>ㅁㄴㅇㅁㄴㅇ</StPlaceholderText>}
      <div>{selectedItem}</div>
      <div style={{ width: '10px' }}>
        <img src={TOGGLE} style={{ width: '100%' }} />
      </div>
    </StSelectTriggerWrapper>
  );
};

export const StPlaceholderText = styled.div`
  color: ${Theme.colors.gray4};
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};
`;
