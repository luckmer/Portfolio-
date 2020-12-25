import styled from "styled-components";

export const Grid = styled.section `
  z-index: 2;
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
    width: 100%;
    height: 1px ;
    background-color: grey;
  }
`


export const SocialContact = styled.div `
  display: flex;
  height: 15vh;
  align-items: center;
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

