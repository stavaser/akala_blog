// credits: https://codepen.io/ruphaa
import React, { useState } from 'react';
import { StyledMusicControls } from './MusicControls.styled';
import { Modal, Button } from 'antd';

const MusicControls = ({ url, provider }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showPodcast = (url, provider) => {
    switch (provider) {
      case 'APPLE':
        return (
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *"
            frameborder="0"
            height="450"
            style={{
              width: '100%',
              maxWidth: '660px',
              overflow: 'hidden',
              background: 'transparent',
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/wait-wait-dont-tell-me/id121493804"
            // src={url}
          ></iframe>
        );
      case 'SPOTIFY':
        return (
          <iframe
            style={{ borderRadius: '12px' }}
            // src={url}
            src="https://open.spotify.com/embed/episode/5JzuNYOm8p6u5WzU9VBWid?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        );
      case 'IHEART':
        return (
          <iframe
            allow="autoplay"
            width="100%"
            height="200"
            // src={url}
            src="https://www.iheart.com/podcast/stuff-you-missed-in-history-cl-21124503/?embed=true"
            frameborder="0"
          ></iframe>
        );
      case 'STITCHER':
        return (
          <iframe
            style={{ width: '100%' }}
            // src={url}
            src="https://www.stitcher.com/embed/7183/49361613"
            width="220"
            height="150"
            frameBorder="0"
            scrolling="no"
          />
        );
      default:
    }
  };
  return (
    <>
      <StyledMusicControls>
        <div className="music-container">
          <div class="music-controls">
            <div class="repeat">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <title />
                <g data-name="1" id="_1">
                  <path d="M102.59,341.42a15,15,0,0,1-13.42-8.28,187.41,187.41,0,0,1,35.11-216.86c73.18-73.19,192.26-73.19,265.44,0a15,15,0,0,1-21.21,21.21C307,76,207,76,145.49,137.49A157.45,157.45,0,0,0,116,319.69a15,15,0,0,1-13.4,21.73Z" />
                  <path d="M257,436.61a187.1,187.1,0,0,1-132.72-54.88,15,15,0,1,1,21.21-21.22C207,422,307,422,368.51,360.51A157.45,157.45,0,0,0,398,178.31a15,15,0,0,1,26.82-13.45A187.62,187.62,0,0,1,257,436.61Z" />
                  <path d="M315.21,148.25a15,15,0,0,1-1.47-29.92l47.43-4.73-9.51-47.67a15,15,0,0,1,29.42-5.86L393.82,124a15,15,0,0,1-13.22,17.86l-63.88,6.37C316.21,148.23,315.71,148.25,315.21,148.25Z" />
                  <path d="M147.61,450a15,15,0,0,1-14.7-12.07l-12.74-63.88a15,15,0,0,1,13.23-17.86l63.88-6.37a15,15,0,0,1,3,29.85l-47.43,4.73,9.5,47.67A15,15,0,0,1,147.61,450Z" />
                </g>
              </svg>
            </div>
            <div class="previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36">
                <g>
                  <path
                    class="a"
                    d="M33,.68l-18.51,15a3,3,0,0,0,0,4.74L33,35.32A3,3,0,0,0,38,33V3.05A3,3,0,0,0,33,.68Z"
                  />
                  <rect class="a" width="10" height="36" rx="3" ry="3" />
                </g>
              </svg>
            </div>
            <div class="play" onClick={() => showModal()}>
              <svg
                class="play-btn"
                id="Layer_1"
                style={{ enableBackground: 'new 0 0 512px 512px' }}
                version="1.1"
                viewBox="0 0 512 512"
                xmSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" />
              </svg>
            </div>
            <div class="next">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36">
                <title>17 Next</title>
                <g>
                  <path
                    class="a"
                    d="M5,35.32,23.47,20.37a3,3,0,0,0,0-4.74L5,.68A3,3,0,0,0,0,3.05V33A3,3,0,0,0,5,35.32Z"
                  />
                  <rect class="a" x="28" width="10" height="36" rx="3" ry="3" />
                </g>
              </svg>
            </div>
            <div class="favorite">
              <svg
                xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                version="1.1"
                xmlnsCc="http://creativecommons.org/ns#"
                xmlnsDc="http://purl.org/dc/elements/1.1/"
              >
                <g transform="translate(0 -1028.4)">
                  <path
                    d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                    fill="#5C87FE"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div class="audio-control">
            <div class="audio-progress"></div>
          </div>
          <div></div>
        </div>
      </StyledMusicControls>

      <Modal
        title={`Our favorite episode:`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {showPodcast(url, provider)}
      </Modal>
    </>
  );
};

export default MusicControls;
