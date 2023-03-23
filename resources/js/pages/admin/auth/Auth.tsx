import React from 'react'

export const Auth: React.FC = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="mt-36 max-w-xs w-80">
                    <div className="text-center">
                        <h1 className="roboto font-semibold text-gray-600 text-4xl">Login</h1>
                        <div className="mt-2 text-gray-400 roboto font-medium">Authentication needed for access</div>
                    </div>
                    <div className="mt-7">
                        <input
                            className="w-full border border-gray-200 focus:border-indigo-200 focus:ring-2 ring-indigo-400  outline-none px-4 py-2 rounded-md text-gray-500 text-base font-medium roboto"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            className="mt-2.5 w-full border border-gray-200 focus:border-indigo-200 focus:ring-2 ring-indigo-400  outline-none px-4 py-2 rounded-md text-gray-500 text-base font-medium roboto"
                            type="text"
                            placeholder="Password"
                        />

                        <button className={`bg-indigo-500 hover:bg-indigo-600 w-full mt-4 p-2 rounded-md outline-none text-gray-100 hover:text-gray-50 font-medium roboto`}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
