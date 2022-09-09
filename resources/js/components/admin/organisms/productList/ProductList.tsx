import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { type Product } from '../../../../types'
import { ProductListing } from '../../molecules'

interface Props {
    products: Product[]
    perPage: number
}

export const ProductList: React.FC<Props> = ({ products, perPage }) => {
    const [searchParams] = useSearchParams()
    const page = parseInt(searchParams.get('page') ?? '0')
    const startIndex = page * perPage

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
                    {products.map((product, i) => (
                        <ProductListing product={product} key={product.id} index={startIndex + (i + 1)} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
