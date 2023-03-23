import { createBrowserRouter } from 'react-router-dom'
import { AdminHome, Home, Orders } from './pages'
import { Auth } from './pages/admin'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/order-list',
        element: <Orders />,
    },
    {
        path: '/order-list/:phone',
        element: <Orders />,
    },
    {
        path: '/admin',
        element: <AdminHome />,
    },
    {
        path: '/auth',
        element: <Auth />,
    },
])
