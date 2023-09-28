'use client'

import { FC } from "react";
import Image from "next/image";
import { Menu } from "@/interfaces/Menu";
import { useCartStore } from "@/stores/CartStore";
import { CartItem } from "@/interfaces/CartItem";
import { currencyFormat } from '../../functions/general';

interface MenuItemProps {
    menu: Menu
}

const MenuItem: FC<MenuItemProps> = ({ menu }) => {

    const { items, setItems } = useCartStore()

    const handleAddToCart = () => {

        const existingItem = items.find(item => item.id === menu.id)
        if (existingItem) {
            const newItems = items.map(item => {
                if (item.id === menu.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            setItems(newItems)
        } else {
            const newCartItem: CartItem = {
                id: menu.id,
                name: menu.name,
                price: menu.price,
                type: menu.type,
                quantity: 1
            }
            setItems([...items, newCartItem])
        }
    }

    return (
        <div
            className="card md:w-48 lg:w-52 xl:w-72 2xl:w-96 mx-auto md:mx-0 bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform-gpu hover:scale-105"
            onClick={handleAddToCart}
        >
            <figure className="relative">
                <img src={`/assets/ayam-geprek.jpg`} alt={menu.name}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{menu.name}</h2>
                <p>{currencyFormat(menu.price)}</p>
            </div>
        </div>


    )
}

export { MenuItem }