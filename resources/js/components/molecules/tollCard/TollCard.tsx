import React from 'react'
import { toCurrency } from '../../../helpers'
import { type Product } from '../../../types'

interface Props {
    index: number
    selectedIndex: number
    product: Product
    onClick: (index: number) => void
}

export const TollCard: React.FC<Props> = ({ index, selectedIndex, product, onClick }) => {
    return (
        <>
            <div
                onClick={() => {
                    onClick(index)
                }}
                className={`border cursor-pointer text-center rounded-md py-4 px-6 ${selectedIndex === index ? 'border-teal-500' : 'border-slate-200'}`}
            >
                <div className="font-semibold text-2xl text-teal-600">{toCurrency(product.price, 'Rp')}</div>
                <div className="text-sm mt-1 text-slate-500">Bayar: {toCurrency(product.price, 'Rp')}</div>
            </div>
        </>
    )
}
