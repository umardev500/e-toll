import React from 'react'

export const RightNavbar: React.FC = () => {
    return (
        <ul className="navigation flex">
            <li className="flex relative">
                <a className="navigation-link avatar-item flex items-center px-4" href="#">
                    <img src="avatars/avatar-2.png" className="object-cover w-9 h-9 object-top rounded-full" alt="avatar" />
                </a>
            </li>
        </ul>
    )
}
