import React, { useContext, useState } from 'react'
import { AppContext, type AppContextType } from '../../../context/AppContext'
import { TollCard } from '../../molecules'

export const TollList: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<number>(-1)
    const context = useContext(AppContext) as AppContextType

    const brands = context.brands ?? []

    const handleItemClick = (index: number) => {
        setSelectedItem(index)
    }

    return (
        <>
            <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {brands.map((_, i) => (
                    <TollCard key={i} onClick={handleItemClick} index={i} selectedIndex={selectedItem} />
                ))}
            </div>
        </>
    )
}
