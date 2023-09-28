import { FC } from "react";

const CartItem: FC = () => {
    return (
        <div className="card card-compact w-64 lg:w-fit 2xl:w-96 bg-base-100 px-5">
            <div className="card-body">
                <div className="card-actions justify-end">
                    <button className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <h2 className="card-title">Ayam Geprek x 1</h2>
                <p>Rp. 15.000</p>
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