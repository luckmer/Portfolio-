import styled from "styled-components";
import colors from "./Colors/Colors"
import { motion } from "framer-motion"

export const HeaderStyle = styled(motion.div) `
  display: flex;

  justify-content: center;
  flex-direction: column;
  @media screen and  (max-width : 651px){
    span{
      width: 100%;
      font-size: 12.05vw;
      line-height: 12.05vw;
    }
  }

`
export const Span = styled(motion.span) `
  display: flex;

  justify-content: center;
  @media screen and (min-width : 651px){
    font-size: 14vw;
    line-height: 12vw;
  }
  text-transform: uppercase;
  font-weight: bold;
  line-height: 0.8;
  color: ${colors.darker};
`
export const Grid = styled(motion.section) `
  @media screen and (min-width: 651px){
    padding: 10em 11vw 0 11vw;
  }
  @media screen and (max-width: 651px) {
    padding: 5em 1vw 0 1vw;
    
  }
`
export const ContactPanel = styled(motion.div) `
  padding: 5em 0 0 0;
  display: flex;
  h1{
    font-size: 15px;
    padding: 5px 0 5px ;
    margin: 0 10px 0 10px ;
  }
`