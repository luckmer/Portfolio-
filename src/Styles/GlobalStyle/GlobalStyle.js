import { createGlobalStyle } from "styled-components";


const Index = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
    
  }
  body{
    font-family: 'Anton', sans-serif;
    background-color: #eaeaea;
    min-width:100%;
    min-height: 100vh;
  }
  .cursor {
    mix-blend-mode: exclusion;
    z-index: 99999;
    width: 60px;
    height:60px;
    border: 2px solid white;
    border-radius: 100px;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 120ms ease;
  }
  .dot{
    mix-blend-mode: difference;
    z-index: 9999;
    width: 10px;
    height: 10px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100px;
    background-color: rgb(220, 90, 90);
    transform: translate(-50%, -50%);
    transition:all 0.2s ease-in-out;
  }
  .clicked{
    transform: translate(-50%, -50%) scale(0.9);
    background-color: #fefefe;
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