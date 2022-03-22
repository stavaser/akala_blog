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
    background-color: ${({ theme }) => theme.green};
    border-bottom: ${({ theme }) => theme.border};
    justify-content: space-between;
  }
  .logo {
    font-family: OrangeJuice;
    line-height: 30px;
    font-size: 40px;
    font-weight: 900;
    cursor: pointer;
    color: ${({ theme }) => theme.green};
  }
  .logo img {
    width: 150px;
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

  .social-media .icons {
    font-size: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .social-media .icons span {
    transition-duration: 300ms;
    color: ${({ theme }) => theme.white};
    margin-left: 20px;
  }
  .social-media .icons span:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
  /* .social-media a {
    color: ${({ theme }) => theme.white};
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    letter-spacing: 2px;
    margin-top: 10px;
  }
  .social-media a:hover {
    color: ${({ theme }) => theme.primaryHover};
  } */
`;
