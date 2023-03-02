import React from 'react'
import { Featured } from '../../molecules'

interface Props {
    orders: string
    newOrder: string
    pending: string
    confirmation: string
}

export const FeaturedList: React.FC<Props> = ({ orders, newOrder, pending, confirmation }) => {
    return (
        <div className={`grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pt-5`}>
            <Featured icon="url('/app-icon/book-filled.svg')" color="#94a3b8" title="Orders" subTitle={orders} />
            <Featured icon="url('/app-icon/task.svg')" color="#84cc16" title="New Orders" subTitle={newOrder} />
            <Featured icon="url('/app-icon/receipt-filled.svg')" color="#eab308" title="Orders Pending" subTitle={pending} />
            <Featured icon="url('/app-icon/task-featured.svg')" color="#16a34a" title="Orders Confirmation" subTitle={confirmation} />
        </div>
    )
}
