export interface Brand {
    id: number
    brand_id: number
    name: string
    prefix: string[]
    status: string
    created_at: number
}

export interface BrandResponse {
    data: Brand[]
    total: number
    per_page: number
}
