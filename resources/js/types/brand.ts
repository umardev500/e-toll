export interface Brand {
    id: number
    name: string
    prefix: number[]
    created_at: number
}

export interface BrandResponse {
    data: Brand[]
    total: number
    per_page: number
}
