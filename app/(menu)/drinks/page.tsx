import { Menu } from "@/interfaces/Menu";
import { MenuItem } from "@/components/Menu/MenuItem";
import { FC } from "react";

const menus: Menu[] = [
    {
        id: 2,
        name: "Es Teh",
        price: 5000,
        type: 'drink'
    },
]

const Drinks: FC = () => {
    return (
        <>
            {
                menus.length === 0 ? (
                    <div className="flex justify-center items-center h-1/2">
                        <p className="text-2xl font-bold">Tidak ada menu</p>
                    </div>
                )
                    :
                    (
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 gap-y-8">
                            {
                                menus.filter(menu => menu.type === 'drink').map((menu, index) => (
                                    <MenuItem key={index} menu={menu} />
                                ))
                            }
                        </div>
                    )
            }
            {
                menus.length > 0 && menus.length > 6 && (
                    <div className="join md:float-right mt-5 flex justify-center items-center">
                        <button className="join-item btn">1</button>
                        <button className="join-item btn btn-active">2</button>
                        <button className="join-item btn">3</button>
                        <button className="join-item btn">4</button>
                    </div>
                )
            }
        </>
    )
}

export default Drinks