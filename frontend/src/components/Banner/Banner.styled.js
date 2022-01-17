import styled from 'styled-components';

export const StyledBanner = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 20px 40px;
  margin-bottom: 20px;
  margin-top: -17px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.green};
    text-transform: uppercase;
    font-family: OrangeJuice;
    font-family: AlphaKids;
    font-size: 100px;
    line-height: 100px;
    cursor: pointer;
  }

  h3 {
    color: ${({ theme }) => theme.green};
    font-weight: 900;
    text-align: center;
    margin-top: 20px;
  }
`;
