import styled from "styled-components";

export const NavBarContext = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    color: black;
    text-decoration: none;
  }
  ul{
    margin: 20px 30px 10px 30px;
    list-style-type: none;
  }
  li{
    font-family: gta,sans-serif;
    font-size: 1.3rem;
    line-height: 1.7rem;
    letter-spacing: 1px;
    font-weight: 100;
    padding: 0 20px 0 20px ;
  }
`
export const Hr = styled.div `
  hr {
    display: block;
    height: 1px;
    border-top: 1px solid black;
  }
`
export const Grid = styled.section `
  font-size: 20px;
  padding: 4em 11rem 0 11rem;
  line-height: 1.25;
`