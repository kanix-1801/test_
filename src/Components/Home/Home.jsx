import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
// import AnimatedSection from './AnimatedSection';
import AnimatedSection from './AnimatedSection';
import ValuesSection from './ValuesSection';
import { TypeAnimation } from 'react-type-animation';
// import AboutUs from './AboutUs';
import About from '../About/About';

function Home() {
    const homeItems = [
        {
            title: "Trusted Expertise",
            description:
                "Our mission is to empower businesses and communities by delivering innovative, reliable solutions that meet the challenges of a rapidly evolving world. With deep industry knowledge and proven expertise, we don’t just keep pace with technological advancements we lead the way. Our team’s dedication to precision, security, and forward-thinking design means that our clients can confidently navigate the future, knowing they’re supported by a partner they can trust.",
        },
        {
            title: "Sustainable Vision",
            description:
                "At our core, we believe that innovation and sustainability go hand in hand. By driving advancements that are not only efficient but also environmentally conscious, we’re committed to creating technologies that serve both today’s needs and tomorrow’s challenges. Our sustainable vision guides every decision we make, ensuring that our solutions minimize impact while maximizing value.",
        },
        {
            title: "Impactful Innovation",
            description:
                "Our vision is to harness the power of innovation to create real, lasting impact. We’re dedicated to developing forward-thinking solutions that drive meaningful progress for businesses, communities, and industries. By combining cutting-edge technology with a deep understanding of our clients’ needs, we create tools and systems that solve complex challenges and open new possibilities.",
        },
        {
            title: "Transformative Ideas",
            description:
                "Founded by a team of experienced engineers and visionaries, Zitadrix is committed to delivering high-quality software and solutions that make a difference. Based in India, we serve clients across industries, providing innovative, secure, and highly scalable technology that addresses the unique challenges of modern business.",
        },
    ];

    return (
        <div>
            {/* <nav className="flex justify-center p-4 bg-gray-800 text-white">
                <Link to="section1" smooth={true} duration={500} className="cursor-pointer mx-4 hover:text-blue-400">
                    Section 1
                </Link>
                <Link to="section2" smooth={true} duration={500} className="cursor-pointer mx-4 hover:text-blue-400">
                    Section 2
                </Link>
            </nav> */}

            {/* Hero Section */}
            <AnimatedSection delay={0.2} animationType="fade-slide-up">
                <section
                    id="section1"
                    className="relative flex items-center justify-center bg-cover bg-center h-screen text-blue-200"
                    style={{
                        backgroundImage: "url('photo-1531973576160-7125cd663d86.avif')",
                    }}
                >
                    {/* Overlay to reduce background opacity */}
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>

                    {/* Content */}
                    <div className="relative text-center px-4 bg-opacity-50 bg-gray-600 p-8 rounded-lg">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
                            Powering <span>the Future with</span>
                        </h1>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
                            <span className="text-[#220755]">
                                <TypeAnimation
                                    sequence={[
                                        'Trusted Expertise',
                                        3000,
                                        'Sustainable Vision',
                                        3000,
                                        'Impactful Innovation',
                                        3000,
                                        'Transformative Ideas',
                                        3000,
                                    ]}
                                    wrapper="span"
                                    speed={40}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                    </div>
                </section>

            </AnimatedSection>

            {/* Home Description Section with Colorful Heading and Animation */}
            <section id="home-describe" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {homeItems.map((item, index) => (
                            <AnimatedSection
                                key={index}
                                delay={0.6 + 0.2 * index}
                                animationType="slide-left"
                            >
                                <div className="p-8 text-left">
                                    <h3 className="text-2xl font-semibold mb-3 text-indigo-600">{item.title}</h3>
                                    <p className="text-gray-800 text-lm md:text-base leading-relaxed">{item.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
            <section id="section2">

                <About />
                <ValuesSection />
            </section>
            <button
                onClick={() => scroll.scrollToTop()}
                className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
                Scroll to Top
            </button>


        </div >
    );
}

export default Home;
