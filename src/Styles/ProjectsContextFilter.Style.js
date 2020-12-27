import styled from "styled-components";

const LessCode = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`
const ImgProportions = styled.div `
width: 100vw;
  height: 100vh;
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
  height: 100%;
  margin: auto;
  opacity:${({ animate }) => ( animate ? "0" : "1")};
  visibility :${({ animate }) => ( animate ? "hidden" : "visible")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  position: fixed;
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
  z-index: 2;
  border-radius: 100px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Div = styled.div `
  border-radius: 100px;
  border: 2px solid white;
`
export const Scroll = styled(LessCode) `
  background-color: #f6f4f1;
`
export const Context = styled.div `
  padding-top: 70vh;
`
export const Img2 = styled(ImgProportions) `
  margin: auto;
  max-width: 90vw;
  img{
    object-fit: scale-down;
    display: block;
    width: 100%;
  }
  @media screen and (min-width: 768px){
    
    img{
      height: ${ ({ animate }) => (animate === true ? "100%" : "0%") };
      transition: height 4.25s cubic-bezier(.075, 1, .165, 1);
    }
  }
`
export const NextProjectStyle = styled.div `
  width: 60%;
  height: 60%;
  cursor: pointer;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: table;
  position: relative;
  opacity:${({ animate }) => ( animate <= -4000 ? "1" : "0")};
  visibility :${({ animate }) => ( animate  <= -4000 ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  img {
    width: 100%;
    object-fit: scale-down;
    height: 80vh;
  }
  h6{
    margin: 20px;
    color: grey;
    font-weight: bold;
  }

`
export const ImgX = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px){
    div{
      width: 29em;
      height: auto;
    }
    img{
      object-fit: scale-down;
      display: block;
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
    overflow: hidden;
    width: 90vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    div{
      padding-bottom: 20px;

    }
    img{
      object-fit: cover;
      background-color: grey;
      width: auto;
      height:auto; 
    }
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
  z-index:999;
  width: 100%;
  height: 50em;
`

export const Prev = styled.legend`
  margin-right:5px;
  width: 90px;
  height: 110px;
  position:relative;
  float:left;
  top: 50%;
  margin-top: 25px;
  margin-left: 35px;
  div{
    margin: 20px;
      width: 10px;
      height: 10px;
      border-radius:100px ;
      background-color: white;
    }
`
export const Next= styled.legend `
  margin-right:5px;
  position:relative;
  float:right;
  top: 50%;
  div{
    margin: 20px;
    width: 10px;
    height: 10px;
    border-radius:100px ;
    background-color: white;
  }
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
    z-index: 2;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 40px;
  } 
  p{
    margin: 0 3em 0 3em;
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