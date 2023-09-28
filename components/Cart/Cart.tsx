'use client'

import { FC } from "react"
import { CartItem } from "./CartItem"
import { useCartStore } from "@/stores/CartStore"
import { currencyFormat } from "@/functions/general"

const Cart: FC = () => {

    const { items, setItems } = useCartStore()

    const handleOrder = () => {
        setItems([])
    }

    return (
        <div className="px-5 pt-7 bg-slate-100 h-screen">
            <h1 className="text-2xl font-bold mb-10">Keranjang</h1>

            <div className="overflow-y-auto h-2/3 space-y-3 pb-1">
                {
                    items.length === 0 &&
                    <div className="flex justify-center items-center h-1/2">
                        <p className="text-2xl font-bold">Tidak ada menu</p>
                    </div>
                }
                {
                    items.length > 0 && items.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))
                }
            </div>
            <div>
                <hr className="h-0.5 mx-auto my-4 bg-gray-400 border-0 rounded" />
            </div>
            <div className="flex justify-between">
                <h1 className="md:text-xl lg:text-2xl font-semibold">Total</h1>
                <p className="md:text-2xl lg:text-3xl font-bold">
                    {
                        items.length === 0 && currencyFormat(0)
                    }
                    {
                        items.length > 0 && currencyFormat(items.reduce((acc, item) => acc + (item.price * item.quantity), 0))
                    }
                </p>
            </div>
            <button
                className="btn w-full mt-5 bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                    const modal = document.getElementById('checkout-modal');
                    if (modal instanceof HTMLDialogElement) {
                        modal.showModal();
                    }
                }}
                disabled={items.length === 0}
            >
                Pesan
            </button>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="checkout-modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Pemesanan</h3>
                    <ul className="menu xl:menu-horizontal lg:w-full bg-base-200 rounded-box">
                        <li>
                            <a>
                                <span className="badge badge-primary">Makanan</span>
                            </a>
                            <ul>
                                {
                                    items.filter(item => item.type === 'food').map((item, index) => (
                                        <li key={index}>
                                            <a>
                                                <div className="flex justify-between">
                                                    <p>{item.name} x {item.quantity}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li>
                            <a>
                                <span className="badge badge-primary">Minuman</span>
                            </a>
                            <ul>
                                {
                                    items.filter(item => item.type === 'drink').map((item, index) => (
                                        <li key={index}>
                                            <a>
                                                <div className="flex justify-between">
                                                    <p>{item.name} x {item.quantity}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li>
                            <a>
                                <span className="badge badge-primary">Snack</span>
                            </a>
                            <ul>
                                {
                                    items.filter(item => item.type === 'snack').map((item, index) => (
                                        <li key={index}>
                                            <a>
                                                <div className="flex justify-between">
                                                    <p>{item.name} x {item.quantity}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-error">Batal</button>
                        </form>
                        <form method="dialog">
                            <button className="btn btn-success" onClick={handleOrder}>Pesan</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export { Cart }