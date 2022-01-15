import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  /* padding-top: 20px; */
`;

export const Sider = styled.div`
  min-width: 20%;
  max-width: 20%;
  padding: 20px;
  &:first-child {
    background-color: ${({ theme }) => theme.white};
  }
  height: 100vh;
  position: sticky;
  top: 0;
`;
export const Content = styled.div`
  flex-grow: 1;
  margin: 0 40px;
  margin-top: 20px;
  /* background-color: red; */
`;
