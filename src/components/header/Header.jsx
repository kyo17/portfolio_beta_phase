import React from 'react';
import './header.css'
import Info from "./Info";
import moi from '../../assets/moi.jpg'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Jonathan Espinoza Moreira</h1>
                <h5 className="text-light">Software Engineer</h5>
                <Info />
                <div className="moi">
                    <img src={moi} alt="moi"/>
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;