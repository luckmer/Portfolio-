import styled from "styled-components";

export const NavBarContext = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 651px){
    padding-bottom: 40px;
  }
  @media screen and (max-width: 651px){
    padding-bottom: 20px;
  }

  li,a{
     list-style-type: none;
      margin: 0 20px 0 10px;
      display: inline;
      padding-bottom: 50px;
  }
 a{
   text-decoration: none;
   text-transform: uppercase;
   font-weight: lighter;
   line-height: 1px;
   color: #1d1d1d;
 }
`

export const Hr = styled.div `
  width: 100%;
  max-width: 90vw;
  margin-right: auto;
  margin-left: auto;
  background-color: #1d1d1d;
  height: 0.5px;
`

export const Grid = styled.header `
  font-family: 'Anton', sans-serif;
  z-index: 2;
  opacity: ${({ animate }) => ( animate === true ? "1" : "0")};
  transition: opacity .2s ease-out;
  position: fixed;
  width: 100%;
  
  @media screen and (max-width: 651px){
    padding: 5vh 0 0 0;
    li,a{
      font-size: 3vw ;
    }
  }
  
  @media screen and (min-width: 651px){
    padding: 5vh 11vw 0 11vw;
  }
  
  hr{
    display: block;
    width: 100%;
    border: 1px solid #1d1d1d;
  }
`