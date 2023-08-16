export interface ModalProps {
  onClickHandleModal?: () => void;
  sendPostRequest?: () => void;
  sendEditRequest?: () => void;
  attribute: string;
  modalType: string;
}
