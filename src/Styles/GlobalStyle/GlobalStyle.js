import {createGlobalStyle} from "styled-components"

const Index = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    //cursor: none;
  }
  
  .cursor {
    width: 40px;
    height: 40px;
    border: 2px solid #fefefe;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 120ms ease;
    z-index: 9999;
    mix-blend-mode: difference;
  }
  .center{
    width: 10px;
    height: 10px;
    background: beige;
    border-radius: 100px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
  }
  .clicked{
    transform: translate(-50%, -50%) scale(0.9);
    background-color: #fefefe;
  }
    html,body{
      font-family: 'Maelstrom Sans',sans-serif;
      color: black;
      width:100vw;
      height: 100vh;
      background-color: #f6f4f1;
  }
  ::-moz-selection { 
    color: #f6f4f1;
    background: #1d1d1d;
  }

  ::selection {
    color: #f6f4f1;
    background: #1d1d1d;
  }
  ::-webkit-scrollbar{width:2px;height:2px;}
  ::-webkit-scrollbar-button{width:2px;height:2px;}

`;

export default  Index;