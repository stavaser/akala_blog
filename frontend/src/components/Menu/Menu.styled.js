import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.green};
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  max-width: 22%;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    position: relative;
    display: inline-block;
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

  svg {
    fill: none;
    &:first-child {
      stroke: red;
    }
    &:nth-child(2n) {
      stroke: orange;
    }
    &:nth-child(3n) {
      stroke: yellow;
    }

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

  a.--active svg {
    stroke: #ff4c4c;
  }

  a.--active svg,
  a:hover svg {
    stroke-dashoffset: 0;
    opacity: 1;
    transition: opacity 0s,
      stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
