import { SidebarBrand } from '../../atoms'
import '../../../../../css/sidebar.css'

export const Sidebar: React.FC = () => {
    return (
        <>
            <aside className="sidebar bg-white">
                <SidebarBrand />
            </aside>
        </>
    )
}
