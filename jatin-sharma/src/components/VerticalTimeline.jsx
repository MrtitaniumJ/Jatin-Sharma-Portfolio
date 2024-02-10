import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/timeline.css';
import hacktoberFest from '../assets/images/hacktoberfest.png';
import codeBusters from '../assets/images/Codebusters-logo.jfif';
import igoko from '../assets/images/iga_solutions_private_limited_logo.jfif';

const VerticalTimelineSection = () => {
    return (
        <section className="vertical-timeline-section" style={{ background: '#040008', padding: '10px 0' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h3 className='section-subheading' style={{ color: '#a9a5c2', marginBottom: '0', fontSize: '1.5rem' }}>What I have done so far</h3>
                        <h2 className="section-heading" style={{ color: '#ffffff', marginBottom: '30px', fontSize: '4rem' }}>Work Experience & Achievements.</h2>

                        <VerticalTimeline animate={true} className="vertical-timeline-custom-line" style={{ color: '#ffffff' }}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#1d1836', color: '#ffffff', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', borderRadius: '5px' }}
                                contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
                                date={<span style={{ fontSize: '1.1rem' }}>May 2022 - Present</span>}
                                iconStyle={{ backgroundImage: `url(${codeBusters})`, backgroundSize: 'cover', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <h3 className="vertical-timeline-element-title">Vice President</h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#a9a5c2' }}>GLAU - CodeChef Chapter CodeBusters</h4>
                                <ul style={{ color: '#bbb9c1', textAlign: 'left', paddingLeft: '20px' }}>
                                    <li>Organized and managed multiple workshops, tech fests, and coding contests.</li>
                                    <li>Facilitated collaborations between students, faculty, and industry professionals.</li>
                                    <li>Provided mentorship and guidance to members, fostering skill development.</li>
                                    <li>Led the chapter in achieving significant growth and recognition within the university.</li>
                                </ul>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#1d1836', color: '#ffffff', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', borderRadius: '5px' }}
                                contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
                                date={<span style={{ fontSize: '1.1rem' }}>Oct 2022</span>}
                                iconStyle={{ backgroundImage: `url(${hacktoberFest})`, backgroundSize: 'cover', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <h3 className="vertical-timeline-element-title">Open Source Contributor</h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#a9a5c2' }}>Hacktober Fest</h4>
                                <ul style={{ color: '#bbb9c1', textAlign: 'left', paddingLeft: '20px' }}>
                                    <li>Contributed algorithms to 2 repositories, all accepted into the main repository.</li>
                                    <li>Collaborated with developers worldwide to enhance open-source projects.</li>
                                    <li>Reviewed and provided feedback on pull requests from other contributors.</li>
                                    <li>Participated in discussions and community events to support open-source initiatives.</li>
                                </ul>
                            </VerticalTimelineElement>



                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#1d1836', color: '#ffffff', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', borderRadius: '5px' }}
                                contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
                                date={<span style={{ fontSize: '1.1rem' }}>Jun 2023 - Jul 2023</span>}
                                iconStyle={{ backgroundImage: `url(${igoko})`, backgroundSize: 'cover', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#a9a5c2' }}>Igoko Avionics Solutions Pvt. Ltd.</h4>
                                <ul style={{ color: '#bbb9c1', textAlign: 'left', paddingLeft: '20px' }}>
                                    <li>Worked on various projects using HTML, CSS, JavaScript, and Django.</li>
                                    <li>Contributed to the development of B2B and B2G applications, gaining real-world experience.</li>
                                    <li>Collaborated with senior developers to design and implement scalable solutions.</li>
                                    <li>Participated in team meetings, providing input on project planning and execution.</li>
                                </ul>
                            </VerticalTimelineElement>

                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerticalTimelineSection;
