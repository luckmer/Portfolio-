import styled from "styled-components";


 export const Header = styled.header `
  opacity: ${ ({ animate }) => (animate  ? "0" : "100%") };
  display: ${ ({ animate }) => (animate  ? "none" : "block") };
  transition: opacity 1.25s cubic-bezier(.075, 1, .165, 1);
  width: 100%;
  padding: 7em 12em  0 12em ;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 0;
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  h6{
    color: grey;
  }
  h6{
    font-size: 11px;
  }
`
export const Section = styled.section`
 transition: all linear 0.2s;
 @media screen and (min-width: 1752px){
  padding: 3em 11em 0 11em;
 }
 @media screen and (max-width: 1024px){
  padding: 3em 1vw 0 1vw;
 }
`
export const Slider = styled.div`
  z-index: 154;
  h6{
    color:grey;
  }
  hr{
    margin: 1px;
    width: 3px;
    height: 3px;
    background-color: #333;
    border-radius: 100%;

  }
  button{
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: #eaeaea;
    border: 1px solid black;
    cursor: pointer;
    z-index: 3;
    color: #333;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4em 0 7em 0;
`
export const FilterSection = styled.section `
  z-index: 15;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: black;
  opacity: 90%;
`
export const Div = styled.div `
  z-index: 20;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    height: 45px;
    line-height: 45px;
    margin: 20px 45px;
    opacity: 1;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
  h6{
    color: grey;
  }
  address{
    display: flex;
  }
  h5{
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 28px;
    color: #999;
  }
`


export const Grid = styled.article`
 display: flex;
 padding-top: 29em;
 flex-flow: row wrap;
 justify-content: space-around;
 align-items: center;
 height: 100%;
 margin: auto;

`

export const Card = styled.div`
 display: flex;

 justify-content: center;
 align-items: flex-end;
 margin-bottom: 50px;
 h1 {
  mix-blend-mode: exclusion;
  z-index: 2;
  position: absolute;
  font-weight: bold;
  font-size: 24px;
  color: white;
  padding: 0 0 100px  0;
 }
 
 @media screen and (min-width: 1460px){
  
  &:nth-child(3n - 1){
   margin-top: -10em;
  }
  
 }

`

export const CardImage = styled.div `
 border-radius: 0.25rem;
 box-shadow: 0 1px 1px rgba(0,0,0,0.11),
 0 2px 2px rgba(0,0,0,0.11),
 0 4px 4px rgba(0,0,0,0.11),
 0 8px 8px rgba(0,0,0,0.11),
 0 16px 16px rgba(0,0,0,0.11),
 0 32px 32px rgba(0,0,0,0.11);
 z-index: 20;
 overflow: hidden;
 
 img{
  background-color: black;
  height: auto;
  width: 100%;
  object-fit: cover;
 }
 
 @media screen and (max-width: 540px){
  width:90vw;
  height: auto;
  margin: auto;
 }
 @media screen and (min-width: 540px){
  width: calc(34vw - 3.55vw);
  height:auto;
  margin: 50px;
 }
 @media screen and (min-width: 1024px){
  width: calc((100vw / 2 - 190px) * .475);
  height: calc((100vw / 1.8) * .535);
  min-width: 367px;
  min-height: 560.4px;
  max-width: 100%;
  margin: 50px;
  }
 
`