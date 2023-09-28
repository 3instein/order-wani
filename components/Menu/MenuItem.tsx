import { FC } from "react";
import AyamGeprek from "public/assets/ayam-geprek.jpg"
import Image from "next/image";
import { Menu } from "@/interfaces/Menu";

interface MenuItemProps {
    menu: Menu
}

const MenuItem: FC<MenuItemProps> = ({ menu }) => {
    return (
        <div className="card md:w-48 lg:w-52 xl:w-72 2xl:w-96 mx-auto md:mx-0 bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform-gpu hover:scale-105">
            <figure className="relative">
                <Image src={AyamGeprek} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{menu.name}</h2>
                <p>Rp. {menu.price}</p>
            </div>
        </div>


    )
}

export { MenuItem }