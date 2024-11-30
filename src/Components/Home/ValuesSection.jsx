import React from 'react';
import AnimatedSection from './AnimatedSection';

function ValuesSection() {
    const values = [
        { id: 1, title: "Innovation", image: "./Values/inspiration.png" },
        { id: 2, title: "Reliability", image: "./Values/reliability.png" },
        { id: 3, title: "Customer-Centricity", image: "./Values/customer.png" },
        { id: 4, title: "Integrity", image: "./Values/trust.png" },
        { id: 5, title: "Excellence", image: "./Values/reputation.png" },
        { id: 6, title: "Collaboration", image: "./Values/collaboration.png" },
    ];

    return (
        <section id="our-values" className="py-20 bg-blue-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Animated Heading */}
                <AnimatedSection delay={0.1} animationType="fade-slide-up">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-800">
                        Our Values
                    </h2>
                </AnimatedSection>

                {/* Animated Paragraph */}
                <AnimatedSection delay={0.2} animationType="fade-slide-up">
                    <p className="text-lg md:text-xl text-blue-700 mb-10 max-w-4xl mx-auto">
                        Our values center on delivering cutting-edge innovation, dependable solutions, and a commitment to excellence, ensuring quality and security in every project. Guided by a customer-centric approach, we tailor each solution to meet client needs and surpass expectations, building lasting relationships. Integrity and transparency are at the core of our work, establishing trust with clients and partners, while our pursuit of excellence fuels both client growth and our reputation as a trusted partner.
                    </p>
                </AnimatedSection>

                {/* Value Cards with Left Border */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {values.map((value, index) => (
                        <AnimatedSection key={value.id} delay={0.3 + 0.2 * index} animationType="slide-up">
                            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center border-t-4 border-blue-500 relative">
                                <div className="bg-gray-100 w-20 h-20 mb-4 rounded-full flex items-center justify-center">
                                    <img src={`${value.image}`} alt={value.title} className="w-16 h-16 object-contain" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2">{value.title}</h3>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ValuesSection;
