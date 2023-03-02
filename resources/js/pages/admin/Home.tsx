import React from 'react'
import { FeaturedList } from '../../components/admin'
import { toCurrency } from '../../helpers'

export const AdminHome: React.FC = () => {
    return (
        <div>
            <div>
                <FeaturedList orders={toCurrency(3500)} newOrder={toCurrency(45)} pending={toCurrency(12)} confirmation={toCurrency(33)} />
            </div>
        </div>
    )
}
