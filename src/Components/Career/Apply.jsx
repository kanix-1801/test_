import React, { useState } from 'react';
import PopUpBtn from './PopUpBtn';

function Apply(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="relative sm:w-5/6 md:w-3/4 mx-auto my-8">
            <div className="border border-gray-300 rounded-lg shadow-lg p-6">
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">{props.jobTitle}</h2>
                    <p className="max-w-5xl text-gray-700 mb-2">{props.jobDescription}</p>
                    <p className="text-lg">
                        <span className="text-orange-600 font-semibold">Experience: </span>5 to 6 years
                    </p>
                    <p className="text-lg text-gray-700 flex items-center mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 opacity-70 mr-2"
                        >
                            <path d="M12 2C8.686 2 6 4.686 6 8c0 4.177 5.632 10.255 5.835 10.487a.5.5 0 00.33.162h.002a.5.5 0 00.33-.162C12.368 18.255 18 12.177 18 8c0-3.314-2.686-6-6-6zm0 9.5a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                        Jaipur
                    </p>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={toggleModal}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
                    >
                        Apply Now
                    </button>
                </div>

                {/* Modal Popup */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg hover:bg-opacity-100">
                            <h2 className="text-2xl font-bold mb-4">Apply for {props.jobTitle}</h2>
                            <p className="mb-4">Please fill in your details to apply for this job.</p>

                            {/* Include PopUpBtn component here */}
                            <PopUpBtn />

                            <div className="flex justify-end space-x-4 mt-6">
                                <button
                                    onClick={toggleModal}
                                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        toggleModal();
                                        // Apply logic here (e.g., submit form, API call)
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Apply;
