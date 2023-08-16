import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';
type PressableProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Pressable: FC<PressableProps> = ({ children, onClick }) => {
  return <StChildrenWrapper onClick={onClick}>{children}</StChildrenWrapper>;
};

export const StChildrenWrapper = styled.div`
  cursor: pointer;
  padding: 2px;
`;
