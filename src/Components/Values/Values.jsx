import React from 'react';

function Values() {
    return (
        <div className="bg-[#d3d3d3] py-12 px-6 lg:px-16">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Values</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                In our constant pursuit of seeking excellence with happiness, shared beliefs and values are central to our organization.
                Our values shape the culture of our organization, and each one of us lives the core values through individual behaviors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                    <img src="/path/to/image1.png" alt="Innovation" className="w-20 h-20 mb-4" />
                    <p className="text-lg font-semibold text-gray-700">We Innovate Everyday</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/path/to/image2.png" alt="Integrity" className="w-20 h-20 mb-4" />
                    <p className="text-lg font-semibold text-gray-700">We Act with Integrity</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/path/to/image3.png" alt="Excellence" className="w-20 h-20 mb-4" />
                    <p className="text-lg font-semibold text-gray-700">We Strive for Excellence</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/path/to/image4.png" alt="Collaboration" className="w-20 h-20 mb-4" />
                    <p className="text-lg font-semibold text-gray-700">We Value Collaboration</p>
                </div>
            </div>
        </div>
    );
}

export default Values;
