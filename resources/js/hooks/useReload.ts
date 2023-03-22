import { useCallback, useContext } from 'react'
import { AppContext, type AppContextType } from '../context/AppContext'

export const useReload = () => {
    const context = useContext(AppContext) as AppContextType

    const handler = useCallback(() => {
        context.setReloadCount((prev) => prev + 1)
    }, [])

    return handler
}
