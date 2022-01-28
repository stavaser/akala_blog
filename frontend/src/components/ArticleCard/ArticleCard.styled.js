import styled from 'styled-components';
import notebook from '../../assets/images/notebook.jpg';

export const StyledArticleCard = styled.div`
  background-color: ${({ theme }) => theme.white};
  /* box-shadow: ${({ theme }) => theme.shadow}; */
  border-bottom: ${({ theme }) => theme.border};

  margin-bottom: 20px;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  /* padding-top: ${({ hasImage }) => (hasImage ? 0 : '26px')}; */
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
    padding: 20px 40px;
    /* background-image: url(${notebook});
    background-size: cover; */
  }
  .article-body h4 {
    color: ${({ theme }) => theme.green};
  }

  .article-body h1 {
    font-size: 30px;
    line-height: 40px;
    font-family: Vanilla;
  }
  .article-body h3 {
    color: ${({ theme }) => theme.green};
  }
  h3 span {
    color: ${({ theme }) => theme.yellow};
  }
  .article-info h4 {
    display: block;
  }
  .article-info {
    display: flex;
    justify-content: space-between;
  }

  .markup h1,
  h2,
  h3,
  br {
    display: none;
  }

  .markup p {
    margin: 0;
  }
`;

export const StyledImagePlaceholder = styled.div`
  background-color: orange;
  width: 100%;
  height: 40vh;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  position: relative;

  h1 {
    color: #fff;
    font-size: 80px;
    line-height: 80px;
    opacity: 0.5;
    position: absolute;
    bottom: -30px;
  }
`;
