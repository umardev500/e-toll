import React, { useCallback } from 'react'
import ReactPaginate from 'react-paginate'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'

interface Props {
    pageCount: number
}

export const Pagination = React.memo(({ pageCount }: Props) => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    let page = searchParams.get('page') ?? 0
    page = parseInt(page.toString())
    const initialPage = page ?? 0

    const handlePageChange = useCallback((e: { selected: number }) => {
        searchParams.set('page', e.selected.toString())
        const params = searchParams.toString()

        navigate({
            pathname: '/admin/orders',
            search: `?${params}`,
        })
    }, [])

    return (
        <div className="py-5 flex lg:justify-end overflow-auto">
            <ReactPaginate
                onPageChange={handlePageChange}
                forcePage={initialPage}
                className="react-paginate"
                breakLabel="..."
                nextLabel="Next"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Prev"
                renderOnZeroPageCount={undefined}
                activeClassName="active"
            />
        </div>
    )
})
