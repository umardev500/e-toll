import React, { useContext } from 'react'
import { OrderListBtn } from '../components/atoms'
import { SerachToll, TollList, Checkout } from '../components/organisms'
import { AppContext, type AppContextType } from '../context/AppContext'
export const Home: React.FC = () => {
    const context = useContext(AppContext) as AppContextType

    return (
        <div className="container py-10 mx-auto flex justify-center">
            <div className="px-4 flex flex-col items-center w-full">
                <div className="py-4 w-full lg:w-1/2 xl:w-1/2 md:w-2/3 relative flex items-center">
                    <h1 className="mb-1 text-3xl font-medium roboto text-slate-600">Balance selling</h1>
                </div>

                {/* Input area */}
                <SerachToll />

                {/* Result */}
                {context.products.length > 0 ? (
                    <div className="mt-10 p-4 w-full md:w-2/3">
                        <div className="text-gray-500 roboto">Nominal</div>

                        {/* Toll list */}
                        <TollList />

                        {/* Checkout */}
                        <Checkout />
                    </div>
                ) : (
                    <div className="mt-10">
                        <OrderListBtn />
                    </div>
                )}
            </div>
        </div>
    )
}
