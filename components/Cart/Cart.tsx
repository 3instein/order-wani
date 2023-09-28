import { FC } from "react"
import { CartItem } from "./CartItem"

const Cart: FC = () => {
    return (
        <div className="px-5 pt-7 bg-slate-100 h-screen">
            <h1 className="text-2xl font-bold mb-10">Keranjang</h1>

            <div className="overflow-y-auto h-2/3 space-y-3 pb-1">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div>
                <hr className="h-0.5 mx-auto my-4 bg-gray-400 border-0 rounded" />
            </div>
            <div className="flex justify-between">
                <h1 className="md:text-xl lg:text-2xl font-semibold">Total</h1>
                <p className="md:text-2xl lg:text-3xl font-bold">Rp 75.000</p>
            </div>
        </div>
    )
}

export { Cart }