import styled from "styled-components";



export const Grid = styled.article `
  padding-top:8vh;
width: 100%;
  font-family: 'Anton', sans-serif;
  -webkit-touch-callout: none; 
  -webkit-user-select: none;
  -moz-user-select: none; 
  -ms-user-select: none;
  user-select: none;
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
//

export const Main =styled.div `
display: flex;
width: 100%;
a{
text-decoration: none;
}

font-family: 'Roboto', sans-serif;
width: 100vw;
padding: 8vw 3.5vw 10vw;
`
export const Card = styled.div `
position: relative;
display: block;
max-width: 45.8vw;
margin-right:auto;
`
export const Padding = styled.div `
width: 100%;
padding: 1vw;
`
export const ImgPanel = styled.div ` 
img{
    object-fit: cover;
    margin: auto;
    width: 100%;
    height: 100vh;
}
`
export const DivTest = styled.div`
    width: 100%;
`
export const PaddingOne = styled.div`
max-width: 30%;
margin:auto;
height: 50vh;
img{
    object-fit: cover;
    margin: auto;
    width: 100%;
    height: 100%;
}
`
export const PaddingTwo = styled.div`
width: 100%;
height: 30vh;
margin-top:15%;
img{
    object-fit: cover;
    margin: auto;
    width: 100%;
    height: 100%;
    
}
`
export const Header = styled.header`
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    padding: 8vw 3.5vw 10vw;
`
export const Context = styled.div`
width:100%;
height:100%;
    div{
        width:100%;
    }
`
export const ImgPanelS = styled.div ` 
div{
float:right;

    display: flex;
    width: 20vw;
    height: 50vw;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width:30vw;
    margin-right:40px;
    height: 50vw;
    background-image: url(${({ Img }) => Img });
}
`
export const CardR = styled.div `
position: relative;
display: block;
width: 45.8vw;
float:right;
`
