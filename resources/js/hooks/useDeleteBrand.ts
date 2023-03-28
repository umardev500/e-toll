import { useCallback } from 'react'
import toast from 'react-hot-toast'

export const useDeleteBrand = () => {
    const handler = useCallback(async (id: number) => {
        const doDelete = async () => {
            const target = `${import.meta.env.VITE_API_URL}/brands/${id}`
            const token = localStorage.getItem('token') ?? ''

            try {
                const response = await fetch(target, {
                    method: 'DELETE',
                    headers: {
                        Authorization: token,
                    },
                })
                console.log(await response.text())
            } catch (err) {
                return await Promise.reject(err)
            }
        }

        try {
            await toast.promise(
                doDelete(),
                {
                    success: 'Deleting brand successfuly',
                    error: 'Something went wrong!',
                    loading: 'processing delete brand...',
                },
                { className: 'roboto' }
            )
        } catch (err) {
            await Promise.reject(err)
        }
    }, [])

    return handler
}
