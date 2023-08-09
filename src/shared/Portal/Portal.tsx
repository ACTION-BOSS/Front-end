import { ReactNode } from 'react';
import ReactDom from 'react-dom';
import { StPortal } from './PortalStyle';

interface PortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const el = document.getElementById('portal') as HTMLElement;
  return ReactDom.createPortal(<StPortal>{children}</StPortal>, el);
};
