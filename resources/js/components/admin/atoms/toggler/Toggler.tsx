import React from 'react'

export const Toggler: React.FC = () => {
    return (
        <>
            <button className="btn-toggler px-4 ml-1 cursor-pointer outline-none">
                <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 8.16669H17.5M2.5 14H17.5M2.5 19.8334H17.5" stroke="#444" strokeOpacity={0.7} strokeWidth={1.5} strokeLinecap="round" />
                </svg>
            </button>
        </>
    )
}
