import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    /* color: ${({ theme }) => theme.green}; */
    text-rendering: optimizeLegibility;
    font-family: MainFont;
    font-weight: 900;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  
  a {
    color: ${({ theme }) => theme.green};
    text-decoration: none;
    transition: 0.3s;
  }

    
  a:hover {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`;
