import React, { useMemo, useState } from 'react'
import { type Brand, type Product } from '../types'

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
}

interface Props {
    children?: React.ReactNode
}

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [brand, setBrand] = useState<Brand>()
    const [phone, setPhone] = useState<string>('')
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product>()

    const data = useMemo<AppContextType>(() => {
        return {
            brand,
            setBrand,
            phone,
            setPhone,
            products,
            setProducts,
            product,
            setProduct,
        }
    }, [brand, products, phone, product])

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
