import { useContext, useEffect } from 'react'
import { AppContext, type AppContextType } from '../context/AppContext'
import { type OrderResponse } from '../types'

export const useFetchOrders = () => {
    const baseURL = import.meta.env.VITE_API_URL

    const context = useContext(AppContext) as AppContextType

    useEffect(() => {
        const fetchOrders = async (): Promise<OrderResponse> => {
            const target = `${baseURL}/orders?per_page=1`

            try {
                const response = await fetch(target)
                const jsonData: OrderResponse = await response.json()
                return jsonData
            } catch (err) {
                return await Promise.reject(err)
            }
        }

        fetchOrders()
            .then((res) => {
                const orders = res.data
                context.setOrders(orders)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
}
