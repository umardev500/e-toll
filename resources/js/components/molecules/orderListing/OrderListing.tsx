import React, { useContext, useState } from 'react'
import '../../../../css/modal.css'
import { AppContext, type AppContextType } from '../../../context/AppContext'
import { toCurrency, toUpperFirst } from '../../../helpers'
import { useExpTime } from '../../../hooks'
import { type Order } from '../../../types'
import { OrderDetail } from '../../organisms'

interface Props {
    order: Order
}

export const OrderListing: React.FC<Props> = ({ order }) => {
    const [detailOpen, setDetailOpen] = useState<boolean>(false)
    const context = useContext(AppContext) as AppContextType
    const status = order.status

    const product = order.product_copy
    const trxTimeUnix: number = order.created_at
    const expTimeUnix: number = trxTimeUnix + context.orderExp
    const trxTime = new Date(trxTimeUnix * 1000)
    const formattedTrxTime = trxTime.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    const expTime = new Date(expTimeUnix * 1000)
    const formattedExpTime = expTime.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    const isExp = useExpTime(expTimeUnix)

    const getStatus = (): string => {
        if (isExp) return 'Expired'
        return toUpperFirst(status)
    }

    const shownCancel = status === 'pending' && !isExp

    return (
        <>
            <div className="flex-1 overflow-hidden p-5 border border-gray-100 rounded-lg shadow-[0_3px_5px_rgba(0,0,0,.05)]">
                {/* Top */}
                <div className="flex flex-wrap items-center justify-between">
                    <div className="roboto flex items-center gap-2 whitespace-nowrap">
                        <span className="text-gray-500 font-semibold">Pulsa</span>
                        <span className="text-sm text-gray-500">{formattedTrxTime}</span>
                    </div>
                    <div className="roboto whitespace-nowrap flex">
                        <span className="text-gray-500 text-sm">Pay before:</span>
                        <span className="text-orange-500 text-sm ml-2 font-medium">{formattedExpTime}</span>
                    </div>
                </div>
                {/* Center */}
                <div className="mt-4 gap-4 grid xl:grid-cols-12">
                    <div className="flex items-center gap-4 col-span-5">
                        <img className="w-14 hidden xl:flex" src="bca.png" alt="" />
                        <div>
                            <div className="roboto text-sm text-gray-500 whitespace-nowrap">Payment Method</div>
                            <div className="roboto mt-1 text-gray-500 font-semibold">{order.bank}</div>
                        </div>
                    </div>
                    <div className="flex flex-1 xl:gap-4 col-span-4 items-center">
                        <div className="w-1 h-8 border-l hidden xl:flex"></div>
                        <div>
                            <div className="roboto text-sm text-gray-500">Virtual Account Number</div>
                            <div className="roboto mt-1 text-gray-500 font-semibold">{order.va}</div>
                        </div>
                    </div>
                    <div className="flex items-center xl:gap-4 col-span-3">
                        <div className="w-1 h-8 border-l hidden xl:flex"></div>
                        <div>
                            <div className="roboto text-sm text-gray-500 whitespace-nowrap">Payment Total</div>
                            <div className="roboto mt-1 text-gray-500 font-semibold">{toCurrency(product.price, 'Rp')}</div>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div className="mt-8 border-gray-100">
                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between xl:items-center gap-2.5">
                        <div className="flex items-center gap-1.5 roboto">
                            <span className="text-gray-500 text-sm font-medium">Status:</span>
                            <span className="text-teal-600 text-sm font-medium">{getStatus()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {shownCancel ? (
                                <button className="w-full outline-none text-sm font-medium roboto border border-gray-300 px-4 py-1.5 rounded text-gray-400 hover:bg-gray-50">
                                    Cancel
                                </button>
                            ) : null}
                            <button
                                onClick={() => {
                                    setDetailOpen(true)
                                }}
                                className="w-full whitespace-nowrap outline-none text-sm font-medium roboto border border-teal-600 bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded"
                            >
                                See more
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {detailOpen ? <OrderDetail order={order} setState={setDetailOpen} /> : null}
        </>
    )
}
