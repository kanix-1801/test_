import React from 'react';

function AboutLeft(props) {
    return (
        <>
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
                        <h2 className="lg:text-6xl md:text-6xl sm:text-4xl text-4xl font-bold mb-4">
                            {props.heading} <span className="text-orange-700">{props.heading2}</span>
                        </h2>
                        <p className="font-serif text-gray-600 leading-relaxed tracking-wide py-6">
                            {props.para}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutLeft;
