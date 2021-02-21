import React from 'react'
import "../styling/myWorkStyling.css";
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

const mywork = () => {
    return (
        <div className="mywork">
            <h1 className="workTitle">My Work</h1>
            <div className="boxes">
                <div className="box">
                    <table>
                        <img  className="image" src={CardFlip} alt='logo' />
                        <p className="title">Card Flip</p>
                        <p className="appdescription">Responsive game of card matching</p>
                        <div className="components">
                            <p className="component">Javascript</p>
                            <p className="component">HTML</p>
                            <p className="component">CSS</p>
                            <p className="component">Bootstrap</p>
                        </div>

                        <div className="cardLogos" valign="bottom">
                            <a href="https://codepen.io/Cmattt/full/MWaXvjY">
                                <img src={Codepen} alt='logo' />
                            </a>
                            <a href="https://github.com/Cmatttt/Card-Match">
                                <img src={Github} alt='logo' />
                            </a>
                        </div>
                    </table>
                </div>
                <div className="box">
                    <table>
                        <img  className="image" src={BarFinder} alt='logo' />
                        <p className="title">Local Bar Finder</p>
                        <p className="appdescription">Responsive app using Google Maps API to find bars near adress inputed</p>
                        <div className="components">
                            <p className="component">Javascript</p>
                            <p className="component">Google Maps API</p>
                            <p className="component">HTML</p>
                            <p className="component">CSS</p>
                            <p className="component">Bootstrap</p>
                        </div>

                        <div className="logos">
                            <a className="logo" href="https://codepen.io/Cmattt/full/oNjQbYN">
                                <img src={Codepen} alt='logo' />
                            </a>
                            <a className="logo" href="https://github.com/Cmatttt/Local-Bar-Finder">
                                <img src={Github} alt='logo' />
                            </a>
                        </div>
                    </table>
                </div>
                <div className="box">
                    <table>
                            <img  className="image" src={Quicksand} alt='logo' />
                            <p className="title">Quicksand Golf Course</p>
                            <p className="appdescription">Responsive site for golf course located in San Angelo, TX</p>
                            <div className="components">
                                <p className="component">HTML</p>
                                <p className="component">CSS</p>
                                <p className="component">GoDaddy</p>
                                <p className="component">Photoshop</p>
                                <p className="component">Illustrator</p>
                            </div>

                            <div className="logos">
                                <a href="https://quicksandsanangelo.com/">
                                    <img className="qsLogo" src={WebLogo} alt='logo' />
                                </a>
                            </div>
                    </table>
                </div>
                <div className="box">
                    <table>
                        <img  className="androidImage" src={Lightbike} alt='logo' />
                        <p className="title">Light Bike</p>
                        <p className="appdescription">Android game inspired by Tron</p>
                        <div className="components">
                            <p className="component">Java</p>
                            <p className="component">Android Studio</p>
                            <p className="component">Photoshop</p>
                            <p className="component">Illustrator</p>
                        </div>

                        <div className="logos">
                            <a href="https://github.com/Cmatttt/Light-Bike-Fight-Final">
                                <img className="androidLogo" src={Github} alt='logo' />
                            </a>
                        </div>
                    </table>
                </div>
                <div className="box">
                    <table>
                        <img  className="iosImage" src={Ios1} alt='logo' />
                        <p className="title">Covid-19 Risk App</p>
                        <p className="appdescription">
                            <span className="shortName">iOS app that determines the risk of Covid-19 based...</span>
                            <span className="longName">iOS app that determines the risk of Covid-19 based on what county and what type of store place are at in Texas</span>
                        </p>
                        <div className="components">
                            <p className="component">Swift</p>
                            <p className="component">Google Places API</p>
                            <p className="component">Firebase</p>
                            <p className="component">SwiftyJSON</p>
                        </div>

                        <div>
                            <a href="https://github.com/Cmatttt/cs4306-project">
                                <img className="specialLogo" src={Github} alt='logo' />
                            </a>
                        </div>
                    </table>
                </div>
                <div className="box">
                    <table>
                        <img  className="cppImage" src={Cpp} alt='logo' />
                        <p className="title">C++ Compiler</p>
                        <p className="appdescription">Compiler build using C++</p>
                        <div className="components">
                            <p className="component">C++</p>
                        </div>

                        <div>
                            <a className="logo" href="https://github.com/Cmatttt/Card-Match">
                                <img className="specialLogo" src={Github} alt='logo' />
                            </a>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default mywork
