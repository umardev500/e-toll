import React, { useCallback, useState } from 'react'
import { AdminOrderList, OrderFilter, ProductList, Search } from '../../../components/admin'
import { Pagination } from '../../../components/organisms'

export const Product: React.FC = () => {
    const [search, setSearch] = useState('')
    const [total, setTotal] = useState(0)
    const [showFilter, setShowFilter] = useState(false)

    const searchCallback = useCallback((keyword: string) => {
        console.log('callback key', keyword)
        setSearch(keyword)
    }, [])

    return (
        <div>
            <div className="pt-4">
                <div className="bg-white pt-4 pb-2 px-10 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6 mt-2 roboto">Order Listing</h1>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5">
                        <button
                            onClick={() => {
                                setShowFilter(true)
                            }}
                            className="outline-none bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start"
                        >
                            Filter viewing
                        </button>
                        <Search callback={searchCallback} title="Enter the keyword" placeholder="Enter key to search" />
                    </div>
                    <div className="bg-white overflow-auto rounded-lg border mb-5">
                        <ProductList />
                    </div>
                    <div>
                        <Pagination pageCount={total} />
                    </div>
                </div>
            </div>
            {showFilter ? <OrderFilter setState={setShowFilter} /> : null}
        </div>
    )
}
