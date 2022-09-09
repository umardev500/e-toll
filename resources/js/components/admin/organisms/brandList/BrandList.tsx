import React, { useState } from 'react'
import { BrandListing } from '../../molecules'
import { Confirm } from '../confirm'

export const BrandList: React.FC = () => {
    const [confirm, setConfirm] = useState(false)
    const onClickDelete = () => {
        setConfirm(true)
        console.log('callback called')
    }

    return (
        <>
            <table className="w-full table table-nohover">
                <thead>
                    <tr>
                        <th className="text-center px-4 border-r py-3 w-16 whitespace-nowrap">No.</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Brand ID</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Name</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Prefix</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Created Time</th>
                        <th className="text-left px-4 border-r py-3 whitespace-nowrap">Status</th>
                        <th className="text-center px-4 border-r py-3 whitespace-nowrap">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <BrandListing onClickDelete={onClickDelete} />
                </tbody>
            </table>
            {confirm ? <Confirm message="Are you sure want to delete" className="text-center text-gray-500 text-lg font-medium roboto" setState={setConfirm} /> : null}
        </>
    )
}
