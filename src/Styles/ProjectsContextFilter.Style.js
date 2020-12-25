import styled from "styled-components";

const LessCode = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`
const ImgProportions = styled.div `
  margin: auto;
  width: 70em;
  height: 40em;
`
export const Grid = styled.article `
  width: 100%;
  -webkit-touch-callout: none; 
  -webkit-user-select: none;
  -moz-user-select: none; 
  -ms-user-select: none;
  user-select: none;
`
export const Img = styled.img `
  width:100%;
  opacity:${({ animate }) => ( animate ? "0" : "1")};
  transition: opacity 0.5s ease;
  position: fixed;
  height: 100vh;
  object-fit:cover;
`
export const HeaderContext = styled(LessCode) `
  display: flex;
  z-index: 9;
  mix-blend-mode: difference;
  position: fixed;
  h3{
    
    margin: 0 40px 0 0 ;
    font-weight: bold;
      font-size: 5em;
      color: white;
    }
`
export const Panel = styled.div `
  width: 100%;
  height: 100%;
  opacity:${({ animate }) => ( animate ? "0" :"1" )};
  transition:opacity 0.3s ease-in-out;
`
export const ScrollDown = styled(LessCode) `
  top: 90%;
  position: fixed;
  z-index: 9;
 
  width: 5em;
  height: 5em;
  border-radius: 100px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Div = styled.div `
  width: 1.5em;
  height:3em;
  border-radius: 100px;
  border: 2px solid white;
`
export const Scroll = styled(LessCode) `
  width: 0.1em;
  height: 0.5em;
  background-color: #f6f4f1;
`
export const Context = styled.div `
  padding-bottom: 50vh;
  padding-top: 40vh;
`
export const Img2 = styled(ImgProportions) `
  width: 70em;
  height: 40em;
  img{
    object-fit: cover;
    display: block;
    width: 100%;
    height: ${ ({ animate }) => (animate === true ? "100%" : "0%") };
    transition: height 4.25s cubic-bezier(.075, 1, .165, 1);
  }
`

export const ImgX = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div{
    margin:1em;
    width: 34em;
    height: 50em;
  }
  img{
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }
`
export const Header = styled.div `
  display: flex;
  padding: 100px 0 120px 0;
  margin: 0 30vw 0 30vw;
  word-break: break-all;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p{
    color: #999;
  }
  span{
    padding-bottom: 50px;
    font-size: 24px;
    line-height: 36px;
    margin-left: -1px;
  }
`
export const Slider = styled.div `
  margin: 5em 0 0 0;
  width: 100%;
  height: 50em;
`
const LegendLess = styled.legend `
  height: 100%;
  
  button{
    z-index: 99;
    cursor: pointer;
    font-weight: bold;
    color: black;
    width:4em;
  }
  display: flex;
`
export const Prev = styled(LegendLess)`
  float: left;
`
export const Next= styled(LegendLess) `
  float: right;
`
export const DisplayContext = styled.div`
  width: 60em;
  height: 30em;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%,30%);
  img{
    display: flex;
    justify-content: center;
    width: 20%;
    height: 20%;
    object-fit: cover;
  }
`
export const Address = styled.address `
  width: 100%;
  display: flex;
  justify-content: center;
  div{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  button{
    background-color: #f6f4f1;
    width: 3em;
    height: 3em;
    border: 1px solid black;
    border-radius: 100px;
  }
  p{
    margin: 3em;
  }
`
const Less= styled.div `
  width: 100%;
  height: 100%;
`
export const Img3 = styled(Less)`
    img{
      width: ${({ animate }) => ( animate === true ? "100%" : "0%")}  ;
      transition: width 3.25s cubic-bezier(.075,1,.165,1);  
    }
`
export const Img4 = styled(Less) `
  img {
    height: ${ ({ animate }) => (animate === true ? "100%" : "0%") };
    transition: height 3.25s cubic-bezier(.075, 1, .165, 1);
  }

\`
`