import { ReactNode } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

interface PortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const el = document.getElementById('portal') as HTMLElement;
  return ReactDom.createPortal(<StPortal>{children}</StPortal>, el);
};

export const StPortal = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
