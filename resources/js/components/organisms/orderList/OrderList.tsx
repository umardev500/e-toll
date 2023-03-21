import React from 'react'
import { OrderListing } from '../../molecules'

export const OrderList: React.FC = () => {
    return (
        <div className="py-4 w-full lg:w-1/2 xl:w-1/2 md:w-2/3 relative flex items-center flex-wrap">
            <div className="grid grid-cols-1 gap-7 flex-1">
                {[...Array(5)].map(() => (
                    <OrderListing />
                ))}
            </div>
        </div>
    )
}
