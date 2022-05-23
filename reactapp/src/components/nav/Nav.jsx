/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageDetail} from 'react-icons/bi';

export const Nav = () => {
    return (
        <nav>
            <a href="#home"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#service"><RiServiceLine/></a>
            <a href="#contact"><BiMessageDetail/></a>
        </nav>
    )
}

export default Nav;