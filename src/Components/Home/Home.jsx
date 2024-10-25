import React, { useRef } from 'react'
// import homeGif from './path/to/home.gif';
// import home from '../../assets/home.gif'
import About from '../About/About'
import Waves from '../waves/Waves'
import Waves_2 from '../waves/Waves_2'

function Home() {
    // const aboutRef = useRef(null);
    return (<>
        <div className="flex  flex-row bg-gray-700 text-slate-50">
            <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-4">

                <div className="ml-5 w-full md:w-1/2 p-2">
                    <h2 className="lg:text-8xl md:text-6xl sm:text-4xl font-bold mb-4">Your Title <span className='text-orange-700'>He Your</span> Title Here</h2>
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