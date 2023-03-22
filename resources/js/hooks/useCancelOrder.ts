import { useCallback } from 'react'
import { toast } from 'react-hot-toast'

export const useCancelOrder = (id: number, setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    const target = `${import.meta.env.VITE_API_URL}/orders/${id}/cancel`

    const handler = useCallback(() => {
        const doCancel = async () => {
            try {
                const response = await fetch(target)
                console.log(response)
            } catch (err) {
                return await Promise.reject(err)
            }
        }

        toast
            .promise(
                doCancel(),
                {
                    success: 'Cancel succeed',
                    error: 'Something went wrong!',
                    loading: 'processing cancel...',
                },
                { className: 'roboto' }
            )
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return handler
}
