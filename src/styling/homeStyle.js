import styled from 'styled-components'


export const Header = styled.div`
    position: relative;
`

export const Image = styled.div`
    width: 55%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const Name = styled.div`
    font-size: 40px;
    position: absolute;
    top:20%;
    width: 100%;
    text-align: center;
    opacity: 0;

    animation: fadeIn ease 12s;
    -webkit-animation: fadeIn ease 12s;
    -moz-animation: fadeIn ease 12s;
    -o-animation: fadeIn ease 12s;
    -ms-animation: fadeIn ease 12s;
    animation-delay: 4.5s;


    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
`;