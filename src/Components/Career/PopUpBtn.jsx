import React from 'react'

function PopUpBtn(props) {
    return (
        <>
            <div className="">
                <div className="max-w-xs mx-3 my-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Upload your resume
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="file"
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div className="flex items-center gap-2 max-w-xs mx-3 my-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 text-gray-500"
                    >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                        type="text"
                        className="grow block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Full Name"
                    />
                </div>

                <div className="flex items-center gap-2 max-w-xs mx-3 my-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-gray-500"
                    >
                        <path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.12-.21c1.17.49 2.45.76 3.76.76a1 1 0 011 1v3.5a1 1 0 01-1 1A17.49 17.49 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.31.27 2.59.76 3.76a1 1 0 01-.21 1.12l-2.2 2.2z" />
                    </svg>
                    <input
                        type="text"
                        className="grow block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Phone No"
                    />
                </div>

                <div className="flex items-center gap-2 max-w-xs mx-3 my-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 text-gray-500"
                    >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                        type="text"
                        className="grow block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Personal Email"
                    />
                </div>
            </div>

        </>
    )
}

export default PopUpBtn
