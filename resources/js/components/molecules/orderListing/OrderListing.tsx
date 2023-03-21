import React from 'react'

export const OrderListing: React.FC = () => {
    return (
        <div className="flex-1 overflow-hidden p-5 border border-gray-100 rounded-lg shadow-[0_3px_5px_rgba(0,0,0,.05)]">
            {/* Top */}
            <div className="flex flex-wrap items-center justify-between">
                <div className="roboto flex items-center gap-2 whitespace-nowrap">
                    <span className="text-gray-500 font-semibold">Pulsa</span>
                    <span className="text-sm text-gray-500">Mar, 25 2023</span>
                </div>
                <div className="roboto whitespace-nowrap flex">
                    <span className="text-gray-500 text-sm">Pay before:</span>
                    <span className="text-orange-500 text-sm ml-2 font-medium">Mar, 25 10:15</span>
                </div>
            </div>
            {/* Center */}
            <div className="mt-4 flex flex-col xl:flex-row gap-4 xl:gap-4 justify-between">
                <div className="flex items-center gap-4">
                    <img className="w-14 hidden xl:flex" src="bca.png" alt="" />
                    <div>
                        <div className="roboto text-sm text-gray-500">Payment Method</div>
                        <div className="roboto mt-1 text-gray-500 font-semibold">BCA Virtual Account</div>
                    </div>
                </div>
                <div className="flex flex-1 xl:gap-4 items-center">
                    <div className="w-1 h-8 border-l hidden xl:flex"></div>
                    <div>
                        <div className="roboto text-sm text-gray-500">Virtual Account Number</div>
                        <div className="roboto mt-1 text-gray-500 font-semibold">80777083142765573</div>
                    </div>
                </div>
                <div className="flex items-center xl:gap-4">
                    <div className="w-1 h-8 border-l hidden xl:flex"></div>
                    <div>
                        <div className="roboto text-sm text-gray-500">Payment Total</div>
                        <div className="roboto mt-1 text-gray-500 font-semibold">Rp25.000</div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="mt-8 border-gray-100">
                <div className="flex flex-col xl:flex-row justify-center xl:justify-between xl:items-center gap-2.5">
                    <div className="flex items-center gap-1.5 roboto">
                        <span className="text-gray-500 text-sm font-medium">Status:</span>
                        <span className="text-teal-600 text-sm font-medium">Pending</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="w-full outline-none text-sm font-medium roboto border border-gray-300 px-4 py-1.5 rounded text-gray-400 hover:bg-gray-50">Cancel</button>
                        <button className="w-full whitespace-nowrap outline-none text-sm font-medium roboto border border-teal-600 bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded">
                            See more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
