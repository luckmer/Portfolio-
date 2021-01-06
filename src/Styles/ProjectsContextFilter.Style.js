import styled from "styled-components";
import { motion } from "framer-motion";


export const Grid = styled(motion.article)`
    padding-top: 8vh;
    width: 100%;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;


export const Main = styled.div`

    font-family: "Roboto", sans-serif;
    width: 100vw;
    padding: 8vw 3.5vw 10vw;
    @media screen and (min-width: 990px){
      display: flex;
      justify-content: center;
      width: 100%;
      a {
          text-decoration: none;
      }
    }
    @media screen and (max-width: 990px){
      display:flex;
      flex-direction:column;
    }
`;
export const Card = styled.div`
    margin-top:auto;
    margin-bottom:auto;
    @media screen and (min-width: 990px){
      position: relative;
      display: block;
      max-width: 45.8vw;
    }

`;


export const Padding = styled.div`
    padding: 1vw;
`;
export const ImgPanel = styled.div`

    img {
      object-fit: cover;
      margin: auto;
      width: 100%;
      height: 100vh;
  }
`;

export const PaddingTwo = styled(motion.div)`
    width: 100%;
    margin:10px;
    overflow:hidden;
    img {
        object-fit: cover;
        margin: auto;
        width: 100%;
        height: 100%;
    }
`;
export const Header = styled(motion.header)`
    font-family: "Roboto", sans-serif;
    width: 100vw;
    padding: 8vw 3.5vw 10vw;
`;
export const Context = styled.div`
    width: 100%;
    height: 100%;
    div {
        width: 100%;
    }
`;
export const ImgPanelS = styled.div`
  div{
    background-image: url(${({ Img }) => Img});
    background-position: 50% 50%;
    background-repeat: no-repeat;

  }
    @media screen and (min-width: 990px){
      div {
        float: right;
        display: flex;
        background-position: 50% 50%;
        background-size: auto;
        background-repeat: no-repeat;
        width: 30vw;
        height: 50vw;
      }
    }

    @media screen and (max-width: 990px){
      width: 100%;
      height:100vh;
      div {
        background-size: cover;
        margin: auto;
        width: 100%;
        height: 100%;
      }
    }
`;
export const CardR = styled.div `
position: relative;
display: block;
float:right;
`

export const TextContext = styled.div`
    
    width:100vw;
    display:flex;
    justify-content:space-around;
    align-items:center;
    div{
        width:100%;
    }
    h1{
        display: inline-block;
        padding-bottom: 15vw;
        font-size: 67vw;
        line-height: 50vw;
    }

    @media screen and (max-width: 480px){
      flex-direction:column;
      div{
        display:flex;
        justify-content:center;
        margin:auto;
      }
      h1{
        font-size: 130vw;
        line-height: 99vw;
      }
      h2{
        max-width: 100%;
        margin-top: 5vw;
        font-size: 4vw;
        line-height: 6vw;
      }
      h3{
        margin:auto;
        font-size: 14vw;
        line-height: 12vw;
      }
    }
`;

export const Text = styled.section`
font-family: 'Raleway', sans-serif;
    margin-left: 5vw;
    float: left;

`

export const HeaderText = styled.header`

max-width: 90%;
color: #1d1d1d;
font-size: 4vw;
line-height: 3.5vw;
letter-spacing: -.03em;
h3{
    font-weight: bold;
    font-size: 7vw;
    line-height: 6vw;
    color: #1d1d1d;
}

`
export const DivText = styled.div`
max-width: 90%;
margin-top: 3vw;
font-size: 1.4vw;
line-height: 2.2vw;
h2{
    font-weight: lighter;
    
}
`