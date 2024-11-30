import React from 'react'

function Footer() {
    const handleContactClick = () => {
        window.location.href = "mailto:youremail@example.com";
    };
    return (
        <>
            <footer className="bg-gradient-to-r from-indigo-600 to-blue-900 text-white py-10">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    {/* Company Name and Description */}
                    <h3 className="text-2xl font-bold text-yellow-400 mb-3">Zitadrix</h3>
                    <p className="text-gray-300 text-sm mb-6">
                        Empowering businesses with reliable, innovative solutions for a sustainable future.
                    </p>

                    {/* Quick Links */}
                    <div className="flex justify-center space-x-6 text-gray-300 text-sm mb-8">
                        <a href="/" className="hover:text-yellow-400">Home</a>
                        <a href="#about" className="hover:text-yellow-400">About</a>
                        {/* <a href="#services" className="hover:text-yellow-400">Services</a> */}
                        <a onClick={handleContactClick} className="hover:text-yellow-400">Contact</a>
                    </div>
                    {/* info@zitadrix.com
                    support@zitadrix.com */}
                    {/* Social Media Links */}
                    {/* <div className="flex justify-center space-x-4 text-gray-400 text-lg mb-4">
                        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-yellow-400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-yellow-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-yellow-400">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div> */}

                    {/* Copyright */}
                    <div className="text-gray-400 text-xs">
                        © 2024 Zitadrix. All rights reserved.
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;