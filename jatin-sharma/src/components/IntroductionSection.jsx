import React from 'react';
import '../assets/styles/introduction.css';

const IntroductionSection = () => {
    return (
        <section id='about' className="introduction-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="section-heading">Introduction</h2>
                        <h3 className="section-subheading">Overview.</h3>
                        <p className="intro-text">
                            With proficiency in Full Stack and Android development, I bring expertise in creating intuitive, high-performance applications. Skilled in frontend and backend web technologies, Java for Android, and Flutter for cross-platform solutions, I consistently deliver exceptional results through innovation and a results-driven approach.
                        </p>

                        <div className="skill-cards">
                            <div className="skill-card frontend">
                                <div className="skill-icon">React</div>
                                <h4 className="skill-name">Frontend Development</h4>
                                <p className="skill-description">
                                    Proficient in crafting responsive and intuitive user interfaces using modern frontend technologies such as React.js, HTML, CSS, and JavaScript.
                                </p>
                            </div>
                            <div className="skill-card backend">
                                <div className="skill-icon">Express</div>
                                <h4 className="skill-name">Backend Development</h4>
                                <p className="skill-description">
                                    Skilled in server-side development utilizing Node.js and Express.js. Experienced in designing and implementing RESTful APIs and proficient in database management with MongoDB.
                                </p>
                            </div>
                            <div className="skill-card app">
                                <div className="skill-icon">Java</div>
                                <h4 className="skill-name">Android Development</h4>
                                <p className="skill-description">
                                    Proficient in Android app development using Java. Experienced in server-side development with Node.js and Express.js. Skilled in designing and implementing RESTful APIs and database management with MongoDB.
                                </p>
                            </div>
                            <div className="skill-card react">
                                <div className="skill-icon">Flutter</div>
                                <h4 className="skill-name">Flutter Development</h4>
                                <p className="skill-description">
                                    Proficient in Flutter app development, adept at building dynamic and interactive applications. Skilled in state management, component-based architecture, and utilizing React hooks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
