import { SidebarBrand } from '../../atoms'
import { SidebarNavigation } from '../../molecules'
import { useSidebarClose } from '../../../../hooks'
import { useContext } from 'react'
import { AppContext, type AppContextType } from '../../../../context/AppContext'

export const Sidebar: React.FC = () => {
    const context = useContext(AppContext) as AppContextType
    const closeSidebar = useSidebarClose()

    return (
        <>
            <aside className="sidebar bg-white">
                <SidebarBrand />
                <SidebarNavigation />
            </aside>
            {context.sidebarShown ? (
                <div onClick={closeSidebar} className="sidebar-overlay absolute top-0 right-0 bottom-0 left-0">
                    sdsd
                </div>
            ) : null}
        </>
    )
}
