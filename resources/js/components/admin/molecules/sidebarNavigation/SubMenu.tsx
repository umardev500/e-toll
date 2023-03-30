import React from 'react'
import { Link } from 'react-router-dom'

const totalMenu = 2
const marginY = (totalMenu + 1) * 4
const menuHeight = 44

export const SubMenu: React.FC = () => {
    return (
        <div className="sub-menu" style={{ ['--h' as string]: `${menuHeight * totalMenu + marginY * 2}px` }}>
            <ul className="sidebar-navigation">
                <li className="overflow-hidden">
                    <Link
                        to={'/admin'}
                        className={`outline-none sidebar-link rounded flex px-4 items-center hover:bg-gray-100 my-1 h-11 text-gray-500 hover:text-gray-600 font-medium`}
                    >
                        <div className="flex gap-2.5 items-center flex-1 roboto">
                            <span
                                className="icon"
                                style={{
                                    ['--off' as string]: "url('/app-icon/circle-outline.svg')",
                                    ['--on' as string]: "url('/app-icon/circle-outline.svg')",
                                    ['--mask-size' as string]: '22px',
                                }}
                            ></span>
                            <span>User Profile</span>
                        </div>
                    </Link>
                </li>
                <li className="overflow-hidden">
                    <Link
                        to={'/admin'}
                        className={`outline-none sidebar-link rounded flex px-4 items-center hover:bg-gray-100 my-1 h-11 text-gray-500 hover:text-gray-600 font-medium`}
                    >
                        <div className="flex gap-2.5 items-center flex-1 roboto">
                            <span
                                className="icon"
                                style={{
                                    ['--off' as string]: "url('/app-icon/circle-outline.svg')",
                                    ['--on' as string]: "url('/app-icon/circle-outline.svg')",
                                    ['--mask-size' as string]: '22px',
                                }}
                            ></span>
                            <span>Logout Account</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
