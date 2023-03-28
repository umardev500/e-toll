import { useCallback, useContext } from 'react'
import { AppContext, type AppContextType } from '../context/AppContext'

export const useReload = () => {
    const context = useContext(AppContext) as AppContextType

    const handler = useCallback(() => {
        context.setReloadCountCount((prev) => prev + 1)
    }, [])

    return handler
}
