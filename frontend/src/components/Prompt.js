import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Modal } from 'antd';
import { Player, BigPlayButton } from 'video-react';

const Prompt = ({ title, answers }) => {
  const [visible, setVisible] = useState(false);
  const [video, setVideo] = useState({ url: '', is_youtube: false });
  const openModal = (data) => {
    console.log(data);
    setVideo({ link: data.link, is_youtube: data.is_youtube });
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
    setVideo({ url: '', is_youtube: false });
  };
  console.log(video.link);
  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={() => closeModal()}
        onCancel={() => closeModal()}
        width={1000}
        style={{ textAlign: 'center', alignItems: 'center' }}
        // okButtonProps={{ disabled: true }}
        // cancelButtonProps={false}
      >
        {video.is_youtube ? (
          <ReactPlayer style={{ margin: '0 auto' }} url={video.link} />
        ) : (
          <Player autoPlay src={video.link}>
            <BigPlayButton position="center" />
          </Player>
        )}
      </Modal>
      <section className="prompt-container">
        <div className="prompt">
          <div className="prompt-header">
            <h1>{title}</h1>
          </div>
          <div className="prompt-content">
            <ul className="prompt-content-items">
              {answers?.map((answer) => {
                return (
                  <li className="prompt-content-item">
                    <a>
                      <img src={answer.thumbnail_link} />
                      <div className="prompt-content-item-info">
                        <div className="wrap">
                          <h1>{answer.submitted_by}</h1>
                        </div>
                        <div className="view-full">
                          <a
                            onClick={() =>
                              openModal({ link: answer.video_link, is_youtube: answer.is_youtube })
                            }
                          >
                            View full story
                          </a>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prompt;
