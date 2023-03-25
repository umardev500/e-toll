import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { OrderListBtn } from '../components/atoms'
import { Checkout, CreditList, SerachToll } from '../components/organisms'
import { useBuyerFetchProducts } from '../hooks'
import { type Product, type ProductResponse } from '../types'
export const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [brand, setBrand] = useState('')
    const currentPrefix = useRef<string>('')

    const fetchProducts = useBuyerFetchProducts()
    const searchCallback = (prefix: string) => {
        if (prefix.length >= 4) {
            // Check if prefix length is greater than or equal to 4
            prefix = prefix.substring(0, 4) // Truncate the prefix to the first 4 characters
            if (currentPrefix.current !== prefix) {
                // Check if the current prefix in the ref is different from the new truncated prefix
                currentPrefix.current = prefix // If different, update the current prefix ref to the new truncated prefix

                const doFetch = async (): Promise<ProductResponse> => {
                    try {
                        const products = await fetchProducts({ prefix })
                        return await Promise.resolve(products)
                    } catch (err) {
                        return await Promise.reject(err)
                    }
                }

                toast
                    .promise(
                        doFetch(),
                        {
                            loading: 'Loading...',
                            success: 'Products loaded successfuly',
                            error: 'Something went wrong!',
                        },
                        {
                            className: 'roboto',
                            position: 'top-right',
                        }
                    )
                    .then((res) => {
                        const data = res.data
                        setProducts(data) // set products data
                        setBrand(data[0].brand.name) // set brand selected
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }

    return (
        <div className="container py-10 mx-auto flex justify-center">
            <div className="px-4 flex flex-col items-center w-full">
                <div className="py-4 w-full lg:w-1/2 xl:w-1/2 md:w-2/3 relative flex items-center">
                    <h1 className="mb-1 text-3xl font-medium roboto text-slate-600">Balance selling</h1>
                </div>

                {/* Input area */}
                <SerachToll brand={brand} callback={searchCallback} />

                {/* Result */}
                {products.length > 0 ? (
                    <div className="mt-10 p-4 w-full md:w-2/3">
                        <div className="text-gray-500 roboto">Nominal</div>

                        {/* Toll list */}
                        <CreditList credits={products} />

                        {/* Checkout */}
                        <Checkout />
                    </div>
                ) : (
                    <div className="mt-10">
                        <OrderListBtn />
                    </div>
                )}
            </div>
        </div>
    )
}
