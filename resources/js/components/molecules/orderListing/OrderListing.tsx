import React from 'react'

export const OrderListing: React.FC = () => {
    return (
        <div className="flex-1 p-5 border border-gray-100 rounded-lg shadow-[0_3px_5px_rgba(0,0,0,.05)]">
            {/* Top */}
            <div className="flex justify-between">
                <div className="roboto flex items-center gap-2">
                    <span className="text-gray-500 font-semibold">Pulsa</span>
                    <span className="text-sm text-gray-500">Mar, 25 2023</span>
                </div>
                <div className="roboto">
                    <span className="text-gray-500 text-sm">Pay before:</span>
                    <span className="text-orange-500 text-sm ml-2 font-medium">Mar, 25 10:15</span>
                </div>
            </div>
            {/* Center */}
            <div className="mt-4 flex justify-between gap-10">
                <div className="flex items-center gap-4">
                    <img className="w-14" src="bca.png" alt="" />
                    <div>
                        <div className="roboto text-sm text-gray-500">Payment Method</div>
                        <div className="roboto mt-1 text-gray-500 font-semibold">BCA Virtual Account</div>
                    </div>
                </div>
                <div className="flex flex-1 px-5 items-center gap-5">
                    <div className="w-1 h-8 border-l"></div>
                    <div>
                        <div className="roboto text-sm text-gray-500">Virtual Account Number</div>
                        <div className="roboto mt-1 text-gray-500 font-semibold">80777083142765573</div>
                    </div>
                </div>
                <div className="flex px-5 items-center gap-5">
                    <div className="w-1 h-8 border-l"></div>
                    <div>
                        <div className="roboto text-sm text-gray-500">Payment Total</div>
                        <div className="roboto mt-1 text-gray-500 font-semibold">Rp25.000</div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="mt-8 border-gray-100">
                <div className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-1.5 roboto">
                        <span className="text-gray-500 text-sm font-medium">Status:</span>
                        <span className="text-green-600 text-sm font-medium">Pending</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="outline-none text-sm font-medium roboto border border-gray-300 px-4 py-1.5 rounded text-gray-400 hover:bg-gray-50">Cancel</button>
                        <button className="outline-none text-sm font-medium roboto border border-teal-600 bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded">
                            See more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
