import styled from 'styled-components';

export const StyledMusicControls = styled.div`
  .audio-control {
    width: 85%;
    height: 6px;
    border-radius: 2px;
    background: #e5f3fe;
    box-shadow: 5px 5px 7px 0px #c7dcec, -7px -7px 8px #f2ffff;
    margin: 4px auto;
    cursor: pointer;
    margin-top: 20px;
  }
  .audio-control .audio-progress {
    width: 20%;
    height: 100%;
    border-radius: 2px;
    position: relative;
    background-color: #5c87fe;
  }
  .audio-control .audio-progress:after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #5c87fe;
    background-color: #fff;
    position: absolute;
    top: -2px;
    right: -5px;
  }

  .music-controls {
    display: flex;
    width: 95%;
    justify-content: space-evenly;
    align-items: center;
  }
  .music-controls .repeat {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
  .music-controls .repeat svg {
    transform: rotate(45deg);
  }
  .music-controls .repeat path {
    fill: #5c87fe;
  }
  .music-controls .previous,
  .music-controls .next {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    box-shadow: 5px 5px 10px #cee3f2, -5px -5px 10px #faffff;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .music-controls .previous:hover,
  .music-controls .next:hover {
    box-shadow: inset 5px 5px 10px #cee3f2, inset -5px -5px 10px #faffff;
  }
  .music-controls .previous svg,
  .music-controls .next svg {
    width: 1rem;
    height: 1rem;
  }
  .music-controls .previous svg path,
  .music-controls .next svg path {
    fill: #5c87fe;
  }
  .music-controls .previous svg rect,
  .music-controls .next svg rect {
    fill: #5c87fe;
  }
  .music-controls .play {
    cursor: pointer;
    background-color: #5c87fe;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    box-shadow: 6px 5px 9px 0px #a5c6ec;
  }
  .music-controls .play svg {
    width: 2rem;
    height: 2rem;
  }
  .music-controls .play svg path {
    fill: #fff;
  }
  .music-controls .play:hover {
    box-shadow: none;
  }
  .music-controls .favorite {
    cursor: pointer;
  }
  .music-controls .favorite:hover svg path {
    fill: #e74c3c;
  }
`;
