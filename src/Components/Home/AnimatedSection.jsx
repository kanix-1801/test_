// AnimatedSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './sty.css';

function AnimatedSection({ children, delay = 0, animationType = "fade" }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`section ${inView ? 'visible' : ''} ${animationType}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}

export default AnimatedSection;
