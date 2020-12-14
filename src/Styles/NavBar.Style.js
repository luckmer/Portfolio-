import styled from "styled-components";
import colors from "./Colors/Colors"
export const NavBarContext = styled.div`
  z-index: 9999;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  a{
    mix-blend-mode: difference;
    color: ${colors.black};
    text-decoration: none;
  }
  ul{
    margin:20px 30px 10px 30px;
    list-style-type: none;
  }
  li{
    
    font-family: gta,sans-serif;
    font-size: 1.3rem;
    line-height: 1.7rem;
    letter-spacing: 1px;
    font-weight: 100;
    padding: 20px 20px 0 20px ;
  }
`
export const Hr = styled.div `
  hr {
    
    display: block;
    height: 1px;
    border-top: 1px solid ${colors.black};
  }
`
export const Grid = styled.section `
  font-size: 20px;
  //padding: 0 11rem 0 11rem;
  line-height: 1.25;
  width: 100%;
  position: absolute;
`