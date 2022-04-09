import React from 'react';
import './about.css'
import moi from '../../assets/moi.jpg'
import {FaAward} from "react-icons/fa";
import {VscFolderLibrary} from "react-icons/vsc";
import {BsBuilding} from 'react-icons/bs'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                <div className="about_me-image">
                    <img src={moi} alt="About Image"/>
                </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>1+ Year developing software</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>11+ Completed projects being part of the development team</small>
                        </article>
                        <article className="about_card">
                            <BsBuilding className="about_icon"/>
                            <h5>Enterprises</h5>
                            <small>SFR, Limoges, France</small>
                            <hr/>
                            <small>ChatStudio Curridabat, Costa Rica</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda beatae,
                        commodi consequuntur distinctio earum est facere fugiat harum illum ipsa libero minima
                        nam neque quisquam saepe tempora, tempore vel.</p>
                    <a href="#contact" className="btn btn-primary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default About;