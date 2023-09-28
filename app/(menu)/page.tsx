import { FC } from "react";
import { MenuItem } from "@/components/Menu/MenuItem";

const Foods: FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 gap-y-8">
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-6 lg:col-span-4">
                    <MenuItem />
                </div>
            </div>
            <div className="join md:float-right mt-5 flex justify-center items-center">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
            </div>

        </>
    )
}

export default Foods