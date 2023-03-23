import React from 'react'

export const AdminOrderList: React.FC = () => {
    return (
        <table className="min-w-full table table-nohover">
            <thead>
                <tr className="">
                    <th className="text-center border-r py-3 px-4 w-16 whitespace-nowrap">No.</th>
                    <th className="text-left border-r py-3 px-4 whitespace-nowrap w-60">Nomor Pesanan</th>
                </tr>
            </thead>
        </table>
    )
}
