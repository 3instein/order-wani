import { CartItem } from "@/interfaces/CartItem"
import { IoMdRemoveCircle } from "react-icons/io"
import { useCartStore } from "@/stores/CartStore"
import { FC } from "react"
import { currencyFormat } from '../../functions/general';

interface CartItemProps {
    item: CartItem
}

const CartItem: FC<CartItemProps> = ({ item }) => {

    const { items, setItems } = useCartStore()

    const handleDecreaseQuantity = () => {
        const existingItem = items.find(i => i.id === item.id)
        if (existingItem) {
            if(existingItem.quantity === 1) {
                return handleDeleteFromCart()
            }
            const newItems = items.map(i => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity - 1
                    }
                }
                return i
            })
            setItems(newItems)
        }
    }

    const handleDeleteFromCart = () => {
        const newItems = items.filter(i => i.id !== item.id)
        setItems(newItems)
    }

    return (
        <div className="card card-compact w-full bg-base-100 px-5">
            <div className="card-body">
                <div className="card-actions justify-end">
                    <button className="btn btn-square btn-sm" onClick={handleDeleteFromCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <h2 className="card-title">
                    {item.name} x {item.quantity} <IoMdRemoveCircle className="text-red-600 hover:cursor-pointer" onClick={handleDecreaseQuantity} />
                </h2>
                <p>{currencyFormat(item.price * item.quantity)}</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Catatan</span>
                        <span className="label-text-alt">Contoh: Level 1</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-12"></textarea>
                </div>
            </div>
        </div>
    )
}

export { CartItem }