import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.green};
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  color: ${({ theme }) => theme.white};
  height: 100vh;
  text-align: left;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  max-width: 22%;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  .sections a {
    position: relative;
    display: block;
    font-size: 20px;
    text-transform: uppercase;
    padding: 16px 0;
    font-weight: bold;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    transition: 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .stroke {
    fill: none;
    stroke: orange;
    stroke-width: 1.8;
    stroke-miterlimit: 10;
    stroke-dasharray: 338;
    stroke-dashoffset: 338;
    stroke-linecap: round;
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% + 40px);
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
    z-index: -1;
  }

  a.--active .stroke {
    stroke: #ff4c4c;
  }

  a.--active .stroke,
  a:hover .stroke {
    stroke-dashoffset: 0;
    opacity: 1;
    transition: opacity 0s,
      stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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
  }
  .social-media .icons span:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
  .social-media a {
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
  }
`;
