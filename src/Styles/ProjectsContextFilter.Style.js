import styled from "styled-components";
import colors from "./Colors/Colors"

export const LessCode = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Grid = styled.article `
  z-index:-1;
  position: fixed;
  top: -50px; 
  left: 0;
  width: calc(80em);
  height:calc(110vw);
  overflow: scroll;
  transform: rotate(-94deg);
  transform-origin: center calc(40em);
`

export const Img = styled.div `
    border: 1px solid ${colors.dark};
    width: 400px;
    height: 600px;
`
export const Page1 = styled.div`
z-index:-1;
display: flex;
flex-direction: column;
justify-content: center;
margin:auto;
width: 400px;
height: 900px;
transform: rotate(90deg);
`

export const H = styled.h2 `
  text-align: left;
  font-size: 2em;
  color: ${colors.black};
  font-family: moret, serif;
  font-weight: bold;
  font-style: italic;
`
export const ScrollBar = styled.div `
  margin: 20px;
  align-items: center;
`
export const Div = styled(LessCode) `
    width: 8em;
    height: 8em;
    border: 1px solid ${colors.black};
    border-radius: 100px;
    align-items: center;
`
export const HeaderContext = styled.div `
  display: flex;
  justify-content: space-around;
  span{
    font-size: 2em;
    color: ${colors.grey};
    font-family: moret, serif;
    font-weight: 800;
    font-style: italic;
    align-self: center;
  }
  h3{
    border: 1px solid ${colors.black};
    color: ${colors.white};
  }
`