import React from 'react'
import CV from '../../assets/CV.pdf'

export const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download>Download CV</a>
            <a href="#contact">Let's it Talk</a>
        </div>
    )
}

export default CTA;