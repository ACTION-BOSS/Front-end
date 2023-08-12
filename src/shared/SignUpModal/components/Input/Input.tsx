import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles';
type InputProps = {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  $isError: boolean;
  width?: string;
};

export const Input: FC<InputProps> = ({
  placeholder = '',
  value = '',
  onChange = () => {},
  $isError = false,
  width,
}) => {
  return (
    <StGrayInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      $isError={$isError}
      width={width}
    />
  );
};

export const StGrayInput = styled.input<{ $isError: boolean; width?: string }>`
  display: flex;
  width: ${(props) => (props.width === 'fluid' ? '100%' : '153px')};
  height: 42px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${Theme.colors.blueGray};
  color: ${Theme.colors.black};

  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  border: ${(props) =>
    props.$isError ? `1px solid ${Theme.colors.pink}` : 'none'};
  outline: none;

  &::placeholder {
    color: ${Theme.colors.gray4};
    font-size: ${Theme.fontSizes.label1};
    font-weight: 100;
  }
`;
