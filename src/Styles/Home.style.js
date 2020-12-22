import styled from "styled-components";
import colors from "./Colors/Colors"
import { motion } from "framer-motion"

export const HeaderStyle = styled(motion.div) `
  display: flex;
  height: 110vh;
  justify-content: center;
  flex-direction: column;
  @media screen and  (max-width : 651px){
    span{
      width: 100%;
      font-size: 12.05vw;
      line-height: 11.05vw;
    }
  }
`

export const HideText = styled.div `
  overflow: hidden;
`
export const Span = styled(motion.span) `
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (min-width : 651px){
    font-size: 14vw;
    line-height: 12vw;
  }
  text-transform: uppercase;
  font-weight: bold;
  line-height: 0.6;
  color: ${colors.darker};
`
export const Grid = styled(motion.section) `
  @media screen and (min-width: 651px){
    padding: 15vh 0 0 0;
  }
  @media screen and (max-width: 651px) {
    padding: 5em 1vw 0 1vw;
  }
`
export const ContactPanel = styled(motion.div) `
  @media screen and (min-width: 651px){
    padding: 15vh 11vw 0 11vw;
  }
  display: flex;
  h1{
    font-size: 15px;
    padding: 5px 0 5px ;
    margin: 0 10px 0 10px ;
  }
`
export const LessPanelCode = styled(motion.div) `
  height:100vh;
  width: 50vw;
  position: absolute;
  z-index: 11;
`
export const LeftPanel = styled(LessPanelCode) `
  background-color: #495464;
`
export const RightPanel = styled(LessPanelCode) `
  right: 0;
  background-color: #bbbfca;
`