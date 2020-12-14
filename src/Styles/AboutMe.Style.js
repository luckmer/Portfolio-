import styled from "styled-components";


export const Grid = styled.section `
  padding: 20rem 0 0 0 ;
`
export const Text = styled.div `
  font-weight: bold;
  font-size: 4.5vw;
  color:#808080;
  text-align: left;
  margin: .75rem 0 1em;
  line-height: 1.2;font-family: 'Playfair Display', serif;
  letter-spacing: 7px;
`
export const AboutText = styled.div`
  font-weight: bold;
  font-size: 4vw;
  color: #1d1d1d;
  margin-right: 5em;
  text-align: left;
`

export const Contact = styled.div `
  padding: 4em 0 15em 0;
  h1{
    font-size: 2em;
    padding:  0 0 20px 0 ;
  }
  span{
    padding: 0 20px 0 20px;
    font-size: 2em;
    font-weight: bold;
  }
`
export const Back = styled.div `
  padding: 0 0 4em 0;
  text-align: center;
  font-size: 5vw;
  line-height: 5vw;
  a{
    color: black;
    text-decoration: none;
  }
`
export const SocialContact = styled.div `
  padding: 0 0 5em 0 ;
  div{
    width: 100%;
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
    width: 100px;
    background-color: #1d1d1d;
    color: white;
    border-radius:100px;
    height: 100px;
  }
  p{
    margin-bottom: 2vw;
    font-family: 'Neue World',sans-serif;
    font-size: 1vw;
    line-height: 0.25vw;
  }
`
