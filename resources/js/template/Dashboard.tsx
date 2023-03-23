import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/admin'
import '../../css/font.css'

export const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container sidebar-shown">
            <Sidebar />
            <div className="content">
                <div>Content</div>
                <Outlet />
            </div>
        </div>
    )
}
