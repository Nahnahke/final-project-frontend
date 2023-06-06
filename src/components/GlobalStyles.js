import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @media only screen and (max-width: 768px) { 
    body {
        overflow-x: hidden;
        margin: 0;
      padding: 0;
      max-width: 100%;
      background: red;
    }
  }
  
  @media only screen and (min-width: 769px) and (max-width: 1024px) { 
    body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        max-width: 100%;
        background: green;
    }
  }

  @media only screen and (min-width: 1025px) {
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }  
  }
`;

export default GlobalStyles;
