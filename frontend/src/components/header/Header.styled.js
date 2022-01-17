import styled from 'styled-components';

export const StyledHeader = styled.div`
  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  .container {
    position: relative;
    padding: 20px;
    display: flex;
    background-color: ${({ theme }) => theme.white};
    /* box-shadow: ${({ theme }) => theme.shadow}; */
    border-bottom: ${({ theme }) => theme.border};
    justify-content: space-between;
  }
  .logo {
    /* display: inline-block;
    font-family: OrangeJuice;
    line-height: 30px; */
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
    color: ${({ theme }) => theme.green};
  }
  .logo span {
    display: inline-block;
    transform: translateY(0);
  }
  .logo:hover span {
    animation: 0.4s bounce ease-in-out;
  }
  .logo:hover span:nth-child(2) {
    animation-delay: 0.1s;
  }
  .logo:hover span:nth-child(3) {
    animation-delay: 0.2s;
  }
  .logo:hover span:nth-child(4) {
    animation-delay: 0.3s;
  }
  .logo:hover span:nth-child(5) {
    animation-delay: 0.4s;
  }
  .logo:hover span:nth-child(6) {
    animation-delay: 0.5s;
  }
  .logo:hover span:nth-child(7) {
    animation-delay: 0.6s;
  }
`;
