import styled from 'styled-components';

export const StyledFooter = styled.div`
  height: 50vh;
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  padding: 50px 100px;

  h3 {
    color: ${({ theme }) => theme.white};
  }
`;
