import React, { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderList } from '../components/organisms'
import { AppContext, type AppContextType } from '../context/AppContext'
import { useFetchOrders, useReload } from '../hooks'

export const Orders: React.FC = () => {
    const navigate = useNavigate()
    const handleBack = useCallback(() => {
        navigate(-1)
    }, [])

    const context = useContext(AppContext) as AppContextType

    useFetchOrders()
    const reload = useReload()

    return (
        <div className="container py-10 mx-auto flex justify-center">
            <div className="px-4 flex flex-col items-center w-full">
                {/* Heading */}
                <div className="gap-4 py-4 w-full lg:w-1/2 xl:w-1/2 md:w-2/3 relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div onClick={handleBack} className="text-gray-600 hover:text-gray-700 cursor-pointer ">
                            <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.77234 5.43585L3.20817 11L8.77234 16.5642M18.7915 11H3.364"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <h1 className="mb-1 roboto leading-none text-3xl font-medium text-slate-600">Order Listing</h1>
                    </div>
                    <div onClick={reload} className="text-gray-500 hover:text-gray-600 mr-2 cursor-pointer">
                        <svg width="23" height="23" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.0446 7.83168C15.3858 7.43084 16.8658 7.16876 18.5 7.16876C25.8846 7.16876 31.8662 13.1504 31.8662 20.535C31.8662 27.9196 25.8846 33.9013 18.5 33.9013C11.1154 33.9013 5.13374 27.9196 5.13374 20.535C5.13374 17.7908 5.96624 15.2317 7.38458 13.1042M12.1329 8.20168L16.5883 3.08334M12.1329 8.20168L17.3283 11.9942"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                {/* List */}
                <OrderList />

                {context.orders.length < 1 ? (
                    <div className="mt-10">
                        <div className="flex items-center gap-1.5 roboto hover:bg-slate-50 text-slate-500 hover:text-slate-600 cursor-pointer border px-4 py-2 rounded">
                            <span>Track other number</span>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
