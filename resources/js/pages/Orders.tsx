import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderList } from '../components/organisms'

export const Orders: React.FC = () => {
    const navigate = useNavigate()
    const handleBack = useCallback(() => {
        navigate(-1)
    }, [])

    return (
        <div className="container py-10 mx-auto flex justify-center">
            <div className="px-4 flex flex-col items-center w-full">
                {/* Heading */}
                <div className="gap-4 py-4 w-full lg:w-1/2 xl:w-1/2 md:w-2/3 relative flex items-center">
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
                {/* List */}
                <OrderList />
            </div>
        </div>
    )
}
