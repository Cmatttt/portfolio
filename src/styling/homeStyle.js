import styled from 'styled-components'


export const Header = styled.div`
    background: green;
    text-align: center;
`

export const Image = styled.image`
    width: 55%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const Name = styled.h1`
    font-size: 20px;
    width: 100%;
    margin: 0;
    /* top: 50%; */
    opacity: 0;

    animation: fadeIn ease 12s;
    -webkit-animation: fadeIn ease 12s;
    -moz-animation: fadeIn ease 12s;
    -o-animation: fadeIn ease 12s;
    -ms-animation: fadeIn ease 12s;
    animation-delay: 4.5s;
    animation-fill-mode: forwards;


    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
`;