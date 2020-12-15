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
`
export const Img = styled.img `
  width:100%;
  max-width:100%;
`
export const HeaderContext = styled(LessCode) `
  display: flex;
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
`
export const ScrollDown = styled(LessCode) `
  top: 90%;
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
  padding-top: 20vh;
`
export const Img2 = styled(ImgProportions) `
  background-color: black;
  img{
    object-fit: cover;
    display: block;
    width: 70em;
    height: 40em;
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
    background-color: black;
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
  background-color: #222222;
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
    color: white;
    background-color:  #222222;
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