import React from 'react';

function UnderConstruction() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-white p-4">
            {/* Image */}
            <img
                src="/UnderConstruction.png"
                alt="Under Construction Icon"
                className="w-32 h-32 md:w-40 md:h-40 mb-6"
            />

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                Page Under Construction
            </h1>

            {/* Paragraph */}
            <p className="text-gray-500 text-center max-w-md">
                We're working hard to bring you something amazing. Check back soon for updates!
            </p>
        </div>
    );
}

export default UnderConstruction;
