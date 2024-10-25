import React from 'react'
import Apply from './Apply'
import Waves_3 from '../waves/Waves_3'



function Career() {
    return (
        <>
            <div className="cotainer h-full m-8">
                <div className="items-center m-9">
                    <Apply jobTitle="Frontend" jobDescription="We are looking for a talented and passionate Frontend Developer to join our dynamic team. The ideal candidate will have strong expertise in creating responsive, user-friendly interfaces and transforming design mockups into efficient, high-quality code. " />
                </div>
                <div className="items-center m-9">
                    <Apply jobTitle="Frontend" jobDescription="We are looking for a talented and passionate Frontend Developer to join our dynamic team. The ideal candidate will have strong expertise in creating responsive, user-friendly interfaces and transforming design mockups into efficient, high-quality code. You'll work closely with designers, backend developers, and product teams to develop and maintain engaging user interfaces that provide a seamless user experience." />
                </div>
                <div className="items-center m-9">
                    <Apply jobTitle="Frontend" jobDescription="We are looking for a talented and passionate Frontend Developer to join our dynamic team. The ideal candidate will have strong expertise in creating responsive, user-friendly interfaces and transforming design mockups into efficient, high-quality code. You'll work closely with designers, backend developers, and product teams to develop and maintain engaging user interfaces that provide a seamless user experience." />
                </div>
            </div>
            <Waves_3 />
        </>
    )
}

export default Career