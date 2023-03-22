import React, { useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { type Order, type Brand, type Product } from '../types'

export const AppContext = React.createContext({})
export interface AppContextType {
    brand?: Brand
    setBrand: React.Dispatch<React.SetStateAction<Brand | undefined>>
    phone: string
    setPhone: React.Dispatch<React.SetStateAction<string>>
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    product?: Product
    setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
    orders: Order[]
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>
    orderExp: number
}

interface Props {
    children?: React.ReactNode
}

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [brand, setBrand] = useState<Brand>()
    const [phone, setPhone] = useState<string>('')
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product>()
    const [orders, setOrders] = useState<Order[]>([])
    const [orderExp] = useState(3600) // in seconds

    const data = useMemo<AppContextType>(() => {
        return {
            orderExp,
            orders,
            setOrders,
            brand,
            setBrand,
            phone,
            setPhone,
            products,
            setProducts,
            product,
            setProduct,
        }
    }, [brand, products, phone, product, orders])

    return (
        <AppContext.Provider value={data}>
            {children} <Toaster />
        </AppContext.Provider>
    )
}
