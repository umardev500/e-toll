export interface Brand {
    id: number
    brand_id: number
    name: string
    prefix: number[]
    status: string
    created_at: number
}

export interface BrandResponse {
    data: Brand[]
    total: number
    per_page: number
}
