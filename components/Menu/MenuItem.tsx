import { FC } from "react";

const MenuItem: FC = () => {
    return (
        <div className="card w-96 md:w-60 lg:w-80 mx-auto md:mx-0 bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform-gpu hover:scale-105">
            <figure className="relative">
                <img src="assets/ayam-geprek.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Ayam Geprek</h2>
                <p>Rp. 15.000</p>
            </div>
        </div>


    )
}

export { MenuItem }