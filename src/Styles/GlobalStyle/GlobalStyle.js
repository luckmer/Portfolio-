import { createGlobalStyle  } from "styled-components";


const Index = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
    //cursor: none;
    img {
      display: block;
      width: auto;
      height: auto;
    }
  }
  body{
    background-color: #f6f4f1;
    min-width:100%;
    min-height: 100vh;
    
  }


  .cursor {
    color: black;
    mix-blend-mode: exclusion;
    z-index: 99999;
    width: 40px;
    height:40px;
    border: 2px solid white;
    border-radius: 100px;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
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



html.has-scroll-smooth {
overflow: hidden; }

html.has-scroll-dragging {
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
  user-select: none; 
  overflow: hidden;
}



[data-scroll-direction="horizontal"] [data-scroll-container] {
white-space: nowrap;
height: 100vh;
display: inline-block;
  white-space: nowrap; 
}

`;

export default  Index;