import styled from 'styled-components';

export const StyledVideoCard = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  margin-top: 20px;
  position: relative;

  h1 {
    font-size: 30px;
    line-height: 40px;
    font-family: Vanilla;
    padding: 20px 40px;
    color: ${({ theme }) => theme.green};
  }
  div {
    width: 100% !important;
  }
`;

export const StyledVideoSubmitForm = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
`;
