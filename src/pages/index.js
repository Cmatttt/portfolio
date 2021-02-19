import React from 'react'
import Logo from '../images/cmLogoModern.svg';
import { Header, Name, Image , Description} from '../styling/homeStyle.js'

function Home() {
    return (
        <>
            <style>{'body { background-color: grey; }'}</style>
            <Header>
                <Image>
                    <img src={Logo} alt='logo' />                
                </Image>
                <Description>
                    <p>Web Developer</p>
                </Description>
            </Header>
        </>
    )
}

export default Home
