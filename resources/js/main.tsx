import './bootstrap'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '../css/app.css'
import { AppProvider } from './context/AppContext'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AppProvider>
        <RouterProvider router={router} />
    </AppProvider>
)
