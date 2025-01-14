import { create } from 'zustand';

interface ModalStore {
  activeModals: Record<string, React.ReactNode>;
  baseZIndex: number;
  setActiveModal: (modalId: string, modal: React.ReactNode) => void;
  removeModal: (modalId: string) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModals: {},
  baseZIndex: 1000,

  setActiveModal: (modalId, modal) => {
    set((state) => ({
      activeModals: { ...state.activeModals, [modalId]: modal },
    }));
  },

  removeModal: (modalId) => {
    set((state) => {
      const { [modalId]: _, ...rest } = state.activeModals;
      return { activeModals: rest };
    });
  },
}));
