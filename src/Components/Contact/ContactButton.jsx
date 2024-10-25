import React from 'react';

const ContactButton = () => {
    const handleContactClick = () => {
        window.location.href = "mailto:youremail@example.com";
    };

    return (<>
        <button className="bg-gradient-to-r from-[#282837c7] to-[#374151] hover:from-gray-500 hover:to-gray-800 text-white font-bold py-2 px-4 rounded" onClick={handleContactClick}>
            Contact us
        </button>
    </>
    );
};

export default ContactButton;
