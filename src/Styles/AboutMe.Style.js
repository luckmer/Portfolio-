import styled from "styled-components";

export const Grid = styled.section `

  font-family: 'Anton', sans-serif;
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

  a {
    overflow: hidden;
    color: grey;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    font-weight: bold;
    
    padding: 15px 20px  20px 20px;
    margin: 20px;
    position: relative;
  }
  a::before {
    background-color: grey;
    text-align: center;
    width: 0;
    color: white;
    overflow: hidden;
    position: absolute;
    content: attr(data-text);
    transition: all 1s cubic-bezier(0.84, 0, 0.08, 0.99);
  }

  a:hover:before {
    width: 100%;
  }

`

