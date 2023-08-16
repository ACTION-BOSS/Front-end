import { FC } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
import { UncomBigIcon } from '../../../../assets';
type MetooButtonProps = {
  agreeCount: number;
  onClick: () => void;
  agree: boolean;
};

export const MetooButton: FC<MetooButtonProps> = ({
  agreeCount = 0,
  onClick,
  agree = false,
}) => {
  return (
    <StButton onClick={onClick}>
      <StButtonLabel>
        <div>나도 불편해요</div>
        <UncomBigIcon color="white" size={32} />
        <div>{agreeCount}</div>
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
