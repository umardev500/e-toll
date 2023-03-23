import React from 'react'
import { AdminOrderListing } from '../../molecules'

export const AdminOrderList: React.FC = () => {
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
                <AdminOrderListing />
                <AdminOrderListing />
                <AdminOrderListing />
            </tbody>
        </table>
    )
}
