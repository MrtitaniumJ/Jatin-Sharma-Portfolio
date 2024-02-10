import React, { useEffect } from 'react';
import 'particles.js';
import '../assets/styles/hero.css';
import heroBackground from '../assets/images/heroBackground.png';
import avatarImage from '../assets/images/jatin-profile-picture-crop1.png';

const HeroSection = () => {
    useEffect(() => {

        // particlesJS configuration
        window.particlesJS('hero-canvas', {
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: '#8e44ad',
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000',
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                },
                opacity: {
                    value: 1,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#8e44ad',
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab',
                    },
                    onclick: {
                        enable: true,
                        mode: 'push',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        });
    }, []);

    return (
        <section className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
            <div id="hero-canvas" className="particles-canvas"></div>
            <div className='background-overlay'></div>
            <div className="hero-content">
                <div className="left-section">
                    <div class="flex flex-col justify-center items-center mt-5">
                        <div class="w-5 h-5 rounded-full bg-[#915EFF]"></div>
                        <div class="w-1 sm:h-80 h-40 violet-gradient"></div>
                    </div>
                    <div className='creative-elements'>
                        <div className="text-container">
                            <h1 className="hero-heading">Hi, I'm <span className="hero-text">Jatin</span></h1>
                            <p className="hero-subheading">Passionate about crafting beautiful and user-friendly web and android applications</p>
                        </div>
                    </div>
                </div>
                <div className="avatar-section">
                    <div className="custom-messy-shape">
                        <img className="avatar" src={avatarImage} alt="Jatin's Avatar" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HeroSection;