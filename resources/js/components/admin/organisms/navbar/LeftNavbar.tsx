import React from 'react'

export const LeftNavbar: React.FC = () => {
    return (
        <ul className="navigation flex">
            <li>
                <a href={'/'} className="navigation-link px-4 roboto text-gray-500 hover:text-gray-400 font-medium">
                    Home
                </a>
            </li>
        </ul>
    )
}
