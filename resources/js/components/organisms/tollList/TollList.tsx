import React, { useState } from 'react'
import { TollCard } from '../../molecules'

export const TollList: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<number>(-1)

    const handleItemClick = (index: number) => {
        setSelectedItem(index)
    }

    return (
        <>
            <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[...Array(15)].map((_, i) => (
                    <TollCard onClick={handleItemClick} index={i} selectedIndex={selectedItem} />
                ))}
            </div>
        </>
    )
}
