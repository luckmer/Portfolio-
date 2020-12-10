import {createGlobalStyle} from "styled-components"

const Index = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
    
  }
  html,body{
    font-family: 'Exo', sans-serif;
    background-color: #f6f4f1;
    color: black;
    min-width:100%;
    min-height: 100vh;
  }
`;

export default  Index;