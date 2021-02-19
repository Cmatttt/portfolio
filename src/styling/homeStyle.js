import styled from 'styled-components';
import Bridge from '../images/sunset.jpg';


export const Header = styled.div`
    background-image: url(${Bridge});
    background-size: 100% 100%;
    /* opacity: 0.50; */
    height: 1100px;
`

export const Image = styled.image`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    width: 40%;
`

export const Description = styled.p`
    margin-top: -50px;
    font-size: 60px;
    font-weight: lighter;
    text-align: center;
`
;