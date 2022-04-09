import React from 'react';
import CV from '../../assets/CV+english+John.doc'

const Info = () => {
    return (
        <div className="info">
            <a className="btn" href={CV} download>Download CV</a>
            <a className="btn btn-primary" href="#contact">Contact Me</a>
        </div>
    );
};

export default Info;