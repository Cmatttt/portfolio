import React from 'react'
import Logo from '../images/cmLogoAnimated.svg';
import { Header, Name, Image } from '../styling/homeStyle.js'

function Home() {
    return (
        <>
            <style>{'body { background-color: grey; }'}</style>
            <Header>
                <Image>
                    <img src={Logo} alt='logo' />
                </Image>
                <Name>
                    <h1>Christian Matthews</h1>
                </Name>
            </Header>
        </>
    )
}

export default Home
