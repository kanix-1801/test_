import React from 'react'
// import Waves_2 from '../waves/Waves_2'

function About() {
    return (
        <>
            {/* <h1>about Us</h1> */}
            <div className="flex flex-row">
                <div className="flex flex-col md:flex-row items-center justify-center w-full p-4">
                    <div className="w-full md:w-1/2 p-2">
                        <img
                            src="/aboutData.gif"
                            alt="Sample"
                            className="rounded-lg w-full h-auto object-cover shadow-2xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        <h2 className="lg:text-6xl md:text-6xl sm:text-4xl font-bold mb-4">Your Title <span className='text-orange-700'>Here Your</span> Title Here</h2>
                        <p className="py-6">This is the text section. You can put any content here, and it will take half the width on medium and larger screens, and full width on smaller screens.</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col md:flex-row items-center justify-center w-full p-4">
                    <div className="w-full md:w-1/2 p-2">
                        <img
                            src="/aboutData.gif"
                            alt="Sample"
                            className="rounded-lg w-full h-auto object-cover shadow-1xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        <h2 className="lg:text-6xl md:text-6xl sm:text-4xl font-bold mb-4">Your Title <span className='text-orange-700'>Here Your</span> Title Here</h2>
                        <p className="py-6">This is the text section. You can put any content here, and it will take half the width on medium and larger screens, and full width on smaller screens.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About