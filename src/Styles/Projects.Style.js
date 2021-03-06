import styled from "styled-components";
import{motion} from "framer-motion"

export const Grid = styled(motion.section) `
 @media screen and (min-width: 651px){
  padding: 15vh 4vw 0 4vw;
  a{
   text-decoration: none;
  }

  header{
    overflow: hidden;
    line-height: 1.6em;
    font-size: 6vw;
    height: 20vh;
    position: absolute;
  }
  span{
    float: left;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 5em;
    color:#2c2724;
  }
}

  header{
  font-weight: bold;
  text-transform: uppercase;
  color: #2c2724;
}
 @media(max-width: 651px){
  a{
   text-decoration: none;
  }
  header{
   width: 100%;
   font-size: 12vw;
   padding-left:20px ;
   float: left;
  }
  span{
   display: none;
  }
 }
`
export const Span = styled(motion.span)`
  mix-blend-mode: exclusion;
  text-transform: uppercase;
  p{
    font-size: 20px;
    color: red;
  }
`
export const ImageDiv = styled(motion.div) `
 @media screen and (max-width: 651px){
  overflow: hidden;
  width: 90vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
 }
 
 @media screen and (min-width: 651px){
  overflow: hidden;
  width: 50vw;
  height: auto;
  float: right;
 }
 img{
  object-fit: cover;
  width: 100%;
  height: 100%;
 }
`
export const TextControl = styled.div `
 justify-content: space-between;
 display: flex;
 width: 100%;
 height: 100%;
 overflow: hidden;
 h1{
  color: #2c2724;
  font-weight: bold;
  text-transform: uppercase;
 }
 @media screen and (min-width: 651px){
  height: 30vh;
  div{
   text-align: left;
   width: 50vw;
   height: 100%;
  }
  h1{
   font-size: 5.5vw;
  }
 }
 @media screen and (max-width: 651px){
  h1{
   margin-left: 30px;
   width: 80vw;
   text-align: left;
   font-size: 10vw;
   line-height: 0.9;
  }
 }
`

export const Hr = styled.hr `
 margin-bottom: 50px;
 height: 1px;
 background-color: #2c2724;
 width:100%;
 display: block;
`

export const Div = styled.div `
 img{
  transform: translateY(${({ animate }) => ( animate  ? "0" : "100%")})  ;
  transition: transform 4.25s cubic-bezier(.075,1,.165,1);
 }
 hr{
  overflow: hidden;
  width:${({ animate }) => ( animate === true ? "100%" : "0")};
  transition: width 1s ease-in-out;
 }
 header{
  height: ${({ animate }) => ( animate  ? "-20vh" : "0")}  ;
  transition: height 3.25s cubic-bezier(.075,1,.165,1);
 }
 h1{
   
   transform: translateY(${({ animate }) => ( animate  ? "0" : "100vh")})  ;
   transition: transform 4.25s cubic-bezier(.075,1,.165,1);
 }
`