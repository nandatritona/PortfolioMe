/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./about.css";
import ME from "../../assets/me.jpg";
import {FaAward} from "react-icons/fa";
import {BsFillCreditCard2FrontFill} from "react-icons/bs";
import {VscFolderLibrary} from "react-icons/vsc";

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
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5>Experience</h5>
                        <small>3* Years Working</small>
                    </article>

                    <article className="about_card">
                        <BsFillCreditCard2FrontFill className="about_icon" />
                        <h5>Sertifikat</h5>
                        <small>200 Worldwide</small>
                    </article>

                    <article className="about_card">
                        <VscFolderLibrary className="about_icon" />
                        <h5>Project</h5>
                        <small>10+ Complated</small>
                    </article>
                </div>

                <p>"Bekerja dengan suasana hati yang lebih asik dan mempelajari hal baru setiap harinya."</p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
      </section>
    );
}

export default About;