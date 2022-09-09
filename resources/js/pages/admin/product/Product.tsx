import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ProductFilter, ProductList, Search } from '../../../components/admin'
import { Pagination } from '../../../components/organisms'
import { useFetchProducts } from '../../../hooks'
import { type Product } from '../../../types'

export const Products: React.FC = () => {
    const [search, setSearch] = useState('')
    const [total, setTotal] = useState(0)
    const [showFilter, setShowFilter] = useState(false)
    const [products, setProducts] = useState<Product[]>([])
    const [perPage, setPerPage] = useState(10)
    const navigate = useNavigate()

    const [searchParams] = useSearchParams()
    const page = parseInt(searchParams.get('page') ?? '0')
    const sort = searchParams.get('sort') ?? 'desc'
    const status = searchParams.get('status') ?? 'none'

    const searchCallback = useCallback((keyword: string) => {
        console.log('callback key', keyword)
        setSearch(keyword)
    }, [])
    const fetchProducts = useFetchProducts()

    useEffect(() => {
        toast
            .promise(
                fetchProducts(page, sort, status, search),
                {
                    success: 'Products data is loaded',
                    error: 'Something went wrong!',
                    loading: 'Loading products...',
                },
                { className: 'roboto', position: 'top-right' }
            )
            .then((res) => {
                const data = res.data
                const total = res.total
                const perPage = res.per_page
                const pages = Math.ceil(total / perPage)
                setTotal(pages)
                setProducts(data)
                setPerPage(perPage)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [page, sort, status, search])

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
                        <ProductList perPage={perPage} products={products} />
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
