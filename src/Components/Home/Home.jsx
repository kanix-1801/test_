import React, { useState, useEffect } from 'react'
import About from '../About/About'
import Waves from '../waves/Waves'
import Waves_2 from '../waves/Waves_2'
import AboutLeft from '../About/AboutLeft';
import HomeHeader from './HomeHeader';
import Values from '../Values/Values';

function Home() {
    return (
        <>
            <HomeHeader />
            <Waves />
            <div className='ml-10 mr-10'>
                <About heading2="Trusted Expertise" para="At our core, we believe that innovation and sustainability go hand in hand. By driving advancements that are not only efficient but also environmentally conscious, we’re committed to creating technologies that serve both today’s needs and tomorrow’s challenges. Our sustainable vision guides every decision we make, ensuring that our solutions minimize impact while maximizing value. From reducing carbon footprints to optimizing resources, we empower bus" />
                <AboutLeft heading2="Sustainable Vision" para="At our core, we believe that innovation and sustainability go hand in hand. By driving advancements that are not only efficient but also environmentally conscious, we’re committed to creating technologies that serve both today’s needs and tomorrow’s challenges. Our sustainable vision guides every decision we make, ensuring that our solutions minimize impact while maximizing value. From reducing carbon footprints to optimizing resources, we empower bus" />
                <About heading2="Impactful Innovation" para="Our vision is to harness the power of innovation to create real, lasting impact. We’re dedicated to developing forward-thinking solutions that drive meaningful progress for businesses, communities, and industries. By combining cutting-edge technology with a deep understanding of our clients’ needs, we create tools and systems that solve complex challenges and open new possibilities. At every step, our goal is to deliver innovations that not only pro" />
                <AboutLeft heading2="Transformative Ideas" para="We believe that big changes start with bold ideas. Our mission is to empower progress by turning visionary concepts into real-world solutions that reshape industries and elevate possibilities. With a focus on creativity and strategic innovation, we develop technologies that don’t just adapt to change but actively drive it. By pushing the boundaries of what’s possible, we’re not only supporting our clients today but laying the groundwork for a more " />
            </div>
            <section
                id='about'
                style={{ backgroundColor: '#d3d3d3' }}
            >
                {/* <About />
                <About /> */}
                <Values />
            </section>
            <Waves_2 />

        </>
    )
}

export default Home

// export { scrollToAbout }