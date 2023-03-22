import React, { useContext } from 'react'
import { AppContext, type AppContextType } from '../../../context/AppContext'
import { OrderListing } from '../../molecules'

export const OrderList: React.FC = () => {
    const context = useContext(AppContext) as AppContextType

    return (
        <div className="py-4 w-full lg:w-1/2 xl:w-1/2 md:w-2/3 relative flex items-center flex-wrap">
            <div className="grid grid-cols-1 gap-7 flex-1">
                {context.orders.map((order, i) => (
                    <OrderListing order={order} key={i} />
                ))}
            </div>
        </div>
    )
}
