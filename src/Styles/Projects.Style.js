import styled from "styled-components";

export const Grid = styled.section `
    
 @media screen and (min-width: 651px){
  padding: 15vh 4vw 0 4vw;
 }
 
 @media screen and(min-width: 651px){
  article{
   padding-top: 5vh;
   padding-bottom: 15vh;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content:flex-start;
  }
}
 
 header{
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
 } 
 @media(max-width: 651px){
  header{
   font-size: 12vw;
   padding-left:20px ;
   float: left;
  }
  span{
   display: none;
  }
 }
 
@media(min-width : 651px){
 header{
  overflow: hidden;
  line-height: 1.6em;
  font-size: 6vw;
  height: 20vh;
  position: absolute;
 }
 span{
  float: left;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 5em;
  color: #1d1d1d;
 }
}
`
export const ImageDiv = styled.div `
    @media screen and (max-width: 651px){
     img{
      padding: 0 30px 0 30px;
      width: 100%;
     }
    }
 @media screen and (min-width: 651px){
  width: 50vw;
  height: 90vh;
  float: right;
  img{
   object-fit: cover;
   background-color: grey;
    width: 100%;
    height: 100%;
  }
}
`
export const TextControl = styled.div `
 justify-content: space-between;
 display: flex;
 width: 100%;
 height: 100%;
 overflow: hidden;
 h1{
  color: #202020;
  font-weight: bold;
  text-transform: uppercase;
 }
 @media screen and (min-width: 651px){
  height: 30vh;
  div{
   text-align: left;
   width: 50vw;
   height: 100%;
  }
  h1{
   font-size: 5.5vw;
  }
}
 @media screen and (max-width: 651px){
  h1{
   margin-left: 30px;
   width: 80vw;
   text-align: left;
   font-size: 10vw;
   line-height: 0.9;
  }
 }
`

export const Hr = styled.hr `
 margin-bottom: 50px;
 height: 1px;
 background-color: #202020;
 width:100%;
 display: block;
 `

export const Div = styled.div `
  img{
    width:${({ animate }) => ( animate === true ? "100%" : "0")};
    transition: width 0.9s ease-in-out;
  }
  hr{
    overflow: hidden;
    width:${({ animate }) => ( animate === true ? "100%" : "0")};
    transition: width 1s ease-in-out;
  }
  header{
    height: ${({ animate }) => ( animate  ? "-20vh" : "0")}  ;
    transition: height 3.25s cubic-bezier(.075,1,.165,1);
  }
  h1{
    transform: translateY(${({ animate }) => ( animate  ? "0" : "100%")})  ;
    transition: transform 4.25s cubic-bezier(.075,1,.165,1);
  }
`