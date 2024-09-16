import { create } from 'zustand'

interface ExtensionState {
    count: number
    increment: () => void
}

export const useStore = create<ExtensionState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
}))