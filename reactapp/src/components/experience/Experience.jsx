import React from 'react'
import "./experience.css";
import {FaHtml5} from 'react-icons/fa';
import {FaCss3} from 'react-icons/fa';
import {DiJavascript1} from 'react-icons/di';
import {FaBootstrap} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa';
import {SiMysql} from 'react-icons/si';
import {FaPhp} from 'react-icons/fa';
import {SiPostgresql} from 'react-icons/si';
// import {SiWireshark} from 'react-icons/si';
// import {SiKalilinux} from 'react-icons/si';
// import {GiLoveInjection} from 'react-icons/gi';
import {FaPython} from 'react-icons/fa';

export const Experience = () => {
    return (
        <section id='experience'>
            <h5 className='jdl'>What Skills I Have</h5>
            <h2 className='jdl1'>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHtml5 className='icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaCss3 className='icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <DiJavascript1 className='icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaBootstrap className='icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiTailwindcss className='icon'/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaReact className='icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* EMD OF FRONTEND */}

                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaNodeJs className='icon'/>
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiMysql className='icon'/>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaPhp className='icon'/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiPostgresql className='icon'/>
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaPython className='icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* EMD OF BACKEND */}

                {/* <div className="experience_cyber">
                    <h3>Network Security</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <SiKalilinux className='icon'/>
                            <div>
                                <h4>Kali Linux</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiWireshark className='icon'/>
                            <div>
                                <h4>Wireshark</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <GiLoveInjection className='icon'/>
                            <div>
                                <h4>SQLInjection</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div> */}
                {/* END OF NETWORK */}
            </div>
        </section>
    )
}

export default Experience;