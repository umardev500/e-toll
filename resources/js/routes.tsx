import { createBrowserRouter } from 'react-router-dom'
import { Home, Orders } from './pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/order-list',
        element: <Orders />,
    },
])
