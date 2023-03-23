import { createBrowserRouter } from 'react-router-dom'
import { Home, Orders } from './pages'
import { Auth } from './pages/admin'
import { Dashboard } from './template'

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
        element: <Dashboard />,
    },
    {
        path: '/auth',
        element: <Auth />,
    },
])
