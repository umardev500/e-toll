import { createBrowserRouter } from 'react-router-dom'
import { OrderList } from './components/organisms'
import { Home } from './pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/order-list',
        element: <OrderList />,
    },
])
