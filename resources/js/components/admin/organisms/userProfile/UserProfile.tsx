import React, { useRef } from 'react'
import { useCloseModal, useClickOutside } from '../../../../hooks'

interface Props {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserProfile: React.FC<Props> = ({ setState }) => {
    const overlayRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    const handleClose = useCloseModal(setState)
    useClickOutside(overlayRef, innerRef, setState)

    return (
        <div ref={overlayRef} className="modal pt-5 px-5">
            <div ref={innerRef} style={{ width: 325 }} className="modal-inner bg-white rounded-lg">
                {/* Header */}
                <div className="flex justify-between p-4 px-6">
                    <h3 className="text-gray-500 font-medium roboto">User Profiles</h3>
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
                    <div className="flex items-center justify-between pb-2.5 border-b border-dashed">
                        <span className="text-sm font-medium text-gray-500">Name:</span>
                        <input className="text-sm text-right outline-none text-gray-400" type="text" placeholder="Enter your password" defaultValue={'Umar Schweins'} />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Username:</span>
                        <input className="text-sm text-right outline-none text-gray-400" type="text" placeholder="Enter your password" defaultValue={'schweinsteiger'} />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Password:</span>
                        <input className="text-sm text-right outline-none text-gray-400" type="password" placeholder="Enter your password" defaultValue={'helloworld'} />
                    </div>
                </div>
                {/* footer */}
                <div className="px-5 pb-4 flex justify-center flex-col">
                    <button className={`roboto font-normal bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2 text-white mb-2`}>Update data</button>
                </div>
            </div>
        </div>
    )
}
