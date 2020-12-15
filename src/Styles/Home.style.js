import styled from "styled-components";
import colors from "./Colors/Colors"

export const HeaderStyle = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Span = styled.span `
 
  font-weight: 400;
  line-height: 11vw;
  font-size: 13vw;
  color: ${colors.darker};
`
export const Grid = styled.section `
  padding: 10em 11vw 0 11vw;
  @media (max-width: 980px) {
    padding: 10em 1vw 0 1vw;
  }
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