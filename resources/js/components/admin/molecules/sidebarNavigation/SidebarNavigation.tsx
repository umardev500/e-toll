import React from 'react'
import { Link } from 'react-router-dom'

const SidebarElement = () => {
    return (
        <div className="px-2 mt-4">
            <ul className="sidebar-navigation">
                <li className="overflow-hidden">
                    <Link
                        to={'/admin'}
                        className={`outline-none sidebar-link active rounded flex px-4 items-center hover:bg-gray-100 my-1 h-11 text-gray-500 hover:text-gray-600 font-medium`}
                    >
                        <div className="flex gap-2.5 items-center flex-1 roboto">
                            <span className="icon" style={{ ['--off' as string]: "url('/app-icon/dashboard_icon_solid.svg')" }}></span>
                            <span>Dashboard</span>
                        </div>
                    </Link>
                </li>
                <li className="overflow-hidden">
                    <Link
                        to={'/admin/orders'}
                        className={`outline-none sidebar-link rounded flex px-4 items-center hover:bg-gray-100 my-1 h-11 text-gray-500 hover:text-gray-600 font-medium`}
                    >
                        <div className="flex gap-2.5 items-center flex-1 roboto">
                            <span className="icon" style={{ ['--off' as string]: "url('/app-icon/receipt.svg')" }}></span>
                            <span>Orders List</span>
                        </div>
                    </Link>
                </li>
                <li className="overflow-hidden">
                    <Link
                        to={'/admin/settings'}
                        className={`outline-none sidebar-link rounded flex px-4 items-center hover:bg-gray-100 my-1 h-11 text-gray-500 hover:text-gray-600 font-medium`}
                    >
                        <div className="flex gap-2.5 items-center flex-1 roboto">
                            <span className="icon" style={{ ['--off' as string]: "url('/app-icon/settings.svg')" }}></span>
                            <span>Settings</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export const SidebarNavigation = React.memo(SidebarElement)
