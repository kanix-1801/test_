import React, { useState, useEffect } from 'react'
import About from '../About/About'
import Waves from '../waves/Waves'
import Waves_2 from '../waves/Waves_2'
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <>
            <div className="flex  flex-row bg-gray-700 text-slate-50">
                <div className="flex flex-col md:flex-row items-center justify-center p-4 py-6 mt-4 w-full">

                    <div className="ml-3 w-full md:w-1/2 p-1">
                        <h2 className="lg:text-6xl md:text-6xl sm:text-4xl font-bold">Powering <span className='text-orange-700  mb-5 pb-5'>  the Future with </span>
                            <TypeAnimation
                                // className=''
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
                        </h2>
                        <br></br>
                        {/* <p className="py-6">This is the text section. You can put any content here, and it will take half the width on medium and larger screens, and full width on smaller screens.</p> */}
                    </div>
                    <div className="mr-7 relative w-full md:w-1/2 p-2">
                        <img
                            src="/home-fa.svg"
                            alt="Sample"
                            className="floating_m w-full h-96 object-cover"
                        />
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