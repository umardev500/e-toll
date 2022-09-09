import { type ProductResponse } from '../types'

export const useFetchProducts = () => {
    const fetchProduct = async (page = 0, sort: string, status: string): Promise<ProductResponse> => {
        page += 1

        const target = `${import.meta.env.VITE_API_URL}/products?page=${page}&status=${status}&sort=${sort}`

        try {
            const response = await fetch(target)
            const jsonData: ProductResponse = await response.json()

            return await Promise.resolve(jsonData)
        } catch (err) {
            return await Promise.reject(err)
        }
    }

    return fetchProduct
}
