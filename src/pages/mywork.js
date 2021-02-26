import React from 'react'
import "../styling/myWorkStyling.css";
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
import download from '../images/download.png';
import Messenger from '../images/messenger.png';
import Compiler from '../download/christian_matthews_compiler.zip';


const mywork = () => {
    return (
        <div className="mywork">
            <div className="workTitle">
                <p className="work">Projects</p>
            </div>
            <div className="allWork">

            <div className="projects">
                    <img  className="projectImage" src={Messenger} alt='logo' />
                    <div className="projectDetail">
                        <p className="projectTitle">React Messenger</p>
                        <p className="projectDescription">Messaging app created using React JS and Firebase</p>
                        <div className="projectComponents">
                            <p className="projectComponent">ReactJS</p>
                            <p className="projectComponent">Firebase</p>
                            <p className="projectComponent">Javascript</p>
                            <p className="projectComponent">CSS</p>
                        </div>
                        <div className="projectLogos">
                            <a href="https://messenger-app-a4d9a.web.app/">
                                <img className="projectLogo" src={WebLogo} alt='logo' />
                            </a>
                            <a href="https://github.com/Cmatttt/react-messenger">
                                <img className="projectLogo" src={Github} alt='logo' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects">
                    <img  className="projectImage" src={CardFlip} alt='logo' />
                    <div className="projectDetail">
                        <p className="projectTitle">Card Flip</p>
                        <p className="projectDescription">Responsive game of card matching</p>
                        <div className="projectComponents">
                            <p className="projectComponent">Javascript</p>
                            <p className="projectComponent">HTML</p>
                            <p className="projectComponent">CSS</p>
                            <p className="projectComponent">Bootstrap</p>
                        </div>
                        <div className="projectLogos">
                            <a href="https://codepen.io/Cmattt/full/MWaXvjY">
                                <img className="projectLogo" src={Codepen} alt='logo' />
                            </a>
                            <a href="https://github.com/Cmatttt/Card-Match">
                                <img className="projectLogo" src={Github} alt='logo' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects">
                    <img  className="projectImage" src={BarFinder} alt='logo' />
                    <div className="projectDetail">
                        <p className="projectTitle">Local Bar Finder</p>
                        <p className="projectDescription">Responsive app using Google Maps API to find bars near adress inputed</p>
                        <div className="projectComponents">
                            <p className="projectComponent">Javascript</p>
                            <p className="projectComponent">Google Maps API</p>
                            <p className="projectComponent">HTML</p>
                            <p className="projectComponent">CSS</p>
                            <p className="projectComponent">Bootstrap</p>
                        </div>
                        <div className="projectLogos">
                            <a href="https://codepen.io/Cmattt/full/oNjQbYN">
                                <img className="projectLogo" src={Codepen} alt='logo' />
                            </a>
                            <a href="https://github.com/Cmatttt/Local-Bar-Finder">
                                <img className="projectLogo" src={Github} alt='logo' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects">
                    <img  className="projectImage" src={Quicksand} alt='logo' />
                    <div className="projectDetail">
                        <p className="projectTitle">Quicksand Golf Course</p>
                        <p className="projectDescription">Responsive site for golf course located in San Angelo, TX</p>
                        <div className="projectComponents">
                            <p className="projectComponent">HTML</p>
                            <p className="projectComponent">CSS</p>
                            <p className="projectComponent">GoDaddy</p>
                            <p className="projectComponent">Photoshop</p>
                            <p className="projectComponent">Illustrator</p>
                        </div>
                        <div className="singleLogo">
                            <a href="https://quicksandsanangelo.com/">
                                <img className="singleProjectLogo" src={WebLogo} alt='logo' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects">
                    <img  className="androidImage" src={Lightbike} alt='logo' />
                    <div className="projectDetail">
                        <p className="projectTitle">Light Bike</p>
                        <p className="projectDescription">Android game inspired by Tron</p>
                        <div className="projectComponents">
                            <p className="projectComponent">Java</p>
                            <p className="projectComponent">Android Studio</p>
                            <p className="projectComponent">Photoshop</p>
                            <p className="projectComponent">Illustrator</p>
                        </div>
                        <div className="singleLogo">
                            <a href="https://github.com/Cmatttt/Light-Bike-Fight-Final">
                                <img className="singleProjectLogo" src={Github} alt='logo' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects">
                    <img  className="iosImage" src={Ios1} alt='logo' />
                    <div className="projectDetail">
                        <p className="projectTitle">Covid-19 Risk App</p>
                        <p className="projectDescription">iOS app that determines the risk of Covid-19 based on what county and what type of store place are at in Texas</p>
                        <div className="projectComponents">
                            <p className="projectComponent">Swift</p>
                            <p className="projectComponent">Google Places API</p>
                            <p className="projectComponent">Firebase</p>
                            <p className="projectComponent">SwiftyJSON</p>
                        </div>
                        <div className="singleLogo">
                            <a href="https://github.com/Cmatttt/cs4306-project">
                                <img className="singleProjectLogo" src={Github} alt='logo' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="projects">
                    <img  className="projectImage" src={Cpp} alt='logo' />
                    <div className="projectDetail">
                        <p className="projectTitle">C++ Compiler</p>
                        <p className="projectDescription">Compiler build using C++</p>
                        <div className="projectComponents">
                            <p className="projectComponent">C++</p>
                        </div>
                        <div className="singleLogo">
                            <a href={Compiler} target="_blank" download>
                                <img className="singleProjectLogo" src={download} alt='logo' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mywork
