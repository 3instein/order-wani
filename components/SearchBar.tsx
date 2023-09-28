import { FC } from "react"

const SearchBar: FC = () => {
    return (
        <>
            <input
                type="text"
                placeholder="Makan apa ya hari ini?"
                className="input input-bordered w-full pl-6"
            />
        </>
    )
}

export { SearchBar }