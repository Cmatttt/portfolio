import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import lo from '../../images/cmLogo.svg';
import Logo from '../../images/cmLogo.svg';
//import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                <img style={{width: 220,height:300}} src={Logo} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
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
