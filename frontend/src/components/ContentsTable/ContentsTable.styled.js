import styled from 'styled-components';

export const StyledContentsTable = styled.div`
  border-radius: 1em;
  padding-bottom: 0;
  margin-bottom: 40px;
  .toc-title {
    font-weight: 500;
    font-size: 20px;
  }
  .sections {
    border-left: 2px solid #f0f0f0;
    padding-left: 20px;
    margin-top: 10px;
  }
  p {
    cursor: pointer;
  }
  p:hover {
    text-decoration: underline;
  }
`;
