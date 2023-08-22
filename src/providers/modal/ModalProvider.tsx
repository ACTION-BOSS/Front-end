import { FC, ReactNode, createContext, useContext, useState } from 'react';

import { EModalType } from './type';
import { styled } from 'styled-components';
import { SignUpModal, LoginModal, PopUpModal } from '../../modals';
import { SignUpSuccessModal } from '../../modals/SignUpSuccessModal/SignUpSuccessModal';
import { ThemeType } from '../../shared/Button/type';

interface IModalContext {
  openModal: (modalType: EModalType, params?: IParamsForPopUpModal) => void;
  closeModal: () => void;
}

export type IParamsForPopUpModal = {
  title: string;
  functionButton: {
    theme: ThemeType;
    label: string;
    onClick: () => void;
  };
  cancelButton: boolean;
};

export const ModalContext = createContext<IModalContext | null>(null);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [modalType, setModalType] = useState<EModalType>();
  const [params, setParams] = useState<IParamsForPopUpModal>({
    title: '',
    functionButton: {
      theme: 'empty',
      label: '',
      onClick: () => {},
    },
    cancelButton: true,
  });

  const openModal = (modalType: EModalType, params?: IParamsForPopUpModal) => {
    if (params) {
      setParams(params);
    }
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
    if (modalType === EModalType.POP_UP) {
      return <PopUpModal params={params} />;
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
