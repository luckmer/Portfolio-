import styled from "styled-components";
import {motion } from "framer-motion"
export const Article = styled(motion.article)`
    display:flex;
    max-width:90vw;
    height:100vh;
    margin:auto;
    flex-direction:column;
    align-items:center;
    padding-top: 17vh;
    padding-bottom: 12vh;


    @media screen and (max-width: 800px){
        justify-content: space-around;
    }
`;
export const H1 = styled.h1`
    padding-top: 2.5vw;
    font-family: moret, serif;
    padding-right: 1vw;
    color: #1d1d1d;
    line-height: 6vw;
    letter-spacing: -.03em;
    text-transform: none;

    @media screen and (min-width: 100px){
        font-size: 15vw;
    }
`;
export const Email = styled.div`
margin-top: 2vw;
margin-bottom: 1vw;
line-height: 2vw;
text-align: center;
text-transform: none;
padding-bottom: 1.2vw;
display:flex;
flex-direction:column;
a{
    padding:2vw;
    position: relative;
    font-size: 4vw;
    line-height: 4vw;
    color:#2c2724;
    text-decoration:none;
}
@media screen and (max-width: 800px){
    a{
        margin:auto;
        font-size:7vw;
        line-height:6vw;
    }
}
`;
