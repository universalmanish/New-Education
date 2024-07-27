import { create } from "zustand"

type Props = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

export const useSidebar = create<Props>((set => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
})))