import { FC, ReactNode, createContext, useContext, useState } from 'react';

import { EModalType } from './type';
import { styled } from 'styled-components';
import { SignUpModal, LoginModal, PopUpModal } from '../../modals';
import { SignUpSuccessModal } from '../../modals/SignUpSuccessModal/SignUpSuccessModal';
import { ThemeType } from '../../shared/Button/type';
import { media } from '../../styles';

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
    return (
      <StCloseModalDiv onClick={(e) => e.stopPropagation()}>
        {modalType === EModalType.SIGN_UP && <SignUpModal />}
        {modalType === EModalType.LOGIN && <LoginModal />}
        {modalType === EModalType.SIGN_UP_SUCCESS && (
          <SignUpSuccessModal showConfetti={true} />
        )}
        {modalType === EModalType.POP_UP && <PopUpModal params={params} />}
      </StCloseModalDiv>
    );
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {isModalOpened && (
        <StModalBackground
          onClick={closeModal}
          $isPopUpModal={modalType === EModalType.POP_UP}
        >
          {renderModal()}
        </StModalBackground>
      )}
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

export const StModalBackground = styled.div<{
  $isPopUpModal?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(40.8, 46.8, 61.2, 0.4);
  width: 100%;
  z-index: 99999;
  height: 100vh;

  ${({ $isPopUpModal }) => media.mobile`
  width: 100%;
  height: 100dvh;
  border-radius: 0;
  align-items: ${$isPopUpModal ? 'center' : 'normal'}
`}
`;

export const StCloseModalDiv = styled.div`
  display: flex;
  justify-content: center;

  ${media.mobile`
    width: 100%;
  `}
`;
