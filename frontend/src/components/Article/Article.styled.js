import styled from 'styled-components';

export const StyledArticle = styled.div`
  .container {
    display: flex;
  }

  /*  Gives a little bit of buffer when header is navigated to */
  h2,
  h3 {
    padding-top: 16px;
    margin-top: -16px;
  }
`;

export const StyledNav = styled.div`
  nav {
    width: 220px;
    min-width: 220px;
    padding: 16px;
    margin: 8px;
    align-self: flex-start;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 48px;
    max-height: calc(100vh - 70px);
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
