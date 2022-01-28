import styled from 'styled-components';
const items = 10;
const duration = 2;
function template(i, items, duration) {
  return `
        &:nth-child(${i + 1}) {
          animation-delay: ${`${(duration / items) * i}s`};
         }
      `;
}
function getAnimations(items, duration) {
  let str = '';
  for (let i = 0; i < items; i += 1) {
    str += template(i, items, duration);
  }
  return str;
}

export const StyledBanner = styled.div`
  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  background-color: ${({ theme }) => theme.white};
  padding: 20px 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  margin-top: 20px;
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
  h1 span {
    display: inline-block;
    transform: translateY(0);
  }
  h1:hover span {
    animation: 0.4s bounce ease-in-out;
    ${getAnimations(18, duration)}
  }

  h3 {
    color: ${({ theme }) => theme.green};
    font-weight: 900;
    text-align: center;
    margin-top: 20px;
  }
`;
