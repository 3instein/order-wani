'use client'

import { FC, useState } from 'react'
import { FaBowlFood } from 'react-icons/fa6'
import { MdLocalDrink } from 'react-icons/md'
import { CiFries } from 'react-icons/ci'
import Link from 'next/link'

const Menu: FC = () => {

    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    }

    return (
        <>
            <div className="tabs my-5">
                <Link
                    href="/foods"
                    className={`tab md:tab-md lg:tab-lg tab-bordered ${activeTab === 0 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(0)}
                >
                    <span className="px-1"><FaBowlFood /></span>
                    Makanan
                </Link>
                <Link
                    href="/drinks"
                    className={`tab md:tab-md lg:tab-lg tab-bordered ${activeTab === 1 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    <span className="px-1"><MdLocalDrink /></span>
                    Minuman
                </Link>
                <Link
                    href="/snacks"
                    className={`tab md:tab-md lg:tab-lg tab-bordered ${activeTab === 2 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(2)}
                >
                    <span className="px-1"><CiFries /></span>
                    Snack
                </Link>
            </div>
        </>
    )
}

export { Menu }
