import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledArticle = styled.div`
  .container {
    display: flex;
  }
  h1 {
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 40px;
  }

  /*  Gives a little bit of buffer when header is navigated to */
  h2,
  h3 {
    padding-top: 16px;
    margin-top: -16px;
  }

  img {
    width: 100%;
  }

  .content {
    padding: 40px 80px;
  }
`;

export const StyledNav = styled.div`
  nav {
    align-self: flex-start;
    /* max-height: calc(100vh - 70px); */
    overflow: auto;
  }

  @media screen and (max-width: 900px) {
    nav {
      display: none;
    }
  }

  a {
    font-size: 16px;
    color: ${({ theme }) => theme.green};
    text-decoration: none;
  }

  li.active > a {
    font-weight: 900;
  }

  li > a:hover {
    text-decoration: underline;
  }
`;
