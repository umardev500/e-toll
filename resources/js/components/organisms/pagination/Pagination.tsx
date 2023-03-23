import React, { useCallback } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
    pageCount: number
}

export const Pagination = React.memo(({ pageCount }: Props) => {
    const initialPage = 1

    const handlePageChange = useCallback(() => {
        console.log('clicked')
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
