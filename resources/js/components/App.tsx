import React, { useContext } from 'react'
import { AppContext, type AppContextType } from '../context/AppContext'
import { Checkout, SerachToll, TollList } from './organisms'

export const App: React.FC = () => {
    const context = useContext(AppContext) as AppContextType

    return (
        <div className="container py-10 mx-auto flex justify-center">
            <div className="px-4 flex flex-col items-center w-full">
                {/* Input area */}
                <SerachToll />

                {/* Result */}
                {context.products.length > 0 ? (
                    <div className="mt-10 p-4 w-full md:w-2/3">
                        <div className="text-gray-600 roboto">Nominal</div>

                        {/* Toll list */}
                        <TollList />

                        {/* Checkout */}
                        <Checkout />
                    </div>
                ) : null}
            </div>
        </div>
    )
}
