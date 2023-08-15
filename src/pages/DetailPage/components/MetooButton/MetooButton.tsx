import { FC } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
import { UncomBigIcon } from '../../../../assets';
type MetooButtonProps = {};

export const MetooButton: FC<MetooButtonProps> = ({}) => {
  return (
    <StButton>
      <StButtonLabel>
        <div>나도 불편해요</div>
        <UncomBigIcon color="white" size={32} />
        <div>12</div>
      </StButtonLabel>
    </StButton>
  );
};

export const StButton = styled.button`
  display: flex;
  justify-content: center;

  padding: 12px 16px;
  border: none;
  border-radius: 10px;

  background-color: ${Theme.colors.pink};
`;

export const StButtonLabel = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 4px;

  color: white;

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
`;
