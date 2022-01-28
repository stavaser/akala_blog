import styled from 'styled-components';

export const StyledPodcastPLayer = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  margin: 0 0 20px 0;
  position: relative;
  display: flex;

  img {
    width: 200px;
  }
  .side {
    position: relative;
    display: flex;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow: hidden;
  }
  .content {
    position: absolute;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .title {
    position: absolute;
    margin: auto;
    font-size: 30px;
    inset: auto 0;
    text-align: center;
    transition: 500ms ease-in-out;
    top: 0;
  }

  .text {
    position: absolute;
    top: 25%;
    padding: 0 20px;
    transition: 500ms ease-in;
    overflow: scroll;
  }

  .text p {
    font-size: 16px;
  }
  .music-container {
    transition: 500ms ease-out;
    opacity: 0;
  }
  &:hover .title {
    top: 120px;
  }

  &:hover .text {
    top: 100%;
    transition: 500ms ease-out;
  }
  &:hover .music-container {
    opacity: 1;
  }
`;
export const PodcastContainer = styled.div`
  margin-top: 20px;
`;
