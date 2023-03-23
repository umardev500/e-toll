import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '../components/admin'
import '../../css/font.css'
import '../../css/dashboard.css'

export const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container sidebar-shown">
            <Navbar />
            <Sidebar />
            <div className="content py-4">
                <Outlet />
            </div>
        </div>
    )
}
