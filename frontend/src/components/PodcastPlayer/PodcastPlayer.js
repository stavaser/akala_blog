import { DownCircleOutlined } from '@ant-design/icons';
import React from 'react';
import MusicControls from '../MusicControls/MusicControls';
import { StyledPodcastPLayer } from './PodcastPlayer.styled';

const PodcastPlayer = () => {
  return (
    <StyledPodcastPLayer>
      <div className="image">
        <img src="https://goakala.files.wordpress.com/2020/12/podcast.jpg" />
      </div>

      <div className="side">
        <a class="content">
          <h3 class="title">A Great Title</h3>
          <MusicControls />
          <div class="text">
            <p>
              We may know history as a concoction of memorized dates, names, and events; however,
              listen to this podcast if you’re interested in digging a little deeper…From learning
              about the first ever scientist to the background of some of our favorite holiday
              treats, this podcast is outstanding. news in a completely unprecedented way! We may
              know history as a concoction of memorized dates, names, and events; however, listen to
              this podcast if you’re interested in digging a little deeper…From learning about the
              first ever scientist to the background of some of our favorite holiday treats, this
              podcast is outstanding. news in a completely unprecedented way! We may know history as
              a concoction of memorized dates, names, and events; however, listen to this podcast if
              you’re interested in digging a little deeper…From learning about the first ever
              scientist to the background of some of our favorite holiday treats, this podcast is
              outstanding. news in a completely unprecedented way!
            </p>
          </div>
        </a>
      </div>
    </StyledPodcastPLayer>
  );
};

export default PodcastPlayer;
