import React from 'react'
import Logo from '../images/cmLogoModern.svg';
import { Header, Name, Image } from '../styling/homeStyle.js'

function Home() {
    return (
        <>
            <style>{'body { background-color: grey; }'}</style>
            <Header>
                <Image>
                    <img src={Logo} alt='logo' />                
                </Image>
            </Header>
        </>
    )
}

export default Home
