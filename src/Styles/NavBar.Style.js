import styled from "styled-components";

export const NavBarContext = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;

  li,a{
   
     list-style-type: none;
      margin: 0 20px 0 10px;
      display: inline;
      text-decoration: underline;
      padding-bottom: 50px;
  }
 a{
   text-decoration: none;
   text-transform: uppercase;
   font-weight: 500;
   line-height: 1px;
   color: #1d1d1d;
 }
`
export const Hr = styled.div `

`
export const Grid = styled.header `
  opacity: ${({ animate }) => ( animate === true ? "1" : "0")};
  transition: opacity .2s ease-out;
  position: fixed;
  width: 100%;
  @media screen and (max-width: 651px){
    padding: 5vh 1vw 0 1vw;
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
    border: 1px solid black;
  }
`