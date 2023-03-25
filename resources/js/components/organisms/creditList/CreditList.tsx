import React from 'react'
import { type Product } from '../../../types'
import { TollCard } from '../../molecules'

interface Props {
    credits: Product[]
}

export const CreditList: React.FC<Props> = ({ credits }) => {
    return (
        <>
            <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {credits.map((credit, i) => (
                    <TollCard product={credit} key={i} />
                ))}
            </div>
        </>
    )
}
