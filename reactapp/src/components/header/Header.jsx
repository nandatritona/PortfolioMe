import React from 'react'
import './header.css'

export const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hallo I'm</h5>
                <h1>Nanda Tritona</h1>
                <h5 className="text-light">Fullstack Developer</h5>
            </div>
        </header>
    )
}

export default Header;