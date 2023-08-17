import { FC, ReactNode, createContext, useContext, useState } from 'react';

import { EModalType } from './type';
import { styled } from 'styled-components';
import { SignUpModal, LoginModal, PopUpModal } from '../../modals';
import { SignUpSuccessModal } from '../../modals/SignUpSuccessModal/SignUpSuccessModal';
import { useRecoilValue } from 'recoil';
import { $isLoggedInState } from '../login/state';

interface IModalContext {
  openModal: (modalType: EModalType) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext | null>(null);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [modalType, setModalType] = useState<EModalType>();
  const isLoggedInState = useRecoilValue($isLoggedInState);

  const openModal = (modalType: EModalType) => {
    setIsModalOpened(true);
    setModalType(modalType);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const renderModal = () => {
    if (modalType === EModalType.SIGN_UP) {
      return <SignUpModal />;
    }
    if (modalType === EModalType.LOGIN) {
      return <LoginModal />;
    }
    if (modalType === EModalType.SIGN_UP_SUCCESS) {
      return <SignUpSuccessModal />;
    }
    if (modalType === EModalType.DELETE || modalType === EModalType.DONE) {
      return <PopUpModal type={modalType} />;
    }
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {isModalOpened && <StModalBackground>{renderModal()}</StModalBackground>}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const StModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(40.8, 46.8, 61.2, 0.4);
  width: 100%;
  z-index: 99999;
  height: 100vh;
`;
