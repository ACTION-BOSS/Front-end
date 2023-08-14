import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { LoginModal, SignUpModal } from '../../shared';
import { EModalType } from './type';
import { styled } from 'styled-components';

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
  position: absolute;
  background-color: rgba(40.8, 46.8, 61.2, 0.4);
  width: 100%;
  height: 100%;
`;