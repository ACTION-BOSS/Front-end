import { FC } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
import { UncomBigIcon } from '../../../../assets';
type MetooButtonProps = {
  metooCount: number;
  onClick: () => void;
};

export const MetooButton: FC<MetooButtonProps> = ({
  metooCount = 0,
  onClick,
}) => {
  return (
    <StButton onClick={onClick}>
      <StButtonLabel>
        <div>나도 불편해요</div>
        <UncomBigIcon color="white" size={32} />
        <div>{metooCount}</div>
      </StButtonLabel>
    </StButton>
  );
};

export const StButton = styled.button`
  display: flex;
  cursor: pointer;

  padding: 6px 16px;

  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;

  background-color: ${Theme.colors.pink};
`;

export const StButtonLabel = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  color: white;

  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
`;
