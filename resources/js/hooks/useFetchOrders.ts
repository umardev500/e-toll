import { useContext, useEffect } from 'react'
import { AppContext, type AppContextType } from '../context/AppContext'
import { type OrderResponse } from '../types'

export const useFetchOrders = () => {
    const baseURL = import.meta.env.VITE_API_URL

    const context = useContext(AppContext) as AppContextType
    const trackingNum = context.trackingNumber

    useEffect(() => {
        const fetchOrders = async (): Promise<OrderResponse> => {
            const target = `${baseURL}/orders?phone=${trackingNum}`

            try {
                const response = await fetch(target)
                const jsonData: OrderResponse = await response.json()
                console.log(jsonData)
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
    }, [trackingNum])
}
