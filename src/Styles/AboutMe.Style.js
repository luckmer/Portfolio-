import styled from "styled-components";

export const Grid = styled.section `
 @media(min-width: 1024px){
   padding: 20rem 0 0 0 ;
 }
  @media(max-width:1024px ){
    padding: 10rem 0 0 0 ;
  }
`

export const Text = styled.div `
  font-weight: bold;
  font-size: 4.5vw;
  color:#808080;
  padding-left: 2em;
  text-align: left;
  margin: .75vw 0 1vw;
  line-height: 1.2;font-family: 'Playfair Display', serif;
  letter-spacing: 7px;
`

export const AboutText = styled.div`
  font-weight: bold;
  font-size: 4vw;
  color: #1d1d1d;
  @media(max-width: 1024px){
    margin-left: 2em;
    margin-right: 2em;
  }
  text-align: left;
`

export const Contact = styled.div `
  padding: 4em 0 15em 0;
  h1{
    color: grey;
    font-size: 15px;
    padding:  0 0 10px 20px ;
  }
  span{
    padding: 0 7px 0 20px;
    font-size: 1em;
    font-weight: bold;
  }
`


export const SocialContact = styled.div `
  padding: 0 0 5em 0 ;
  
  div{
    width: 100%;
  }
  hr{
    margin: 0  0 30px 0 ;
    border: 1px solid black;
    width:100%;
    display: block;
  }
`

export const X = styled.div `
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`

export const BackToTop = styled(X) `
  button{
    font-size: 1vw;
    text-transform: uppercase;
    color: black;
  }
`
