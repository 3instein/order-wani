import { CartItem } from '@/interfaces/CartItem'
import { create } from 'zustand'

type CartState = {
    items: CartItem[]
    setItems: (items: CartItem[]) => void
}

export const useCartStore = create<CartState>()((set) => ({
    items: [],
    setItems: (items) => set({ items }),
}))