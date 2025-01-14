import ModalPortal from '@/components/common/Modal/ModalPortal';
import { useModalStore } from '@/store/useModalStore';

const useModal = () => {
  const { setActiveModal, removeModal } = useModalStore();

  const openModal = (modalId: string, modalContent: React.ReactNode) => {
    setActiveModal(modalId, <ModalPortal>{modalContent}</ModalPortal>);
  };

  const closeModal = (modalId: string) => {
    removeModal(modalId);
  };

  return { openModal, closeModal };
};

export default useModal;
