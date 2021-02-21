import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import Logo from '../../images/cmLogoWhiteThin.svg';
//import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars /> 
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/mywork" activeStyle>
                        My work  
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
