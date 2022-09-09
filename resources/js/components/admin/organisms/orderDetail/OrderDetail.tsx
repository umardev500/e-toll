import { format } from 'libphonenumber-js'
import React, { useContext, useRef } from 'react'
import { GlobalContext, type GlobalContextType } from '../../../../context'
import { toCurrency, toDate, toUpperFirst } from '../../../../helpers'
import { useClickOutside, useCloseModal, useExpTime } from '../../../../hooks'
import { type Order, type Status } from '../../../../types'

interface Props {
    setState: React.Dispatch<React.SetStateAction<boolean>>
    order?: Order
}

export const AdminOrderDetail: React.FC<Props> = ({ setState, order }) => {
    const overlayRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    const handleClose = useCloseModal(setState)
    const status = (order?.status ?? 'none') as Status
    const globalContext = useContext(GlobalContext) as GlobalContextType
    const product = order?.product_copy
    const settledTime = order?.settlement_time
    let settlementTime = ''
    if (settledTime !== null) {
        settlementTime = toDate(order?.settlement_time ?? 0)
    }
    const orderTime = toDate(order?.created_at ?? 0)

    const trxTimeUnix: number = order?.created_at ?? 0
    const expTimeUnix: number = trxTimeUnix + globalContext.orderExp
    const isExp = useExpTime(expTimeUnix)

    const getStatus = (): Status => {
        if (isExp) return 'expired'
        return status
    }

    useClickOutside(overlayRef, innerRef, setState)

    return (
        <div ref={overlayRef} className="modal pt-5 px-5">
            <div ref={innerRef} style={{ width: 325 }} className="modal-inner bg-white rounded-lg">
                {/* Header */}
                <div className="flex justify-between p-4 px-6">
                    <h3 className="text-gray-500 font-medium roboto">Order information</h3>
                    <button onClick={handleClose} className="hover:text-gray-500 text-gray-400">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                {/* body */}
                <div className="px-6 pb-5 pt-4 roboto flex flex-col gap-2.5">
                    <div className="flex items-center justify-between pb-2.5 border-b border-dashed">
                        <span className="text-sm font-medium text-gray-500">Payment Method:</span>
                        <span className="ml-2 text-sm text-gray-400">{order?.bank}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Va Number:</span>
                        <span className="ml-2 text-sm text-gray-400">{order?.va}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Phone Number:</span>
                        <span className="ml-2 text-sm text-gray-400">{format(order?.phone_number ?? '', 'ID', 'INTERNATIONAL')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Order Time:</span>
                        <span className="ml-2 text-sm text-gray-400">{orderTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Status:</span>
                        <span className="ml-2 text-sm text-gray-400">{toUpperFirst(getStatus())}</span>
                    </div>
                    {status === 'settlement' ? (
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-500">Payment Time:</span>
                            <span className="ml-2 text-sm text-gray-400">{settlementTime}</span>
                        </div>
                    ) : null}
                    <div className="flex items-center justify-between pt-2.5 border-t border-dashed">
                        <span className="font-semibold text-gray-500">Total:</span>
                        <span className="ml-2 font-semibold text-gray-500">{toCurrency(product?.price ?? 0, 'Rp')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
