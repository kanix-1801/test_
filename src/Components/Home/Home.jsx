import React, { useState, useEffect } from 'react'
import About from '../About/About'
import Waves from '../waves/Waves'
import Waves_2 from '../waves/Waves_2'
import { TypeAnimation } from 'react-type-animation';

function Home() {
    // const messages = ["Innovate", "Inspire", "Impact"]
    // const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    //     }, 2000); // Change text every 2 seconds

    //     return () => clearInterval(intervalId); // Cleanup interval on component unmount
    // }, []);



    return (<>
        <div className="flex  flex-row bg-gray-700 text-slate-50">
            <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-4">

                <div className="ml-5 w-full md:w-1/2 p-2">
                    <h2 className="lg:text-7xl md:text-6xl sm:text-4xl font-bold mb-4">
                        Your<span className='text-orange-700'> Catalyst for Digital</span> Excellence <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Innovate',
                                3000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Inspire',
                                3000,
                                'Impact',
                                3000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className="py-6">This is the text section. You can put any content here, and it will take half the width on medium and larger screens, and full width on smaller screens.</p>
                </div>
                <div className="mr-7 relative w-full md:w-2/5 p-2">
                    <img
                        src="/home-fa.svg"
                        alt="Sample"
                        className="floating_m relative left-7 w-full h-96 object-cover"
                    />
                    <img
                        src="/py.svg"
                        alt="Sample"
                        className="floating absolute top-14 right-20 transform translate-x-3 translate-y-3 w-14 h-13 rounded-full" />
                    <img
                        src="/js.svg"
                        alt="Sample"
                        className="floating absolute top-24 right-1 transform translate-x-3 translate-y-3 w-14 h-13" />
                    <img
                        src="/java.svg"
                        alt="Sample"
                        className="floating absolute top-1 right-12 transform translate-x-3 translate-y-3 w-14 h-13 rounded-full" />
                </div>
            </div>
        </div>
        <Waves />
        <About />
        <section
            id='about'
            style={{ backgroundColor: '#d3d3d3' }}
        >
            <About />
            <About />
        </section>
        <Waves_2 />

    </>
    )
}

export default Home

// export { scrollToAbout }