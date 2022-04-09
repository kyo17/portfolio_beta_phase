import React from 'react';
import {BsPatchCheck} from 'react-icons/bs'
import './experience.css'


const Experience = () => {
    return (
        <section id="experience">
            <h5>My Skills</h5>
            <h2>With development tools</h2>
            <div className="container experience_container">
                <div className="exp_frontend">
                    <h3>Frontend Technologies</h3>
                    <div className="exp_content">
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                           <div>
                               <h4>HTML 5</h4>
                               <small className="text-light">Intermedia</small>
                           </div>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>Angular</h4>
                                <small className="text-light">Intermedia</small>
                            </div>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <h4>Blazor</h4>
                            <small className="text-light">Intermedia</small>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="exp_frontend">
                    <h3>Backend Technologies</h3>
                    <div className="exp_content">
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>.Net Core & C#</h4>
                                <small className="text-light">Intermedia</small>
                            </div>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>Java with Springboot</h4>
                                <small className="text-light">Intermedia</small>
                            </div>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>MS SQL</h4>
                                <small className="text-light">Intermedia</small>
                            </div>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>Mongodb</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>Oracle</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="exp_details">
                            <BsPatchCheck className="exp_details-icon"/>
                            <div>
                                <h4>Power BI</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;