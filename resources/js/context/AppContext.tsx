import React, { useEffect, useMemo, useState } from 'react'
import { type Product, type Brand } from '../types'

export const AppContext = React.createContext({})
export interface AppContextType {
    brands: Brand[]
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
    const [brands, setBrands] = useState<Brand[]>([])
    const [phone, setPhone] = useState<string>('')
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product>()

    const data = useMemo<AppContextType>(() => {
        return {
            brands,
            phone,
            setPhone,
            products,
            setProducts,
            product,
            setProduct,
        }
    }, [brands, products, phone, product])

    const baseURL = import.meta.env.VITE_API_URL
    const brandURL = `${baseURL}/brands`

    // Get brands
    useEffect(() => {
        const fetchBrand = async () => {
            try {
                const response = await fetch(brandURL)
                const data = await response.json()
                setBrands(data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchBrand().catch((err) => {
            console.log(err)
        })
    }, [])

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
