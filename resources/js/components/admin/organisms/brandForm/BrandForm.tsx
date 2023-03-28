import React, { useCallback, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { useCloseModal, useClickOutside, userPostBrand } from '../../../../hooks'

interface Props {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const BrandForm: React.FC<Props> = ({ setState }) => {
    const overlayRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    const brandRef = useRef<HTMLInputElement>(null)
    const prefixRef = useRef<HTMLInputElement>(null)

    const handleClose = useCloseModal(setState)
    useClickOutside(overlayRef, innerRef, setState)
    const postBrand = userPostBrand()

    const handleSubmit = useCallback(() => {
        const brand = brandRef.current
        const prefix = prefixRef.current
        if (brand != null && prefix != null) {
            const brandValue = brand.value
            const prefixValue = prefix.value.trim()

            if (brandValue === '') {
                toast.error('Brand name must be entered.', { position: 'top-right', className: 'roboto' })
                return
            }

            const validFormat = /^\d+(,\d+)*$/
            if (!validFormat.test(prefixValue)) {
                toast.error('Invalid prefix. Please try again.', { position: 'top-right', className: 'roboto' })
                return
            }
            const prefixes = prefix.value.split(',')

            postBrand({ brand: brand.value, prefix: prefixes })
        }
    }, [])

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
                    <input
                        ref={brandRef}
                        className="roboto w-full bg-slate-50 text-gray-500 border focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none px-4 py-2.5 text-base font-medium rounded-lg"
                        type="text"
                        placeholder="Enter the brand name"
                    />
                    <input
                        ref={prefixRef}
                        className="roboto w-full bg-slate-50 text-gray-500 border focus:ring-2 focus:ring-blue-300 focus:border-blue-400 outline-none px-4 py-2.5 text-base font-medium rounded-lg"
                        type="text"
                        placeholder="prefix: 0838,0831,0832"
                    />
                </div>
                {/* footer */}
                <div className="px-5 pb-4 flex justify-center flex-col">
                    <button onClick={handleSubmit} className={`roboto bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2 text-white mb-2`}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
