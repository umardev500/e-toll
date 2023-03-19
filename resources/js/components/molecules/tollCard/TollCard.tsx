import React from 'react'

interface Props {
    index: number
    selectedIndex: number
    onClick: (index: number) => void
}

export const TollCard: React.FC<Props> = ({ index, selectedIndex, onClick }) => {
    return (
        <>
            <div
                onClick={() => {
                    onClick(index)
                }}
                className={`border cursor-pointer text-center rounded-md py-4 px-6 ${selectedIndex === index ? 'border-teal-500' : 'border-slate-200'}`}
            >
                <div className="font-semibold text-2xl text-teal-600">5.000</div>
                <div className="text-sm mt-1 text-slate-500">Bayar: Rp6.500</div>
            </div>
        </>
    )
}
