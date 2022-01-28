import { DownCircleOutlined } from '@ant-design/icons';
import React from 'react';
import MusicControls from '../MusicControls/MusicControls';
import { StyledPodcastPLayer } from './PodcastPlayer.styled';

const PodcastPlayer = ({ data }) => {
  return (
    <StyledPodcastPLayer>
      <div className="image">
        <img src={data.image} />
      </div>
      <div className="side">
        <a class="content">
          <h3 class="title">{data.title}</h3>
          <MusicControls url={data.favorite_link} provider={data.provider} />
          <div class="text">
            <p>{data.description}</p>
          </div>
        </a>
      </div>
    </StyledPodcastPLayer>
  );
};

export default PodcastPlayer;
