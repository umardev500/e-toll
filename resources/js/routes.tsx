import { createBrowserRouter } from 'react-router-dom'
import { AdminHome, Home, Orders } from './pages'

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
])
