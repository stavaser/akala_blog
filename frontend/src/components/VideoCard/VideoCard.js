import React from 'react';
import ReactPlayer from 'react-player';
import { Player, BigPlayButton } from 'video-react';
import { StyledVideoCard } from './VideoCard.styled';

const VideoCard = ({ data }) => {
  return (
    <StyledVideoCard>
      <h1>{data.title}</h1>
      {data.is_youtube ? (
        <ReactPlayer style={{ margin: '0 auto' }} url={data.video_link} />
      ) : (
        <Player src={data.video_link}>
          <BigPlayButton position="center" />
        </Player>
      )}
    </StyledVideoCard>
  );
};

export default VideoCard;
