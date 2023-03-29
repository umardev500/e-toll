import React, { useCallback, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import Select, { type ActionMeta, type SingleValue } from 'react-select'
import { toDigit } from '../../../../helpers'
import { useClickOutside, useCloseModal, usePostProduct, usePriceTyping } from '../../../../hooks'
import { type Brand } from '../../../../types'

interface Props {
    setState: React.Dispatch<React.SetStateAction<boolean>>
    setReloadCount?: React.Dispatch<React.SetStateAction<number>>
    updateCallback?: () => void
    brands: Brand[]
}

interface OptionType {
    label: string
    value: string
}

export const ProductForm: React.FC<Props> = ({ setState, setReloadCount, updateCallback, brands }) => {
    const overlayRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    // input
    const [brand, setBrand] = useState(0)
    const balanceRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const stockRef = useRef<HTMLInputElement>(null)

    const handleClose = useCloseModal(setState)
    useClickOutside(overlayRef, innerRef, setState)

    const options: OptionType[] = []

    brands.forEach((brand) => {
        options.push({ value: brand.id.toString(), label: brand.name })
    })

    const handlePriceTyping = usePriceTyping('Rp')
    const handleNumberTyping = usePriceTyping()

    const postProduct = usePostProduct()
    const handleSubmit = useCallback(() => {
        const credit = balanceRef.current
        const price = priceRef.current
        const stock = stockRef.current
        if (brand === 0 || credit?.value === '' || price?.value === '' || stock?.value === '') {
            toast.error('All input must provided', {
                className: 'roboto',
                position: 'top-right',
            })
            return
        }

        postProduct({
            product: {
                brand_id: brand,
                credit: toDigit(credit?.value),
                price: toDigit(price?.value),
                stock: toDigit(stock?.value),
            },
        })
            .then(() => {
                setState(false)
            })
            .catch(() => null)
    }, [brand])

    const handleBrandChange = (newValue: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
        setBrand(parseInt(newValue?.value ?? '0'))
    }

    return (
        <div ref={overlayRef} className="modal pt-5 px-5">
            <div ref={innerRef} style={{ width: 325 }} className="modal-inner bg-white rounded-lg">
                {/* Header */}
                <div className="flex justify-between p-4 px-6">
                    <h3 className="text-gray-500 font-medium roboto">Create New Brands</h3>
                    <button onClick={handleClose} className="hover:text-gray-500 text-gray-400">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                {/* body */}
                <div className="px-6 pb-5 pt-4 flex flex-col gap-2.5">
                    <Select
                        onChange={handleBrandChange}
                        classNames={{
                            placeholder: () => '!text-gray-400 roboto font-medium',
                            control: (state) =>
                                `!bg-slate-50 !px-1.5 !py-0.5 ${state.isFocused ? '!border-blue-400 !ring-2' : '!border-gray-200'} !outline-none !shadow-none !rounded-lg`,
                            option: (state) => `roboto ${state.isSelected ? '!text-white' : '!text-gray-500'} ${state.isFocused && !state.isSelected ? '!text-gray-600' : ''}`,
                            singleValue: () => `roboto !text-gray-500`,
                        }}
                        styles={{
                            input: (provided) => ({
                                ...provided,
                                paddingTop: 4,
                                paddingBottom: 4,
                            }),
                        }}
                        options={options}
                    />
                    <input
                        ref={balanceRef}
                        className="roboto w-full bg-slate-50 text-gray-500 border focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none px-4 py-2.5 text-base font-medium rounded-lg"
                        type="text"
                        placeholder="Enter balance"
                        onChange={handleNumberTyping}
                    />
                    <input
                        ref={priceRef}
                        className="roboto w-full bg-slate-50 text-gray-500 border focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none px-4 py-2.5 text-base font-medium rounded-lg"
                        type="text"
                        placeholder="Price"
                        onChange={handlePriceTyping}
                    />
                    <input
                        ref={stockRef}
                        className="roboto w-full bg-slate-50 text-gray-500 border focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none px-4 py-2.5 text-base font-medium rounded-lg"
                        type="text"
                        placeholder="Product Stock"
                        onChange={handleNumberTyping}
                    />
                </div>
                {/* footer */}
                <div className="px-5 pb-4 flex justify-center flex-col">
                    <button onClick={handleSubmit} className={`roboto font-normal bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2 text-white mb-2`}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
