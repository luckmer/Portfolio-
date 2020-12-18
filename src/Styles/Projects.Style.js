import styled from "styled-components";

export const Grid = styled.section `
    padding-top: 15vh;

 
 
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
  line-height: 1.6em;
  font-size: 6vw;
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
  img{
   background-color: grey;
   float: right;
   width: 50vw;
  }
}
`
export const TextControl = styled.div `
 justify-content: space-between;
 display: flex;
 width: 100%;
 h1{
  font-weight: bold;
  text-transform: uppercase;
 }
 @media screen and (min-width: 651px){
  h1{
  
   text-align: right;
   font-size: 5.5vw;
   width: 50vw;
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
export const Text = styled.div `
`
export const Hr = styled.hr `
   border: 1px solid black;
   width:100%;
   display: block;
 `


//  justify-content: left;
//  height:2em;
//  font-size: 7vw;
//  hr{
//    display: block;
//    width: 100%;
//    border: 1px solid black;
//  }
//  h1,h2{
//    font-size: 7vw;
//  }
//  a{
//    text-decoration:none;
//  }
//  h1{
//    color: black;
//    transform: translateY(0%);
//    transition: transform 1.25s cubic-bezier(.075,.82,.165,1);
//  }
//  h2{
//    color: #f05454;
//    transform: translateY(60%);
//    overflow: hidden;
//    transition: transform 1.25s cubic-bezier(.075,.82,.165,1);
//  }
//  &&:hover {
//    h2{
//      z-index: 0;
//      opacity: 1;
//      transform: translateY(-100%) translateX(0);
//    }
//    h1{
//      transform: translateY(-110%) rotate3d(180, 0, 0, 5deg) ;
//      transition: transform 1.25s cubic-bezier(.075,.82,.165,1);
//    }
//  }
//}