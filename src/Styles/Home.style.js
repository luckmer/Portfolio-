import styled from "styled-components";
import colors from "./Colors/Colors"

export const HeaderStyle = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Span = styled.span `
  font-weight: 400;
  font-size: 13vw;
  line-height: 11vw;
  color: ${colors.darker};
  
`
export const Grid = styled.section `
  padding: 10em 11rem 0 11rem;
`
export const ContactPanel = styled.div `
  width: 100%;
  padding: 5em 0 0 0;
  display: flex;
  h1{
    padding: 5px 0 5px ;
    margin: 0 40px 0 40px ;
  }
`