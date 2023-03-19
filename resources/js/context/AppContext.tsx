import React, { useMemo, useState } from 'react'
import { type Brand } from '../types'

export const AppContext = React.createContext({})
export interface AppContextType {
    brands?: Brand[]
}

interface Props {
    children?: React.ReactNode
}

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [brands, setBrands] = useState('')

    const data = useMemo<AppContextType>(() => {
        return {}
    }, [])

    // useEffect(() => {}, [])

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
