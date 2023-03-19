export interface Product {
    id: number
    brand_id: number
    title: string
    price: number
}

export interface ProductResponse {
    data: Product[]
}
