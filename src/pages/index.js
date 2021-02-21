import React from 'react'
import "../styling/homepage.css";
import Logo from '../images/cmLogoModern.svg';
import CardFlip from '../images/cardFlip.png';
import BarFinder from '../images/localBarFinder.png';
import Github from '../images/github.png';
import Codepen from '../images/codepen.png';
import Quicksand from '../images/quicksand.png';
import WebLogo from '../images/web.png';
import Ios1 from '../images/ios1.png';
import Ios2 from '../images/ios2.png';
import Cpp from '../images/cpp.png';
import Lightbike from '../images/lightbike.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
 
        <div className="header">

            <img src={Logo} alt='logo' />

            <div className="description">
                <p>Software Developer</p>
            </div>

            
        </div>
    )
}

export default Home
