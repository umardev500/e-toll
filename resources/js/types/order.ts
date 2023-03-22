import { type Product } from './product'

export interface Order {
    order_id: string
    phone_number: string
    status: string
    product_copy: Product
}

export interface OrderResponse {
    data: Order[]
}
