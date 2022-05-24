/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./about.css";
import ME from "../../assets/me.jpg";
import {FaAward} from "react-icons/fa";

export const About = () => {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
            <div className="about_me">
                <div className="about_me_image">
                    <img src={ME} alt="About Image" />
                </div>
            </div>

            <div className="about_content">
                <h3>ACHIEVEMENT</h3>
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5>Pemrograman Komputer</h5>
                        <small>01 Oktober 2021</small>
                    </article>

                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5>Framework CodeIgniter</h5>
                        <small>24 April 2022</small>
                    </article>

                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5>JavaScript</h5>
                        <small>28 April 2022</small>
                    </article>

                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5>ReactJS</h5>
                        <small>06 May 2022</small>
                    </article>

                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5>Linux</h5>
                        <small>08 May 2022</small>
                    </article>

                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5>Cyber Security</h5>
                        <small>08 May 2022</small>
                    </article>
                </div>

                <p>"Bekerja dengan suasana hati yang lebih asik dan mempelajari hal baru setiap harinya sangat menyenangkan."</p>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
      </section>
    );
}

export default About;