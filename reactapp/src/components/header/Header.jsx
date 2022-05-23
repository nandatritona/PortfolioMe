import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocials';

export const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hallo I'm</h5>
                <h1>Nanda Tritona</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;