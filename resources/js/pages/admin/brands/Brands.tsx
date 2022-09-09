import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrandList, ProductFilter, Search } from '../../../components/admin'
import { Pagination } from '../../../components/organisms'

export const Brands: React.FC = () => {
    const [search, setSearch] = useState('')
    const [total, setTotal] = useState(0)
    const [showFilter, setShowFilter] = useState(false)
    const navigate = useNavigate()

    const searchCallback = useCallback((keyword: string) => {
        console.log('callback key', keyword)
        setSearch(keyword)
    }, [])

    const paginationCallback = useCallback((params: string) => {
        navigate({
            pathname: '/admin/products',
            search: `?${params}`,
        })
    }, [])

    return (
        <div>
            <div className="pt-4">
                <div className="bg-white pt-4 pb-2 px-10 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6 mt-2 roboto">Order Listing</h1>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5">
                        <div className="flex gap-2">
                            <button className="outline-none bg-yellow-500 hover:bg-blue-600 text-white px-2 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H18M12 18V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={() => {
                                    setShowFilter(true)
                                }}
                                className="outline-none bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start"
                            >
                                Filter viewing
                            </button>
                        </div>
                        <Search callback={searchCallback} title="Enter the keyword" placeholder="Enter key to search" />
                    </div>
                    <div className="bg-white overflow-auto rounded-lg border mb-5">
                        <BrandList />
                    </div>
                    <div>
                        <Pagination onPageChangeCallback={paginationCallback} pageCount={total} />
                    </div>
                </div>
            </div>
            {showFilter ? <ProductFilter setState={setShowFilter} /> : null}
        </div>
    )
}
