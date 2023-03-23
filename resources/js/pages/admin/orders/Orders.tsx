import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AdminOrderList } from '../../../components/admin'
import { Pagination } from '../../../components/organisms'

export const AdminOrders: React.FC = () => {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page') ?? 0

    useEffect(() => {
        console.log('page:', page)
    }, [page])
    return (
        <div>
            <div className="pt-4">
                <div className="bg-white pt-4 pb-2 px-10 rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-500 mb-6 mt-2 roboto">Data Pemesanan</h1>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5">
                        <button className="outline-none bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md font-medium roboto whitespace-nowrap mb-4 lg:mb-0 flex items-center justify-center lg:justify-start">
                            Filter tampilan
                        </button>
                    </div>
                    <div className="bg-white overflow-auto rounded-lg border-l border-r border-b mb-5">
                        <AdminOrderList />
                    </div>
                    <div>
                        <Pagination pageCount={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}
