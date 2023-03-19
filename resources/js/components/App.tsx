import React from 'react'
import { Checkout, SerachToll, TollList } from './organisms'

export const App: React.FC = () => {
    return (
        <div className="container py-10 mx-auto flex justify-center">
            <div className="px-4 flex flex-col items-center w-full">
                {/* Input area */}
                <SerachToll />

                {/* Result */}
                <div className="mt-10 p-4 w-full md:w-2/3">
                    <div className="text-gray-600 text-lg">Nominal</div>

                    {/* Toll list */}
                    <TollList />

                    {/* Checkout */}
                    <Checkout />
                </div>
            </div>
        </div>
    )
}
