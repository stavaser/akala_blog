import styled from 'styled-components';

export const StyledArticleCard = styled.div`
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom: 20px;
  border-radius: 1em;
  display: flex;
  flex-direction: column;

  .article-image-container {
    height: 50%;
  }
  .article-image {
    object-fit: cover;
    width: 100%;
    height: 40vh;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }

  .article-body {
    flex-grow: 2;
    padding: 1em;
  }
  .article-body h4 {
    color: ${({ theme }) => theme.green};
  }

  .article-body h1 {
    font-size: 3em;
  }
`;
