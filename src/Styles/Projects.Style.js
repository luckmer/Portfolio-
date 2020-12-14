import styled from "styled-components";


export const Grid = styled.div `
  display: flex;
  justify-content: left;
  height: 2em;
  align-items: center;
  font-size: 7vw;
  h1,h2{
    font-size: 7vw;
  }
  
  a{
    text-decoration:none;
  }
  h1{
    color: black;
    transform: translateY(0%);
    transition: transform 1.25s cubic-bezier(.075,.82,.165,1);
  }
  h2{
    color: #808080;
    transform: translateY(60%);
    overflow: hidden;
    transition: transform 1.25s cubic-bezier(.075,.82,.165,1);
  }
  &&:hover {
    h2{
      z-index: 0;
      opacity: 1;
      transform: translateY(-100%) translateX(0);
    }
    h1{
      transform: translateY(-110%) rotate3d(180, 0, 0, 5deg) ;
      transition: transform 1.25s cubic-bezier(.075,.82,.165,1);
    }
  }
  
  

  
`
export const Text = styled.div `
  overflow: hidden;
  height: 100%;
  width: 100%;

`
export const Hr = styled.hr `
  margin: 40px 0 0 0 ;
  border: 1px solid black;
  width:70%;
  display: block;
  position: absolute;
`
export const Section = styled.section `
  padding: 15rem 0 0 0 ;
`
