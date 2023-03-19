export interface Product {
    id: number
    brand_id: number
    toll: number
    price: number
}

export interface ProductResponse {
    data: Product[]
}
