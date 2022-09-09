import React from 'react'
import { ProductListing } from '../../molecules'

export const ProductList: React.FC = () => {
    return (
        <>
            <table className="w-full table table-nohover">
                <thead>
                    <tr>
                        <th className="text-center px-4 border-r py-3 w-16 whitespace-nowrap">No.</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Product ID</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Vendor</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Balance</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Price</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Created Time</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Status</th>
                        <th className="text-center px-4 border-r py-3 whitespace-nowrap">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <ProductListing />
                </tbody>
            </table>
        </>
    )
}
