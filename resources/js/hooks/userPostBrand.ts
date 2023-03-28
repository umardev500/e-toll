import { useCallback } from 'react'
import toast from 'react-hot-toast'

export const userPostBrand = () => {
    interface UpdateType {
        name?: string
        email?: string
        password?: string
        photo?: string
    }

    const handler = useCallback((data: UpdateType) => {
        const doUpdate = async () => {
            const target = `${import.meta.env.VITE_API_URL}/users`
            const token = localStorage.getItem('token') ?? ''

            try {
                await fetch(target, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(data),
                })
            } catch (err) {
                console.log(err)
            }
        }

        toast
            .promise(
                doUpdate(),
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
