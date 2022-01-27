import styled from 'styled-components';

export const StyledSectios = styled.div`
  .category {
    font-size: 20px;
    position: relative;
    display: block;
    margin-bottom: 20px;
    font-weight: 500;
  }
  h1 span {
    font-size: 40px;
    margin-right: 10px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  li {
    margin-bottom: 10px;
  }

  .ant-collapse-header {
    padding: 0 !important;
    margin: 0 !important;
  }

  .ant-collapse-header div {
    display: none;
  }

  .ant-collapse-content-box {
    padding: 0 !important;
    margin: 0 !important;
    padding-bottom: 20px !important;
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
    width: calc(100% + 35px);
    opacity: 0;
    transform: translate(-48%, -50%);
    transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
    z-index: -1;
  }

  .category.--active .stroke {
    stroke: #ff4c4c;
  }

  .category.--active .stroke,
  .category:hover .stroke {
    stroke-dashoffset: 0;
    opacity: 1;
    transition: opacity 0s,
      stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .category.active .stroke {
    stroke-dashoffset: 0;
    opacity: 1;
    transition: opacity 0s,
      stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .section li {
    transition-duration: 300ms;
  }
  .section:hover li {
    margin-left: 10px;
  }
`;
