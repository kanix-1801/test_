import React, { useState } from 'react';
import PopUpBtn from './PopUpBtn';

function Apply({ jobTitle, jobDescription, experience }) {
    const location = "Jaipur";
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (isModalOpen) {
            setFormData({ name: '', email: '' });
            setErrors({});
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form Data:', formData);
            toggleModal();
            // Add API submission logic here
        }
    };

    return (
        <div className="p-6 bg-gray-100 flex flex-col items-center">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{jobTitle}</h2>
                    <p className="text-gray-600 mb-4">{jobDescription}</p>

                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <div className="flex items-center">
                            <span className="text-orange-600 font-semibold">Experience:</span>
                            <span className="ml-2">{experience}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-orange-600 font-semibold">Location:</span>
                            <span className="ml-2">{location}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={toggleModal}
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Apply for {jobTitle}
                            </h2>
                            <p className="text-gray-600 mb-4">Please provide your details to proceed with the application.</p>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded-lg mb-2 ${errors.name ? 'border-red-500' : ''
                                        }`}
                                    placeholder="Enter your name"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded-lg mb-2 ${errors.email ? 'border-red-500' : ''
                                        }`}
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <PopUpBtn />

                            <div className="mt-6 flex justify-end space-x-4">
                                <button
                                    onClick={toggleModal}
                                    className="px-4 py-2 text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default Apply;
