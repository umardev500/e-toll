export interface Brand {
    id: number
    name: string
    prefix: number[]
}

export interface BrandResponse {
    data: Brand[]
    total: number
    per_page: number
}
