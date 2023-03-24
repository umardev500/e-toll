import React from 'react'
import { type Order } from '../../../../types'
import { AdminOrderListing } from '../../molecules'

interface Props {
    orders: Order[]
}

export const AdminOrderList: React.FC<Props> = ({ orders }) => {
    return (
        <table className="w-full table table-nohover">
            <thead>
                <tr>
                    <th className="text-center px-4 border-r py-3 w-16 whitespace-nowrap">No.</th>
                    <th className="text-left px-4 border-r py-3 whitespace-nowrap">Order ID</th>
                    <th className="text-left px-4 border-r py-3 whitespace-nowrap">Balance</th>
                    <th className="text-left px-4 border-r py-3 whitespace-nowrap">Price</th>
                    <th className="text-left px-4 border-r py-3 whitespace-nowrap">Phone Number</th>
                    <th className="text-left px-4 border-r py-3 whitespace-nowrap">Status</th>
                    <th className="text-center px-4 border-r py-3 whitespace-nowrap">Action</th>
                </tr>
            </thead>

            <tbody>
                {orders.map((order) => (
                    <AdminOrderListing order={order} key={order.id} />
                ))}
            </tbody>
        </table>
    )
}
