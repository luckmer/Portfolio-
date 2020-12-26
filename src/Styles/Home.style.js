import styled from "styled-components";
import colors from "./Colors/Colors"
import { motion } from "framer-motion"

export const HeaderStyle = styled(motion.div) `
  display: flex;
  height: 100%;
  flex-direction: column;
`

export const HideText = styled.div `
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 95vw;
`

export const Span = styled(motion.span) `
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 15vw;
  line-height: 0.750;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.darker};
`
export const Grid = styled(motion.section) `
  padding: 22vh 1vw 0 1vw;
`

export const ContactPanel = styled(motion.div) `
  padding: 11vh 11vw 0 11vw;
  display: flex;
  justify-content: space-between;
  h6{
    color: grey;
  }
  h1,h6{
    font-weight: 400;
    
    padding: 5px 0 5px ;
    margin: 0 10px 20px 10px ;
  }
  @media screen and (min-width: 651px){
    h1{
      font-size: 15px;
    }
  }
  @media screen and (max-width: 651px){
    h1{
      font-size: 10px;
      font-weight: lighter;
    }
    
  }
`
export const LessPanelCode = styled(motion.div) `
  height:100vh;
  width: 50vw;
  position: absolute;
  z-index: 11;
`
export const LeftPanel = styled(LessPanelCode) `
  background-color: #bbbfca;
`
export const RightPanel = styled(LessPanelCode) `
  right: 0;
  background-color: #bbbfca;
`