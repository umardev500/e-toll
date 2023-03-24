import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'
import { AdminOrderList, Search } from '../../../components/admin'
import { Pagination } from '../../../components/organisms'
import { useFetchOrderAdmin } from '../../../hooks'
import { type Order } from '../../../types'

export const AdminOrders: React.FC = () => {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page') ?? 0
    const pageNum = parseInt(page.toString())
    const [orders, setOrders] = useState<Order[]>([])
    const [total, setTotal] = useState(0)
    const [search, setSearch] = useState('')

    const fetchOrder = useFetchOrderAdmin()
    useEffect(() => {
        toast
            .promise(
                fetchOrder(pageNum),
                {
                    success: 'Orders data is loaded',
                    error: 'Something went wrong!',
                    loading: 'Loading order...',
                },
                { className: 'roboto' }
            )
            .then((res) => {
                const data = res.data
                const dataTotal = res.to
                const perPage = res.per_page
                setOrders(data)
                const pages = Math.ceil(dataTotal / perPage)
                setTotal(pages)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [pageNum])

    const searchCallback = useCallback(() => {
        console.log('callback')
    }, [])

    return (
        <div>
            <div className="pt-4">
                <div className="bg-white pt-4 pb-2 px-10 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6 mt-2 roboto">Order Listing</h1>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5">
                        <button className="outline-none bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start">
                            Filter viewing
                        </button>
                        <Search callback={searchCallback} title="Enter the keyword" placeholder="Enter key to search" />
                    </div>
                    <div className="bg-white overflow-auto rounded-lg border-l border-r border-b mb-5">
                        <AdminOrderList orders={orders} />
                    </div>
                    <div>
                        <Pagination pageCount={total} />
                    </div>
                </div>
            </div>
        </div>
    )
}
