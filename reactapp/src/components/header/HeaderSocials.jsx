import React from 'react';
import {BsTelegram} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';

export const HeaderSocials = () => {
    return (
        <div className='haeder_socials'>
            <a href="https://telegram.com" target="_blank" rel="noreferrer"><BsTelegram/></a>
            <a href="https://telegram.com" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://telegram.com" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
        </div>
    )
}

export default HeaderSocials;