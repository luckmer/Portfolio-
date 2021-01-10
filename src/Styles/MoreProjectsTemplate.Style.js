/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.div`
    position: relative;
    margin-bottom: 8vw;
    float: right;
    h3 {
        position: relative;
        left: 0.9vw;
        display: inline-block;
        float: right;
        color: #1d1d1d;
        font-size: 17.4vw;
        line-height: 16vw;
        font-weight: bold;
        letter-spacing: 0.04em;
    }
    span {
        display: inline-block;
        font-size: 5.5vw;
        line-height: 5vw;
        text-transform: uppercase;
        color: #1d1d1d;
        letter-spacing: -0.08em;
    }
    div {
        display: block;
    }
`;
export const Article = styled.article`
    font-family: "Roboto", sans-serif;
    width: 100vw;
    padding: 8vw 3.5vw 10vw;
`;
export const Card = styled(motion.div)`
    position: relative;
    display: block;
    width: 45.8vw;
    margin-right: 1.5vw;
    background-color: #1d1d1d;
`;
export const Main = styled.div`
    display: flex;
    width: 100%;
    a {
        text-decoration: none;
    }
`;
export const ImgPanel = styled.div`
    img {
        object-fit: cover;
        margin: auto;
        width: 100%;
        height: 30vw;
    }
`;
export const Padding = styled.div`
    width: 100%;
    padding: 1vw;
`;
export const TextPanel = styled(motion.div)`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
`;
export const Text = styled.div`
    display: flex;
    padding-right: 1vw;
    padding-bottom: 1vw;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        padding-top: 1vw;
        float: left;
        color: #f6f4f1;
        font-size: 4vw;
        line-height: 3vw;
    }
`;
export const Number = styled.div`
    color: #f6f4f1;
    text-decoration: none;
    font-size: 9vw;
    line-height: 8vw;
    font-weight: 700;
`;

//footer

export const Footer = styled.footer`
    width: 100%;
    padding: 3vw 3.5vw;
    margin-top: 7vw;
`;
export const FooterData = styled.div`
    width: 100%;

    div {
        width: 100%;
        text-align: center;
        margin:auto;
    }

    span {
        width: 5vw;
        height: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        float: right;
        background-color: #1d1d1d;
    }

    ul {
        list-style-type: none;
        cursor:pointer;


    }

    li {
        width: 10vw;
        margin: auto;
        font-size: 1.2vw;
        line-height: 1.4vw;
        text-align: center;
        text-transform: uppercase;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 1px;
          background: #1d1d1d;
          transition: width .3s;
        }
        &:hover:after { 
          content: "";
          color:#1d1d1d;
          width: 100%;
        }

    }
    h3 {
        display: inline-block;
        margin-bottom: 2vw;
        font-size: 2vw;
        line-height: 2vw;
        text-align: center;
        text-transform: uppercase;
    }
    @media screen and (min-width: 480px) {
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        h3,
        ul,
        li {
            font-size: 4vw;
            line-height: 6vw;
        }
        span {
            display: none;
        }
    }
`;
export const H = styled.h1`
    color: #f6f4f1;
    font-size: 3vw;
`;
