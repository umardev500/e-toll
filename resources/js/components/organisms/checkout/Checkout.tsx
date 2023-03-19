import React, { useContext } from 'react'
import { AppContext, type AppContextType } from '../../../context/AppContext'
import { toCurrency } from '../../../helpers'

export const Checkout: React.FC = () => {
    const context = useContext(AppContext) as AppContextType
    const product = context.product

    return (
        <>
            <div className="flex justify-end mt-16 border-t border-t-slate-200">
                <div className="py-4 flex items-end justify-between gap-4 flex-1 mt-4">
                    <div className="flex flex-col items-start">
                        <span className="text-slate-500 roboto">Harga</span>
                        <span className="font-semibold text-2xl text-teal-600">{toCurrency(product?.price ?? 0, 'Rp')}</span>
                    </div>
                    <div>
                        <button className="outline-none w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white px-4 md:px-10 py-2 font-medium rounded-md roboto">
                            Choose payment
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
