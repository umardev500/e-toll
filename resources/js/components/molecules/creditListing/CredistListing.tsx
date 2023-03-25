import React, { useCallback, useContext } from 'react'
import { AppContext, type AppContextType } from '../../../context/AppContext'
import { toCurrency } from '../../../helpers'
import { type Product } from '../../../types'

interface Props {
    product: Product
}

export const CreditListing: React.FC<Props> = ({ product }) => {
    const context = useContext(AppContext) as AppContextType
    const isActive = (context.product?.id ?? 0) === product.id

    const handleClick = useCallback(() => {
        context.setProduct(product)
    }, [])

    return (
        <>
            <div
                onClick={handleClick}
                className={`border cursor-pointer text-center rounded-md py-4 px-6 ${isActive ? 'border-teal-500 ring-1 ring-teal-400' : 'border-slate-200'}`}
            >
                <div className="font-bold roboto text-2xl text-teal-600 select-none">{toCurrency(product.toll, 'Rp')}</div>
                <div className="text-sm mt-1 roboto text-slate-500 select-none">Bayar: {toCurrency(product.price, 'Rp')}</div>
            </div>
        </>
    )
}
