import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
`;

export const Sider = styled.div`
  height: 100%;
  overflow: scroll;
  min-width: 20%;
  max-width: 20%;
  padding: 20px;
  &:first-child {
    /* min-width: ${({ article }) => (article ? '15%' : '20%')};
    max-width: ${({ article }) => (article ? '15%' : '20%')}; */
    background-color: ${({ theme }) => theme.white};
  }
  height: 100vh;
  position: sticky;
  top: 0;

  /* .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0 !important;
  } */
`;
export const Content = styled.div`
  flex-grow: 1;
  margin: 0 40px;
  /* margin-top: 20px; */
  background-color: ${({ article }) => (article ? '#fff' : '20%')};

  /* background-color: red; */
`;
