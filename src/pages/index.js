import React from 'react'
import "../styling/homepage.css";
import Logo from '../images/cmLogoModern.svg';
import Github from '../images/githubWhite.png';
import Linkedin from '../images/linkedin.png';
import Pdf from '../download/resume.pdf';

function Home() {
    return (
        <div className="home">
            <div className="header">

                <img src={Logo} alt='logo' />

                <div className="description">
                    <p>Software Developer</p>
                </div>
            </div>

            <div className="aboutMe">
                <h1></h1>
            </div>

            <div className="buttonLocation">
                <div class="button" id="btn">
                    <div id="circle"></div>
                    <a href={Pdf} target="_blank" download>resumé</a>
                </div>
            </div>

            <div className="socials">
                <a href="https://www.linkedin.com/in/christian-m-112061110/">
                    <img className="social" src={Linkedin} alt='Linkedin' />
                </a>
                <a href="https://github.com/Cmatttt">
                    <img className="social" src={Github} alt='Github' />
                </a>
            </div>
        </div>
    )
}

export default Home
