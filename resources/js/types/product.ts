import { type Brand } from './brand'

export interface Product {
    id: number
    brand_id: number
    toll: number
    price: number
    stock: number
    status: string
    brand: Brand
    created_at: number
}

export interface ProductResponse {
    data: Product[]
    total: number
    per_page: number
}
