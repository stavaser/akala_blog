import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.white};
    /* color: ${({ theme }) => theme.green}; */
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
  }
`;
