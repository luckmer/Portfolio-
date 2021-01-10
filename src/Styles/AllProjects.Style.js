import styled from "styled-components";
import { motion } from "framer-motion"
export const Section = styled(motion.section)`
font-family: moret, serif;

overflow-y: auto;
overflow-x: hidden;
justify-content: center;
display: flex;
flex-direction: column;
height: calc(100vh - 13rem);
position: relative;
justify-content: flex-start;

@media screen and (min-width: 52em){
    height: 100vh;
    justify-content: center;
  }
  img{
    object-fit: cover;
    margin: auto;
    width: 100%;
    height: 30vw;
  }
`

export const Galery = styled(motion.div)`
display: flex;
margin-left: 12vw;
padding-right: 12vw;
overflow:hidden;
`

export const Card = styled(motion.figure)`

position: relative;
display: block;
width: 20vw;
height: 100%;
margin-right:15vw ;
a{
  text-decoration:none;
}
`

export const Header = styled.section`
display: flex;
div{
  width: 100%;
  padding: 1vw;
}
`

export const Text = styled.div`
width: 100%;
overflow: hidden;
display: flex;
justify-content: space-between;
`

export const Number = styled.span`
color: #d9d0be;
font-weight: 800;
font-style: italic;
align-self: left;
margin: 0;
font-size: clamp(1vw,3vw,3vw);
`

export const Title = styled.h2`
color: #2c2724;
font-weight: 800;
font-style: italic;
align-self: center;
margin: 0;
font-size: clamp(1vw,3vw,3vw);

`
export const Footer = styled.p`
justify-self: end;
font-size: 1.5rem;
cursor: pointer;
  color: #606057;
`