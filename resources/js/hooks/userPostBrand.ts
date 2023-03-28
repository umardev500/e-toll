import { useCallback } from 'react'
import toast from 'react-hot-toast'

export const userPostBrand = () => {
    interface UpdateType {
        brand: string
        prefix: string[]
    }

    const handler = useCallback((data: UpdateType) => {
        const doPost = async () => {
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
                if (status !== 200) return await Promise.reject(new Error(await response.text()))
            } catch (err) {
                return await Promise.reject(err)
            }
        }

        toast
            .promise(
                doPost(),
                {
                    success: 'Posting brand successfuly',
                    error: 'Something went wrong!',
                    loading: 'processing posting brand...',
                },
                { className: 'roboto' }
            )
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return handler
}
