import { type Brand } from './brand'

export interface Product {
    id: number
    brand_id: number
    toll: number
    price: number
    brand: Brand
}

export interface ProductResponse {
    data: Product[]
}
