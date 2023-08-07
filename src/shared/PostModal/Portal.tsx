import { ReactNode } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export const Portal = ({ children }: Props) => {
  const el = document.getElementById('portal') as HTMLElement;
  return ReactDom.createPortal(<StPortal>{children}</StPortal>, el);
};

const StPortal = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
