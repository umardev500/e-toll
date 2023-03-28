import { useCallback } from 'react'
import toast from 'react-hot-toast'

export const userPostBrand = () => {
    interface UpdateType {
        brand: string
        prefix: string[]
    }

    const handler = useCallback(async (data: UpdateType): Promise<void> => {
        const doPost = async (): Promise<void> => {
            const target = `${import.meta.env.VITE_API_URL}/brands`
            const token = localStorage.getItem('token') ?? ''

            try {
                console.log('doing post...')
                const response = await fetch(target, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                })

                const status = response.status
                if (status !== 200) {
                    await Promise.reject(new Error(await response.text()))
                }
            } catch (err) {
                await Promise.reject(err)
            }
        }

        try {
            await toast.promise(
                doPost(),
                {
                    success: 'Posting brand successfuly',
                    error: 'Something went wrong!',
                    loading: 'processing posting brand...',
                },
                { className: 'roboto' }
            )
        } catch (err) {
            await Promise.reject(err)
        }
    }, [])

    return handler
}
