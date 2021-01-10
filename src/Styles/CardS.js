/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
export const CardS = styled(motion.div)`
    position: relative;
    display: block;
    width: 80vw;
    margin-right: 1.5vw;
    @media screen and (max-width: 990px) {
        width: 100vw;
        margin: auto;
    }
`;
export const ImgPanel = styled(motion.div)` 
    div{
        background-image: url(${({ Img }) => Img});
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media screen and (min-width: 990px){
        div{
            display: flex;
            margin: auto;
            width: 100%;
            height: 30vw;
        }
    }
    @media screen and (max-width: 990px){
        div{
            display: flex;
            margin: auto;
            width: 100%;
            height: 100vh;
        }
    }

`;
export const Main = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 990px) {
        display: flex;
        height: 100vh;
    }
`;
export const Text = styled(motion.div)`
    display: flex;
    overflow:hidden
    padding-right: 1vw;
    padding-bottom: 1vw;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        padding-top: 1vw;
        float: left;
        color: #1d1d1d;
        font-size: 4vw;
        line-height: 3vw;
    }
`;
export const Control = styled(motion.div)`
    width: 10%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    button {
        width: 70px;
        height: 70px;
        font-size: 30px;
        fnt-weight: bold;
        background-color: #f6f4f1;
        border: 1px solid #333;
        border-radius: 100px;
    }
    @media screen and (max-width: 990px) {
        display: none;
    }
`;
