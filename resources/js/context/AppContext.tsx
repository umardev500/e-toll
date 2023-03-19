import React, { useEffect, useMemo, useState } from 'react'
import { type Brand } from '../types'

export const AppContext = React.createContext({})
export interface AppContextType {
    brands?: Brand[]
}

interface Props {
    children?: React.ReactNode
}

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [brands, setBrands] = useState<Brand[]>([])

    const data = useMemo<AppContextType>(() => {
        return {
            brands,
        }
    }, [brands])

    const baseURL = import.meta.env.VITE_API_URL
    const brandURL = `${baseURL}/brands`

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
