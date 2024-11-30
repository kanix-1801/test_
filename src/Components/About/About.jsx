import React from 'react';
// import AnimatedSection from './AnimatedSection';
import AnimatedSection from '../Home/AnimatedSection';

const About = () => {
    return (
        <section id="about-us" className="py-20 bg-blue-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Animated Heading */}
                <AnimatedSection animationType="fade-slide-up" delay={0.2}>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-800">
                        About Us
                    </h2>
                </AnimatedSection>

                {/* Animated Paragraphs */}
                <AnimatedSection animationType="fade-slide-up" delay={0.4}>
                    <p className="text-lg md:text-xl text-blue-700 leading-relaxed mb-10 max-w-4xl mx-auto">
                        We are a forward-thinking tech company dedicated to creating{' '}
                        <span className="text-blue-600 font-semibold">innovative</span> and{' '}
                        <span className="text-blue-600 font-semibold">reliable</span> solutions that drive
                        success for our clients. Our team combines technical expertise with a deep understanding
                        of client needs, delivering impactful results that empower businesses to thrive in the
                        evolving digital landscape.
                    </p>
                </AnimatedSection>

                <AnimatedSection animationType="fade-slide-up" delay={0.6}>
                    <p className="text-lg md:text-xl text-blue-700 leading-relaxed max-w-4xl mx-auto">
                        Our core values—<span className="text-blue-600 font-semibold">innovation</span>,{' '}
                        <span className="text-blue-600 font-semibold">reliability</span>,{' '}
                        <span className="text-blue-600 font-semibold">customer-centricity</span>,{' '}
                        <span className="text-blue-600 font-semibold">integrity</span>, and{' '}
                        <span className="text-blue-600 font-semibold">excellence</span>—guide every project,
                        ensuring quality and transparency. We build lasting partnerships that contribute to
                        our clients' growth and a connected, future-ready world.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default About;
