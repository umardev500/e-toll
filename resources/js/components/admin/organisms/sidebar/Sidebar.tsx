import { SidebarBrand } from '../../atoms'
import '../../../../../css/sidebar.css'
import { SidebarNavigation } from '../../molecules'

export const Sidebar: React.FC = () => {
    return (
        <>
            <aside className="sidebar bg-white">
                <SidebarBrand />
                <SidebarNavigation />
            </aside>
        </>
    )
}
