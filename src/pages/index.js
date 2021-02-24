import React from 'react'
import "../styling/homepage.css";
import Logo from '../images/cmLogoModern.svg';
import Github from '../images/githubWhite.png';
import Linkedin from '../images/linkedin.png';
import Pdf from '../download/Christian_Matthews_Resume.PDF';

function Home() {
    return (
        <div className="home">
            <div className="header">

                <img src={Logo} alt='logo' />

                <div className="description">
                    <p className="descriptionName">Software Developer</p>
                </div>
            </div>

            <div className="aboutMe">
                <p className="aboutmeHeader"><u>About me</u></p>
                <p className="aboutMeDetails">Hello! I’m Christian, a software developer with a focus 
                    in web and mobile development. I have a strong passion 
                    for coding with a drive to continue learning every day to 
                    better my craft. Currently i’m a Senior pursuing a bachelor's 
                    degree in Computer Science with a graduation date set for May 2021.</p>
            </div>

            <footer>
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
            </footer>
        </div>
    )
}

export default Home
