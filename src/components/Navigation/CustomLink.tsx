import React from 'react'
import { classNames } from '../utils'
import Link from 'next/link'

export const CustomLink = ({data}: any) => {
    const [selectedItem, setSelectedItem] = React.useState('Edit Profile')
    return (
        <ul className="mt-2">
            {data.map((value: any) => (
                <li key={value.title}
                className={classNames(value.title == selectedItem ? "bg-[#163a59] text-white" : "hover:text-white hover:bg-gray-100 hover:text-gray-800", " text-gray-500 pt-2 cursor-pointer  p-2 rounded-md")}
            >
                <Link
                    href={value.href} onClick={() => setSelectedItem(value.title)}
                    className="flex gap-4 items-center text-center"
                >
                    <value.icon className="w-6 h-6" />
                    <span className="text-sm">{value.title}</span>
                </Link>
            </li>
            ))}
        </ul>
    )
}

export default CustomLink