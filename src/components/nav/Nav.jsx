import React, {useState} from 'react';
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FcReading} from 'react-icons/fc'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'

const Nav = () => {
    const [activeItem, setActiveItem] = useState('#');

    return (
        <nav>
            <a onClick={() => setActiveItem('#')}
                className={activeItem === '#' ? 'active' : ''}
                   href="#"><AiFillHome/></a>
            <a onClick={() => setActiveItem('#about')}
               className={activeItem === '#about' ? 'active' : ''}
                href="#about"><AiOutlineUser/></a>
            <a onClick={() => setActiveItem('#experience')}
               className={activeItem === '#experience' ? 'active' : ''}
                href="#experience"><FcReading/></a>
            <a onClick={() => setActiveItem('#services')}
               className={activeItem === '#services' ? 'active' : ''}
                href="#services"><RiServiceLine/></a>
            <a onClick={() => setActiveItem('#contact')}
               className={activeItem === '#contact' ? 'active' : ''}
                href="contact"><AiOutlineMail/></a>
        </nav>
    );
};

export default Nav;