import { useContext, useEffect } from 'react'
import toast from 'react-hot-toast'
import { AppContext, type AppContextType } from '../context/AppContext'
import { type OrderResponse } from '../types'

export const useFetchOrders = () => {
    const baseURL = import.meta.env.VITE_API_URL

    const context = useContext(AppContext) as AppContextType
    const trackingNum = context.trackingNumber

    useEffect(() => {
        const numberToTrack = context.phone !== '' ? context.phone : trackingNum
        const fetchOrders = async (): Promise<OrderResponse> => {
            const target = `${baseURL}/orders?phone=${numberToTrack}`

            try {
                const response = await fetch(target)
                const jsonData: OrderResponse = await response.json()
                return jsonData
            } catch (err) {
                return await Promise.reject(err)
            }
        }

        if (numberToTrack !== '') {
            toast
                .promise(
                    fetchOrders(),
                    {
                        success: 'Orders data is loaded',
                        error: 'Something went wrong!',
                        loading: 'Loading order...',
                    },
                    { className: 'roboto' }
                )
                .then((res) => {
                    const orders = res.data
                    context.setOrders(orders)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [trackingNum, context.reloadCount, context.phone])
}
