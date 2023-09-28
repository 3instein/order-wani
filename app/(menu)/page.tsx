import { FC } from "react";
import { MenuItem } from "@/components/Menu/MenuItem";

const Foods: FC = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 gap-y-8">
                <div className="md:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-4">
                    <MenuItem />
                </div>
                <div className="md:col-span-4">
                    <MenuItem />
                </div>
            </div>

        </>
    )
}

export default Foods