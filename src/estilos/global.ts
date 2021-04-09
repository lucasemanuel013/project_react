import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }


  #root {
    min-height: 100vh;
    width: 100%;
    background: #222831;
  }
`;
